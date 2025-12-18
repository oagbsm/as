(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const PLACE_ICON = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="100%" height="100%" rx="48" fill="#E6F0FF"/><path d="M30 52h36" stroke="#1A73E8" stroke-width="6" stroke-linecap="round"/></svg>`);
const PLACE_TILE = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="240" height="160"><rect width="100%" height="100%" rx="16" fill="#F3F4F6"/><circle cx="70" cy="80" r="28" fill="#D1D5DB"/><rect x="112" y="60" width="88" height="12" rx="6" fill="#D1D5DB"/><rect x="112" y="86" width="62" height="12" rx="6" fill="#D1D5DB"/></svg>`);
const HERO_SLIDES = [
    {
        id: "s1",
        img: "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="520">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0" stop-color="#B7F7D2"/>
              <stop offset="1" stop-color="#7AE7C7"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" rx="28" fill="url(#g)"/>
          <rect x="40" y="60" width="420" height="300" rx="20" fill="#1F2937" opacity="0.9"/>
          <text x="80" y="150" fill="#fff" font-size="64" font-family="Arial" font-weight="700">Wednesday</text>
          <text x="80" y="230" fill="#A7F3D0" font-size="78" font-family="Arial" font-weight="800">BONUS</text>
          <text x="520" y="160" fill="#fff" font-size="68" font-family="Arial" font-weight="800">LOW PRICE</text>
          <text x="520" y="240" fill="#fff" font-size="56" font-family="Arial" font-weight="800">GUARANTEE</text>
          <text x="520" y="320" fill="#fff" font-size="40" font-family="Arial" font-weight="700">ON FRUITS &amp; VEGETABLES</text>
          <rect x="520" y="360" width="180" height="70" rx="16" fill="#F97316"/>
          <text x="560" y="408" fill="#fff" font-size="30" font-family="Arial" font-weight="800">Shop Now</text>
        </svg>`)
    },
    {
        id: "s2",
        img: HERO_SLIDES_FALLBACK("#C7D2FE", "#93C5FD")
    },
    {
        id: "s3",
        img: HERO_SLIDES_FALLBACK("#FDE68A", "#FDBA74")
    },
    {
        id: "s4",
        img: HERO_SLIDES_FALLBACK("#BBF7D0", "#86EFAC")
    }
];
function HERO_SLIDES_FALLBACK(a, b) {
    return "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="520">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stop-color="${a}"/>
            <stop offset="1" stop-color="${b}"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" rx="28" fill="url(#g)"/>
        <text x="70" y="180" fill="#111827" font-size="64" font-family="Arial" font-weight="800">Special Offers</text>
        <text x="70" y="260" fill="#111827" font-size="40" font-family="Arial" font-weight="600">Swipe to see more deals</text>
      </svg>`);
}
_c = HERO_SLIDES_FALLBACK;
const DATA = [
    {
        id: "happy-hour",
        name: "Happy Hour\nCoupon",
        icon: PLACE_ICON,
        subcats: [
            {
                id: "hh-1",
                name: "Flash Deals",
                img: PLACE_TILE
            },
            {
                id: "hh-2",
                name: "Coupons",
                img: PLACE_TILE
            },
            {
                id: "hh-3",
                name: "Bundles",
                img: PLACE_TILE
            },
            {
                id: "hh-4",
                name: "Clearance",
                img: PLACE_TILE
            },
            {
                id: "hh-5",
                name: "Under $5",
                img: PLACE_TILE
            },
            {
                id: "hh-6",
                name: "Weekend Sale",
                img: PLACE_TILE
            },
            {
                id: "hh-7",
                name: "Buy 1 Get 1",
                img: PLACE_TILE
            },
            {
                id: "hh-8",
                name: "Top Picks",
                img: PLACE_TILE
            }
        ]
    },
    {
        id: "smartphone",
        name: "Smartphone\nDeals",
        icon: PLACE_ICON,
        subcats: [
            {
                id: "sp-1",
                name: "Android Phones",
                img: PLACE_TILE
            },
            {
                id: "sp-2",
                name: "iPhones",
                img: PLACE_TILE
            },
            {
                id: "sp-3",
                name: "Power Banks",
                img: PLACE_TILE
            },
            {
                id: "sp-4",
                name: "Chargers",
                img: PLACE_TILE
            },
            {
                id: "sp-5",
                name: "Cases",
                img: PLACE_TILE
            },
            {
                id: "sp-6",
                name: "Earbuds",
                img: PLACE_TILE
            },
            {
                id: "sp-7",
                name: "Smart Watches",
                img: PLACE_TILE
            },
            {
                id: "sp-8",
                name: "Accessories",
                img: PLACE_TILE
            }
        ]
    },
    {
        id: "store-99",
        name: "99 To 999\nStore",
        icon: PLACE_ICON,
        subcats: [
            {
                id: "st-1",
                name: "Under 99",
                img: PLACE_TILE
            },
            {
                id: "st-2",
                name: "99–199",
                img: PLACE_TILE
            },
            {
                id: "st-3",
                name: "199–499",
                img: PLACE_TILE
            },
            {
                id: "st-4",
                name: "499–999",
                img: PLACE_TILE
            },
            {
                id: "st-5",
                name: "Daily Essentials",
                img: PLACE_TILE
            },
            {
                id: "st-6",
                name: "Home Basics",
                img: PLACE_TILE
            },
            {
                id: "st-7",
                name: "Kitchen Tools",
                img: PLACE_TILE
            },
            {
                id: "st-8",
                name: "Personal Care",
                img: PLACE_TILE
            }
        ]
    },
    {
        id: "home-lifestyle",
        name: "Home &\nLifestyle",
        icon: PLACE_ICON,
        subcats: [
            {
                id: "hl-1",
                name: "Home Decor",
                img: PLACE_TILE
            },
            {
                id: "hl-2",
                name: "Bedding",
                img: PLACE_TILE
            },
            {
                id: "hl-3",
                name: "Bath",
                img: PLACE_TILE
            },
            {
                id: "hl-4",
                name: "Storage",
                img: PLACE_TILE
            },
            {
                id: "hl-5",
                name: "Lighting",
                img: PLACE_TILE
            },
            {
                id: "hl-6",
                name: "Furniture",
                img: PLACE_TILE
            },
            {
                id: "hl-7",
                name: "Cleaning",
                img: PLACE_TILE
            },
            {
                id: "hl-8",
                name: "Tools",
                img: PLACE_TILE
            }
        ]
    },
    {
        id: "fashion",
        name: "Fashion",
        icon: PLACE_ICON,
        subcats: [
            {
                id: "fa-1",
                name: "Women",
                img: PLACE_TILE
            },
            {
                id: "fa-2",
                name: "Men",
                img: PLACE_TILE
            },
            {
                id: "fa-3",
                name: "Kids",
                img: PLACE_TILE
            },
            {
                id: "fa-4",
                name: "Footwear",
                img: PLACE_TILE
            },
            {
                id: "fa-5",
                name: "Bags",
                img: PLACE_TILE
            },
            {
                id: "fa-6",
                name: "Watches",
                img: PLACE_TILE
            },
            {
                id: "fa-7",
                name: "Jewelry",
                img: PLACE_TILE
            },
            {
                id: "fa-8",
                name: "Accessories",
                img: PLACE_TILE
            }
        ]
    },
    {
        id: "electronics",
        name: "Electronics",
        icon: PLACE_ICON,
        subcats: [
            {
                id: "el-1",
                name: "TVs",
                img: PLACE_TILE
            },
            {
                id: "el-2",
                name: "Laptops",
                img: PLACE_TILE
            },
            {
                id: "el-3",
                name: "Audio",
                img: PLACE_TILE
            },
            {
                id: "el-4",
                name: "Cameras",
                img: PLACE_TILE
            },
            {
                id: "el-5",
                name: "Gaming",
                img: PLACE_TILE
            },
            {
                id: "el-6",
                name: "Appliances",
                img: PLACE_TILE
            },
            {
                id: "el-7",
                name: "Printers",
                img: PLACE_TILE
            },
            {
                id: "el-8",
                name: "Accessories",
                img: PLACE_TILE
            }
        ]
    },
    {
        id: "groceries",
        name: "Groceries",
        icon: PLACE_ICON,
        subcats: [
            {
                id: "gr-1",
                name: "Chips & Namkeens",
                img: PLACE_TILE
            },
            {
                id: "gr-2",
                name: "Ice Cream & Frozen",
                img: PLACE_TILE
            },
            {
                id: "gr-3",
                name: "Biscuits & Cookies",
                img: PLACE_TILE
            },
            {
                id: "gr-4",
                name: "Chocolates & Candies",
                img: PLACE_TILE
            },
            {
                id: "gr-5",
                name: "Indian Sweets",
                img: PLACE_TILE
            },
            {
                id: "gr-6",
                name: "Drinks & Juices",
                img: PLACE_TILE
            },
            {
                id: "gr-7",
                name: "Breakfast Cereals",
                img: PLACE_TILE
            },
            {
                id: "gr-8",
                name: "Noodles, Pasta & More",
                img: PLACE_TILE
            }
        ]
    },
    {
        id: "home-kitchen",
        name: "Home &\nKitchen",
        icon: PLACE_ICON,
        subcats: [
            {
                id: "hk-1",
                name: "Cookware",
                img: PLACE_TILE
            },
            {
                id: "hk-2",
                name: "Kitchen Tools",
                img: PLACE_TILE
            },
            {
                id: "hk-3",
                name: "Dinnerware",
                img: PLACE_TILE
            },
            {
                id: "hk-4",
                name: "Containers",
                img: PLACE_TILE
            },
            {
                id: "hk-5",
                name: "Cleaning",
                img: PLACE_TILE
            },
            {
                id: "hk-6",
                name: "Laundry",
                img: PLACE_TILE
            },
            {
                id: "hk-7",
                name: "Water Bottles",
                img: PLACE_TILE
            },
            {
                id: "hk-8",
                name: "Home Storage",
                img: PLACE_TILE
            }
        ]
    },
    {
        id: "personal-care",
        name: "Personal\nCare",
        icon: PLACE_ICON,
        subcats: [
            {
                id: "pc-1",
                name: "Skin Care",
                img: PLACE_TILE
            },
            {
                id: "pc-2",
                name: "Hair Care",
                img: PLACE_TILE
            },
            {
                id: "pc-3",
                name: "Oral Care",
                img: PLACE_TILE
            },
            {
                id: "pc-4",
                name: "Bath & Body",
                img: PLACE_TILE
            },
            {
                id: "pc-5",
                name: "Deodorants",
                img: PLACE_TILE
            },
            {
                id: "pc-6",
                name: "Grooming",
                img: PLACE_TILE
            },
            {
                id: "pc-7",
                name: "Feminine Care",
                img: PLACE_TILE
            },
            {
                id: "pc-8",
                name: "Fragrances",
                img: PLACE_TILE
            }
        ]
    },
    {
        id: "baby-products",
        name: "Baby\nProducts",
        icon: PLACE_ICON,
        subcats: [
            {
                id: "bp-1",
                name: "Diapers",
                img: PLACE_TILE
            },
            {
                id: "bp-2",
                name: "Wipes",
                img: PLACE_TILE
            },
            {
                id: "bp-3",
                name: "Baby Food",
                img: PLACE_TILE
            },
            {
                id: "bp-4",
                name: "Bath",
                img: PLACE_TILE
            },
            {
                id: "bp-5",
                name: "Feeding",
                img: PLACE_TILE
            },
            {
                id: "bp-6",
                name: "Baby Care",
                img: PLACE_TILE
            },
            {
                id: "bp-7",
                name: "Toys",
                img: PLACE_TILE
            },
            {
                id: "bp-8",
                name: "Strollers",
                img: PLACE_TILE
            }
        ]
    },
    {
        id: "beauty",
        name: "Beauty",
        icon: PLACE_ICON,
        subcats: [
            {
                id: "be-1",
                name: "Makeup",
                img: PLACE_TILE
            },
            {
                id: "be-2",
                name: "Face",
                img: PLACE_TILE
            },
            {
                id: "be-3",
                name: "Eyes",
                img: PLACE_TILE
            },
            {
                id: "be-4",
                name: "Lips",
                img: PLACE_TILE
            },
            {
                id: "be-5",
                name: "Tools",
                img: PLACE_TILE
            },
            {
                id: "be-6",
                name: "Nails",
                img: PLACE_TILE
            },
            {
                id: "be-7",
                name: "Hair Styling",
                img: PLACE_TILE
            },
            {
                id: "be-8",
                name: "K-Beauty",
                img: PLACE_TILE
            }
        ]
    }
];
function HomePage() {
    _s();
    const cats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomePage.useMemo[cats]": ()=>DATA
    }["HomePage.useMemo[cats]"], []);
    const sectionRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const [activeSlide, setActiveSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Auto slideshow
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const t = setInterval({
                "HomePage.useEffect.t": ()=>{
                    setActiveSlide({
                        "HomePage.useEffect.t": (s)=>(s + 1) % HERO_SLIDES.length
                    }["HomePage.useEffect.t"]);
                }
            }["HomePage.useEffect.t"], 3500);
            return ({
                "HomePage.useEffect": ()=>clearInterval(t)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    const scrollToCategory = (catId)=>{
        const el = sectionRefs.current[catId];
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 bg-[#0B6EA9]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-md px-3 py-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 rounded-full bg-[#0A5F91] px-4 py-2 text-white/90",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/80",
                                                children: "🔎"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm leading-none opacity-90",
                                                children: "Home & Kitchen"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 266,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "h-10 w-10 rounded-full bg-[#0A5F91] text-white",
                                    "aria-label": "Cart",
                                    children: "🛒"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "h-10 w-10 rounded-full bg-[#0A5F91] text-white",
                                    "aria-label": "Profile",
                                    children: "👤"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/10 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-md px-4 py-2 text-sm text-gray-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-600",
                                        children: "📍"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Mumbai 400020"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500",
                                        children: "▾"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "border-b bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-md px-2 py-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 overflow-x-auto pb-2",
                        children: cats.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollToCategory(cat.id),
                                className: "min-w-[78px] flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto h-14 w-14 overflow-hidden rounded-full bg-blue-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: cat.icon || PLACE_ICON,
                                            alt: cat.name,
                                            width: 56,
                                            height: 56,
                                            className: "h-14 w-14 object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 310,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 whitespace-pre-line text-center text-[11px] leading-tight text-gray-800",
                                        children: cat.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, cat.id, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 304,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 302,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-md px-3 pt-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden rounded-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex transition-transform duration-500",
                                style: {
                                    transform: `translateX(-${activeSlide * 100}%)`
                                },
                                children: HERO_SLIDES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-[180px] w-full flex-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: s.img,
                                            alt: "Promo",
                                            fill: true,
                                            className: "object-cover",
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 337,
                                            columnNumber: 19
                                        }, this)
                                    }, s.id, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-2 left-0 right-0 flex justify-center gap-2",
                                children: HERO_SLIDES.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveSlide(i),
                                        className: `h-2 w-2 rounded-full ${i === activeSlide ? "bg-blue-700" : "bg-white/80"}`,
                                        "aria-label": `Slide ${i + 1}`
                                    }, i, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 351,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 329,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-md px-3 pb-10 pt-3",
                    children: cats.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (el)=>{
                                sectionRefs.current[cat.id] = el;
                            },
                            className: "scroll-mt-[140px] pb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-3 text-[18px] font-extrabold text-gray-900",
                                    children: cat.id === "groceries" ? "Biscuits, Drinks & Packaged Foods" : cat.name.replace("\n", " ")
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-4 gap-x-3 gap-y-5",
                                    children: cat.subcats.slice(0, 8).map((sc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "group flex flex-col items-center",
                                            onClick: ()=>{
                                                // replace with router push if needed
                                                // e.g. router.push(`/category/${cat.id}/${sc.id}`)
                                                console.log("open", cat.id, sc.id);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-[54px] w-[54px] overflow-hidden rounded-xl bg-gray-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: sc.img || PLACE_TILE,
                                                        alt: sc.name,
                                                        fill: true,
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 395,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-center text-[11px] font-medium leading-tight text-gray-800",
                                                    children: sc.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, sc.id, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 385,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, cat.id, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 369,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 367,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 258,
        columnNumber: 5
    }, this);
}
_s(HomePage, "KuqtgUH6vvSLcFmGetic8Fb/YEA=");
_c1 = HomePage;
var _c, _c1;
__turbopack_context__.k.register(_c, "HERO_SLIDES_FALLBACK");
__turbopack_context__.k.register(_c1, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_page_tsx_dda9881a._.js.map