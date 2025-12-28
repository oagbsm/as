module.exports = [
"[project]/lib/supabaseClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://ecfxrmhrfjqdmqewzrfz.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjZnhybWhyZmpxZG1xZXd6cmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzNDA0OTgsImV4cCI6MjA4MTkxNjQ5OH0.jtF3Qp9N7rH-KCWEMHU0atH7h-LQEJBKYO9Q2HdxkX0"));
}),
"[project]/lib/db.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-ssr] (ecmascript)");
;
function safeImg(src) {
    const s = String(src ?? "").trim();
    if (!s) return "/example.png";
    if (s.startsWith("/")) return s;
    if (s.startsWith("http://") || s.startsWith("https://")) return s;
    return "/example.png";
}
async function getCategoriesWithSubcategories() {
    const { data: cats, error: catErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("categories").select("id,slug,img,name_so,name_en").order("id", {
        ascending: true
    });
    if (catErr) throw catErr;
    const { data: subs, error: subErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("subcategories").select("id,category_id,slug,img,name_so,name_en").order("id", {
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("categories").select("*").order("id");
    if (error) throw error;
    return data ?? [];
}
async function fetchAllSubcategories() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("subcategories").select("*").order("id");
    if (error) throw error;
    return data ?? [];
}
async function fetchAllProducts() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*").order("id");
    if (error) throw error;
    return data ?? [];
}
async function fetchAllProductVariants() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("product_variants").select("*").order("id");
    if (error) throw error;
    return data ?? [];
}
async function fetchAllProductImages() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("product_images").select("*").order("is_primary", {
        ascending: false
    });
    if (error) throw error;
    return data ?? [];
}
async function fetchSubcategoryBySlug(slug) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("subcategories").select("*").eq("slug", slug).maybeSingle();
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
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("brands").select("id,name,slug").in("id", clean).order("name", {
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*").eq("slug", slug).maybeSingle(); // ✅ doesn't throw when 0 rows
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*").eq("subcategory_id", subcategoryId).order("id", {
        ascending: true
    });
    if (error) throw error;
    return data ?? [];
}
async function fetchSubSubcategoriesBySubcategoryId(subcategoryId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("subsubcategories").select("*").eq("subcategory_id", subcategoryId).order("id", {
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("subcategories").select("*").eq("id", id).single();
    if (error) return null;
    return data;
}
async function fetchRelatedProducts(args) {
    const limit = args.limit ?? 12;
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("products").select("*").eq("subcategory_id", args.subcategoryId).neq("id", args.excludeProductId).limit(limit);
    if (error) throw error;
    return data ?? [];
}
async function getProductsByIds(ids) {
    const unique = Array.from(new Set(ids)).filter(Boolean);
    if (unique.length === 0) return [];
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("products").select("id,name,slug,long_description,category_id,subcategory_id,brand_id,is_discounted,base_price,tags,is_active").in("id", unique);
    if (error) throw error;
    return data ?? [];
}
async function getVariantsByIds(ids) {
    const unique = Array.from(new Set(ids)).filter((x)=>x != null);
    if (unique.length === 0) return [];
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("product_variants").select("id,product_id,label,price,stock").in("id", unique);
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("product_variants").select("*").in("product_id", unique).order("price", {
        ascending: true
    });
    if (error) throw error;
    return data ?? [];
}
async function fetchImagesByProductIds(productIds) {
    const unique = Array.from(new Set(productIds)).filter(Boolean);
    if (unique.length === 0) return [];
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("product_images").select("*").in("product_id", unique).order("is_primary", {
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("copurchase_counts").select("co_product_id,count").eq("product_id", args.productId).order("count", {
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("customers").select("id,name,phone").or(`name.ilike.%${q}%,phone.ilike.%${q}%`).limit(8);
    if (error) throw error;
    return data ?? [];
}
async function createOrder(args) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("orders").insert({
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
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("order_items").insert(payload);
    if (error) {
        // helpful debugging
        console.log("ORDER_ITEMS_INSERT_ERROR", error);
        throw error;
    }
}
}),
"[project]/app/search/results/[tag]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchResultsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopNavBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TopNavBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function SearchResultsPage() {
    const { tag } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const decodedTag = decodeURIComponent(tag).trim().toLowerCase();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [productImages, setProductImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [productVariants, setProductVariants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            try {
                const [prods, vars, imgs] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAllProducts"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAllProductVariants"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAllProductImages"])()
                ]);
                setProducts(prods);
                setProductVariants(vars);
                setProductImages(imgs);
            } finally{
                setLoading(false);
            }
        })();
    }, [
        decodedTag
    ]);
    const matched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!decodedTag) return [];
        return products.filter((p)=>{
            const tags = Array.isArray(p.tags) ? p.tags.map((t)=>String(t).toLowerCase().trim()) : [];
            return tags.includes(decodedTag);
        });
    }, [
        products,
        decodedTag
    ]);
    function getPrimaryImageUrl(productId) {
        const primary = productImages.find((img)=>img.product_id === productId && img.is_primary);
        const anyImg = productImages.find((img)=>img.product_id === productId);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeImg"])(primary?.url || anyImg?.url || "/example.png");
    }
    function getBestVariant(productId, basePrice) {
        const vars = productVariants.filter((v)=>v.product_id === productId);
        if (vars.length === 0) return {
            price: basePrice ?? 0,
            mrp: null
        };
        const best = vars.reduce((min, v)=>v.price < min.price ? v : min, vars[0]);
        return {
            price: best.price,
            mrp: best.mrp ?? null
        };
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopNavBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/search/results/[tag]/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-md mx-auto p-4 bg-white min-h-screen text-[#0B6EA9] flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold",
                        children: [
                            "Results for: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: [
                                    '"',
                                    decodedTag,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/search/results/[tag]/page.tsx",
                                lineNumber: 77,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/search/results/[tag]/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 text-center text-base",
                        children: "Loading products…"
                    }, void 0, false, {
                        fileName: "[project]/app/search/results/[tag]/page.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    !loading && matched.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-8 text-base",
                        children: [
                            "No results found.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/search/results/[tag]/page.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://wa.me/252622073874",
                                className: "underline font-bold text-[#0B6EA9]",
                                children: "Contact us on WhatsApp 📩"
                            }, void 0, false, {
                                fileName: "[project]/app/search/results/[tag]/page.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/search/results/[tag]/page.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    !loading && matched.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid grid-cols-2 gap-4",
                        children: matched.map((p)=>{
                            const img = getPrimaryImageUrl(p.id);
                            const { price, mrp } = getBestVariant(p.id, p.base_price);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-sm p-2 flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/product/${p.slug}`,
                                        className: "block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: img,
                                                    alt: p.name,
                                                    width: 200,
                                                    height: 200,
                                                    className: "object-contain w-full h-40 rounded-lg bg-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/search/results/[tag]/page.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/search/results/[tag]/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm font-medium line-clamp-2",
                                                children: p.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/search/results/[tag]/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-md",
                                                        children: [
                                                            price ?? "—",
                                                            " SOS"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/search/results/[tag]/page.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 23
                                                    }, this),
                                                    mrp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs line-through text-gray-400",
                                                        children: [
                                                            mrp,
                                                            " SOS"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/search/results/[tag]/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/search/results/[tag]/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/search/results/[tag]/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>window.dispatchEvent(new CustomEvent("cart:add", {
                                                detail: {
                                                    productId: p.id
                                                }
                                            })),
                                        className: "w-full bg-[#0B6EA9] text-white rounded-full py-2 mt-auto",
                                        children: "+ Add to Cart"
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/results/[tag]/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/app/search/results/[tag]/page.tsx",
                                lineNumber: 107,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/search/results/[tag]/page.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/search/results/[tag]/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=_f9061225._.js.map