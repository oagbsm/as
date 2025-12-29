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
"[project]/app/categories/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoriesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function getLabel(cat, lang) {
    const so = cat?.name_so ?? "Qayb";
    const en = cat?.name_en ?? "Category";
    return lang === "en" ? en : so;
}
function CategoriesPage() {
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [cats, setCats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subsubs, setSubsubs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function load() {
            try {
                setLoading(true);
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategoriesWithSubcategories"])();
                setCats(data);
                const map = {};
                for (const cat of data){
                    for (const sub of cat.subcats){
                        const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchSubSubcategoriesBySubcategoryId"])(sub.id);
                        map[sub.id] = list;
                    }
                }
                setSubsubs(map);
            } catch (e) {
                console.error("getCategoriesWithSubcategories error", e);
                setCats([]);
            } finally{
                setLoading(false);
            }
        }
        load();
    }, []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-[#F4F6F8] pb-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-md bg-white border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 pt-4 pb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-base font-semibold text-gray-900",
                            children: lang === "en" ? "All Categories" : "Dhammaan Qaybaha"
                        }, void 0, false, {
                            fileName: "[project]/app/categories/page.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-gray-500",
                            children: lang === "en" ? "Loading categories..." : "Qaybaha ayaa soo dhacaya..."
                        }, void 0, false, {
                            fileName: "[project]/app/categories/page.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/categories/page.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/categories/page.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/categories/page.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#F4F6F8] pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-md bg-white border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 pt-4 pb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-base font-semibold text-gray-900",
                            children: lang === "en" ? "All Categories" : "Dhammaan Qaybaha"
                        }, void 0, false, {
                            fileName: "[project]/app/categories/page.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-gray-500",
                            children: lang === "en" ? "Browse all sections of the store." : "Ka dooro qaybaha kala duwan ee dukaanka."
                        }, void 0, false, {
                            fileName: "[project]/app/categories/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/categories/page.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/categories/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-md mt-2 space-y-4",
                children: cats.flatMap((cat)=>cat.subcats.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border-b rounded-lg pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between px-4 pt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-semibold text-gray-900",
                                        children: sub.name_en || sub.name_so
                                    }, void 0, false, {
                                        fileName: "[project]/app/categories/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/categories/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 px-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3 overflow-x-auto pb-1 pr-6",
                                                children: [
                                                    (subsubs[sub.id] ?? []).map((ss)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/subcategory/${sub.slug}?ss=${ss.slug}`,
                                                            className: "min-w-[110px] max-w-[115px] rounded-xl bg-[#EAF3FF] px-2 py-2 flex flex-col items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-10 w-full mb-2 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: (typeof ss.img === "string" ? ss.img.trim() : "/example.png") || "/example.png",
                                                                        alt: ss.name_so || ss.name_en,
                                                                        width: 70,
                                                                        height: 55,
                                                                        className: "object-contain"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/categories/page.tsx",
                                                                        lineNumber: 121,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/categories/page.tsx",
                                                                    lineNumber: 120,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[11px] font-semibold text-gray-900 leading-tight text-center line-clamp-2",
                                                                    children: ss.name_en || ss.name_so
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/categories/page.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, ss.id, true, {
                                                            fileName: "[project]/app/categories/page.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 23
                                                        }, this)),
                                                    (!subsubs[sub.id] || subsubs[sub.id].length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-gray-500 italic px-2 py-1",
                                                        children: lang === "en" ? "No subcategories" : "Qeybo ma jiro"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/categories/page.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/categories/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, this),
                                            (subsubs[sub.id]?.length ?? 0) > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#F4F6F8] to-transparent flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    className: "h-4 w-4 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/categories/page.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/categories/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/categories/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/categories/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, sub.id, true, {
                            fileName: "[project]/app/categories/page.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)))
            }, void 0, false, {
                fileName: "[project]/app/categories/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/categories/page.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_486c63f0._.js.map