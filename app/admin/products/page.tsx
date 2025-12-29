"use client";

import { useEffect, useState, FormEvent } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

type Subcategory = {
  id: number;
  name_en: string;
  slug: string;
};

type Brand = {
  id: number;
  name: string;
  slug: string;
};

type ProductRow = {
  id: number;
  name: string;
  slug: string;
  base_price: number | null;
  category_id: number | null;
  subcategory_id: number | null;
  brand_id: number | null;
  is_active: boolean;
  is_concept: boolean;
  is_discounted: boolean;
  tags: string[] | null;
};

type VariantRow = {
  id?: number;
  label: string;
  price: string;
  mrp: string;
  stock: string;
  sku: string;
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function AdminProductsPage() {
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [products, setProducts] = useState<ProductRow[]>([]);

  const [loadingList, setLoadingList] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [status, setStatus] = useState<
    null | { type: "success" | "error"; message: string }
  >(null);

  const [search, setSearch] = useState("");
  const [filterCategoryId, setFilterCategoryId] = useState<number | "">("");

  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  // editable fields for selected product
  const [editName, setEditName] = useState("");
  const [editSlug, setEditSlug] = useState("");
  const [editBasePrice, setEditBasePrice] = useState("");
  const [editIsActive, setEditIsActive] = useState(true);
  const [editIsConcept, setEditIsConcept] = useState(false);
  const [editIsDiscounted, setEditIsDiscounted] = useState(false);
  const [editTags, setEditTags] = useState("");

  // variants for selected product
  const [variantRows, setVariantRows] = useState<VariantRow[]>([]);

  // ---- LOAD META + PRODUCTS ----
  useEffect(() => {
    const load = async () => {
      setLoadingList(true);
      setStatus(null);

      const [catRes, brandRes, prodRes] = await Promise.all([
        // We now treat this as SUBCATEGORIES (same shape: id, name_en, slug)
        supabase.from("subcategories").select("id,name_en,slug").order("name_en"),
        supabase.from("brands").select("id,name,slug").order("name"),
        supabase
          .from("products")
          .select(
            "id,name,slug,base_price,category_id,subcategory_id,brand_id,is_active,is_concept,is_discounted,tags"
          )
          .order("id", { ascending: true }),
      ]);

      if (!catRes.error && catRes.data)
        setSubcategories(catRes.data as Subcategory[]);
      if (!brandRes.error && brandRes.data) setBrands(brandRes.data as Brand[]);
      if (!prodRes.error && prodRes.data) setProducts(prodRes.data as ProductRow[]);
      if (prodRes.error) {
        setStatus({ type: "error", message: prodRes.error.message });
      }

      setLoadingList(false);
    };

    load();
  }, []);

  const filteredProducts = products.filter((p) => {
    if (filterCategoryId && p.subcategory_id !== Number(filterCategoryId)) return false;

    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q) ||
      (p.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  });

  // ---- LOAD ONE PRODUCT INTO EDITOR ----
  const loadProductDetails = async (product: ProductRow) => {
    setSelectedProductId(product.id);
    setEditName(product.name);
    setEditSlug(product.slug);
    setEditBasePrice(product.base_price != null ? String(product.base_price) : "");
    setEditIsActive(product.is_active);
    setEditIsConcept(product.is_concept);
    setEditIsDiscounted(product.is_discounted);
    setEditTags((product.tags || []).join(", "));

const { data: variants, error } = await supabase
  .from("product_variants")
  .select("id,label,price,mrp,stock,sku")
  .eq("product_id", product.id)
  .order("id");

    if (error) {
      console.error(error);
      setVariantRows([]);
      setStatus({ type: "error", message: "Failed to load variants for this product." });
      return;
    }

const vs: VariantRow[] =
  variants?.map((v: any) => ({
    id: v.id,
    label: v.label ?? "",
    price: v.price != null ? String(v.price) : "",
    mrp: v.mrp != null ? String(v.mrp) : "",
    stock: v.stock != null ? String(v.stock) : "",
    sku: v.sku ?? "",
  })) || [];

if (vs.length === 0) {
  vs.push({ label: "", price: "", mrp: "", stock: "", sku: "" });
}
    setVariantRows(vs);
  };

  // ---- SAVE PRODUCT + VARIANTS ----
  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedProductId) return;

    if (!editName.trim() || !editSlug.trim()) {
      setStatus({
        type: "error",
        message: "Name and slug are required for the product.",
      });
      return;
    }

    setSaving(true);
    setStatus(null);

    try {
      const { error: prodError } = await supabase
        .from("products")
        .update({
          name: editName.trim(),
          slug: slugify(editSlug),
          base_price: editBasePrice ? Number(editBasePrice) : null,
          is_active: editIsActive,
          is_concept: editIsConcept,
          is_discounted: editIsDiscounted,
          tags: editTags
            ? editTags
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean)
            : null,
        })
        .eq("id", selectedProductId);

      if (prodError) {
        throw new Error(prodError.message);
      }

      setProducts((prev) =>
        prev.map((p) =>
          p.id === selectedProductId
            ? {
                ...p,
                name: editName.trim(),
                slug: slugify(editSlug),
                base_price: editBasePrice ? Number(editBasePrice) : null,
                is_active: editIsActive,
                is_concept: editIsConcept,
                is_discounted: editIsDiscounted,
                tags: editTags
                  ? editTags
                      .split(",")
                      .map((t) => t.trim())
                      .filter(Boolean)
                  : null,
              }
            : p
        )
      );

      const cleanVariants = variantRows.filter((v) => v.label && v.price);

      // Always sync variants by: delete all for this product, then insert current rows.
      // This avoids any manual handling of the identity `id` column.
      const { error: delError } = await supabase
        .from("product_variants")
        .delete()
        .eq("product_id", selectedProductId);

      if (delError) {
        throw new Error(delError.message);
      }

      if (cleanVariants.length > 0) {
        const payload = cleanVariants.map((v, idx) => {
          const baseSkuPart =
            (v.sku && v.sku.trim()) ||
            slugify(v.label) ||
            `var-${selectedProductId}-${idx + 1}`;

          const sku = `P${selectedProductId}-${baseSkuPart}`;

          return {
            product_id: selectedProductId,
            label: v.label.trim(),
            price: Number(v.price),
            mrp: v.mrp ? Number(v.mrp) : Number(v.price),
            stock: v.stock ? Number(v.stock) : 0,
            sku,
          };
        });

        const { error: insError } = await supabase
          .from("product_variants")
          .insert(payload);

        if (insError) {
          throw new Error(insError.message);
        }
      }

      setStatus({ type: "success", message: "Product and variants saved." });
    } catch (err: any) {
      console.error(err);
      setStatus({
        type: "error",
        message: err?.message || "Failed to save product.",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedProductId) return;

    const confirm = window.confirm(
      "Are you sure you want to delete this product and its variants/images? This cannot be undone."
    );
    if (!confirm) return;

    setDeleting(true);
    setStatus(null);

    try {
      // 1) Delete order_items for this product so FK on variant_id does not block variant deletion
      const { error: orderItemsError } = await supabase
        .from("order_items")
        .delete()
        .eq("product_id", selectedProductId);

      if (orderItemsError) {
        throw new Error(orderItemsError.message);
      }

      // 2) Delete variants (they depend on product_id)
      const { error: varError } = await supabase
        .from("product_variants")
        .delete()
        .eq("product_id", selectedProductId);

      if (varError) {
        throw new Error(varError.message);
      }

      // 3) Delete product images
      const { error: imgError } = await supabase
        .from("product_images")
        .delete()
        .eq("product_id", selectedProductId);
      if (imgError) {
        throw new Error(imgError.message);
      }

      // Finally delete the product itself
      const { error: prodError } = await supabase
        .from("products")
        .delete()
        .eq("id", selectedProductId);
      if (prodError) {
        throw new Error(prodError.message);
      }

      // Remove from local state
      setProducts((prev) => prev.filter((p) => p.id !== selectedProductId));
      setSelectedProductId(null);
      setVariantRows([]);

      setStatus({
        type: "success",
        message: "Product deleted successfully.",
      });
    } catch (err: any) {
      console.error(err);
      setStatus({
        type: "error",
        message: err?.message || "Failed to delete product.",
      });
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-4 py-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-3 flex items-center justify-between text-xs">
          <Link href="/admin" className="text-blue-600 hover:underline">
            ← Back to admin
          </Link>
          <span className="text-gray-500">Products admin</span>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          {/* LEFT SIDE: LIST */}
          <div className="md:w-1/2 border rounded bg-white p-3 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h1 className="text-sm font-semibold">Products</h1>
              {loadingList && (
                <span className="text-[11px] text-gray-500">Loading...</span>
              )}
            </div>

            <div className="flex flex-col gap-2 text-xs">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, slug, or tag"
                className="border rounded px-2 py-1.5 text-xs"
              />
              <div className="flex gap-2 items-center">
                <select
                  value={filterCategoryId}
                  onChange={(e) =>
                    setFilterCategoryId(
                      e.target.value ? Number(e.target.value) : ""
                    )
                  }
                  className="border rounded px-2 py-1.5 text-xs flex-1"
                >
                  <option value="">All subcategories</option>
                  {subcategories.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name_en}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-2 border-t pt-2 max-h-[70vh] overflow-y-auto">
              {filteredProducts.length === 0 && (
                <div className="text-[11px] text-gray-500">
                  No products found. Try clearing filters.
                </div>
              )}
              <ul className="space-y-1 text-xs">
                {filteredProducts.map((p) => {
                  const brand = brands.find((b) => b.id === p.brand_id);
                  const isSelected = p.id === selectedProductId;
                  return (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => loadProductDetails(p)}
                        className={`w-full text-left px-2 py-1.5 rounded border ${
                          isSelected
                            ? "border-blue-500 bg-blue-50"
                            : "border-transparent hover:border-gray-200"
                        }`}
                      >
                        <div className="flex justify-between items-center gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="truncate font-medium">{p.name}</div>
                            <div className="text-[10px] text-gray-500 truncate">
                              /product/{p.slug}
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-0.5">
                            {p.base_price != null && (
                              <span className="text-[11px] text-gray-800">
                                ${Number(p.base_price).toFixed(2)}
                              </span>
                            )}
                            {brand && (
                              <span className="text-[10px] text-gray-500">
                                {brand.name}
                              </span>
                            )}
                            <span className="text-[9px]">
                              {p.is_active ? "Active" : "Hidden"}
                              {p.is_concept ? " · Concept" : ""}
                            </span>
                          </div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: EDITOR */}
          <div className="md:w-1/2 border rounded bg-white p-3 text-sm">
            {status && (
              <div
                className={`mb-3 rounded border px-3 py-2 text-xs ${
                  status.type === "success"
                    ? "border-green-500 bg-green-50 text-green-800"
                    : "border-red-500 bg-red-50 text-red-800"
                }`}
              >
                {status.message}
              </div>
            )}

            {!selectedProductId ? (
              <div className="text-xs text-gray-500">
                Select a product on the left to edit its details and variants.
              </div>
            ) : (
              <form onSubmit={handleSave} className="space-y-4">
                <h2 className="text-xs font-semibold uppercase text-gray-700">
                  Edit product
                </h2>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-600">Name</label>
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="border rounded px-2 py-1.5 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-600">Slug</label>
                    <input
                      value={editSlug}
                      onChange={(e) => setEditSlug(e.target.value)}
                      className="border rounded px-2 py-1.5 text-sm"
                    />
                    <p className="text-[10px] text-gray-500">
                      /product/{slugify(editSlug || "slug")}
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-4 items-center">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-600">Base price</label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={editBasePrice}
                      onChange={(e) => setEditBasePrice(e.target.value)}
                      className="border rounded px-2 py-1.5 text-sm"
                    />
                  </div>

                  <label className="flex items-center gap-2 text-xs text-gray-700">
                    <input
                      type="checkbox"
                      checked={editIsActive}
                      onChange={(e) => setEditIsActive(e.target.checked)}
                    />
                    Active
                  </label>

                  <label className="flex items-center gap-2 text-xs text-gray-700">
                    <input
                      type="checkbox"
                      checked={editIsDiscounted}
                      onChange={(e) =>
                        setEditIsDiscounted(e.target.checked)
                      }
                    />
                    Discounted
                  </label>

                  <label className="flex items-center gap-2 text-xs text-gray-700">
                    <input
                      type="checkbox"
                      checked={editIsConcept}
                      onChange={(e) => setEditIsConcept(e.target.checked)}
                    />
                    Concept
                  </label>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-600">
                    Tags (comma separated)
                  </label>
                  <input
                    value={editTags}
                    onChange={(e) => setEditTags(e.target.value)}
                    className="border rounded px-2 py-1.5 text-sm"
                    placeholder="breakfast, cereal, kids"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase text-gray-700">
                    Variants
                  </h3>
                  <p className="text-[11px] text-gray-600">
                    Edit prices and stock, or add new variants. Leave label/price
                    empty to ignore a row.
                  </p>

                  <div className="space-y-2 max-h-[40vh] overflow-y-auto pr-1">
                    {variantRows.map((v, idx) => (
                      <div
                        key={idx}
                        className="border rounded px-3 py-2 grid gap-2 grid-cols-4 text-xs"
                      >
                        <div className="flex flex-col gap-1 col-span-1">
                          <label className="text-[11px] text-gray-600">
                            Label
                          </label>
                          <input
                            value={v.label}
                            onChange={(e) => {
                              const val = e.target.value;
                              setVariantRows((prev) => {
                                const copy = [...prev];
                                copy[idx] = { ...copy[idx], label: val };
                                return copy;
                              });
                            }}
                            className="border rounded px-2 py-1"
                            placeholder="500g"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] text-gray-600">
                            Price
                          </label>
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={v.price}
                            onChange={(e) => {
                              const val = e.target.value;
                              setVariantRows((prev) => {
                                const copy = [...prev];
                                copy[idx] = { ...copy[idx], price: val };
                                return copy;
                              });
                            }}
                            className="border rounded px-2 py-1"
                            placeholder="3.50"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] text-gray-600">MRP</label>
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={v.mrp}
                            onChange={(e) => {
                              const val = e.target.value;
                              setVariantRows((prev) => {
                                const copy = [...prev];
                                copy[idx] = { ...copy[idx], mrp: val };
                                return copy;
                              });
                            }}
                            className="border rounded px-2 py-1"
                            placeholder="4.00"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] text-gray-600">
                            Stock
                          </label>
                          <input
                            type="number"
                            min="0"
                            step="1"
                            value={v.stock}
                            onChange={(e) => {
                              const val = e.target.value;
                              setVariantRows((prev) => {
                                const copy = [...prev];
                                copy[idx] = { ...copy[idx], stock: val };
                                return copy;
                              });
                            }}
                            className="border rounded px-2 py-1"
                            placeholder="100"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

<button
  type="button"
  onClick={() =>
    setVariantRows((prev) => [
      ...prev,
      { label: "", price: "", mrp: "", stock: "", sku: "" },
    ])
  }
  className="text-[11px] px-3 py-1.5 border border-dashed rounded text-gray-700"
>
  + Add variant
</button>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    type="button"
                    onClick={handleDelete}
                    disabled={deleting}
                    className="px-3 py-2 text-xs rounded border border-red-500 text-red-600 disabled:opacity-60"
                  >
                    {deleting ? "Deleting..." : "Delete product"}
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-4 py-2 text-sm rounded bg-blue-600 text-white disabled:opacity-60"
                  >
                    {saving ? "Saving..." : "Save changes"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}