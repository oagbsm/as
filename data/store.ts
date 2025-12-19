export const categories = [
  { id: 1, name: "Groceries", slug: "groceries", img: "/groceries.webp" },

  { id: 2, name: " Beverages", slug: "beverages", img: "/drink.webp" },

  { id: 3, name: "Baby Care", slug: "baby-care", img: "/baby.webp" },

  { id: 4, name: " Personal Care", slug: "personal-care", img: "/personal.webp" },

  { id: 5, name: " Home & Kitchen", slug: "home-kitchen", img: "/home.webp" },

  { id: 6, name: " Fashion", slug: "fashion", img: "/products/baby.webp" },

  // Daily-use electronics (NOT phones)
  { id: 7, name: "Daily Electronics", slug: "daily-electronics", img: "/products/health.webp" },

  { id: 8, name: "Stationery", slug: "stationery", img: "/products/stationery.webp" },
];


export const subcategories = [
  /* =========================
     🛒 GROCERIES (category_id: 1)
  ========================= */
  { id: 101, category_id: 1, name: "Fruits & Vegetables", slug: "fruits-vegetables", img: "/fruit.webp" },
  { id: 102, category_id: 1, name: "Dairy & Bakery", slug: "dairy-bakery", img: "/bakery.webp" },
  { id: 103, category_id: 1, name: "Staples (Atta, Rice, Dal & Oil)", slug: "staples-atta-rice-dal-oil", img: "/oil.webp" },
  { id: 104, category_id: 1, name: "Snacks & Branded Foods", slug: "snacks-branded-foods", img: "/bakery.webp" },
  { id: 105, category_id: 1, name: "Sweets, Dry Fruits & Dates", slug: "sweets-dry-fruits-dates", img: "/pick.webp" },
  { id: 106, category_id: 1, name: "Frozen & Ready Foods", slug: "frozen-ready-foods", img: "/frozen.webp" },

  /* =========================
     🥤 BEVERAGES (category_id: 2)
  ========================= */
  { id: 201, category_id: 2, name: "Soft Drinks & Juices", slug: "soft-drinks-juices", img: "/drink.webp" },
  { id: 202, category_id: 2, name: "Tea, Coffee & Health Drinks", slug: "tea-coffee-health-drinks", img: "/tea.webp" },

  /* =========================
     👶 BABY CARE (category_id: 3)
  ========================= */
  { id: 301, category_id: 3, name: "Baby Food", slug: "baby-food", img: "/baby.webp" },
  { id: 302, category_id: 3, name: "Diapers & Wipes", slug: "diapers-wipes", img: "/nuna.webp" },
  { id: 303, category_id: 3, name: "Baby Bath & Skin Care", slug: "baby-bath-skin-care", img: "/babycream.jpeg" },
  { id: 304, category_id: 3, name: "Baby Feeding Essentials", slug: "baby-feeding-essentials", img: "/babyfeeding.webp" },

  /* =========================
     💄 PERSONAL CARE (category_id: 4)
  ========================= */
  { id: 401, category_id: 4, name: "Bath & Body", slug: "bath-body", img: "/bath.webp.jpeg" },
  { id: 402, category_id: 4, name: "Hair Care", slug: "hair-care", img: "/shampoo.jpg" },
  { id: 403, category_id: 4, name: "Oral Care", slug: "oral-care", img: "/oralcare.webp" },
  { id: 404, category_id: 4, name: "Skin Care", slug: "skin-care", img: "/nivea.webp" },
  { id: 405, category_id: 4, name: "Grooming & Hygiene", slug: "grooming-hygiene", img: "/groom.webp" },

  /* =========================
     🏠 HOME & KITCHEN (category_id: 5)
  ========================= */
  { id: 501, category_id: 5, name: "Kitchen & Dining", slug: "kitchen-dining", img: "/cutlery.webp" },
  { id: 502, category_id: 5, name: "Household Essentials", slug: "household-essentials", img: "/cleaner.webp" },
  { id: 503, category_id: 5, name: "Home Appliances", slug: "home-appliances", img: "/products/device.webp" },

  // Extra (still JioMart-style and useful)
  { id: 504, category_id: 5, name: "Storage & Containers", slug: "storage-containers", img: "/storage.webp" },
  { id: 505, category_id: 5, name: "Cleaning Supplies", slug: "cleaning-supplies", img: "/products/cleaning.webp" },
  { id: 506, category_id: 5, name: "Laundry Essentials", slug: "laundry-essentials", img: "/laundry.webp" },

  /* =========================
     👕 FASHION (category_id: 6)
  ========================= */
  { id: 601, category_id: 6, name: "Men’s Clothing", slug: "mens-clothing", img: "/products/baby.webp" },
  { id: 602, category_id: 6, name: "Women’s Clothing", slug: "womens-clothing", img: "/products/beauty.webp" },
  { id: 603, category_id: 6, name: "Kids Wear", slug: "kids-wear", img: "/products/baby.webp" },
  { id: 604, category_id: 6, name: "Footwear", slug: "footwear", img: "/products/health.webp" },
  { id: 605, category_id: 6, name: "Innerwear", slug: "innerwear", img: "/products/men.webp" },

  /* =========================
     🔌 DAILY ELECTRONICS (category_id: 7)
     (no mobiles/phones)
  ========================= */
  { id: 701, category_id: 7, name: "LED Bulbs & Lights", slug: "led-bulbs-lights", img: "/decor.webp" },
  { id: 702, category_id: 7, name: "Extension Boards & Plugs", slug: "extension-boards-plugs", img: "/products/device.webp" },
  { id: 703, category_id: 7, name: "Chargers & Adapters", slug: "chargers-adapters", img: "/products/device.webp" },
  { id: 704, category_id: 7, name: "Batteries & Cells", slug: "batteries-cells", img: "/products/health.webp" },
  { id: 705, category_id: 7, name: "Emergency Lights", slug: "emergency-lights", img: "/decor.webp" },
  { id: 706, category_id: 7, name: "Switches & Electricals", slug: "switches-electricals", img: "/products/device.webp" },

  /* =========================
     ✏️ STATIONERY (category_id: 8)
  ========================= */
  { id: 801, category_id: 8, name: "Notebooks & Registers", slug: "notebooks-registers", img: "/products/stationery.webp" },
  { id: 802, category_id: 8, name: "Pens & Writing", slug: "pens-writing", img: "/products/stationery.webp" },
  { id: 803, category_id: 8, name: "School Supplies", slug: "school-supplies", img: "/products/stationery.webp" },
  { id: 804, category_id: 8, name: "Office Supplies", slug: "office-supplies", img: "/products/stationery.webp" },
  { id: 805, category_id: 8, name: "Art & Craft", slug: "art-craft", img: "/products/stationery.webp" },
];

export type SubSubcategory = {
  id: number;
  subcategory_id: number; // parent subcategory (e.g. 202 = Tea/Coffee)
  name: string;
  slug: string;
};

export const subsubcategories: SubSubcategory[] = [
  /* =========================
     🥤 BEVERAGES → Soft Drinks & Juices (subcategory_id: 201)
  ========================= */
  { id: 10101, subcategory_id: 101, name: "Bananas", slug: "bananas" },

  { id: 20101, subcategory_id: 201, name: "Cola & Soda", slug: "cola-soda" },
  { id: 20102, subcategory_id: 201, name: "Juices", slug: "juices" },
  { id: 20103, subcategory_id: 201, name: "Energy Drinks", slug: "energy-drinks" },
  { id: 20104, subcategory_id: 201, name: "Flavoured Water", slug: "flavoured-water" },
  { id: 20105, subcategory_id: 201, name: "Mixers & Tonic", slug: "mixers-tonic" },

  /* =========================
     🥤 BEVERAGES → Tea, Coffee & Health Drinks (subcategory_id: 202)
     (your example becomes REAL here)
  ========================= */
  { id: 20201, subcategory_id: 202, name: "Instant Coffee", slug: "instant-coffee" },
  { id: 20202, subcategory_id: 202, name: "Ground Coffee", slug: "ground-coffee" },
  { id: 20203, subcategory_id: 202, name: "Coffee Beans", slug: "coffee-beans" },
  { id: 20204, subcategory_id: 202, name: "Tea Bags", slug: "tea-bags" },
  { id: 20205, subcategory_id: 202, name: "Green Tea", slug: "green-tea" },
  { id: 20206, subcategory_id: 202, name: "Herbal & Exotic Tea", slug: "herbal-exotic-tea" },
  { id: 20207, subcategory_id: 202, name: "Gourmet / Premium Tea", slug: "gourmet-premium-tea" },
  { id: 20208, subcategory_id: 202, name: "Health Drinks", slug: "health-drinks" },

  /* =========================
     👶 BABY CARE
  ========================= */
  { id: 30101, subcategory_id: 301, name: "Cereals & Purees", slug: "cereals-purees" },
  { id: 30102, subcategory_id: 301, name: "Formula", slug: "formula" },
  { id: 30103, subcategory_id: 301, name: "Snacks for Babies", slug: "baby-snacks" },

  { id: 30201, subcategory_id: 302, name: "Tape Diapers", slug: "tape-diapers" },
  { id: 30202, subcategory_id: 302, name: "Pants Diapers", slug: "pants-diapers" },
  { id: 30203, subcategory_id: 302, name: "Baby Wipes", slug: "baby-wipes" },
  { id: 30204, subcategory_id: 302, name: "Diaper Rash Cream", slug: "diaper-rash-cream" },

  { id: 30301, subcategory_id: 303, name: "Baby Soap & Wash", slug: "baby-soap-wash" },
  { id: 30302, subcategory_id: 303, name: "Baby Shampoo", slug: "baby-shampoo" },
  { id: 30303, subcategory_id: 303, name: "Baby Lotion & Oil", slug: "baby-lotion-oil" },

  { id: 30401, subcategory_id: 304, name: "Bottles", slug: "bottles" },
  { id: 30402, subcategory_id: 304, name: "Feeding Accessories", slug: "feeding-accessories" },
  { id: 30403, subcategory_id: 304, name: "Sippers & Cups", slug: "sippers-cups" },

  /* =========================
     💄 PERSONAL CARE
  ========================= */
  { id: 40101, subcategory_id: 401, name: "Soaps", slug: "soaps" },
  { id: 40102, subcategory_id: 401, name: "Body Wash", slug: "body-wash" },
  { id: 40103, subcategory_id: 401, name: "Deodorants", slug: "deodorants" },

  { id: 40201, subcategory_id: 402, name: "Shampoo", slug: "shampoo" },
  { id: 40202, subcategory_id: 402, name: "Conditioner", slug: "conditioner" },
  { id: 40203, subcategory_id: 402, name: "Hair Oil", slug: "hair-oil" },

  { id: 40301, subcategory_id: 403, name: "Toothpaste", slug: "toothpaste" },
  { id: 40302, subcategory_id: 403, name: "Toothbrushes", slug: "toothbrushes" },
  { id: 40303, subcategory_id: 403, name: "Mouthwash", slug: "mouthwash" },

  { id: 40401, subcategory_id: 404, name: "Face Wash", slug: "face-wash" },
  { id: 40402, subcategory_id: 404, name: "Moisturisers", slug: "moisturisers" },
  { id: 40403, subcategory_id: 404, name: "Sunscreen", slug: "sunscreen" },

  { id: 40501, subcategory_id: 405, name: "Sanitary & Hygiene", slug: "sanitary-hygiene" },
  { id: 40502, subcategory_id: 405, name: "Shaving & Grooming", slug: "shaving-grooming" },
  { id: 40503, subcategory_id: 405, name: "Hand Wash & Sanitiser", slug: "handwash-sanitiser" },

  /* =========================
     🏠 HOME & KITCHEN
  ========================= */
  { id: 50101, subcategory_id: 501, name: "Cookware", slug: "cookware" },
  { id: 50102, subcategory_id: 501, name: "Dinnerware", slug: "dinnerware" },
  { id: 50103, subcategory_id: 501, name: "Kitchen Tools", slug: "kitchen-tools" },

  { id: 50201, subcategory_id: 502, name: "Cleaning Liquids", slug: "cleaning-liquids" },
  { id: 50202, subcategory_id: 502, name: "Tissues & Wipes", slug: "tissues-wipes" },
  { id: 50203, subcategory_id: 502, name: "Garbage Bags", slug: "garbage-bags" },

  { id: 50301, subcategory_id: 503, name: "Small Appliances", slug: "small-appliances" },
  { id: 50302, subcategory_id: 503, name: "Irons", slug: "irons" },
  { id: 50303, subcategory_id: 503, name: "Kettles", slug: "kettles" },
];

export type Product = {
  id: number;
  name: string;
  slug: string;
  long_description: string;
  category_id: number;
  subcategory_id: number;
  brand_id: number;
  is_discounted: boolean;
  base_price: number;
  tags?: string[]; // ✅ NEW
};

export const products: Product[] = [
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
    tags: ["rice"], // optional
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
    tags: ["cooking-oil"],
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
    tags: ["bananas"], // ✅ matches subsubcategories slug
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
    tags: ["biscuits"],
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
    tags: ["juices"], // ✅
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
    tags: ["gourmet-premium-tea"], // ✅ or "tea-bags"/"green-tea" etc
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
    tags: ["tape-diapers"], // ✅
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
    tags: ["body-wash"], // ✅
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
    tags: ["cookware"], // ✅
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
    tags: ["laundry"], // optional
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
    tags: ["bulbs"], // optional
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
    tags: ["extension-boards"], // optional
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
    tags: ["notebooks"], // optional
  },
];



export const productVariants = [
  {
    id: 1,
    product_id: 1, // Basmati Rice
    label: "5 kg",
    sku: "RICE-BAS-5KG",
    price: 18.5,
    mrp: 20,
    stock: 120,
  },
  {
    id: 2,
    product_id: 1,
    label: "10 kg",
    sku: "RICE-BAS-10KG",
    price: 35,
    mrp: 38,
    stock: 80,
  },

  {
    id: 3,
    product_id: 2, // Sunflower Oil
    label: "1 L",
    sku: "OIL-SUN-1L",
    price: 4.2,
    mrp: 4.8,
    stock: 200,
  },
  {
    id: 4,
    product_id: 2,
    label: "3 L",
    sku: "OIL-SUN-3L",
    price: 11,
    mrp: 12,
    stock: 150,
  },

  {
    id: 5,
    product_id: 5, // Orange Juice
    label: "500 ml",
    sku: "JUICE-ORG-500",
    price: 1.4,
    mrp: 1.6,
    stock: 90,
  },
  {
    id: 6,
    product_id: 5,
    label: "1 L",
    sku: "JUICE-ORG-1L",
    price: 2.5,
    mrp: 2.8,
    stock: 120,
  },

  {
    id: 7,
    product_id: 7, // Baby Diapers
    label: "Medium (30 pcs)",
    sku: "DIAPER-M-30",
    price: 9.9,
    mrp: 11,
    stock: 60,
  },
  {
    id: 8,
    product_id: 7,
    label: "Large (30 pcs)",
    sku: "DIAPER-L-30",
    price: 10.5,
    mrp: 12,
    stock: 55,
  },

  {
    id: 9,
    product_id: 11, // LED Bulb
    label: "9W",
    sku: "LED-9W",
    price: 0.9,
    mrp: 1.1,
    stock: 300,
  },
  {
    id: 10,
    product_id: 11,
    label: "12W",
    sku: "LED-12W",
    price: 1.2,
    mrp: 1.5,
    stock: 250,
  },

  {
    id: 11,
    product_id: 13, // Notebook
    label: "100 pages",
    sku: "NOTE-100",
    price: 0.6,
    mrp: 0.8,
    stock: 400,
  },
  {
    id: 12,
    product_id: 13,
    label: "200 pages",
    sku: "NOTE-200",
    price: 1.0,
    mrp: 1.3,
    stock: 300,
  },
];

export const productImages = [
  { id: 1, product_id: 1, url: "/dairy..webp", is_primary: true },
  { id: 2, product_id: 1, url: "/alfanar.webp", is_primary: false },

  { id: 3, product_id: 2, url: "/products/oil.webp", is_primary: true },

  { id: 4, product_id: 3, url: "/products/a15-front.jpg", is_primary: true },
  { id: 5, product_id: 3, url: "/products/a15-back.jpg", is_primary: false }
];

export const brands = [
  { id: 1, name: "Baraka", slug: "baraka" },
  { id: 2, name: "Samsung", slug: "samsung" },
  { id: 3, name: "Apple", slug: "apple" },
  { id: 4, name: "Dettol", slug: "dettol" },
  { id: 5, name: "Pampers", slug: "pampers" },
  { id: 6, name: "Local Harvest", slug: "local-harvest" },
  { id: 7, name: "Nestle", slug: "nestle" },
  { id: 8, name: "Unilever", slug: "unilever" },
  { id: 9, name: "LG", slug: "lg" },
  { id: 10, name: "Sony", slug: "sony" },
  { id: 11, name: "Nivea", slug: "nivea" },
  { id: 12, name: "Huggies", slug: "huggies" }
];
export const customers = [
  { id: 1, name: "Ahmed Ali", phone: "0622000001" },
  { id: 2, name: "Amina Noor", phone: "0622000002" },
  { id: 3, name: "Hodan Yusuf", phone: "0619000123" },
  { id: 4, name: "Mohamed Hassan", phone: "0622000456" },
  { id: 5, name: "Fatima Omar", phone: "0615557788" },
  { id: 6, name: "Abdiqani Mohamed", phone: "0627003344" },
  { id: 7, name: "Khadra Aden", phone: "0612223344" },
  { id: 8, name: "Sahra Ismail", phone: "0626112233" },
];
