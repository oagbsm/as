(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LanguageToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function LanguageToggle() {
    _s();
    const { lang, setLang, ready } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    if (!ready) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1 rounded-full bg-[#0A5F91] p-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setLang("so"),
                className: `px-2 py-1 rounded-full text-[11px] font-extrabold transition ${lang === "so" ? "bg-white text-[#0B6EA9]" : "text-white/90"}`,
                "aria-label": "Somali",
                title: "Somali",
                children: "🇸🇴"
            }, void 0, false, {
                fileName: "[project]/components/LanguageToggle.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setLang("en"),
                className: `px-2 py-1 rounded-full text-[11px] font-extrabold transition ${lang === "en" ? "bg-white text-[#0B6EA9]" : "text-white/90"}`,
                "aria-label": "English",
                title: "English",
                children: "🇬🇧"
            }, void 0, false, {
                fileName: "[project]/components/LanguageToggle.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LanguageToggle.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(LanguageToggle, "wlKGsdadGCz2Muw891lPAMrkMpo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LanguageToggle;
var _c;
__turbopack_context__.k.register(_c, "LanguageToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopNavBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TopNavBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LanguageToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/LanguageContext.tsx [app-client] (ecmascript)");
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
;
const HERO_SLIDES = [
    {
        id: 1,
        img: "/hero1.webp"
    },
    {
        id: 2,
        img: "/hero2.webp"
    },
    {
        id: 3,
        img: "/hero3.webp"
    }
];
function money(n) {
    return `₹${Number(n ?? 0).toFixed(0)}`;
}
function getBestVariant(productId, basePrice) {
    const vars = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productVariants"].filter((v)=>v.product_id === productId);
    if (vars.length === 0) return {
        price: basePrice ?? 0
    };
    const best = vars.reduce((min, v)=>v.price < min.price ? v : min, vars[0]);
    return {
        price: best.price
    };
}
function PrimarySecondary({ primary, secondary, center = true, primaryClass = "text-[11px] font-medium", secondaryClass = "text-[9px] text-gray-500" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${center ? "text-center" : "text-left"} leading-tight`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: primaryClass,
                children: primary
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            secondary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: secondaryClass,
                children: secondary
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 47,
                columnNumber: 20
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = PrimarySecondary;
function HomePage() {
    _s();
    const sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const [activeSlide, setActiveSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { items } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const categoryMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomePage.useMemo[categoryMap]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map({
                "HomePage.useMemo[categoryMap]": (cat)=>({
                        ...cat,
                        subcats: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subcategories"].filter({
                            "HomePage.useMemo[categoryMap]": (sub)=>sub.category_id === cat.id
                        }["HomePage.useMemo[categoryMap]"])
                    })
            }["HomePage.useMemo[categoryMap]"]);
        }
    }["HomePage.useMemo[categoryMap]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const t = setInterval({
                "HomePage.useEffect.t": ()=>setActiveSlide({
                        "HomePage.useEffect.t": (s)=>(s + 1) % HERO_SLIDES.length
                    }["HomePage.useEffect.t"])
            }["HomePage.useEffect.t"], 3500);
            return ({
                "HomePage.useEffect": ()=>clearInterval(t)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    const scrollToCategory = (slug)=>{
        const el = sectionRefs.current[slug];
        el?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    const cartTotals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomePage.useMemo[cartTotals]": ()=>{
            let total = 0;
            let count = 0;
            for (const it of items ?? []){
                const p = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find({
                    "HomePage.useMemo[cartTotals].p": (x)=>x.id === it.productId
                }["HomePage.useMemo[cartTotals].p"]);
                if (!p) continue;
                const { price } = getBestVariant(p.id, p.base_price);
                total += price * it.qty;
                count += it.qty;
            }
            return {
                total,
                count
            };
        }
    }["HomePage.useMemo[cartTotals]"], [
        items
    ]);
    const locationText = lang === "en" ? "Deliver to: Mogadishu" : "Geynta: Muqdisho";
    const cartCtaPrimary = lang === "en" ? "Go to Cart →" : "U gudub Gaadhiga →";
    const cartCtaSecondary = lang === "en" ? "U gudub Gaadhiga" : "Go to Cart";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white text-black pb-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TopNavBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                locationText: locationText,
                rightSlot: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 102,
                    columnNumber: 20
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-b bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-md px-2 py-2 flex gap-4 overflow-x-auto",
                    children: categoryMap.map((cat)=>{
                        const primary = lang === "en" ? cat.name_en : cat.name_so;
                        const secondary = lang === "en" ? cat.name_so : cat.name_en;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>scrollToCategory(cat.slug),
                            className: "min-w-[78px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto h-14 w-14 rounded-full bg-blue-50 overflow-hidden flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: cat.img,
                                        alt: primary,
                                        width: 56,
                                        height: 56,
                                        className: "w-full h-full object-contain p-1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrimarySecondary, {
                                        primary: primary,
                                        secondary: secondary
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, cat.id, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 113,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white px-3 pt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden rounded-2xl h-[180px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex transition-transform duration-500",
                        style: {
                            transform: `translateX(-${activeSlide * 100}%)`
                        },
                        children: HERO_SLIDES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: s.img,
                                alt: "promo",
                                width: 400,
                                height: 180,
                                className: "flex-none w-full h-[180px] object-cover"
                            }, s.id, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white px-3 pb-10 pt-3",
                children: categoryMap.map((cat)=>{
                    const catPrimary = lang === "en" ? cat.name_en : cat.name_so;
                    const catSecondary = lang === "en" ? cat.name_so : cat.name_en;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            sectionRefs.current[cat.slug] = el;
                        },
                        className: "scroll-mt-[140px] pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrimarySecondary, {
                                    primary: catPrimary,
                                    secondary: catSecondary,
                                    center: false,
                                    primaryClass: "text-lg font-extrabold",
                                    secondaryClass: "text-xs text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-x-3 gap-y-5",
                                children: cat.subcats.slice(0, 8).map((sub)=>{
                                    const subPrimary = lang === "en" ? sub.name_en : sub.name_so;
                                    const subSecondary = lang === "en" ? sub.name_so : sub.name_en;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/subcategory/${sub.slug}`,
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-[54px] w-[54px] rounded-xl overflow-hidden bg-gray-100",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: sub.img,
                                                    alt: subPrimary,
                                                    fill: true,
                                                    className: "object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrimarySecondary, {
                                                    primary: subPrimary,
                                                    secondary: subSecondary
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, sub.id, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 182,
                                columnNumber: 15
                            }, this)
                        ]
                    }, cat.id, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 159,
                columnNumber: 7
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
                                            " item",
                                            cartTotals.count > 1 ? "s" : "",
                                            " in cart"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-extrabold",
                                        children: money(cartTotals.total)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 217,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right leading-tight font-extrabold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: cartCtaPrimary
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] opacity-80",
                                        children: cartCtaSecondary
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 213,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 212,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(HomePage, "qrPmz9YpxZ1qRYnRBKLjxmsA5hc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = HomePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "PrimarySecondary");
__turbopack_context__.k.register(_c1, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_2794e47d._.js.map