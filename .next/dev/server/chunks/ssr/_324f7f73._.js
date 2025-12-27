module.exports = [
"[project]/components/CartIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/CartContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function CartIcon() {
    const { items } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const count = (items ?? []).reduce((s, i)=>s + i.qty, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/cart",
        className: "relative h-10 w-10 grid place-items-center rounded-full bg-[#0A5F91] text-white",
        "aria-label": "Go to cart",
        children: [
            "🛒",
            count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -top-1 -right-1 bg-red-500 text-[10px] px-1.5 rounded-full font-bold",
                children: count
            }, void 0, false, {
                fileName: "[project]/components/CartIcon.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CartIcon.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brands",
    ()=>brands,
    "categories",
    ()=>categories,
    "customers",
    ()=>customers,
    "productImages",
    ()=>productImages,
    "productVariants",
    ()=>productVariants,
    "products",
    ()=>products,
    "subcategories",
    ()=>subcategories,
    "subsubcategories",
    ()=>subsubcategories
]);
const categories = [
    {
        id: 1,
        slug: "groceries",
        img: "/groceries.webp",
        name_so: "Raashin",
        name_en: "Groceries"
    },
    {
        id: 2,
        slug: "beverages",
        img: "/drink.webp",
        name_so: "Cabitaan",
        name_en: "Beverages"
    },
    {
        id: 3,
        slug: "baby-care",
        img: "/baby.webp",
        name_so: "Ilmo",
        name_en: "Baby Care"
    },
    {
        id: 4,
        slug: "personal-care",
        img: "/personal.webp",
        name_so: "Nadaafad",
        name_en: "Personal Care"
    },
    {
        id: 5,
        slug: "home-kitchen",
        img: "/home.webp",
        name_so: "Guri & Jikada",
        name_en: "Home & Kitchen"
    },
    {
        id: 6,
        slug: "fashion",
        img: "/products/baby.webp",
        name_so: "Dharka",
        name_en: "Fashion"
    },
    {
        id: 7,
        slug: "daily-electronics",
        img: "/products/health.webp",
        name_so: "Koronto & Qalab",
        name_en: "Daily Electronics"
    },
    {
        id: 8,
        slug: "stationery",
        img: "/products/stationery.webp",
        name_so: "Qalinka & Buugaag",
        name_en: "Stationery"
    }
];
const subcategories = [
    // GROCERIES
    {
        id: 101,
        category_id: 1,
        slug: "fruits-vegetables",
        img: "/fruit.webp",
        name_so: "Miraha & Khudaarta",
        name_en: "Fruits & Vegetables"
    },
    {
        id: 102,
        category_id: 1,
        slug: "dairy-bakery",
        img: "/bakery.webp",
        name_so: "Caano & Rooti",
        name_en: "Dairy & Bakery"
    },
    {
        id: 103,
        category_id: 1,
        slug: "staples-atta-rice-dal-oil",
        img: "/oil.webp",
        name_so: "Raashin Asaasi",
        name_en: "Staples (Atta, Rice, Dal & Oil)"
    },
    {
        id: 104,
        category_id: 1,
        slug: "snacks-branded-foods",
        img: "/bakery.webp",
        name_so: "Cunto Fudud",
        name_en: "Snacks & Branded Foods"
    },
    {
        id: 105,
        category_id: 1,
        slug: "sweets-dry-fruits-dates",
        img: "/pick.webp",
        name_so: "Macmacaan & Timir",
        name_en: "Sweets, Dry Fruits & Dates"
    },
    {
        id: 106,
        category_id: 1,
        slug: "frozen-ready-foods",
        img: "/frozen.webp",
        name_so: "Cunto Qabow/Diyaarsan",
        name_en: "Frozen & Ready Foods"
    },
    // BEVERAGES
    {
        id: 201,
        category_id: 2,
        slug: "soft-drinks-juices",
        img: "/drink.webp",
        name_so: "Cabbitaan Fudud & Casiir",
        name_en: "Soft Drinks & Juices"
    },
    {
        id: 202,
        category_id: 2,
        slug: "tea-coffee-health-drinks",
        img: "/tea.webp",
        name_so: "Shaah & Kafee",
        name_en: "Tea, Coffee & Health Drinks"
    },
    // BABY
    {
        id: 301,
        category_id: 3,
        slug: "baby-food",
        img: "/baby.webp",
        name_so: "Cuntada Ilmaha",
        name_en: "Baby Food"
    },
    {
        id: 302,
        category_id: 3,
        slug: "diapers-wipes",
        img: "/nuna.webp",
        name_so: "Xafaayad & Tirtire",
        name_en: "Diapers & Wipes"
    },
    {
        id: 303,
        category_id: 3,
        slug: "baby-bath-skin-care",
        img: "/babycream.jpeg",
        name_so: "Qubays & Daryeel Maqaarka",
        name_en: "Baby Bath & Skin Care"
    },
    {
        id: 304,
        category_id: 3,
        slug: "baby-feeding-essentials",
        img: "/babyfeeding.webp",
        name_so: "Qalabka Quudinta",
        name_en: "Baby Feeding Essentials"
    },
    // PERSONAL CARE
    {
        id: 401,
        category_id: 4,
        slug: "bath-body",
        img: "/bath.webp.jpeg",
        name_so: "Qubays & Jirka",
        name_en: "Bath & Body"
    },
    {
        id: 402,
        category_id: 4,
        slug: "hair-care",
        img: "/shampoo.jpg",
        name_so: "Daryeel Timaha",
        name_en: "Hair Care"
    },
    {
        id: 403,
        category_id: 4,
        slug: "oral-care",
        img: "/oralcare.webp",
        name_so: "Daryeel Afka",
        name_en: "Oral Care"
    },
    {
        id: 404,
        category_id: 4,
        slug: "skin-care",
        img: "/nivea.webp",
        name_so: "Daryeel Maqaarka",
        name_en: "Skin Care"
    },
    {
        id: 405,
        category_id: 4,
        slug: "grooming-hygiene",
        img: "/groom.webp",
        name_so: "Nadaafad & Isqurxin",
        name_en: "Grooming & Hygiene"
    },
    // HOME & KITCHEN
    {
        id: 501,
        category_id: 5,
        slug: "kitchen-dining",
        img: "/cutlery.webp",
        name_so: "Jikada & Cuntada",
        name_en: "Kitchen & Dining"
    },
    {
        id: 502,
        category_id: 5,
        slug: "household-essentials",
        img: "/cleaner.webp",
        name_so: "Baahida Guriga",
        name_en: "Household Essentials"
    },
    {
        id: 503,
        category_id: 5,
        slug: "home-appliances",
        img: "/products/device.webp",
        name_so: "Qalabka Guriga",
        name_en: "Home Appliances"
    },
    {
        id: 504,
        category_id: 5,
        slug: "storage-containers",
        img: "/storage.webp",
        name_so: "Kayd & Weelal",
        name_en: "Storage & Containers"
    },
    {
        id: 505,
        category_id: 5,
        slug: "cleaning-supplies",
        img: "/products/cleaning.webp",
        name_so: "Qalabka Nadiifinta",
        name_en: "Cleaning Supplies"
    },
    {
        id: 506,
        category_id: 5,
        slug: "laundry-essentials",
        img: "/laundry.webp",
        name_so: "Dharka & Dhaqid",
        name_en: "Laundry Essentials"
    },
    // FASHION
    {
        id: 601,
        category_id: 6,
        slug: "mens-clothing",
        img: "/products/baby.webp",
        name_so: "Dharka Ragga",
        name_en: "Men’s Clothing"
    },
    {
        id: 602,
        category_id: 6,
        slug: "womens-clothing",
        img: "/products/beauty.webp",
        name_so: "Dharka Dumarka",
        name_en: "Women’s Clothing"
    },
    {
        id: 603,
        category_id: 6,
        slug: "kids-wear",
        img: "/products/baby.webp",
        name_so: "Dharka Carruurta",
        name_en: "Kids Wear"
    },
    {
        id: 604,
        category_id: 6,
        slug: "footwear",
        img: "/products/health.webp",
        name_so: "Kabo",
        name_en: "Footwear"
    },
    {
        id: 605,
        category_id: 6,
        slug: "innerwear",
        img: "/products/men.webp",
        name_so: "Dharka Hoose",
        name_en: "Innerwear"
    },
    // DAILY ELECTRONICS
    {
        id: 701,
        category_id: 7,
        slug: "led-bulbs-lights",
        img: "/decor.webp",
        name_so: "Nalal & Bulbo",
        name_en: "LED Bulbs & Lights"
    },
    {
        id: 702,
        category_id: 7,
        slug: "extension-boards-plugs",
        img: "/products/device.webp",
        name_so: "Kordhin & Fiyuus",
        name_en: "Extension Boards & Plugs"
    },
    {
        id: 703,
        category_id: 7,
        slug: "chargers-adapters",
        img: "/products/device.webp",
        name_so: "Charger & Adapter",
        name_en: "Chargers & Adapters"
    },
    {
        id: 704,
        category_id: 7,
        slug: "batteries-cells",
        img: "/products/health.webp",
        name_so: "Baytari",
        name_en: "Batteries & Cells"
    },
    {
        id: 705,
        category_id: 7,
        slug: "emergency-lights",
        img: "/decor.webp",
        name_so: "Nalal Degdeg",
        name_en: "Emergency Lights"
    },
    {
        id: 706,
        category_id: 7,
        slug: "switches-electricals",
        img: "/products/device.webp",
        name_so: "Switch & Koronto",
        name_en: "Switches & Electricals"
    },
    // STATIONERY
    {
        id: 801,
        category_id: 8,
        slug: "notebooks-registers",
        img: "/products/stationery.webp",
        name_so: "Buugaag & Diiwaan",
        name_en: "Notebooks & Registers"
    },
    {
        id: 802,
        category_id: 8,
        slug: "pens-writing",
        img: "/products/stationery.webp",
        name_so: "Qalin & Qoris",
        name_en: "Pens & Writing"
    },
    {
        id: 803,
        category_id: 8,
        slug: "school-supplies",
        img: "/products/stationery.webp",
        name_so: "Qalabka Dugsiga",
        name_en: "School Supplies"
    },
    {
        id: 804,
        category_id: 8,
        slug: "office-supplies",
        img: "/products/stationery.webp",
        name_so: "Qalabka Xafiiska",
        name_en: "Office Supplies"
    },
    {
        id: 805,
        category_id: 8,
        slug: "art-craft",
        img: "/products/stationery.webp",
        name_so: "Farshaxan & Gacan",
        name_en: "Art & Craft"
    }
];
const subsubcategories = [
    // Fruits & Vegetables
    {
        id: 10101,
        subcategory_id: 101,
        slug: "bananas",
        name_so: "Moos",
        name_en: "Bananas"
    },
    // Staples
    {
        id: 10301,
        subcategory_id: 103,
        slug: "rice",
        name_so: "Bariis",
        name_en: "Rice"
    },
    {
        id: 10302,
        subcategory_id: 103,
        slug: "flour",
        name_so: "Bur",
        name_en: "Flour"
    },
    {
        id: 10303,
        subcategory_id: 103,
        slug: "cooking-oil",
        name_so: "Saliid",
        name_en: "Cooking Oil"
    },
    // Soft Drinks & Juices
    {
        id: 20101,
        subcategory_id: 201,
        slug: "cola-soda",
        name_so: "Kola & Soda",
        name_en: "Cola & Soda"
    },
    {
        id: 20102,
        subcategory_id: 201,
        slug: "juices",
        name_so: "Casiir",
        name_en: "Juices"
    },
    {
        id: 20103,
        subcategory_id: 201,
        slug: "energy-drinks",
        name_so: "Cabitaan Tamareed",
        name_en: "Energy Drinks"
    },
    {
        id: 20104,
        subcategory_id: 201,
        slug: "flavoured-water",
        name_so: "Biyo Dhadhan Leh",
        name_en: "Flavoured Water"
    },
    {
        id: 20105,
        subcategory_id: 201,
        slug: "mixers-tonic",
        name_so: "Tonic & Mixers",
        name_en: "Mixers & Tonic"
    },
    // Tea & Coffee
    {
        id: 20201,
        subcategory_id: 202,
        slug: "instant-coffee",
        name_so: "Kafee Degdeg",
        name_en: "Instant Coffee"
    },
    {
        id: 20202,
        subcategory_id: 202,
        slug: "ground-coffee",
        name_so: "Kafee Shiidan",
        name_en: "Ground Coffee"
    },
    {
        id: 20203,
        subcategory_id: 202,
        slug: "coffee-beans",
        name_so: "Buun Kafee",
        name_en: "Coffee Beans"
    },
    {
        id: 20204,
        subcategory_id: 202,
        slug: "tea-bags",
        name_so: "Bacaha Shaaha",
        name_en: "Tea Bags"
    },
    {
        id: 20205,
        subcategory_id: 202,
        slug: "green-tea",
        name_so: "Shaah Cagaaran",
        name_en: "Green Tea"
    },
    {
        id: 20206,
        subcategory_id: 202,
        slug: "herbal-exotic-tea",
        name_so: "Shaah Dhir",
        name_en: "Herbal & Exotic Tea"
    },
    {
        id: 20207,
        subcategory_id: 202,
        slug: "gourmet-premium-tea",
        name_so: "Shaah Premium",
        name_en: "Gourmet / Premium Tea"
    },
    {
        id: 20208,
        subcategory_id: 202,
        slug: "health-drinks",
        name_so: "Cabitaan Caafimaad",
        name_en: "Health Drinks"
    },
    // Baby
    {
        id: 30101,
        subcategory_id: 301,
        slug: "cereals-purees",
        name_so: "Boorash & Puree",
        name_en: "Cereals & Purees"
    },
    {
        id: 30102,
        subcategory_id: 301,
        slug: "formula",
        name_so: "Caano Formula",
        name_en: "Formula"
    },
    {
        id: 30103,
        subcategory_id: 301,
        slug: "baby-snacks",
        name_so: "Cunto Fudud Ilmo",
        name_en: "Snacks for Babies"
    },
    {
        id: 30201,
        subcategory_id: 302,
        slug: "tape-diapers",
        name_so: "Xafaayad (Tape)",
        name_en: "Tape Diapers"
    },
    {
        id: 30202,
        subcategory_id: 302,
        slug: "pants-diapers",
        name_so: "Xafaayad (Pants)",
        name_en: "Pants Diapers"
    },
    {
        id: 30203,
        subcategory_id: 302,
        slug: "baby-wipes",
        name_so: "Tirtire Ilmo",
        name_en: "Baby Wipes"
    },
    {
        id: 30204,
        subcategory_id: 302,
        slug: "diaper-rash-cream",
        name_so: "Kareem Finan",
        name_en: "Diaper Rash Cream"
    },
    // Personal Care
    {
        id: 40101,
        subcategory_id: 401,
        slug: "soaps",
        name_so: "Saabuun",
        name_en: "Soaps"
    },
    {
        id: 40102,
        subcategory_id: 401,
        slug: "body-wash",
        name_so: "Body Wash",
        name_en: "Body Wash"
    },
    {
        id: 40103,
        subcategory_id: 401,
        slug: "deodorants",
        name_so: "Deodorant",
        name_en: "Deodorants"
    },
    {
        id: 40201,
        subcategory_id: 402,
        slug: "shampoo",
        name_so: "Shaambo",
        name_en: "Shampoo"
    },
    {
        id: 40202,
        subcategory_id: 402,
        slug: "conditioner",
        name_so: "Conditioner",
        name_en: "Conditioner"
    },
    {
        id: 40203,
        subcategory_id: 402,
        slug: "hair-oil",
        name_so: "Saliidda Timaha",
        name_en: "Hair Oil"
    },
    // Home & Kitchen
    {
        id: 50101,
        subcategory_id: 501,
        slug: "cookware",
        name_so: "Cookware",
        name_en: "Cookware"
    },
    {
        id: 50102,
        subcategory_id: 501,
        slug: "dinnerware",
        name_so: "Weel Cunto",
        name_en: "Dinnerware"
    },
    {
        id: 50103,
        subcategory_id: 501,
        slug: "kitchen-tools",
        name_so: "Qalabka Jikada",
        name_en: "Kitchen Tools"
    }
];
const products = [
    // Groceries
    {
        id: 1,
        name: "Basmati Rice 5kg",
        slug: "basmati-rice-5kg",
        long_description: "Premium basmati rice for daily use.",
        category_id: 1,
        subcategory_id: 103,
        brand_id: 6,
        is_discounted: true,
        base_price: 18.5,
        tags: [
            "rice",
            "bariis",
            "kilo bariisß"
        ]
    },
    {
        id: 2,
        name: "Sunflower Oil 3L",
        slug: "sunflower-oil-3l",
        long_description: "Healthy refined sunflower oil.",
        category_id: 1,
        subcategory_id: 103,
        brand_id: 1,
        is_discounted: false,
        base_price: 11,
        tags: [
            "cooking-oil",
            "Saliid",
            "saliid"
        ]
    },
    {
        id: 3,
        name: "Fresh Bananas 1kg",
        slug: "fresh-bananas-1kg",
        long_description: "Fresh bananas, daily fruit.",
        category_id: 1,
        subcategory_id: 101,
        brand_id: 6,
        is_discounted: false,
        base_price: 1.8,
        tags: [
            "bananas",
            "moos"
        ]
    },
    {
        id: 4,
        name: "Mixed Biscuits Pack",
        slug: "mixed-biscuits-pack",
        long_description: "Tea-time biscuits variety pack.",
        category_id: 1,
        subcategory_id: 104,
        brand_id: 7,
        is_discounted: true,
        base_price: 2.2,
        tags: [
            "biscuits",
            "buskud"
        ]
    },
    // Beverages
    {
        id: 5,
        name: "Orange Juice 1L",
        slug: "orange-juice-1l",
        long_description: "Refreshing orange juice.",
        category_id: 2,
        subcategory_id: 201,
        brand_id: 7,
        is_discounted: false,
        base_price: 2.5,
        tags: [
            "juices"
        ]
    },
    {
        id: 6,
        name: "Black Tea 500g",
        slug: "black-tea-500g",
        long_description: "Strong tea for daily use.",
        category_id: 2,
        subcategory_id: 202,
        brand_id: 7,
        is_discounted: false,
        base_price: 3.4,
        tags: [
            "gourmet-premium-tea"
        ]
    },
    // Baby
    {
        id: 7,
        name: "Baby Diapers (Medium)",
        slug: "baby-diapers-medium",
        long_description: "Comfort fit diapers.",
        category_id: 3,
        subcategory_id: 302,
        brand_id: 12,
        is_discounted: true,
        base_price: 9.9,
        tags: [
            "tape-diapers"
        ]
    },
    // Personal Care
    {
        id: 8,
        name: "Body Wash 500ml",
        slug: "body-wash-500ml",
        long_description: "Gentle daily body wash.",
        category_id: 4,
        subcategory_id: 401,
        brand_id: 8,
        is_discounted: false,
        base_price: 3.0,
        tags: [
            "body-wash"
        ]
    },
    // Home & Kitchen
    {
        id: 9,
        name: "Non-Stick Frying Pan",
        slug: "non-stick-frying-pan",
        long_description: "Everyday cookware.",
        category_id: 5,
        subcategory_id: 501,
        brand_id: 8,
        is_discounted: false,
        base_price: 7.5,
        tags: [
            "cookware"
        ]
    },
    {
        id: 10,
        name: "Laundry Detergent 2kg",
        slug: "laundry-detergent-2kg",
        long_description: "Daily laundry essential.",
        category_id: 5,
        subcategory_id: 506,
        brand_id: 8,
        is_discounted: true,
        base_price: 5.9,
        tags: [
            "laundry"
        ]
    },
    // Electronics
    {
        id: 11,
        name: "LED Bulb 12W",
        slug: "led-bulb-12w",
        long_description: "Bright LED bulb for home use.",
        category_id: 7,
        subcategory_id: 701,
        brand_id: 9,
        is_discounted: false,
        base_price: 1.2,
        tags: [
            "bulbs"
        ]
    },
    {
        id: 12,
        name: "Extension Board (4-Socket)",
        slug: "extension-board-4-socket",
        long_description: "Daily home power strip.",
        category_id: 7,
        subcategory_id: 702,
        brand_id: 9,
        is_discounted: false,
        base_price: 4.5,
        tags: [
            "extension-boards"
        ]
    },
    // Stationery
    {
        id: 13,
        name: "A4 Notebook (200 pages)",
        slug: "a4-notebook-200",
        long_description: "School & office notebook.",
        category_id: 8,
        subcategory_id: 801,
        brand_id: 6,
        is_discounted: false,
        base_price: 1.0,
        tags: [
            "notebooks"
        ]
    }
];
const productVariants = [
    {
        id: 1,
        product_id: 1,
        label: "5 kg",
        sku: "RICE-BAS-5KG",
        price: 18.5,
        mrp: 20,
        stock: 120
    },
    {
        id: 2,
        product_id: 1,
        label: "10 kg",
        sku: "RICE-BAS-10KG",
        price: 35,
        mrp: 38,
        stock: 80
    },
    {
        id: 3,
        product_id: 2,
        label: "1 L",
        sku: "OIL-SUN-1L",
        price: 4.2,
        mrp: 4.8,
        stock: 200
    },
    {
        id: 4,
        product_id: 2,
        label: "3 L",
        sku: "OIL-SUN-3L",
        price: 11,
        mrp: 12,
        stock: 150
    },
    {
        id: 5,
        product_id: 5,
        label: "500 ml",
        sku: "JUICE-ORG-500",
        price: 1.4,
        mrp: 1.6,
        stock: 90
    },
    {
        id: 6,
        product_id: 5,
        label: "1 L",
        sku: "JUICE-ORG-1L",
        price: 2.5,
        mrp: 2.8,
        stock: 120
    },
    {
        id: 7,
        product_id: 7,
        label: "Medium (30 pcs)",
        sku: "DIAPER-M-30",
        price: 9.9,
        mrp: 11,
        stock: 60
    },
    {
        id: 8,
        product_id: 7,
        label: "Large (30 pcs)",
        sku: "DIAPER-L-30",
        price: 10.5,
        mrp: 12,
        stock: 55
    },
    {
        id: 9,
        product_id: 11,
        label: "9W",
        sku: "LED-9W",
        price: 0.9,
        mrp: 1.1,
        stock: 300
    },
    {
        id: 10,
        product_id: 11,
        label: "12W",
        sku: "LED-12W",
        price: 1.2,
        mrp: 1.5,
        stock: 250
    },
    {
        id: 11,
        product_id: 13,
        label: "100 pages",
        sku: "NOTE-100",
        price: 0.6,
        mrp: 0.8,
        stock: 400
    },
    {
        id: 12,
        product_id: 13,
        label: "200 pages",
        sku: "NOTE-200",
        price: 1.0,
        mrp: 1.3,
        stock: 300
    }
];
const productImages = [
    {
        id: 1,
        product_id: 1,
        url: "/dairy..webp",
        is_primary: true
    },
    {
        id: 2,
        product_id: 1,
        url: "/alfanar.webp",
        is_primary: false
    },
    {
        id: 3,
        product_id: 2,
        url: "/products/oil.webp",
        is_primary: true
    },
    {
        id: 4,
        product_id: 3,
        url: "/products/a15-front.jpg",
        is_primary: true
    },
    {
        id: 5,
        product_id: 3,
        url: "/products/a15-back.jpg",
        is_primary: false
    }
];
const brands = [
    {
        id: 1,
        name: "Baraka",
        slug: "baraka"
    },
    {
        id: 2,
        name: "Samsung",
        slug: "samsung"
    },
    {
        id: 3,
        name: "Apple",
        slug: "apple"
    },
    {
        id: 4,
        name: "Dettol",
        slug: "dettol"
    },
    {
        id: 5,
        name: "Pampers",
        slug: "pampers"
    },
    {
        id: 6,
        name: "Local Harvest",
        slug: "local-harvest"
    },
    {
        id: 7,
        name: "Nestle",
        slug: "nestle"
    },
    {
        id: 8,
        name: "Unilever",
        slug: "unilever"
    },
    {
        id: 9,
        name: "LG",
        slug: "lg"
    },
    {
        id: 10,
        name: "Sony",
        slug: "sony"
    },
    {
        id: 11,
        name: "Nivea",
        slug: "nivea"
    },
    {
        id: 12,
        name: "Huggies",
        slug: "huggies"
    }
];
const customers = [
    {
        id: 1,
        name: "Ahmed Ali",
        phone: "0622000001"
    },
    {
        id: 2,
        name: "Amina Noor",
        phone: "0622000002"
    },
    {
        id: 3,
        name: "Hodan Yusuf",
        phone: "0619000123"
    },
    {
        id: 4,
        name: "Mohamed Hassan",
        phone: "0622000456"
    },
    {
        id: 5,
        name: "Fatima Omar",
        phone: "0615557788"
    },
    {
        id: 6,
        name: "Abdiqani Mohamed",
        phone: "0627003344"
    },
    {
        id: 7,
        name: "Khadra Aden",
        phone: "0612223344"
    },
    {
        id: 8,
        name: "Sahra Ismail",
        phone: "0626112233"
    }
];
}),
"[project]/components/AddToCartButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddToCartButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AddToCartButton({ productId }) {
    const { items, addItem, setQty } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    // Pick a default variant for this product (cheapest)
    const defaultVariantId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const vars = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productVariants"].filter((v)=>v.product_id === productId);
        if (!vars.length) return null;
        const cheapest = vars.reduce((min, v)=>v.price < min.price ? v : min, vars[0]);
        return cheapest.id;
    }, [
        productId
    ]);
    // Find cart line for this product+variant
    const item = items.find((i)=>i.productId === productId && i.variantId === defaultVariantId);
    const qty = item?.qty ?? 0;
    // NOT in cart → show Add
    if (!item) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>addItem(productId, defaultVariantId, 1),
            className: "mt-2 w-full h-10 rounded-xl border-2 border-[#0B6EA9] text-[#0B6EA9] font-bold",
            children: "Add +"
        }, void 0, false, {
            fileName: "[project]/components/AddToCartButton.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    // IN cart → show − qty +
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-2 flex items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setQty(productId, defaultVariantId, qty - 1),
                className: "w-10 h-10 rounded-full bg-[#0B6EA9] text-white text-xl",
                children: "−"
            }, void 0, false, {
                fileName: "[project]/components/AddToCartButton.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-bold",
                children: qty
            }, void 0, false, {
                fileName: "[project]/components/AddToCartButton.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setQty(productId, defaultVariantId, qty + 1),
                className: "w-10 h-10 rounded-full bg-[#0B6EA9] text-white text-xl",
                children: "+"
            }, void 0, false, {
                fileName: "[project]/components/AddToCartButton.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AddToCartButton.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/search/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CartIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CartIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddToCartButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AddToCartButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
/** ===== Recent searches (localStorage) ===== */ const LS_KEY = "recent_searches_v1";
const MAX_RECENT = 10;
function loadRecent() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveRecent(term) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const t = undefined;
    const prev = undefined;
    const next = undefined;
}
function clearRecent() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
/** ===== Helpers ===== */ function money(n) {
    return `₹${Number(n ?? 0).toFixed(0)}`;
}
// ✅ Normalizes hyphens/underscores/spaces so "cooking-oil" matches "cooking oil"
function normalize(s) {
    return String(s ?? "").toLowerCase().trim().replace(/[-_]+/g, " ").replace(/\s+/g, " ");
}
function getPrimaryImageUrl(productId) {
    const primary = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productImages"].find((img)=>img.product_id === productId && img.is_primary);
    const anyImg = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productImages"].find((img)=>img.product_id === productId);
    return primary?.url || anyImg?.url || "/example.png";
}
function getBestVariant(productId, basePrice) {
    const vars = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productVariants"].filter((v)=>v.product_id === productId);
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
/** ===== Basic scoring search (still fast) ===== */ function scoreProduct(termRaw, p) {
    const t = normalize(termRaw);
    if (!t) return 0;
    const tokens = t.split(" ").filter(Boolean);
    const name = normalize(p.name);
    const slug = normalize(p.slug);
    const desc = normalize(p.long_description);
    const tagsStr = Array.isArray(p.tags) ? p.tags.map(normalize).join(" ") : "";
    // strong exact matches
    if (name === t) return 1000;
    if (slug === t) return 950;
    let score = 0;
    // token based (fixes: "cooking oil" vs "cooking-oil", "saliid 3l", etc.)
    for (const tok of tokens){
        if (name.includes(tok)) score += 150;
        if (slug.includes(tok)) score += 90;
        if (tagsStr.includes(tok)) score += 120;
        if (desc.includes(tok)) score += 20;
    }
    // slight boost if term matches start of name
    if (tokens[0] && name.startsWith(tokens[0])) score += 60;
    return score;
}
function SearchPage() {
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [recent, setRecent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setRecent(loadRecent());
        setTimeout(()=>inputRef.current?.focus(), 50);
    }, []);
    const term = normalize(q);
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!term) return [];
        const scored = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].map((p)=>{
            // include category/subcategory names in search space (small boost)
            const cat = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].find((c)=>c.id === p.category_id);
            const sub = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subcategories"].find((s)=>s.id === p.subcategory_id);
            const extraHay = normalize(`${cat?.name ?? ""} ${sub?.name ?? ""}`);
            const baseScore = scoreProduct(term, p);
            // token-based extra boost too
            const tokens = term.split(" ").filter(Boolean);
            const extra = tokens.some((tok)=>extraHay.includes(tok)) ? 30 : 0;
            const s = baseScore + extra;
            return s > 0 ? {
                p,
                s
            } : null;
        }).filter(Boolean);
        scored.sort((a, b)=>b.s - a.s);
        return scored.slice(0, 30).map((x)=>x.p);
    }, [
        term
    ]);
    function submitSearch() {
        if (!term) return;
        saveRecent(q);
        setRecent(loadRecent());
    }
    function onClearAll() {
        clearRecent();
        setRecent([]);
    }
    const popularCats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].slice(0, 8), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white text-black pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 bg-[#0B6EA9]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-md px-3 py-2 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "h-10 w-10 grid place-items-center rounded-full bg-[#0A5F91] text-white",
                                "aria-label": "Back",
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 h-10 rounded-full bg-[#0A5F91] px-3 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/80",
                                        children: "🔎"
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: inputRef,
                                        value: q,
                                        onChange: (e)=>setQ(e.target.value),
                                        onKeyDown: (e)=>{
                                            if (e.key === "Enter") submitSearch();
                                        },
                                        placeholder: "Search products & brands",
                                        className: "w-full bg-transparent outline-none text-white placeholder:text-white/70 text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    q.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setQ(""),
                                        className: "text-white/90 text-sm px-2",
                                        "aria-label": "Clear",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CartIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-t",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-md px-4 py-2 text-sm text-gray-800 flex items-center gap-2",
                            children: [
                                "📍 ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: "Mumbai 400020"
                                }, void 0, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 16
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500",
                                    children: "▾"
                                }, void 0, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            !term && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-md px-4 pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full text-left bg-white rounded-2xl border shadow-sm p-4 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-extrabold text-gray-900",
                                        children: "Have a Shopping List?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "Search multiple products together"
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-400 text-2xl",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-extrabold text-gray-900",
                                children: "Recent Searches"
                            }, void 0, false, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            recent.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClearAll,
                                className: "text-sm font-semibold text-[#0B6EA9]",
                                children: "Clear All"
                            }, void 0, false, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-wrap gap-2",
                        children: recent.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-500",
                            children: "No recent searches"
                        }, void 0, false, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 238,
                            columnNumber: 15
                        }, this) : recent.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setQ(r),
                                className: "px-3 py-1.5 rounded-full bg-gray-100 text-sm",
                                children: r
                            }, r, false, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 241,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 font-extrabold text-gray-900",
                        children: "Popular categories"
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 grid grid-cols-4 gap-3",
                        children: popularCats.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    window.location.href = "/";
                                },
                                className: "flex flex-col items-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-14 w-14 rounded-full bg-pink-50 overflow-hidden grid place-items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: cat.img,
                                            alt: cat.name,
                                            width: 56,
                                            height: 56,
                                            className: "object-contain p-1"
                                        }, void 0, false, {
                                            fileName: "[project]/app/search/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 text-[11px] leading-tight",
                                        children: cat.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, cat.id, true, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 256,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 215,
                columnNumber: 9
            }, this),
            term && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-md px-4 pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-extrabold text-gray-900",
                                children: [
                                    "Search Results",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2 text-sm text-gray-500",
                                        children: [
                                            "(",
                                            results.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "h-9 px-3 rounded-full border text-sm bg-white flex items-center gap-2",
                                        children: "↕ Sort"
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "h-9 px-3 rounded-full border text-sm bg-white flex items-center gap-2",
                                        children: "⚙ Filter"
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 space-y-3",
                        children: results.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border rounded-2xl p-4 text-sm text-gray-600",
                            children: [
                                "No results for ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: q
                                }, void 0, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 32
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 300,
                            columnNumber: 15
                        }, this) : results.map((p)=>{
                            const img = getPrimaryImageUrl(p.id);
                            const { price, mrp } = getBestVariant(p.id, p.base_price);
                            const offPct = mrp && price ? Math.round((mrp - price) / mrp * 100) : null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border rounded-2xl p-3 flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/product/${p.slug}`,
                                        onClick: ()=>submitSearch(),
                                        className: "w-24 h-24 rounded-xl bg-gray-50 border overflow-hidden grid place-items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: img,
                                            alt: p.name,
                                            width: 96,
                                            height: 96,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/app/search/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 312,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/product/${p.slug}`,
                                                onClick: ()=>submitSearch(),
                                                className: "block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-semibold text-gray-900 line-clamp-2",
                                                    children: p.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/search/page.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/search/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex items-end gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-lg font-extrabold text-gray-900",
                                                        children: money(price)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/search/page.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 25
                                                    }, this),
                                                    mrp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-400 line-through",
                                                        children: money(mrp)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/search/page.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 27
                                                    }, this) : null,
                                                    offPct ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs font-extrabold text-green-700 bg-green-50 px-2 py-1 rounded-full",
                                                        children: [
                                                            offPct,
                                                            "% OFF"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/search/page.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 27
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/search/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 max-w-[160px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddToCartButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    productId: p.id
                                                }, void 0, false, {
                                                    fileName: "[project]/app/search/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/search/page.tsx",
                                                lineNumber: 343,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 320,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 311,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed bottom-0 left-0 right-0 bg-white border-t z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-md grid grid-cols-4 py-2 text-xs text-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "grid place-items-center gap-1",
                            children: [
                                "🏠",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 359,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/categories",
                            className: "grid place-items-center gap-1",
                            children: [
                                "📂",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Categories"
                                }, void 0, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: true,
                            className: "grid place-items-center gap-1 opacity-40 cursor-not-allowed",
                            title: "Wishlist disabled",
                            children: [
                                "♡",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Wishlist"
                                }, void 0, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 369,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/orders",
                            className: "grid place-items-center gap-1",
                            children: [
                                "📦",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Orders"
                                }, void 0, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 372,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 371,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/search/page.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/search/page.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_324f7f73._.js.map