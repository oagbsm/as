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
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/CartContext.tsx [app-ssr] (ecmascript)");
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
const HERO_SLIDES = [
    {
        id: 1,
        img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/ad1.webp"
    },
    {
        id: 2,
        img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/ad5.webp"
    },
    {
        id: 3,
        img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/ad3.webp"
    },
    {
        id: 4,
        img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/ad1.webp"
    }
];
const PROMO_CARDS = [
    {
        id: "members",
        title_en: "Members Only",
        title_so: "Xubnaha Kaliya",
        desc_en: "Special SHARE prices on 2000+ products.",
        desc_so: "Qiimooyin SHARE oo gaar ah in ka badan 2000 alaab."
    },
    {
        id: "tech",
        title_en: "Tech & Appliances",
        title_so: "Tiknoolaji & Qalab",
        desc_en: "Up to 50% off selected electronics.",
        desc_so: "Illaa 50% dhimis qalabka korontada."
    },
    {
        id: "food",
        title_en: "Food & Pantry",
        title_so: "Cunto & Raashin",
        desc_en: "Stock up on everyday essentials.",
        desc_so: "Kaydi raashinka iyo alaabta maalinlaha ah."
    }
];
function money(n) {
    return `$${Number(n ?? 0).toFixed(2)}`;
}
function PrimarySecondary({ primary, secondary, center = true, primaryClass = "text-[11px] font-medium", secondaryClass = "text-[9px] text-gray-500" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${center ? "text-center" : "text-left"} leading-tight`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: primaryClass,
                children: primary
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            secondary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: secondaryClass,
                children: secondary
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 80,
                columnNumber: 20
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
const CATEGORY_BG = {
    groceries: "bg-[#0E5C1C]",
    baby: "bg-[#F8B8D0]",
    "health-beauty": "bg-[#E89A3D]",
    household: "bg-[#8FC5E8]"
};
const CATEGORY_ICON = {
    groceries: "🥕",
    baby: "👶",
    "health-beauty": "✨",
    household: "🏠"
};
function getCategoryBg(slug) {
    if (!slug) return "bg-[#F3F4F6]"; // default light gray
    return CATEGORY_BG[slug] ?? "bg-[#F3F4F6]";
}
function HomePage() {
    const sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const [activeSlide, setActiveSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const { items } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [categoryMap, setCategoryMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingCats, setLoadingCats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeCatSlug, setActiveCatSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [compactTopCats, setCompactTopCats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = setInterval(()=>setActiveSlide((s)=>(s + 1) % HERO_SLIDES.length), 3500);
        return ()=>clearInterval(t);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let alive = true;
        (async ()=>{
            try {
                setLoadingCats(true);
                const cats = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategoriesWithSubcategories"])();
                if (!alive) return;
                setCategoryMap(cats);
            } catch (e) {
                console.error("HOME LOAD CATEGORIES ERROR:", e);
            } finally{
                if (alive) setLoadingCats(false);
            }
        })();
        return ()=>{
            alive = false;
        };
    }, []);
    // Compact top categories (hide images) when scrolling down
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if ("TURBOPACK compile-time truthy", 1) return;
            //TURBOPACK unreachable
            ;
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    // Observe category sections and update active slug when scrolling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!categoryMap.length) return;
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                const slug = entry.target.getAttribute("data-cat-slug");
                if (!slug) return;
                if (entry.isIntersecting) {
                    setActiveCatSlug(slug);
                }
            });
        }, {
            root: null,
            rootMargin: "-80px 0px -60% 0px",
            threshold: 0.2
        });
        categoryMap.forEach((cat)=>{
            const el = sectionRefs.current[cat.slug];
            if (el) observer.observe(el);
        });
        return ()=>{
            observer.disconnect();
        };
    }, [
        categoryMap
    ]);
    // Lookup maps for cart totals
    const [productMap, setProductMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [variantMap, setVariantMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let alive = true;
        (async ()=>{
            const cart = Array.isArray(items) ? items : [];
            const pids = cart.map((x)=>x.productId);
            const vids = cart.map((x)=>x.variantId).filter((v)=>v != null);
            try {
                const [ps, vs] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductsByIds"])(pids),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVariantsByIds"])(vids)
                ]);
                if (!alive) return;
                const pm = {};
                for (const p of ps)pm[p.id] = p;
                const vm = {};
                for (const v of vs)vm[v.id] = v;
                setProductMap(pm);
                setVariantMap(vm);
            } catch (e) {
                console.error(e);
            }
        })();
        return ()=>{
            alive = false;
        };
    }, [
        items
    ]);
    const scrollToCategory = (slug)=>{
        const el = sectionRefs.current[slug];
        if (!el) return;
        // Approximate combined height of TopNavbar + sticky top categories strip
        const headerOffset = 170; // adjusted for TopNavbar + sticky top categories strip
        const rect = el.getBoundingClientRect();
        const scrollTop = window.scrollY + rect.top - headerOffset;
        window.scrollTo({
            top: scrollTop,
            behavior: "smooth"
        });
    };
    const cartTotals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const cart = Array.isArray(items) ? items : [];
        let total = 0;
        let count = 0;
        for (const it of cart){
            const p = productMap[it.productId];
            if (!p) continue;
            const v = it.variantId != null ? variantMap[it.variantId] : null;
            const price = Number(v?.price ?? p.base_price ?? 0);
            total += price * (it.qty ?? 1);
            count += it.qty ?? 1;
        }
        return {
            total,
            count
        };
    }, [
        items,
        productMap,
        variantMap
    ]);
    const cartCtaPrimary = lang === "en" ? "Go to Cart →" : "U gudub Gaadhiga →";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white text-black",
        children: [
            categoryMap.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "sticky top-[110px] z-40 border-b bg-white shadow-sm",
                children: [
                    "          ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-md px-2 py-2 flex gap-4 overflow-x-auto",
                        children: categoryMap.map((cat)=>{
                            const label = lang === "en" ? cat.name_en : cat.name_so;
                            const imgSrc = typeof cat.img === "string" && cat.img.trim().length > 0 ? cat.img.trimEnd() : "/example.png";
                            const isActive = activeCatSlug === cat.slug;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollToCategory(cat.slug),
                                className: `min-w-[78px] px-1 py-0.5 rounded-xl transition-all duration-200 ${isActive ? "bg-[#E3F2FF] shadow-md scale-[1.02]" : "bg-transparent"}`,
                                type: "button",
                                children: [
                                    !compactTopCats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `mx-auto h-14 w-14 pt-[-10px] ounded-full overflow-hidden flex items-center justify-center transition-shadow ${isActive ? "bg-[#DBEAFE] ring-2 ring-[#0B6EA9] shadow-lg" : "bg-blue-50"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: imgSrc,
                                            alt: label,
                                            width: 56,
                                            height: 56,
                                            className: "w-full h-full object-contain p-1"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 292,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `mt-1 text-[11px] text-center leading-tight font-semibold transition-colors ${isActive ? "text-[#0B6EA9]" : "text-[#0B3C6E]"}`,
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, cat.id, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 276,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 266,
                        columnNumber: 84
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 266,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white pt-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden rounded-2xl bg-white h-[140px] w-[90%] mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex transition-transform duration-500",
                        style: {
                            transform: `translateX(-${activeSlide * 100}%)`
                        },
                        children: HERO_SLIDES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-none w-full h-[140px] flex items-center justify-center bg-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: s.img,
                                    alt: "promo",
                                    width: 500,
                                    height: 140,
                                    className: "max-h-full w-full object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 327,
                                    columnNumber: 17
                                }, this)
                            }, s.id, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 324,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 318,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white px-4 pt-0 -mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory",
                        children: [
                            "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/bar1.webp",
                            "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/bar2.webp",
                            "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/bar3.webp",
                            "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/bar4.webp"
                        ].map((url, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-[100px] h-[140px] rounded-2xl overflow-hidden bg-white shadow-sm flex-shrink-0 snap-start border border-gray-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: url,
                                    alt: "promo",
                                    width: 100,
                                    height: 140,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 354,
                                    columnNumber: 17
                                }, this)
                            }, i, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 350,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 342,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white px-3 pb-6 pt-1",
                children: categoryMap.map((cat)=>{
                    const catPrimary = lang === "en" ? cat.name_en : cat.name_so;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            sectionRefs.current[cat.slug] = el;
                        },
                        "data-cat-slug": cat.slug,
                        className: "scroll-mt-[140px] pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PrimarySecondary, {
                                    primary: catPrimary,
                                    center: false,
                                    primaryClass: "text-lg font-bold text-gray-900"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 386,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 385,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-x-3 gap-y-2.5",
                                children: (cat.subcats || []).slice(0, 8).map((sub)=>{
                                    const subPrimary = lang === "en" ? sub.name_en : sub.name_so;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/subcategory/${sub.slug}`,
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `relative h-[90px] w-[90px] rounded-2xl overflow-hidden flex items-center justify-center ${getCategoryBg(cat.slug)}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: typeof sub.img === "string" && sub.img.trim().length > 0 ? sub.img.trimEnd() : "/example.png",
                                                    alt: subPrimary,
                                                    fill: true,
                                                    className: "object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-0.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PrimarySecondary, {
                                                    primary: subPrimary,
                                                    primaryClass: "text-[12px] font-semibold text-gray-800"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 420,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, sub.id, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 398,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 393,
                                columnNumber: 15
                            }, this)
                        ]
                    }, cat.id, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 377,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, this),
            cartTotals.count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-0 right-0 bottom-[100px] z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-md px-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/cart",
                        className: "flex items-center justify-between bg-[#0B6EA9] text-white rounded-2xl px-4 py-3 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs opacity-90",
                                        children: [
                                            cartTotals.count,
                                            " item",
                                            cartTotals.count > 1 ? "s" : "",
                                            " in cart"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 444,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-extrabold",
                                        children: money(cartTotals.total)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 443,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right leading-tight font-extrabold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: cartCtaPrimary
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 450,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 439,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 438,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 437,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_304c5dba._.js.map