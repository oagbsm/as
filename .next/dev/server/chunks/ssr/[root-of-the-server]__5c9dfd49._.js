module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/data/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brands",
    ()=>brands,
    "categories",
    ()=>categories,
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
        name: "Groceries",
        slug: "groceries",
        img: "/groceries.webp"
    },
    {
        id: 2,
        name: " Beverages",
        slug: "beverages",
        img: "/drink.webp"
    },
    {
        id: 3,
        name: "Baby Care",
        slug: "baby-care",
        img: "/baby.webp"
    },
    {
        id: 4,
        name: " Personal Care",
        slug: "personal-care",
        img: "/personal.webp"
    },
    {
        id: 5,
        name: " Home & Kitchen",
        slug: "home-kitchen",
        img: "/home.webp"
    },
    {
        id: 6,
        name: " Fashion",
        slug: "fashion",
        img: "/products/baby.webp"
    },
    // Daily-use electronics (NOT phones)
    {
        id: 7,
        name: "Daily Electronics",
        slug: "daily-electronics",
        img: "/products/health.webp"
    },
    {
        id: 8,
        name: "Stationery",
        slug: "stationery",
        img: "/products/stationery.webp"
    }
];
const subcategories = [
    /* =========================
     🛒 GROCERIES (category_id: 1)
  ========================= */ {
        id: 101,
        category_id: 1,
        name: "Fruits & Vegetables",
        slug: "fruits-vegetables",
        img: "/fruit.webp"
    },
    {
        id: 102,
        category_id: 1,
        name: "Dairy & Bakery",
        slug: "dairy-bakery",
        img: "/bakery.webp"
    },
    {
        id: 103,
        category_id: 1,
        name: "Staples (Atta, Rice, Dal & Oil)",
        slug: "staples-atta-rice-dal-oil",
        img: "/oil.webp"
    },
    {
        id: 104,
        category_id: 1,
        name: "Snacks & Branded Foods",
        slug: "snacks-branded-foods",
        img: "/bakery.webp"
    },
    {
        id: 105,
        category_id: 1,
        name: "Sweets, Dry Fruits & Dates",
        slug: "sweets-dry-fruits-dates",
        img: "/pick.webp"
    },
    {
        id: 106,
        category_id: 1,
        name: "Frozen & Ready Foods",
        slug: "frozen-ready-foods",
        img: "/frozen.webp"
    },
    /* =========================
     🥤 BEVERAGES (category_id: 2)
  ========================= */ {
        id: 201,
        category_id: 2,
        name: "Soft Drinks & Juices",
        slug: "soft-drinks-juices",
        img: "/drink.webp"
    },
    {
        id: 202,
        category_id: 2,
        name: "Tea, Coffee & Health Drinks",
        slug: "tea-coffee-health-drinks",
        img: "/tea.webp"
    },
    /* =========================
     👶 BABY CARE (category_id: 3)
  ========================= */ {
        id: 301,
        category_id: 3,
        name: "Baby Food",
        slug: "baby-food",
        img: "/baby.webp"
    },
    {
        id: 302,
        category_id: 3,
        name: "Diapers & Wipes",
        slug: "diapers-wipes",
        img: "/nuna.webp"
    },
    {
        id: 303,
        category_id: 3,
        name: "Baby Bath & Skin Care",
        slug: "baby-bath-skin-care",
        img: "/babycream.jpeg"
    },
    {
        id: 304,
        category_id: 3,
        name: "Baby Feeding Essentials",
        slug: "baby-feeding-essentials",
        img: "/babyfeeding.webp"
    },
    /* =========================
     💄 PERSONAL CARE (category_id: 4)
  ========================= */ {
        id: 401,
        category_id: 4,
        name: "Bath & Body",
        slug: "bath-body",
        img: "/bath.webp.jpeg"
    },
    {
        id: 402,
        category_id: 4,
        name: "Hair Care",
        slug: "hair-care",
        img: "/shampoo.jpg"
    },
    {
        id: 403,
        category_id: 4,
        name: "Oral Care",
        slug: "oral-care",
        img: "/oralcare.webp"
    },
    {
        id: 404,
        category_id: 4,
        name: "Skin Care",
        slug: "skin-care",
        img: "/nivea.webp"
    },
    {
        id: 405,
        category_id: 4,
        name: "Grooming & Hygiene",
        slug: "grooming-hygiene",
        img: "/groom.webp"
    },
    /* =========================
     🏠 HOME & KITCHEN (category_id: 5)
  ========================= */ {
        id: 501,
        category_id: 5,
        name: "Kitchen & Dining",
        slug: "kitchen-dining",
        img: "/cutlery.webp"
    },
    {
        id: 502,
        category_id: 5,
        name: "Household Essentials",
        slug: "household-essentials",
        img: "/cleaner.webp"
    },
    {
        id: 503,
        category_id: 5,
        name: "Home Appliances",
        slug: "home-appliances",
        img: "/products/device.webp"
    },
    // Extra (still JioMart-style and useful)
    {
        id: 504,
        category_id: 5,
        name: "Storage & Containers",
        slug: "storage-containers",
        img: "/storage.webp"
    },
    {
        id: 505,
        category_id: 5,
        name: "Cleaning Supplies",
        slug: "cleaning-supplies",
        img: "/products/cleaning.webp"
    },
    {
        id: 506,
        category_id: 5,
        name: "Laundry Essentials",
        slug: "laundry-essentials",
        img: "/laundry.webp"
    },
    /* =========================
     👕 FASHION (category_id: 6)
  ========================= */ {
        id: 601,
        category_id: 6,
        name: "Men’s Clothing",
        slug: "mens-clothing",
        img: "/products/baby.webp"
    },
    {
        id: 602,
        category_id: 6,
        name: "Women’s Clothing",
        slug: "womens-clothing",
        img: "/products/beauty.webp"
    },
    {
        id: 603,
        category_id: 6,
        name: "Kids Wear",
        slug: "kids-wear",
        img: "/products/baby.webp"
    },
    {
        id: 604,
        category_id: 6,
        name: "Footwear",
        slug: "footwear",
        img: "/products/health.webp"
    },
    {
        id: 605,
        category_id: 6,
        name: "Innerwear",
        slug: "innerwear",
        img: "/products/men.webp"
    },
    /* =========================
     🔌 DAILY ELECTRONICS (category_id: 7)
     (no mobiles/phones)
  ========================= */ {
        id: 701,
        category_id: 7,
        name: "LED Bulbs & Lights",
        slug: "led-bulbs-lights",
        img: "/decor.webp"
    },
    {
        id: 702,
        category_id: 7,
        name: "Extension Boards & Plugs",
        slug: "extension-boards-plugs",
        img: "/products/device.webp"
    },
    {
        id: 703,
        category_id: 7,
        name: "Chargers & Adapters",
        slug: "chargers-adapters",
        img: "/products/device.webp"
    },
    {
        id: 704,
        category_id: 7,
        name: "Batteries & Cells",
        slug: "batteries-cells",
        img: "/products/health.webp"
    },
    {
        id: 705,
        category_id: 7,
        name: "Emergency Lights",
        slug: "emergency-lights",
        img: "/decor.webp"
    },
    {
        id: 706,
        category_id: 7,
        name: "Switches & Electricals",
        slug: "switches-electricals",
        img: "/products/device.webp"
    },
    /* =========================
     ✏️ STATIONERY (category_id: 8)
  ========================= */ {
        id: 801,
        category_id: 8,
        name: "Notebooks & Registers",
        slug: "notebooks-registers",
        img: "/products/stationery.webp"
    },
    {
        id: 802,
        category_id: 8,
        name: "Pens & Writing",
        slug: "pens-writing",
        img: "/products/stationery.webp"
    },
    {
        id: 803,
        category_id: 8,
        name: "School Supplies",
        slug: "school-supplies",
        img: "/products/stationery.webp"
    },
    {
        id: 804,
        category_id: 8,
        name: "Office Supplies",
        slug: "office-supplies",
        img: "/products/stationery.webp"
    },
    {
        id: 805,
        category_id: 8,
        name: "Art & Craft",
        slug: "art-craft",
        img: "/products/stationery.webp"
    }
];
const subsubcategories = [
    /* =========================
     🥤 BEVERAGES → Soft Drinks & Juices (subcategory_id: 201)
  ========================= */ {
        id: 10101,
        subcategory_id: 101,
        name: "Bananas",
        slug: "bananas"
    },
    {
        id: 20101,
        subcategory_id: 201,
        name: "Cola & Soda",
        slug: "cola-soda"
    },
    {
        id: 20102,
        subcategory_id: 201,
        name: "Juices",
        slug: "juices"
    },
    {
        id: 20103,
        subcategory_id: 201,
        name: "Energy Drinks",
        slug: "energy-drinks"
    },
    {
        id: 20104,
        subcategory_id: 201,
        name: "Flavoured Water",
        slug: "flavoured-water"
    },
    {
        id: 20105,
        subcategory_id: 201,
        name: "Mixers & Tonic",
        slug: "mixers-tonic"
    },
    /* =========================
     🥤 BEVERAGES → Tea, Coffee & Health Drinks (subcategory_id: 202)
     (your example becomes REAL here)
  ========================= */ {
        id: 20201,
        subcategory_id: 202,
        name: "Instant Coffee",
        slug: "instant-coffee"
    },
    {
        id: 20202,
        subcategory_id: 202,
        name: "Ground Coffee",
        slug: "ground-coffee"
    },
    {
        id: 20203,
        subcategory_id: 202,
        name: "Coffee Beans",
        slug: "coffee-beans"
    },
    {
        id: 20204,
        subcategory_id: 202,
        name: "Tea Bags",
        slug: "tea-bags"
    },
    {
        id: 20205,
        subcategory_id: 202,
        name: "Green Tea",
        slug: "green-tea"
    },
    {
        id: 20206,
        subcategory_id: 202,
        name: "Herbal & Exotic Tea",
        slug: "herbal-exotic-tea"
    },
    {
        id: 20207,
        subcategory_id: 202,
        name: "Gourmet / Premium Tea",
        slug: "gourmet-premium-tea"
    },
    {
        id: 20208,
        subcategory_id: 202,
        name: "Health Drinks",
        slug: "health-drinks"
    },
    /* =========================
     👶 BABY CARE
  ========================= */ {
        id: 30101,
        subcategory_id: 301,
        name: "Cereals & Purees",
        slug: "cereals-purees"
    },
    {
        id: 30102,
        subcategory_id: 301,
        name: "Formula",
        slug: "formula"
    },
    {
        id: 30103,
        subcategory_id: 301,
        name: "Snacks for Babies",
        slug: "baby-snacks"
    },
    {
        id: 30201,
        subcategory_id: 302,
        name: "Tape Diapers",
        slug: "tape-diapers"
    },
    {
        id: 30202,
        subcategory_id: 302,
        name: "Pants Diapers",
        slug: "pants-diapers"
    },
    {
        id: 30203,
        subcategory_id: 302,
        name: "Baby Wipes",
        slug: "baby-wipes"
    },
    {
        id: 30204,
        subcategory_id: 302,
        name: "Diaper Rash Cream",
        slug: "diaper-rash-cream"
    },
    {
        id: 30301,
        subcategory_id: 303,
        name: "Baby Soap & Wash",
        slug: "baby-soap-wash"
    },
    {
        id: 30302,
        subcategory_id: 303,
        name: "Baby Shampoo",
        slug: "baby-shampoo"
    },
    {
        id: 30303,
        subcategory_id: 303,
        name: "Baby Lotion & Oil",
        slug: "baby-lotion-oil"
    },
    {
        id: 30401,
        subcategory_id: 304,
        name: "Bottles",
        slug: "bottles"
    },
    {
        id: 30402,
        subcategory_id: 304,
        name: "Feeding Accessories",
        slug: "feeding-accessories"
    },
    {
        id: 30403,
        subcategory_id: 304,
        name: "Sippers & Cups",
        slug: "sippers-cups"
    },
    /* =========================
     💄 PERSONAL CARE
  ========================= */ {
        id: 40101,
        subcategory_id: 401,
        name: "Soaps",
        slug: "soaps"
    },
    {
        id: 40102,
        subcategory_id: 401,
        name: "Body Wash",
        slug: "body-wash"
    },
    {
        id: 40103,
        subcategory_id: 401,
        name: "Deodorants",
        slug: "deodorants"
    },
    {
        id: 40201,
        subcategory_id: 402,
        name: "Shampoo",
        slug: "shampoo"
    },
    {
        id: 40202,
        subcategory_id: 402,
        name: "Conditioner",
        slug: "conditioner"
    },
    {
        id: 40203,
        subcategory_id: 402,
        name: "Hair Oil",
        slug: "hair-oil"
    },
    {
        id: 40301,
        subcategory_id: 403,
        name: "Toothpaste",
        slug: "toothpaste"
    },
    {
        id: 40302,
        subcategory_id: 403,
        name: "Toothbrushes",
        slug: "toothbrushes"
    },
    {
        id: 40303,
        subcategory_id: 403,
        name: "Mouthwash",
        slug: "mouthwash"
    },
    {
        id: 40401,
        subcategory_id: 404,
        name: "Face Wash",
        slug: "face-wash"
    },
    {
        id: 40402,
        subcategory_id: 404,
        name: "Moisturisers",
        slug: "moisturisers"
    },
    {
        id: 40403,
        subcategory_id: 404,
        name: "Sunscreen",
        slug: "sunscreen"
    },
    {
        id: 40501,
        subcategory_id: 405,
        name: "Sanitary & Hygiene",
        slug: "sanitary-hygiene"
    },
    {
        id: 40502,
        subcategory_id: 405,
        name: "Shaving & Grooming",
        slug: "shaving-grooming"
    },
    {
        id: 40503,
        subcategory_id: 405,
        name: "Hand Wash & Sanitiser",
        slug: "handwash-sanitiser"
    },
    /* =========================
     🏠 HOME & KITCHEN
  ========================= */ {
        id: 50101,
        subcategory_id: 501,
        name: "Cookware",
        slug: "cookware"
    },
    {
        id: 50102,
        subcategory_id: 501,
        name: "Dinnerware",
        slug: "dinnerware"
    },
    {
        id: 50103,
        subcategory_id: 501,
        name: "Kitchen Tools",
        slug: "kitchen-tools"
    },
    {
        id: 50201,
        subcategory_id: 502,
        name: "Cleaning Liquids",
        slug: "cleaning-liquids"
    },
    {
        id: 50202,
        subcategory_id: 502,
        name: "Tissues & Wipes",
        slug: "tissues-wipes"
    },
    {
        id: 50203,
        subcategory_id: 502,
        name: "Garbage Bags",
        slug: "garbage-bags"
    },
    {
        id: 50301,
        subcategory_id: 503,
        name: "Small Appliances",
        slug: "small-appliances"
    },
    {
        id: 50302,
        subcategory_id: 503,
        name: "Irons",
        slug: "irons"
    },
    {
        id: 50303,
        subcategory_id: 503,
        name: "Kettles",
        slug: "kettles"
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
            "rice"
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
            "cooking-oil"
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
            "bananas"
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
            "biscuits"
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
        url: "/.webp",
        is_primary: true
    },
    {
        id: 2,
        product_id: 1,
        url: "/products/alfanar-2.webp",
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
}),
"[project]/app/subcategory/[slug]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubcategoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
/** ===== helpers ===== */ function money(n) {
    return `₹${Number(n ?? 0).toFixed(0)}`;
}
function getPrimaryImageUrl(productId) {
    const primary = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productImages"].find((img)=>img.product_id === productId && img.is_primary);
    const any = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productImages"].find((img)=>img.product_id === productId);
    return primary?.url || any?.url || "/example.png";
}
function getBestVariant(productId, basePrice) {
    const vars = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productVariants"].filter((v)=>v.product_id === productId);
    if (vars.length === 0) {
        return {
            price: basePrice ?? 0,
            mrp: null,
            label: ""
        };
    }
    const best = vars.reduce((min, v)=>v.price < min.price ? v : min, vars[0]);
    return {
        price: best.price,
        mrp: best.mrp ?? null,
        label: best.label ?? ""
    };
}
function SubcategoryPage() {
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const currentSub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subcategories"].find((s)=>s.slug === slug), [
        slug
    ]);
    if (!currentSub) {
        // client page: simple fallback
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-white p-6 text-black",
            children: "Subcategory not found."
        }, void 0, false, {
            fileName: "[project]/app/subcategory/[slug]/page.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    }
    // ✅ Sub-subcategories under this subcategory
    const ssList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subsubcategories"] ?? []).filter((x)=>x.subcategory_id === currentSub.id), [
        currentSub.id
    ]);
    // selected sub-subcategory slug (null = All)
    const [activeSS, setActiveSS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Products in this subcategory
    const baseList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.subcategory_id === currentSub.id), [
        currentSub.id
    ]);
    // ✅ Filtered products (only show items from chosen sub-subcategory)
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!activeSS) return baseList; // All
        return baseList.filter((p)=>(p.tags ?? []).includes(activeSS));
    }, [
        activeSS,
        baseList
    ]);
    // Optional: title (JioMart shows "Search Results" often; you can keep subcategory name)
    const titleText = activeSS ? ssList.find((x)=>x.slug === activeSS)?.name ?? currentSub.name : currentSub.name;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#F4F6F8]",
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
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 h-10 rounded-full bg-[#0A5F91] px-4 flex items-center text-white/90 text-sm",
                                children: "🔎 Search JioMart"
                            }, void 0, false, {
                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/cart",
                                className: "relative h-10 w-10 grid place-items-center rounded-full bg-[#0A5F91] text-white",
                                children: [
                                    "🛒",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-1 -right-1 bg-red-500 text-[10px] px-1.5 rounded-full",
                                        children: "8"
                                    }, void 0, false, {
                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                        lineNumber: 84,
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
                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 16
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500",
                                    children: "▾"
                                }, void 0, false, {
                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 67
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white border-b",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-md px-4 py-3 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-gray-900",
                                children: titleText
                            }, void 0, false, {
                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "h-9 px-3 rounded-full border text-sm bg-white flex items-center gap-2",
                                        children: "↕ Sort"
                                    }, void 0, false, {
                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "h-9 px-3 rounded-full border text-sm bg-white flex items-center gap-2",
                                        children: "⚙ Filter"
                                    }, void 0, false, {
                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-md px-4 pb-3 flex gap-2 overflow-x-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "h-8 px-3 rounded-full bg-gray-100 text-xs whitespace-nowrap flex items-center gap-2",
                                children: "↕ By Popularity ▾"
                            }, void 0, false, {
                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "h-8 px-3 rounded-full bg-gray-100 text-xs whitespace-nowrap",
                                children: "Brands ▾"
                            }, void 0, false, {
                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "h-8 px-3 rounded-full bg-gray-100 text-xs whitespace-nowrap",
                                children: "Filters ▾"
                            }, void 0, false, {
                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-md grid grid-cols-[96px_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "bg-white border-r",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveSS(null),
                                className: `w-full block px-2 py-3 border-l-4 ${activeSS === null ? "border-[#0B6EA9] bg-[#EAF4FB]" : "border-transparent"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 mx-auto rounded-xl bg-gray-100 overflow-hidden grid place-items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-extrabold text-gray-700",
                                            children: "All"
                                        }, void 0, false, {
                                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `mt-2 text-[11px] text-center ${activeSS === null ? "text-[#0B6EA9] font-semibold" : "text-gray-700"}`,
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            ssList.map((ss)=>{
                                const isActive = activeSS === ss.slug;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveSS(ss.slug),
                                    className: `w-full block px-2 py-3 border-l-4 ${isActive ? "border-[#0B6EA9] bg-[#EAF4FB]" : "border-transparent"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 mx-auto rounded-xl bg-gray-100 overflow-hidden grid place-items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold text-gray-700 text-center px-1 leading-tight",
                                                children: ss.name?.split(" ").slice(0, 2).join(" ")
                                            }, void 0, false, {
                                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `mt-2 text-[11px] leading-tight text-center ${isActive ? "text-[#0B6EA9] font-semibold" : "text-gray-700"}`,
                                            children: ss.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, ss.id, true, {
                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                filtered.map((p)=>{
                                    const imgUrl = getPrimaryImageUrl(p.id);
                                    const { price, mrp, label } = getBestVariant(p.id, p.base_price);
                                    const offPct = mrp && price ? Math.round((mrp - price) / mrp * 100) : null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl shadow-sm border overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative p-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "absolute right-2 top-2 w-8 h-8 rounded-full bg-white shadow grid place-items-center text-gray-500",
                                                        children: "♡"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, this),
                                                    label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute right-2 bottom-2 text-[10px] px-2 py-0.5 rounded-full bg-black/70 text-white",
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 23
                                                    }, this) : null,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/product/${p.slug}`,
                                                        className: "block",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: imgUrl,
                                                            alt: p.name,
                                                            width: 220,
                                                            height: 220,
                                                            className: "mx-auto h-28 w-auto object-contain"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 pb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[12px] text-gray-900 line-clamp-2 min-h-[34px]",
                                                        children: p.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-1 flex items-end gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[14px] font-extrabold text-gray-900",
                                                                children: money(price)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 23
                                                            }, this),
                                                            mrp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-gray-400 line-through",
                                                                children: money(mrp)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 30
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 21
                                                    }, this),
                                                    offPct ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[12px] font-semibold text-red-600",
                                                        children: [
                                                            offPct,
                                                            "% Off"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-[18px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "mt-2 w-full h-10 rounded-xl border-2 border-[#0B6EA9] text-[#0B6EA9] font-bold flex items-center justify-center gap-2",
                                                        children: [
                                                            "Add ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xl leading-none",
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 h-7 rounded-lg bg-[#E8F5EE] text-[#0F8A4B] text-xs font-semibold grid place-items-center",
                                                        children: "⚡ Quick"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this);
                                }),
                                filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2 bg-white rounded-2xl border p-4 text-sm text-gray-600",
                                    children: [
                                        "No products found in this section.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-xs text-gray-500",
                                            children: [
                                                "(Make sure products have ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: "subsub_slug"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 44
                                                }, this),
                                                " or ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: "subsub_id"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 72
                                                }, this),
                                                ".)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/subcategory/[slug]/page.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sticky bottom-0 bg-white border-t",
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
                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                            lineNumber: 248,
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
                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/wishlist",
                            className: "grid place-items-center gap-1",
                            children: [
                                "♡",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Wishlist"
                                }, void 0, false, {
                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                    lineNumber: 255,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                            lineNumber: 254,
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
                                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/subcategory/[slug]/page.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/subcategory/[slug]/page.tsx",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/subcategory/[slug]/page.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/subcategory/[slug]/page.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5c9dfd49._.js.map