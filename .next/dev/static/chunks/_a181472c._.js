(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/supabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://ecfxrmhrfjqdmqewzrfz.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjZnhybWhyZmpxZG1xZXd6cmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzNDA0OTgsImV4cCI6MjA4MTkxNjQ5OH0.jtF3Qp9N7rH-KCWEMHU0atH7h-LQEJBKYO9Q2HdxkX0"));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/db.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/db.ts
__turbopack_context__.s([
    "createOrder",
    ()=>createOrder,
    "createOrderItems",
    ()=>createOrderItems,
    "fetchAllCategories",
    ()=>fetchAllCategories,
    "fetchAllProductImages",
    ()=>fetchAllProductImages,
    "fetchAllProductVariants",
    ()=>fetchAllProductVariants,
    "fetchAllProducts",
    ()=>fetchAllProducts,
    "fetchAllSubcategories",
    ()=>fetchAllSubcategories,
    "fetchBoughtTogetherProductIds",
    ()=>fetchBoughtTogetherProductIds,
    "fetchBrandsByIds",
    ()=>fetchBrandsByIds,
    "fetchImagesByProductId",
    ()=>fetchImagesByProductId,
    "fetchImagesByProductIds",
    ()=>fetchImagesByProductIds,
    "fetchProductBySlug",
    ()=>fetchProductBySlug,
    "fetchProductsByIds",
    ()=>fetchProductsByIds,
    "fetchProductsBySubcategoryId",
    ()=>fetchProductsBySubcategoryId,
    "fetchRelatedProducts",
    ()=>fetchRelatedProducts,
    "fetchSubSubcategoriesBySubcategoryId",
    ()=>fetchSubSubcategoriesBySubcategoryId,
    "fetchSubcategoryById",
    ()=>fetchSubcategoryById,
    "fetchSubcategoryBySlug",
    ()=>fetchSubcategoryBySlug,
    "fetchVariantsByProductId",
    ()=>fetchVariantsByProductId,
    "fetchVariantsByProductIds",
    ()=>fetchVariantsByProductIds,
    "getCategoriesWithSubcategories",
    ()=>getCategoriesWithSubcategories,
    "getProductsByIds",
    ()=>getProductsByIds,
    "getVariantsByIds",
    ()=>getVariantsByIds,
    "safeImg",
    ()=>safeImg,
    "searchCustomers",
    ()=>searchCustomers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-client] (ecmascript)");
;
function safeImg(src) {
    const s = String(src ?? "").trim();
    if (!s) return "/example.png";
    if (s.startsWith("/")) return s;
    if (s.startsWith("http://") || s.startsWith("https://")) return s;
    return "/example.png";
}
async function getCategoriesWithSubcategories() {
    const { data: cats, error: catErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("categories").select("id,slug,img,name_so,name_en").order("id", {
        ascending: true
    });
    if (catErr) throw catErr;
    const { data: subs, error: subErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("subcategories").select("id,category_id,slug,img,name_so,name_en").order("id", {
        ascending: true
    });
    if (subErr) throw subErr;
    const categories = cats ?? [];
    const subcategories = subs ?? [];
    return categories.map((cat)=>({
            ...cat,
            subcats: subcategories.filter((s)=>s.category_id === cat.id)
        }));
}
async function fetchAllCategories() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("categories").select("*").order("id");
    if (error) throw error;
    return data ?? [];
}
async function fetchAllSubcategories() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("subcategories").select("*").order("id");
    if (error) throw error;
    return data ?? [];
}
async function fetchAllProducts() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*").order("id");
    if (error) throw error;
    return data ?? [];
}
async function fetchAllProductVariants() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("product_variants").select("*").order("id");
    if (error) throw error;
    return data ?? [];
}
async function fetchAllProductImages() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("product_images").select("*").order("is_primary", {
        ascending: false
    });
    if (error) throw error;
    return data ?? [];
}
async function fetchSubcategoryBySlug(slug) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("subcategories").select("*").eq("slug", slug).maybeSingle();
    if (error) {
        console.error("fetchSubcategoryBySlug error:", {
            slug,
            error
        });
        throw error;
    }
    return data;
}
async function fetchBrandsByIds(ids) {
    try {
        const clean = Array.from(new Set((ids || []).map((x)=>Number(x)).filter((n)=>Number.isFinite(n))));
        if (!clean.length) return [];
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("brands").select("id,name,slug").in("id", clean).order("name", {
            ascending: true
        });
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
async function fetchProductBySlug(slug) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*").eq("slug", slug).maybeSingle(); // ✅ doesn't throw when 0 rows
    if (error) {
        console.error("fetchProductBySlug error:", {
            slug,
            error
        });
        throw error; // ✅ stop masking real errors as 404
    }
    return data;
}
async function fetchProductsBySubcategoryId(subcategoryId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*").eq("subcategory_id", subcategoryId).order("id", {
        ascending: true
    });
    if (error) throw error;
    return data ?? [];
}
async function fetchSubSubcategoriesBySubcategoryId(subcategoryId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("subsubcategories").select("*").eq("subcategory_id", subcategoryId).order("id", {
        ascending: true
    });
    // If the table doesn't exist yet, you can return [] instead of throwing.
    if (error) {
        // Uncomment next line if you prefer hard-fail:
        // throw error;
        return [];
    }
    return data ?? [];
}
async function fetchSubcategoryById(id) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("subcategories").select("*").eq("id", id).single();
    if (error) return null;
    return data;
}
async function fetchRelatedProducts(args) {
    const limit = args.limit ?? 12;
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*").eq("subcategory_id", args.subcategoryId).neq("id", args.excludeProductId).limit(limit);
    if (error) throw error;
    return data ?? [];
}
async function getProductsByIds(ids) {
    const unique = Array.from(new Set(ids)).filter(Boolean);
    if (unique.length === 0) return [];
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").select("id,name,slug,long_description,category_id,subcategory_id,brand_id,is_discounted,base_price,tags,is_active").in("id", unique);
    if (error) throw error;
    return data ?? [];
}
async function getVariantsByIds(ids) {
    const unique = Array.from(new Set(ids)).filter((x)=>x != null);
    if (unique.length === 0) return [];
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("product_variants").select("id,product_id,label,price,stock").in("id", unique);
    if (error) throw error;
    return data ?? [];
}
async function fetchProductsByIds(ids) {
    // alias used by some pages
    return getProductsByIds(ids);
}
async function fetchVariantsByProductIds(productIds) {
    const unique = Array.from(new Set(productIds)).filter(Boolean);
    if (unique.length === 0) return [];
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("product_variants").select("*").in("product_id", unique).order("price", {
        ascending: true
    });
    if (error) throw error;
    return data ?? [];
}
async function fetchImagesByProductIds(productIds) {
    const unique = Array.from(new Set(productIds)).filter(Boolean);
    if (unique.length === 0) return [];
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("product_images").select("*").in("product_id", unique).order("is_primary", {
        ascending: false
    });
    if (error) throw error;
    return data ?? [];
}
async function fetchVariantsByProductId(productId) {
    return fetchVariantsByProductIds([
        productId
    ]);
}
async function fetchImagesByProductId(productId) {
    return fetchImagesByProductIds([
        productId
    ]);
}
async function fetchBoughtTogetherProductIds(args) {
    const limit = args.limit ?? 12;
    const exclude = new Set([
        args.productId,
        ...args.excludeIds ?? []
    ]);
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("copurchase_counts").select("co_product_id,count").eq("product_id", args.productId).order("count", {
        ascending: false
    }).limit(limit * 3);
    if (error) throw error;
    const ids = [];
    for (const row of data ?? []){
        const id = Number(row.co_product_id);
        if (!exclude.has(id)) ids.push(id);
        if (ids.length >= limit) break;
    }
    return ids;
}
async function searchCustomers(query) {
    const q = query.trim();
    if (!q) return [];
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("customers").select("id,name,phone").or(`name.ilike.%${q}%,phone.ilike.%${q}%`).limit(8);
    if (error) throw error;
    return data ?? [];
}
async function createOrder(args) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("orders").insert({
        customer_id: args.customer_id,
        delivery_name: args.delivery.name,
        delivery_phone: args.delivery.phone,
        delivery_address: args.delivery.address,
        delivery_note: args.delivery.note ?? null,
        total_amount: args.total_amount,
        status: "PENDING"
    }).select("id").single();
    if (error) throw error;
    return data;
}
async function createOrderItems(orderId, items) {
    const payload = items.map((it)=>({
            order_id: orderId,
            product_id: it.productId,
            variant_id: it.variantId,
            quantity: it.qty,
            price_at_purchase: it.priceAtPurchase
        }));
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("order_items").insert(payload);
    if (error) {
        // helpful debugging
        console.log("ORDER_ITEMS_INSERT_ERROR", error);
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/subcategory/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubcategoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/** ===== helpers ===== */ function money(n) {
    return `$${Number(n ?? 0).toFixed(2)}`;
}
function safeImg(src) {
    const s = String(src ?? "");
    const clean = s.trim();
    if (!clean) return "/example.png";
    if (clean.startsWith("http://") || clean.startsWith("https://")) return clean;
    if (clean.startsWith("/")) return clean;
    return "/example.png";
}
function getLabel(obj, lang) {
    const so = obj?.name_so ?? obj?.name ?? "";
    const en = obj?.name_en ?? obj?.name ?? "";
    return lang === "en" ? en : so;
}
function getSecondary(obj, lang) {
    const so = obj?.name_so ?? obj?.name ?? "";
    const en = obj?.name_en ?? obj?.name ?? "";
    return lang === "en" ? so : en;
}
function norm(x) {
    return String(x ?? "").toLowerCase().trim().replace(/[-_]+/g, " ").replace(/\s+/g, " ");
}
function SubcategoryPage() {
    _s();
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { items, addItem, setQty } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentSub, setCurrentSub] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ssList, setSsList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [variants, setVariants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeSS, setActiveSS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedVariantByProduct, setSelectedVariantByProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [justAddedId, setJustAddedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubcategoryPage.useEffect": ()=>{
            setLoading(true);
            setActiveSS(null);
            ({
                "SubcategoryPage.useEffect": async ()=>{
                    const sub = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSubcategoryBySlug"])(String(slug));
                    if (!sub) {
                        setCurrentSub(null);
                        setSsList([]);
                        setProducts([]);
                        setVariants([]);
                        setImages([]);
                        setLoading(false);
                        return;
                    }
                    const prods = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProductsBySubcategoryId"])(sub.id);
                    const ids = prods.map({
                        "SubcategoryPage.useEffect.ids": (p)=>p.id
                    }["SubcategoryPage.useEffect.ids"]);
                    const [sss, vars, imgs] = await Promise.all([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSubSubcategoriesBySubcategoryId"])(sub.id),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchVariantsByProductIds"])(ids),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchImagesByProductIds"])(ids)
                    ]);
                    setCurrentSub(sub);
                    setSsList(sss);
                    setProducts(prods);
                    setVariants(vars);
                    setImages(imgs);
                    setLoading(false);
                }
            })["SubcategoryPage.useEffect"]();
        }
    }["SubcategoryPage.useEffect"], [
        slug
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubcategoryPage.useEffect": ()=>{
            if (justAddedId === null) return;
            const t = setTimeout({
                "SubcategoryPage.useEffect.t": ()=>setJustAddedId(null)
            }["SubcategoryPage.useEffect.t"], 900);
            return ({
                "SubcategoryPage.useEffect": ()=>clearTimeout(t)
            })["SubcategoryPage.useEffect"];
        }
    }["SubcategoryPage.useEffect"], [
        justAddedId
    ]);
    const getPrimaryImageUrl = (productId)=>{
        const primary = images.find((img)=>img.product_id === productId && img.is_primary);
        const anyImg = images.find((img)=>img.product_id === productId);
        return safeImg(primary?.url || anyImg?.url || "/example.png");
    };
    const getVariantsFor = (productId)=>{
        return variants.filter((v)=>v.product_id === productId).slice().sort((a, b)=>a.price - b.price);
    };
    const getDefaultVariantId = (productId)=>{
        const vars = getVariantsFor(productId);
        return vars.length ? vars[0].id : null;
    };
    const getVariantById = (productId, variantId)=>{
        if (variantId == null) return null;
        return variants.find((v)=>v.product_id === productId && v.id === variantId) || null;
    };
    const getVariantPrice = (productId, variantId, basePrice)=>{
        if (variantId == null) return Number(basePrice ?? 0);
        const v = getVariantById(productId, variantId);
        return Number(v?.price ?? basePrice ?? 0);
    };
    const getVariantMRP = (productId, variantId)=>{
        if (variantId == null) return null;
        const v = getVariantById(productId, variantId);
        return v?.mrp ?? null;
    };
    const baseList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SubcategoryPage.useMemo[baseList]": ()=>products.filter({
                "SubcategoryPage.useMemo[baseList]": (p)=>p.subcategory_id === currentSub?.id
            }["SubcategoryPage.useMemo[baseList]"])
    }["SubcategoryPage.useMemo[baseList]"], [
        products,
        currentSub?.id
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SubcategoryPage.useMemo[filtered]": ()=>{
            let list = baseList;
            if (activeSS) {
                const ss = ssList.find({
                    "SubcategoryPage.useMemo[filtered].ss": (x)=>x.slug === activeSS
                }["SubcategoryPage.useMemo[filtered].ss"]);
                if (ss) {
                    list = list.filter({
                        "SubcategoryPage.useMemo[filtered]": (p)=>p.subsubcategory_id === ss.id
                    }["SubcategoryPage.useMemo[filtered]"]);
                }
            }
            return list;
        }
    }["SubcategoryPage.useMemo[filtered]"], [
        activeSS,
        baseList,
        ssList
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubcategoryPage.useEffect": ()=>{
            setSelectedVariantByProduct({
                "SubcategoryPage.useEffect": (prev)=>{
                    const next = {
                        ...prev
                    };
                    for (const p of filtered){
                        if (next[p.id] === undefined) {
                            next[p.id] = getDefaultVariantId(p.id);
                        }
                    }
                    return next;
                }
            }["SubcategoryPage.useEffect"]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["SubcategoryPage.useEffect"], [
        filtered.length,
        variants.length
    ]);
    const activeObj = activeSS ? ssList.find((x)=>x.slug === activeSS) : null;
    const titlePrimary = activeObj ? getLabel(activeObj, lang) : getLabel(currentSub, lang);
    const titleSecondary = activeObj ? getSecondary(activeObj, lang) : getSecondary(currentSub, lang);
    const seoLine = lang === "so" ? `Ka hel ${titlePrimary} (${titleSecondary}) online MatoMart – raashin iyo alaabooyin tayo leh oo lagu keeno gudaha Soomaaliya.` : `Shop ${titleSecondary} (${titlePrimary}) online in Somalia with MatoMart – quality groceries and essentials delivered fast.`;
    // (brand filter UI removed)
    const cartTotals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SubcategoryPage.useMemo[cartTotals]": ()=>{
            let total = 0;
            let count = 0;
            for (const it of items ?? []){
                const p = products.find({
                    "SubcategoryPage.useMemo[cartTotals].p": (x)=>x.id === it.productId
                }["SubcategoryPage.useMemo[cartTotals].p"]);
                if (!p) continue;
                const price = getVariantPrice(it.productId, it.variantId ?? null, p.base_price);
                total += price * (it.qty ?? 1);
                count += it.qty ?? 1;
            }
            return {
                total,
                count
            };
        }
    }["SubcategoryPage.useMemo[cartTotals]"], [
        items,
        products
    ]);
    /** ===== Subcategory JSON-LD (CollectionPage + ItemList) ===== */ const jsonLdString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SubcategoryPage.useMemo[jsonLdString]": ()=>{
            try {
                const origin = ("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable";
                const url = origin ? `${origin}/subcategory/${String(slug)}` : undefined;
                const items = baseList.map({
                    "SubcategoryPage.useMemo[jsonLdString].items": (p, index)=>{
                        const prodUrl = origin ? `${origin}/product/${p.slug}` : `/product/${p.slug}`;
                        const entry = {
                            "@type": "Product",
                            position: index + 1,
                            name: p.name,
                            url: prodUrl
                        };
                        return entry;
                    }
                }["SubcategoryPage.useMemo[jsonLdString].items"]);
                const ld = {
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    name: titlePrimary,
                    description: seoLine,
                    mainEntity: {
                        "@type": "ItemList",
                        numberOfItems: items.length,
                        itemListElement: items
                    }
                };
                if (url) ld.url = url;
                return JSON.stringify(ld);
            } catch  {
                return "";
            }
        }
    }["SubcategoryPage.useMemo[jsonLdString]"], [
        slug,
        baseList,
        titlePrimary,
        seoLine
    ]);
    if (!loading && !currentSub) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-white p-6 text-black",
            children: "Subcategory not found."
        }, void 0, false, {
            fileName: "[project]/app/subcategory/[slug]/page.tsx",
            lineNumber: 272,
            columnNumber: 7
        }, this);
    }
    function ProductAdd({ productId, basePrice, selectedVariantId }) {
        const item = (items ?? []).find((i)=>i.productId === productId && (i.variantId ?? null) === (selectedVariantId ?? null));
        const qty = item?.qty ?? 0;
        if (!item) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    addItem(productId, selectedVariantId, 1);
                    setJustAddedId(productId);
                },
                className: "mt-2 w-full h-10 rounded-xl border-2 border-[#0B6EA9] text-[#0B6EA9] font-bold flex items-center justify-center gap-2 active:scale-[0.99] transition",
                children: [
                    lang === "en" ? "Add" : "Ku dar",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl leading-none",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                        lineNumber: 304,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                lineNumber: 296,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setQty(productId, selectedVariantId, qty - 1),
                    className: "w-10 h-10 rounded-full bg-[#0B6EA9] text-white text-xl font-bold grid place-items-center",
                    children: "−"
                }, void 0, false, {
                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm font-extrabold text-gray-900",
                    children: qty
                }, void 0, false, {
                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                    lineNumber: 318,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setQty(productId, selectedVariantId, qty + 1),
                    className: "w-10 h-10 rounded-full bg-[#0B6EA9] text-white text-xl font-bold grid place-items-center",
                    children: "+"
                }, void 0, false, {
                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/subcategory/[slug]/page.tsx",
            lineNumber: 310,
            columnNumber: 7
        }, this);
    }
    const hasRail = ssList.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            jsonLdString && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                suppressHydrationWarning: true,
                dangerouslySetInnerHTML: {
                    __html: jsonLdString
                }
            }, void 0, false, {
                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                lineNumber: 335,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-[#F4F6F8] pb-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-white border-b",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-md px-4 py-2 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "leading-tight",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[13px] font-semibold text-gray-900",
                                                children: loading ? "..." : titlePrimary
                                            }, void 0, false, {
                                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-500",
                                                children: loading ? "" : titleSecondary
                                            }, void 0, false, {
                                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                lineNumber: 350,
                                                columnNumber: 15
                                            }, this),
                                            !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-0.5 text-[10px] text-gray-500 max-w-xs leading-snug",
                                                children: seoLine
                                            }, void 0, false, {
                                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8"
                                    }, void 0, false, {
                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                        lineNumber: 359,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-md px-4 pb-2 space-y-1.5"
                            }, void 0, false, {
                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `mx-auto max-w-md grid ${hasRail ? "grid-cols-[72px_1fr]" : "grid-cols-1"}`,
                        children: [
                            hasRail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "bg-gray-50 border-r px-1.5 py-2 space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveSS(null),
                                        className: `w-full flex items-center justify-center rounded-xl px-2 py-3 ${activeSS === null ? "bg-[#0B6EA9]/10 border border-[#0B6EA9]" : "bg-white border border-gray-200"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[11px] font-bold ${activeSS === null ? "text-[#0B6EA9]" : "text-gray-800"}`,
                                            children: lang === "en" ? "ALL" : "DHAMMAAN"
                                        }, void 0, false, {
                                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                            lineNumber: 383,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this),
                                    ssList.map((ss)=>{
                                        const isActive = activeSS === ss.slug;
                                        const primary = getLabel(ss, lang);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveSS(ss.slug),
                                            className: "w-full flex flex-col items-center rounded-xl px-1.5 py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 rounded-xl bg-gray-100 overflow-hidden relative",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: safeImg(ss.img),
                                                        alt: primary,
                                                        fill: true,
                                                        className: "object-contain p-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-[10px] text-center leading-tight",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: isActive ? "text-[#0B6EA9] font-semibold" : "text-gray-800 font-semibold",
                                                        children: primary
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, ss.id, true, {
                                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                            lineNumber: 397,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                lineNumber: 373,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2 bg-white rounded-2xl border p-4 text-sm text-gray-600",
                                        children: "Loading..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                        lineNumber: 432,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            filtered.map((p)=>{
                                                const imgUrl = getPrimaryImageUrl(p.id);
                                                const vars = getVariantsFor(p.id);
                                                const hasVariants = vars.length > 0;
                                                const selectedVariantId = selectedVariantByProduct[p.id] ?? getDefaultVariantId(p.id);
                                                const selectedV = getVariantById(p.id, selectedVariantId);
                                                const price = getVariantPrice(p.id, selectedVariantId, p.base_price);
                                                const mrp = getVariantMRP(p.id, selectedVariantId);
                                                const label = selectedV?.label ?? "";
                                                const offPct = mrp && price ? Math.round((mrp - price) / mrp * 100) : null;
                                                const chips = vars.slice(0, 3);
                                                const extraCount = Math.max(0, vars.length - chips.length);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `rounded-2xl shadow-sm overflow-hidden border relative flex flex-col ${p.is_concept ? "bg-[#FFFDF4] border-[#F4D79B]" : "bg-white border-gray-200"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative pt-3 px-3 pb-1 flex-1",
                                                            children: [
                                                                label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute right-2 bottom-2 text-[10px] px-2 py-0.5 rounded-full bg-black/70 text-white",
                                                                    children: label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 29
                                                                }, this) : null,
                                                                justAddedId === p.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute left-2 top-2 text-[11px] px-2 py-1 rounded-full bg-green-600 text-white font-bold shadow",
                                                                    children: lang === "en" ? "Added ✓" : "Waa la daray ✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 29
                                                                }, this) : null,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/product/${p.slug}`,
                                                                    className: "block",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: imgUrl,
                                                                        alt: p.name,
                                                                        width: 220,
                                                                        height: 220,
                                                                        className: `mx-auto h-32 object-contain w-full ${p.is_concept ? "drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]" : ""}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                        lineNumber: 503,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                    lineNumber: 499,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-3 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[13px] font-semibold text-gray-900 line-clamp-2 min-h-[32px]",
                                                                    children: p.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                    lineNumber: 518,
                                                                    columnNumber: 27
                                                                }, this),
                                                                hasVariants ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1 flex flex-wrap gap-1.5",
                                                                    children: [
                                                                        chips.map((v)=>{
                                                                            const active = v.id === selectedVariantId;
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>setSelectedVariantByProduct((prev)=>({
                                                                                            ...prev,
                                                                                            [p.id]: v.id
                                                                                        })),
                                                                                className: `h-7 px-2 rounded-full border text-[11px] font-semibold ${active ? "border-[#0B6EA9] bg-[#EAF4FB] text-[#0B6EA9]" : "bg-white text-gray-700"}`,
                                                                                children: v.label
                                                                            }, v.id, false, {
                                                                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                                lineNumber: 529,
                                                                                columnNumber: 35
                                                                            }, this);
                                                                        }),
                                                                        extraCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: `/product/${p.slug}`,
                                                                            className: "h-7 px-2 rounded-full border text-[11px] font-semibold bg-white text-[#0B6EA9] grid place-items-center",
                                                                            children: [
                                                                                "+",
                                                                                extraCount,
                                                                                " ",
                                                                                lang === "en" ? "more" : "kale"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                            lineNumber: 551,
                                                                            columnNumber: 33
                                                                        }, this) : null
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                    lineNumber: 524,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-[10px]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                    lineNumber: 563,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1 flex items-end gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[16px] font-extrabold text-gray-900 leading-none",
                                                                            children: money(price)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                            lineNumber: 567,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        mrp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[11px] text-gray-400 line-through",
                                                                            children: money(mrp)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                            lineNumber: 571,
                                                                            columnNumber: 31
                                                                        }, this) : null
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                    lineNumber: 566,
                                                                    columnNumber: 27
                                                                }, this),
                                                                offPct ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[12px] font-semibold text-red-600",
                                                                    children: [
                                                                        offPct,
                                                                        "%",
                                                                        lang === "en" ? " Off" : " Dhimis"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                    lineNumber: 578,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-[8px]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                    lineNumber: 585,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductAdd, {
                                                                        productId: p.id,
                                                                        basePrice: p.base_price,
                                                                        selectedVariantId: selectedVariantId
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                        lineNumber: 589,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                    lineNumber: 588,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1 text-[11px] font-semibold text-[#0F8A4B]",
                                                                    children: [
                                                                        "⚡ ",
                                                                        lang === "en" ? "Quick" : "Degdeg"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                    lineNumber: 598,
                                                                    columnNumber: 1
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                            lineNumber: 517,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, p.id, true, {
                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 23
                                                }, this);
                                            }),
                                            filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-2 bg-white rounded-2xl border p-4 text-sm text-gray-600",
                                                children: lang === "en" ? "No products found in this section." : "Alaab lagama helin qaybtaan."
                                            }, void 0, false, {
                                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                lineNumber: 607,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                    lineNumber: 430,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    cartTotals.count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed left-0 right-0 bottom-4 z-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-md px-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/cart",
                                className: "flex items-center justify-between bg-[#0B6EA9] text-white rounded-2xl px-4 py-3 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs opacity-90",
                                                children: [
                                                    cartTotals.count,
                                                    " ",
                                                    lang === "en" ? "item" : "shay",
                                                    cartTotals.count > 1 ? "s" : "",
                                                    " ",
                                                    lang === "en" ? "in cart" : "gaadhiga ku jira"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                lineNumber: 628,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-extrabold",
                                                children: money(cartTotals.total)
                                            }, void 0, false, {
                                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                lineNumber: 636,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                        lineNumber: 627,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right leading-tight font-extrabold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: lang === "en" ? "Go to Cart →" : "U gudub Gaadhiga →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                lineNumber: 642,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] opacity-80",
                                                children: lang === "en" ? "U gudub Gaadhiga" : "Go to Cart"
                                            }, void 0, false, {
                                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                lineNumber: 647,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                        lineNumber: 641,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                lineNumber: 623,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                            lineNumber: 622,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                        lineNumber: 621,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(SubcategoryPage, "LDNhnLh+ZkQ4jTommvMc1VEzDik=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = SubcategoryPage;
var _c;
__turbopack_context__.k.register(_c, "SubcategoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a181472c._.js.map