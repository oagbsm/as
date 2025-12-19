module.exports = [
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
"[project]/lib/localOrders.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCredit",
    ()=>addCredit,
    "clearCreditLedger",
    ()=>clearCreditLedger,
    "clearLocalOrders",
    ()=>clearLocalOrders,
    "payCredit",
    ()=>payCredit,
    "readCreditLedger",
    ()=>readCreditLedger,
    "readLocalOrders",
    ()=>readLocalOrders,
    "saveLocalOrder",
    ()=>saveLocalOrder,
    "totalCreditDue",
    ()=>totalCreditDue,
    "updateLocalOrder",
    ()=>updateLocalOrder,
    "writeCreditLedger",
    ()=>writeCreditLedger,
    "writeLocalOrders",
    ()=>writeLocalOrders
]);
const ORDERS_KEY = "local_orders_v2";
const CREDIT_KEY = "credit_ledger_v1";
function readLocalOrders() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function writeLocalOrders(orders) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function saveLocalOrder(order) {
    const all = readLocalOrders();
    all.unshift(order);
    writeLocalOrders(all);
}
function updateLocalOrder(orderId, patch) {
    const all = readLocalOrders();
    const idx = all.findIndex((o)=>o.id === orderId);
    if (idx === -1) return;
    all[idx] = {
        ...all[idx],
        ...patch
    };
    writeLocalOrders(all);
}
function clearLocalOrders() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function readCreditLedger() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function writeCreditLedger(rows) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function addCredit(customer, amount) {
    const rows = readCreditLedger();
    const idx = rows.findIndex((r)=>r.customerId === customer.id);
    const now = new Date().toISOString();
    if (idx === -1) {
        rows.unshift({
            customerId: customer.id,
            name: customer.name,
            phone: customer.phone,
            outstanding: Number(amount || 0),
            lastOrderAt: now
        });
    } else {
        rows[idx] = {
            ...rows[idx],
            outstanding: Number(rows[idx].outstanding || 0) + Number(amount || 0),
            lastOrderAt: now
        };
    }
    writeCreditLedger(rows);
}
function payCredit(customerId, amount) {
    const rows = readCreditLedger();
    const idx = rows.findIndex((r)=>r.customerId === customerId);
    if (idx === -1) return;
    const newOutstanding = Math.max(0, Number(rows[idx].outstanding || 0) - Number(amount || 0));
    rows[idx] = {
        ...rows[idx],
        outstanding: newOutstanding
    };
    writeCreditLedger(rows);
}
function totalCreditDue() {
    return readCreditLedger().reduce((sum, r)=>sum + Number(r.outstanding || 0), 0);
}
function clearCreditLedger() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/lib/payments.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearPayments",
    ()=>clearPayments,
    "readPayments",
    ()=>readPayments,
    "recordPayment",
    ()=>recordPayment,
    "writePayments",
    ()=>writePayments
]);
const KEY = "payments_ledger_v1";
function readPayments() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function writePayments(rows) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function recordPayment(p) {
    const rows = readPayments();
    rows.unshift({
        id: `PAY-${Date.now()}`,
        createdAt: new Date().toISOString(),
        ...p,
        amount: Number(p.amount || 0)
    });
    writePayments(rows);
}
function clearPayments() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/app/cart/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/TopNavbar'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/CartContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$OrderModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/OrderModeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$localOrders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/localOrders.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$payments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/payments.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function formatGBP(n) {
    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(Number(n || 0));
}
function getVariantLabel(variantId) {
    if (variantId == null) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productVariants"].find((v)=>v.id === variantId)?.label ?? null;
}
function getVariantPrice(productId, variantId, basePrice) {
    if (variantId == null) return Number(basePrice ?? 0);
    const v = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productVariants"].find((vv)=>vv.product_id === productId && vv.id === variantId);
    return Number(v?.price ?? basePrice ?? 0);
}
function getVariantImageUrl(productId, variantId) {
    // optional: if you later add variant_id to productImages, this will work automatically
    if (variantId != null) {
        const img = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productImages"].find((im)=>im.product_id === productId && im.variant_id === variantId)?.url;
        if (img) return img;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productImages"].find((im)=>im.product_id === productId && im.is_primary)?.url || __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["productImages"].find((im)=>im.product_id === productId)?.url || "/example.png";
}
const PRIMARY_METHODS = [
    "EVC",
    "MERCHANT",
    "EDAHAB"
];
const MORE_METHODS = [
    "PREMIER_WALLET",
    "AMTEL"
];
function labelPM(m) {
    if (m === "EVC") return "EVC";
    if (m === "MERCHANT") return "Merchant";
    if (m === "EDAHAB") return "E-Dahab";
    if (m === "PREMIER_WALLET") return "Premier Wallet";
    return "Amtel";
}
function CartPage() {
    const { mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$OrderModeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOrderMode"])();
    // IMPORTANT:
    // This cart page expects variant-safe cart items and functions:
    // items: { productId, variantId, qty }[]
    // setQty(productId, variantId, qty)
    // removeItem(productId, variantId)
    const { items, setQty, removeItem, clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const cartItems = Array.isArray(items) ? items : [];
    // Local order fields
    const [customerQuery, setCustomerQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCustomer, setSelectedCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Local minimart order (test)");
    const [isCredit, setIsCredit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("EVC");
    const [showMorePayments, setShowMorePayments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savedMsg, setSavedMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [creditDue, setCreditDue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // ✅ reset local-only state when switching to ONLINE (clean UX)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mode === "online") {
            setCustomerQuery("");
            setSelectedCustomer(null);
            setNote("");
            setIsCredit(false);
            setPaymentMethod("EVC");
            setShowMorePayments(false);
            setSavedMsg(null);
            setCreditDue(0);
        } else {
            setCreditDue((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$localOrders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["totalCreditDue"])());
            if (!note) setNote("Local minimart order (test)");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        mode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mode === "local") setCreditDue((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$localOrders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["totalCreditDue"])());
    }, [
        mode,
        savedMsg
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!savedMsg) return;
        const t = setTimeout(()=>setSavedMsg(null), 1500);
        return ()=>clearTimeout(t);
    }, [
        savedMsg
    ]);
    const suggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (mode !== "local") return [];
        const q = customerQuery.trim().toLowerCase();
        if (!q) return [];
        return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customers"].filter((c)=>{
            const name = (c.name ?? "").toLowerCase();
            const phone = String(c.phone ?? "").toLowerCase();
            return name.includes(q) || phone.includes(q);
        }).slice(0, 8);
    }, [
        mode,
        customerQuery
    ]);
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return cartItems.map((ci)=>{
            const p = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].find((x)=>x.id === ci.productId);
            if (!p) return null;
            const basePrice = Number(p?.base_price ?? 0);
            const price = getVariantPrice(ci.productId, ci.variantId ?? null, basePrice);
            const vLabel = getVariantLabel(ci.variantId ?? null);
            const name = vLabel ? `${p.name} (${vLabel})` : p.name;
            const img = getVariantImageUrl(ci.productId, ci.variantId ?? null);
            const qty = Number(ci.qty ?? 1);
            return {
                ci,
                name,
                img,
                price,
                qty,
                lineTotal: price * qty,
                key: `${ci.productId}-${ci.variantId ?? "base"}`
            };
        }).filter(Boolean);
    }, [
        cartItems
    ]);
    const subtotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>rows.reduce((sum, r)=>sum + (r?.lineTotal ?? 0), 0), [
        rows
    ]);
    const deliveryFee = mode === "local" ? 0 : subtotal > 0 ? 1.99 : 0;
    const total = subtotal + deliveryFee;
    const canCheckout = rows.length > 0;
    async function checkoutLocal() {
        if (!canCheckout) return;
        if (isCredit && !selectedCustomer) {
            alert("Select a customer for credit orders (name/phone).");
            return;
        }
        const order = {
            id: `LO-${Date.now()}`,
            createdAt: new Date().toISOString(),
            channel: "local",
            customer: selectedCustomer,
            note: note?.trim() || undefined,
            subtotal,
            deliveryFee,
            total,
            isCredit,
            isPaid: !isCredit,
            paymentMethod: isCredit ? null : paymentMethod,
            items: rows.map((r)=>({
                    productId: r.ci.productId,
                    variantId: r.ci.variantId ?? null,
                    qty: r.qty,
                    unitPrice: r.price,
                    lineTotal: r.lineTotal,
                    name: r.name
                }))
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$localOrders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveLocalOrder"])(order);
        if (isCredit && selectedCustomer) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$localOrders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addCredit"])(selectedCustomer, total);
            setSavedMsg("✅ Credit order saved");
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$payments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recordPayment"])({
                source: "SALE",
                method: paymentMethod,
                amount: total,
                orderId: order.id,
                customer: selectedCustomer ?? undefined,
                note: "Local paid sale"
            });
            setSavedMsg("✅ Paid order saved");
        }
        clearCart();
        setCustomerQuery("");
        setSelectedCustomer(null);
        setIsCredit(false);
        setPaymentMethod("EVC");
        setShowMorePayments(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TopNavbar, {
                showBack: true,
                backHref: "/",
                locationText: "Mini-mart / Delivery"
            }, void 0, false, {
                fileName: "[project]/app/cart/page.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            mode === "local" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 pt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border rounded-2xl p-4 bg-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border bg-[#FFF7ED] px-3 py-2 text-sm flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-orange-800",
                                    children: "Credits due"
                                }, void 0, false, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-extrabold text-orange-900",
                                    children: formatGBP(creditDue)
                                }, void 0, false, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cart/page.tsx",
                            lineNumber: 240,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-gray-600",
                                            children: "Customer (type name or phone)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: selectedCustomer ? `${selectedCustomer.name} • ${selectedCustomer.phone}` : customerQuery,
                                            onChange: (e)=>{
                                                setSelectedCustomer(null);
                                                setCustomerQuery(e.target.value);
                                            },
                                            placeholder: "e.g. Hodan / 0622",
                                            className: "mt-1 w-full border rounded-xl px-3 py-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this),
                                        !selectedCustomer && suggestions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute z-30 mt-2 w-full border bg-white rounded-xl shadow overflow-hidden",
                                            children: suggestions.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setSelectedCustomer(c);
                                                        setCustomerQuery("");
                                                    },
                                                    className: "w-full px-3 py-2 text-left hover:bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-semibold",
                                                            children: c.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cart/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-600",
                                                            children: c.phone
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cart/page.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, c.id, true, {
                                                    fileName: "[project]/app/cart/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 19
                                        }, this) : null,
                                        selectedCustomer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setSelectedCustomer(null);
                                                setCustomerQuery("");
                                            },
                                            className: "mt-2 text-xs text-blue-600 hover:underline",
                                            children: "Change customer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-xs text-gray-500",
                                            children: "Optional: walk-in (not for credit)."
                                        }, void 0, false, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-gray-600",
                                            children: "Staff note (optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 296,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: note,
                                            onChange: (e)=>setNote(e.target.value),
                                            className: "mt-1 w-full border rounded-xl px-3 py-2",
                                            placeholder: "e.g. delivery later"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this),
                                        savedMsg ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-xs text-green-700 font-semibold",
                                            children: savedMsg
                                        }, void 0, false, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 304,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2 flex items-center justify-between border rounded-xl px-3 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold",
                                                    children: "Credit"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cart/page.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-600",
                                                    children: "Tick if customer pays later (requires customer selected)."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cart/page.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsCredit((v)=>!v),
                                            className: `h-9 px-4 rounded-full border text-sm font-semibold ${isCredit ? "border-red-600 bg-red-50 text-red-700" : "bg-white"}`,
                                            children: isCredit ? "Credit: ON" : "Credit: OFF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this),
                                !isCredit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-600 mb-2",
                                            children: "Payment method"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 328,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                PRIMARY_METHODS.map((m)=>{
                                                    const active = paymentMethod === m;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setPaymentMethod(m),
                                                        className: `h-9 px-4 rounded-full border text-sm font-semibold ${active ? "border-[#0B6EA9] bg-[#EAF4FB] text-[#0B6EA9]" : "bg-white"}`,
                                                        children: labelPM(m)
                                                    }, m, false, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 25
                                                    }, this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowMorePayments((v)=>!v),
                                                    className: "h-9 px-4 rounded-full border text-sm font-semibold bg-white",
                                                    children: showMorePayments ? "Show less" : "Show more"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cart/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 21
                                                }, this),
                                                showMorePayments ? MORE_METHODS.map((m)=>{
                                                    const active = paymentMethod === m;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setPaymentMethod(m),
                                                        className: `h-9 px-4 rounded-full border text-sm font-semibold ${active ? "border-[#0B6EA9] bg-[#EAF4FB] text-[#0B6EA9]" : "bg-white"}`,
                                                        children: labelPM(m)
                                                    }, m, false, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 29
                                                    }, this);
                                                }) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 327,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cart/page.tsx",
                            lineNumber: 245,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-wrap gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/orders",
                                    className: "h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50",
                                    children: "Orders"
                                }, void 0, false, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/payments",
                                    className: "h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50",
                                    children: "Payments"
                                }, void 0, false, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 382,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/credits",
                                    className: "h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50",
                                    children: "Credits"
                                }, void 0, false, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cart/page.tsx",
                            lineNumber: 375,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cart/page.tsx",
                    lineNumber: 239,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cart/page.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[1.6fr_0.9fr] gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-white",
                        children: rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border rounded-2xl p-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold",
                                    children: "Your cart is empty"
                                }, void 0, false, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 mt-1",
                                    children: "Add items to checkout."
                                }, void 0, false, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 405,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "inline-flex mt-5 px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold",
                                    children: "Start shopping"
                                }, void 0, false, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 406,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cart/page.tsx",
                            lineNumber: 403,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                rows.map(({ ci, name, price, img, qty, lineTotal, key })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border rounded-2xl p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-20 h-20 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: img,
                                                        alt: name ?? "Product",
                                                        width: 120,
                                                        height: 120,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cart/page.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cart/page.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-semibold truncate",
                                                                            children: name ?? "Item"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cart/page.tsx",
                                                                            lineNumber: 431,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-600 mt-0.5",
                                                                            children: formatGBP(price)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cart/page.tsx",
                                                                            lineNumber: 432,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cart/page.tsx",
                                                                    lineNumber: 430,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeItem(ci.productId, ci.variantId ?? null),
                                                                    className: "p-2 rounded-xl hover:bg-gray-50 text-sm text-gray-700",
                                                                    "aria-label": "Remove item",
                                                                    children: "✕"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cart/page.tsx",
                                                                    lineNumber: 435,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cart/page.tsx",
                                                            lineNumber: 429,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inline-flex items-center border rounded-full overflow-hidden",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setQty(ci.productId, ci.variantId ?? null, Math.max(1, qty - 1)),
                                                                            className: "px-4 py-2 hover:bg-gray-50",
                                                                            children: "−"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cart/page.tsx",
                                                                            lineNumber: 446,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "px-4 py-2 text-sm font-semibold",
                                                                            children: qty
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cart/page.tsx",
                                                                            lineNumber: 454,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setQty(ci.productId, ci.variantId ?? null, qty + 1),
                                                                            className: "px-4 py-2 hover:bg-gray-50",
                                                                            children: "+"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cart/page.tsx",
                                                                            lineNumber: 455,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cart/page.tsx",
                                                                    lineNumber: 445,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold",
                                                                    children: formatGBP(lineTotal)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cart/page.tsx",
                                                                    lineNumber: 463,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cart/page.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cart/page.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, this)
                                    }, key, false, {
                                        fileName: "[project]/app/cart/page.tsx",
                                        lineNumber: 416,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: clearCart,
                                        className: "text-sm font-semibold text-red-600 hover:underline",
                                        children: "Clear cart"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cart/page.tsx",
                                        lineNumber: 471,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 470,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cart/page.tsx",
                            lineNumber: 414,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cart/page.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border rounded-2xl p-5 sticky top-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-sm text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base",
                                            children: "🧾"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 485,
                                            columnNumber: 15
                                        }, this),
                                        " Summary"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 484,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: "Subtotal"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cart/page.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: formatGBP(subtotal)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cart/page.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 489,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: "Delivery"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cart/page.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: formatGBP(deliveryFee)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cart/page.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 493,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t pt-3 flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cart/page.tsx",
                                                    lineNumber: 498,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: formatGBP(total)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cart/page.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cart/page.tsx",
                                            lineNumber: 497,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 13
                                }, this),
                                mode === "local" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: checkoutLocal,
                                    disabled: !canCheckout,
                                    className: `mt-5 inline-flex w-full justify-center rounded-full py-3 text-sm font-semibold ${!canCheckout ? "bg-gray-200 text-gray-500" : "bg-blue-600 text-white hover:opacity-95"}`,
                                    children: isCredit ? "Save Credit Order" : `Checkout (Paid: ${labelPM(paymentMethod)})`
                                }, void 0, false, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 504,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/checkout",
                                    className: `mt-5 inline-flex w-full justify-center rounded-full py-3 text-sm font-semibold ${!canCheckout ? "bg-gray-200 text-gray-500 pointer-events-none" : "bg-blue-600 text-white hover:opacity-95"}`,
                                    children: "Checkout (Online)"
                                }, void 0, false, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 514,
                                    columnNumber: 15
                                }, this),
                                mode === "local" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mt-3",
                                    children: "Local paid checkouts appear in Payments."
                                }, void 0, false, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 525,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 mt-3",
                                    children: "Online checkout uses your normal flow."
                                }, void 0, false, {
                                    fileName: "[project]/app/cart/page.tsx",
                                    lineNumber: 529,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cart/page.tsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cart/page.tsx",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cart/page.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cart/page.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_fdad33fd._.js.map