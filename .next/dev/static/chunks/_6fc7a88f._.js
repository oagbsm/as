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
"[project]/app/checkout/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckoutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const isUuid = (v)=>/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v);
function toIntArray(values) {
    const out = [];
    for (const v of values){
        const n = Number(v);
        if (Number.isFinite(n) && n > 0) out.push(Math.trunc(n));
    }
    return Array.from(new Set(out));
}
function formatMoney(n) {
    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(Number(n ?? 0));
}
function CheckoutPage() {
    _s();
    const { items, clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const cartItems = Array.isArray(items) ? items : [];
    const [productMap, setProductMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [variantMap, setVariantMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [placing, setPlacing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Prefilled dummy data (for fast testing)
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Test Customer");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0622000000");
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("MATO, MOGADISHU");
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Leave at the gate (demo).");
    // Payment (Pay now vs Credit)
    const [isCredit, setIsCredit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("EVC");
    const [paymentRef, setPaymentRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutPage.useEffect": ()=>{
            let alive = true;
            ({
                "CheckoutPage.useEffect": async ()=>{
                    const pids = cartItems.map({
                        "CheckoutPage.useEffect.pids": (x)=>x.productId
                    }["CheckoutPage.useEffect.pids"]);
                    const vids = cartItems.map({
                        "CheckoutPage.useEffect.vids": (x)=>x.variantId
                    }["CheckoutPage.useEffect.vids"]).filter({
                        "CheckoutPage.useEffect.vids": (v)=>v != null
                    }["CheckoutPage.useEffect.vids"]);
                    try {
                        const [ps, vs] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductsByIds"])(pids),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVariantsByIds"])(vids)
                        ]);
                        if (!alive) return;
                        const pm = {};
                        for (const p of ps)pm[p.id] = p;
                        const vm = {};
                        for (const v of vs)vm[v.id] = v;
                        setProductMap(pm);
                        setVariantMap(vm);
                    } catch (e) {
                        console.error("CHECKOUT LOAD ERROR:", e);
                    }
                }
            })["CheckoutPage.useEffect"]();
            return ({
                "CheckoutPage.useEffect": ()=>{
                    alive = false;
                }
            })["CheckoutPage.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["CheckoutPage.useEffect"], [
        items
    ]);
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CheckoutPage.useMemo[rows]": ()=>{
            return cartItems.map({
                "CheckoutPage.useMemo[rows]": (ci)=>{
                    const p = productMap[ci.productId];
                    if (!p) return null;
                    const v = ci.variantId != null ? variantMap[ci.variantId] : null;
                    const price = Number(v?.price ?? p.base_price ?? 0);
                    const label = v?.label ? ` (${v.label})` : "";
                    return {
                        key: `${ci.productId}-${ci.variantId ?? "base"}`,
                        productId: ci.productId,
                        variantId: ci.variantId ?? null,
                        name: `${p.name}${label}`,
                        qty: ci.qty ?? 1,
                        price,
                        lineTotal: price * (ci.qty ?? 1)
                    };
                }
            }["CheckoutPage.useMemo[rows]"]).filter(Boolean);
        }
    }["CheckoutPage.useMemo[rows]"], [
        cartItems,
        productMap,
        variantMap
    ]);
    const subtotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CheckoutPage.useMemo[subtotal]": ()=>rows.reduce({
                "CheckoutPage.useMemo[subtotal]": (sum, r)=>sum + r.lineTotal
            }["CheckoutPage.useMemo[subtotal]"], 0)
    }["CheckoutPage.useMemo[subtotal]"], [
        rows
    ]);
    const deliveryFee = subtotal > 0 ? 1.99 : 0;
    const total = subtotal + deliveryFee;
    async function getOrCreateCustomerId(phoneRaw, nameRaw) {
        const phoneClean = String(phoneRaw ?? "").trim();
        const nameClean = String(nameRaw ?? "").trim() || "Customer";
        // 1) Try find existing customer by phone
        const found = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("customers").select("id").eq("phone", phoneClean).maybeSingle();
        if (found.error) throw found.error;
        if (found.data?.id) return Number(found.data.id);
        // 2) Create customer
        const created = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("customers").insert({
            name: nameClean,
            phone: phoneClean
        }).select("id").single();
        if (created.error) throw created.error;
        return Number(created.data.id);
    }
    async function placeOrder() {
        if (cartItems.length === 0) return;
        if (!name.trim() || !phone.trim() || !address.trim()) {
            alert("Please fill in Name, Phone, and Address.");
            return;
        }
        setPlacing(true);
        try {
            // Dedup product ids for copurchase recording (as ints)
            const productIds = toIntArray(cartItems.map((x)=>x.productId));
            // 1) Get/Create Customer, then Create Order
            const customerId = await getOrCreateCustomerId(phone, name);
            const order = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOrder"])({
                customer_id: customerId,
                delivery: {
                    name,
                    phone,
                    address,
                    note
                },
                total_amount: Number.isFinite(Number(total)) ? Number(total) : 0
            });
            // 2) Create Order Items
            const orderItemsPayload = rows.map((r)=>({
                    productId: r.productId,
                    variantId: r.variantId,
                    qty: r.qty,
                    priceAtPurchase: Number(r.price)
                }));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOrderItems"])(order.id, orderItemsPayload);
            // 2.5) If NOT credit, record payment and mark order as PAID
            if (!isCredit) {
                const paymentInsert = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("payments").insert({
                    order_id: order.id,
                    method: paymentMethod,
                    amount: Number.isFinite(Number(total)) ? Number(total) : 0,
                    status: "SUCCESS",
                    reference: paymentRef.trim() ? paymentRef.trim() : null
                }).select("id").single();
                if (paymentInsert.error) throw paymentInsert.error;
                const upd = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("orders").update({
                    status: "PAID"
                }).eq("id", order.id);
                if (upd.error) throw upd.error;
            }
            // 3) Record co-purchase counts (NOT fatal if it fails)
            // NOTE: 22P02 here is usually a type mismatch between what the RPC expects
            // (e.g., uuid[]) and what we're sending (e.g., int[]). We try both safely.
            try {
                if (productIds.length >= 2) {
                    // Try int[] first
                    let { data: rpcData, error: rpcErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc("record_copurchase", {
                        product_ids: productIds
                    });
                    if (rpcErr && rpcErr?.code === "22P02") {
                        // If your schema uses UUID ids, try sending uuid[] instead
                        const maybeUuids = cartItems.map((x)=>String(x.productId)).filter((s)=>isUuid(s));
                        if (maybeUuids.length >= 2) {
                            const retry = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc("record_copurchase", {
                                product_ids: Array.from(new Set(maybeUuids))
                            });
                            rpcData = retry.data;
                            rpcErr = retry.error;
                        }
                    }
                    if (rpcErr) {
                        console.log("record_copurchase rpcErr:", rpcErr);
                        console.log("rpcErr.code:", rpcErr?.code);
                        console.log("rpcErr.message:", rpcErr?.message);
                        console.log("rpcErr.details:", rpcErr?.details);
                        console.log("rpcErr.hint:", rpcErr?.hint);
                    } else {
                        console.log("record_copurchase OK", rpcData);
                    }
                } else {
                    // Need at least 2 distinct products for co-purchase
                    console.log("record_copurchase skipped (need >= 2 distinct product ids)");
                }
            } catch (err) {
                console.log("record_copurchase threw (ignored):", err);
            }
            clearCart();
            setDone(true);
        } catch (e) {
            console.error("PLACE ORDER ERROR:", e);
            const msg = e?.message || e?.error?.message || e?.details || (typeof e === "string" ? e : null) || JSON.stringify(e, null, 2);
            if (String(msg).toLowerCase().includes("insufficient stock")) {
                alert("Sorry — one of the items is out of stock. Please reduce quantity or choose another size.");
            } else {
                alert(`Failed to place order:\n${msg}`);
            }
        } finally{
            setPlacing(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white text-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 py-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/cart",
                            className: "text-sm text-blue-600 hover:underline",
                            children: "← Back to cart"
                        }, void 0, false, {
                            fileName: "[project]/app/checkout/page.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-semibold mt-2",
                            children: "Checkout"
                        }, void 0, false, {
                            fileName: "[project]/app/checkout/page.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-600 mt-1",
                            children: "🔒 Secure"
                        }, void 0, false, {
                            fileName: "[project]/app/checkout/page.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/checkout/page.tsx",
                    lineNumber: 276,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-[1.6fr_0.9fr] gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border rounded-2xl p-8 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl",
                                        children: "✅"
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkout/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-semibold mt-3",
                                        children: "Order placed"
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkout/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mt-2",
                                        children: "Order saved to Supabase. Co-purchase counts attempted."
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkout/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 flex gap-3 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold",
                                                children: "Continue shopping"
                                            }, void 0, false, {
                                                fileName: "[project]/app/checkout/page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/cart",
                                                className: "px-5 py-2 rounded-full border text-sm font-semibold",
                                                children: "View cart"
                                            }, void 0, false, {
                                                fileName: "[project]/app/checkout/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/checkout/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/checkout/page.tsx",
                                lineNumber: 288,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border rounded-2xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold",
                                        children: "Delivery details"
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkout/page.tsx",
                                        lineNumber: 312,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mt-1",
                                        children: "Dummy data is prefilled for testing."
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkout/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm",
                                                children: [
                                                    "Full name",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: name,
                                                        onChange: (e)=>setName(e.target.value),
                                                        className: "mt-1 w-full border rounded-xl px-3 py-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/checkout/page.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/checkout/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm",
                                                children: [
                                                    "Phone number",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: phone,
                                                        onChange: (e)=>setPhone(e.target.value),
                                                        className: "mt-1 w-full border rounded-xl px-3 py-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/checkout/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/checkout/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm md:col-span-2",
                                                children: [
                                                    "Address",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: address,
                                                        onChange: (e)=>setAddress(e.target.value),
                                                        className: "mt-1 w-full border rounded-xl px-3 py-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/checkout/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/checkout/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm md:col-span-2",
                                                children: [
                                                    "Order note (optional)",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: note,
                                                        onChange: (e)=>setNote(e.target.value),
                                                        rows: 3,
                                                        className: "mt-1 w-full border rounded-xl px-3 py-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/checkout/page.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/checkout/page.tsx",
                                                lineNumber: 343,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/checkout/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 border rounded-xl p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold",
                                                children: "Payment"
                                            }, void 0, false, {
                                                fileName: "[project]/app/checkout/page.tsx",
                                                lineNumber: 355,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex items-center gap-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: isCredit,
                                                            onChange: (e)=>setIsCredit(e.target.checked)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/checkout/page.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Credit order (mark as PENDING)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/checkout/page.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/checkout/page.tsx",
                                                lineNumber: 357,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 grid grid-cols-1 md:grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm",
                                                        children: [
                                                            "Method",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: paymentMethod,
                                                                onChange: (e)=>setPaymentMethod(e.target.value),
                                                                className: "mt-1 w-full border rounded-xl px-3 py-2",
                                                                disabled: isCredit,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "EVC",
                                                                        children: "EVC"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/checkout/page.tsx",
                                                                        lineNumber: 377,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "MERCHANT",
                                                                        children: "MERCHANT"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/checkout/page.tsx",
                                                                        lineNumber: 378,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "CASH",
                                                                        children: "CASH"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/checkout/page.tsx",
                                                                        lineNumber: 379,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/checkout/page.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/checkout/page.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm",
                                                        children: [
                                                            "Reference (optional)",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: paymentRef,
                                                                onChange: (e)=>setPaymentRef(e.target.value),
                                                                className: "mt-1 w-full border rounded-xl px-3 py-2",
                                                                placeholder: "Txn ID / note",
                                                                disabled: isCredit
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/checkout/page.tsx",
                                                                lineNumber: 385,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/checkout/page.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/checkout/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mt-2",
                                                children: "If Credit is checked, no payment row is created now (so you won’t get duplicate payments)."
                                            }, void 0, false, {
                                                fileName: "[project]/app/checkout/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/checkout/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: placeOrder,
                                        disabled: placing || cartItems.length === 0,
                                        className: `mt-5 w-full rounded-full py-3 text-sm font-semibold ${placing || cartItems.length === 0 ? "bg-gray-200 text-gray-500" : "bg-blue-600 text-white"}`,
                                        children: placing ? "Placing order…" : isCredit ? `Create Credit Order • ${formatMoney(total)}` : `Pay Now • ${formatMoney(total)}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkout/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-3",
                                        children: "By placing an order, you help improve “bought together” recommendations."
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkout/page.tsx",
                                        lineNumber: 412,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/checkout/page.tsx",
                                lineNumber: 311,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/checkout/page.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border rounded-2xl p-5 sticky top-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold",
                                        children: "Order summary"
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkout/page.tsx",
                                        lineNumber: 422,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 space-y-3",
                                        children: rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: "No items."
                                        }, void 0, false, {
                                            fileName: "[project]/app/checkout/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 19
                                        }, this) : rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-700",
                                                        children: [
                                                            r.name,
                                                            " × ",
                                                            r.qty
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/checkout/page.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: formatMoney(r.lineTotal)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/checkout/page.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, r.key, true, {
                                                fileName: "[project]/app/checkout/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkout/page.tsx",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 border-t pt-4 space-y-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Subtotal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/checkout/page.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: formatMoney(subtotal)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/checkout/page.tsx",
                                                        lineNumber: 442,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/checkout/page.tsx",
                                                lineNumber: 440,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Delivery"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/checkout/page.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: formatMoney(deliveryFee)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/checkout/page.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/checkout/page.tsx",
                                                lineNumber: 445,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between border-t pt-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/checkout/page.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: formatMoney(total)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/checkout/page.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/checkout/page.tsx",
                                                lineNumber: 450,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/checkout/page.tsx",
                                        lineNumber: 439,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-3",
                                        children: "Tip: If co-purchase RPC fails, ensure the function exists and EXECUTE is granted for anon."
                                    }, void 0, false, {
                                        fileName: "[project]/app/checkout/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/checkout/page.tsx",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/checkout/page.tsx",
                            lineNumber: 420,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/checkout/page.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/checkout/page.tsx",
            lineNumber: 275,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/checkout/page.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
}
_s(CheckoutPage, "vtGH1YrOLAErkEp5eFkyD2pvHhI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = CheckoutPage;
var _c;
__turbopack_context__.k.register(_c, "CheckoutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_6fc7a88f._.js.map