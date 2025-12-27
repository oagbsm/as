// lib/db.ts
import { supabase } from "@/lib/supabaseClient";

/* =========================
   Helpers
========================= */

export function safeImg(src: any) {
  const s = String(src ?? "").trim();
  if (!s) return "/example.png";
  if (s.startsWith("/")) return s;
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  return "/example.png";
}

/* =========================
   Types
========================= */

type CategoryRow = {
  id: number;
  slug: string;
  img: string | null;
  name_so: string;
  name_en: string;
};

type SubcategoryRow = {
  id: number;
  category_id: number;
  slug: string;
  img: string | null;
  name_so: string;
  name_en: string;
};

export type ProductRow = {
  id: number;
  name: string;
  slug: string;
  base_price: number; // numeric NOT NULL in DB
  long_description: string; // NOT NULL in DB
  category_id: number;
  subcategory_id: number;
  brand_id: number;
  is_discounted: boolean;
  tags?: string[] | null;
  is_active: boolean;
};
export type VariantRow = {
  id: number;
  product_id: number;
  label: string;
  price: number;

  // optional if you track stock
  stock?: number | null;
};

/* =========================
   Home (categories + subcats)
========================= */

export async function getCategoriesWithSubcategories() {
  const { data: cats, error: catErr } = await supabase
    .from("categories")
    .select("id,slug,img,name_so,name_en")
    .order("id", { ascending: true });

  if (catErr) throw catErr;

  const { data: subs, error: subErr } = await supabase
    .from("subcategories")
    .select("id,category_id,slug,img,name_so,name_en")
    .order("id", { ascending: true });

  if (subErr) throw subErr;

  const categories = (cats ?? []) as CategoryRow[];
  const subcategories = (subs ?? []) as SubcategoryRow[];

  return categories.map((cat) => ({
    ...cat,
    subcats: subcategories.filter((s) => s.category_id === cat.id),
  }));
}

/* =========================
   Search page: fetch everything
========================= */

export async function fetchAllCategories() {
  const { data, error } = await supabase.from("categories").select("*").order("id");
  if (error) throw error;
  return data ?? [];
}

export async function fetchAllSubcategories() {
  const { data, error } = await supabase.from("subcategories").select("*").order("id");
  if (error) throw error;
  return data ?? [];
}

export async function fetchAllProducts() {
  const { data, error } = await supabase.from("products").select("*").order("id");
  if (error) throw error;
  return data ?? [];
}

export async function fetchAllProductVariants() {
  const { data, error } = await supabase.from("product_variants").select("*").order("id");
  if (error) throw error;
  return data ?? [];
}

export async function fetchAllProductImages() {
  const { data, error } = await supabase
    .from("product_images")
    .select("*")
    .order("is_primary", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

/* =========================
   Subcategory page helpers
========================= */

export async function fetchSubcategoryBySlug(slug: string) {
  const { data, error } = await supabase
    .from("subcategories")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("fetchSubcategoryBySlug error:", { slug, error });
    throw error;
  }

  return data;
}
export async function fetchBrandsByIds(ids: number[]) {
  try {
    const clean = Array.from(
      new Set((ids || []).map((x) => Number(x)).filter((n) => Number.isFinite(n)))
    );
    if (!clean.length) return [];

    const { data, error } = await supabase
      .from("brands")
      .select("id,name,slug")
      .in("id", clean)
      .order("name", { ascending: true });

    if (error) {
      console.error("fetchBrandsByIds error", error);
      return [];
    }

    return data ?? [];
  } catch (e) {
    console.error("fetchBrandsByIds exception", e);
    return [];
  }
}

export async function fetchProductBySlug(slug: string) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .maybeSingle(); // ✅ doesn't throw when 0 rows

  if (error) {
    console.error("fetchProductBySlug error:", { slug, error });
    throw error; // ✅ stop masking real errors as 404
  }

  return data as ProductRow | null;
}

export async function fetchProductsBySubcategoryId(subcategoryId: number) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("subcategory_id", subcategoryId)
    .order("id", { ascending: true });

  if (error) throw error;
  return data ?? [];
}

/**
 * If you don't have subsubcategories yet, you can keep this returning []
 * OR create the table and remove the try/catch.
 */
export async function fetchSubSubcategoriesBySubcategoryId(subcategoryId: number) {
  const { data, error } = await supabase
    .from("subsubcategories")
    .select("*")
    .eq("subcategory_id", subcategoryId)
    .order("id", { ascending: true });

  // If the table doesn't exist yet, you can return [] instead of throwing.
  if (error) {
    // Uncomment next line if you prefer hard-fail:
    // throw error;
    return [];
  }
  return data ?? [];
}

/* =========================
   Product page helpers
========================= */


export async function fetchSubcategoryById(id: number) {
  const { data, error } = await supabase.from("subcategories").select("*").eq("id", id).single();
  if (error) return null;
  return data;
}

/**
 * IMPORTANT: object signature (fixes your 22P02 crash).
 */
export async function fetchRelatedProducts(args: {
  subcategoryId: number;
  excludeProductId: number;
  limit?: number;
}) {
  const limit = args.limit ?? 12;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("subcategory_id", args.subcategoryId)
    .neq("id", args.excludeProductId)
    .limit(limit);

  if (error) throw error;
  return data ?? [];
}
  
/* =========================
   Products / Variants / Images: by ids
========================= */

export async function getProductsByIds(ids: number[]) {
  const unique = Array.from(new Set(ids)).filter(Boolean);
  if (unique.length === 0) return [];

  const { data, error } = await supabase
    .from("products")
.select(
  "id,name,slug,long_description,category_id,subcategory_id,brand_id,is_discounted,base_price,tags,is_active"
).in("id", unique);

  if (error) throw error;
  return (data ?? []) as ProductRow[];
}

export async function getVariantsByIds(ids: number[]) {
  const unique = Array.from(new Set(ids)).filter((x) => x != null) as number[];
  if (unique.length === 0) return [];

  const { data, error } = await supabase
    .from("product_variants")
    .select("id,product_id,label,price,stock")
    .in("id", unique);

  if (error) throw error;
  return (data ?? []) as VariantRow[];
}

export async function fetchProductsByIds(ids: number[]) {
  // alias used by some pages
  return getProductsByIds(ids);
}

export async function fetchVariantsByProductIds(productIds: number[]) {
  const unique = Array.from(new Set(productIds)).filter(Boolean);
  if (unique.length === 0) return [];

  const { data, error } = await supabase
    .from("product_variants")
    .select("*")
    .in("product_id", unique)
    .order("price", { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function fetchImagesByProductIds(productIds: number[]) {
  const unique = Array.from(new Set(productIds)).filter(Boolean);
  if (unique.length === 0) return [];

  const { data, error } = await supabase
    .from("product_images")
    .select("*")
    .in("product_id", unique)
    .order("is_primary", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

/* =========================
   Single-ID wrappers (your product page imports these)
========================= */

export async function fetchVariantsByProductId(productId: number) {
  return fetchVariantsByProductIds([productId]);
}

export async function fetchImagesByProductId(productId: number) {
  return fetchImagesByProductIds([productId]);
}

/* =========================
   Co-purchase (recommendations)
========================= */

export async function fetchBoughtTogetherProductIds(args: {
  productId: number;
  limit?: number;
  excludeIds?: number[];
}) {
  const limit = args.limit ?? 12;
  const exclude = new Set([args.productId, ...(args.excludeIds ?? [])]);

  const { data, error } = await supabase
    .from("copurchase_counts")
    .select("co_product_id,count")
    .eq("product_id", args.productId)
    .order("count", { ascending: false })
    .limit(limit * 3);

  if (error) throw error;

  const ids: number[] = [];
  for (const row of data ?? []) {
    const id = Number((row as any).co_product_id);
    if (!exclude.has(id)) ids.push(id);
    if (ids.length >= limit) break;
  }
  return ids;
}

/* =========================
   Customers (optional)
========================= */

export async function searchCustomers(query: string) {
  const q = query.trim();
  if (!q) return [];

  const { data, error } = await supabase
    .from("customers")
    .select("id,name,phone")
    .or(`name.ilike.%${q}%,phone.ilike.%${q}%`)
    .limit(8);

  if (error) throw error;
  return data ?? [];
}

/* =========================
   Orders (checkout)
========================= */

export async function createOrder(args: {
  customer_id: number | null;
  delivery: { name: string; phone: string; address: string; note?: string };
  total_amount: number;
}) {
  const { data, error } = await supabase
    .from("orders")
    .insert({
      customer_id: args.customer_id,
      delivery_name: args.delivery.name,
      delivery_phone: args.delivery.phone,
      delivery_address: args.delivery.address,
      delivery_note: args.delivery.note ?? null,
      total_amount: args.total_amount,
      status: "PENDING",
    })
    .select("id")
    .single();

  if (error) throw error;
  return data as { id: number };
}

export async function createOrderItems(
  orderId: number,
  items: Array<{
    productId: number;
    variantId: number | null;
    qty: number;
    priceAtPurchase: number;
  }>
) {
  const payload = items.map((it) => ({
    order_id: orderId,
    product_id: it.productId,
    variant_id: it.variantId,
    quantity: it.qty,
    price_at_purchase: it.priceAtPurchase,
  }));

  const { error } = await supabase.from("order_items").insert(payload);

  if (error) {
    // helpful debugging
    console.log("ORDER_ITEMS_INSERT_ERROR", error);
    throw error;
  }
}
