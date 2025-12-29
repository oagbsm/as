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
"[project]/app/admin/add-product/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/admin/add-product/page.tsx
__turbopack_context__.s([
    "default",
    ()=>AddProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function slugify(value) {
    return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function AddProductPage() {
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subcategories, setSubcategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subsubcategories, setSubsubcategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categoryId, setCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [subcategoryId, setSubcategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [subsubId, setSubsubId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [brandId, setBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [slug, setSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [slugDirty, setSlugDirty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [basePrice, setBasePrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [longDescription, setLongDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isDiscounted, setIsDiscounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // comma separated
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isConcept, setIsConcept] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // VARIANTS: allow multiple
    const [variantRows, setVariantRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            label: "",
            price: "",
            mrp: "",
            stock: ""
        }
    ]);
    // PRIMARY IMAGE: either URL or uploaded file
    const [imageUrl, setImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- Load reference data on mount ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddProductPage.useEffect": ()=>{
            const loadMeta = {
                "AddProductPage.useEffect.loadMeta": async ()=>{
                    const [catRes, subRes, subsubRes, brandRes] = await Promise.all([
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("categories").select("id,name_en,slug").order("id"),
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("subcategories").select("id,category_id,name_en,slug").order("id"),
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("subsubcategories").select("id,subcategory_id,name_en,slug").order("id"),
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("brands").select("id,name,slug").order("name")
                    ]);
                    if (!catRes.error && catRes.data) setCategories(catRes.data);
                    if (!subRes.error && subRes.data) setSubcategories(subRes.data);
                    if (!subsubRes.error && subsubRes.data) setSubsubcategories(subsubRes.data);
                    if (!brandRes.error && brandRes.data) setBrands(brandRes.data);
                }
            }["AddProductPage.useEffect.loadMeta"];
            loadMeta();
        }
    }["AddProductPage.useEffect"], []);
    // auto-generate slug from name until user manually edits slug
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddProductPage.useEffect": ()=>{
            if (!name) {
                if (!slugDirty) setSlug("");
                return;
            }
            if (slugDirty) return; // user manually edited slug, don't override
            setSlug(slugify(name));
        }
    }["AddProductPage.useEffect"], [
        name,
        slugDirty
    ]);
    const handleCreateBrand = async ()=>{
        const name = window.prompt("New brand name");
        if (!name) return;
        const newSlug = slugify(name);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("brands").insert({
            name,
            slug: newSlug
        }).select("id,name,slug").single();
        if (error || !data) {
            console.error(error);
            setStatus({
                type: "error",
                message: "Failed to create brand. Please try again."
            });
            return;
        }
        const brand = data;
        setBrands((prev)=>[
                ...prev,
                brand
            ]);
        setBrandId(brand.id);
        setStatus({
            type: "success",
            message: `Brand "${brand.name}" created.`
        });
    };
    const handleCreateSubsub = async ()=>{
        if (!subcategoryId) {
            window.alert("Please select a subcategory first.");
            return;
        }
        const name = window.prompt("New sub-subcategory name");
        if (!name) return;
        const newSlug = slugify(name);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("subsubcategories").insert({
            subcategory_id: Number(subcategoryId),
            name_en: name,
            name_so: name,
            slug: newSlug
        }).select("id,subcategory_id,name_en,slug").single();
        if (error || !data) {
            console.error(error);
            setStatus({
                type: "error",
                message: "Failed to create sub-subcategory. Please try again."
            });
            return;
        }
        const created = data;
        setSubsubcategories((prev)=>[
                ...prev,
                created
            ]);
        setSubsubId(created.id);
        setStatus({
            type: "success",
            message: `Sub-subcategory "${created.name_en}" created.`
        });
    };
    const filteredSubcategories = subcategories.filter((s)=>categoryId ? s.category_id === Number(categoryId) : true);
    const filteredSubsubcategories = subsubcategories.filter((ss)=>subcategoryId ? ss.subcategory_id === Number(subcategoryId) : true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddProductPage.useEffect": ()=>{
            setSubsubId("");
        }
    }["AddProductPage.useEffect"], [
        subcategoryId
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus(null);
        const missing = [];
        if (!name.trim()) missing.push("Product name");
        if (!slug.trim()) missing.push("Slug");
        if (!categoryId) missing.push("Category");
        if (!subcategoryId) missing.push("Subcategory");
        if (!subsubId) missing.push("Sub-subcategory");
        if (!basePrice) missing.push("Base price");
        if (missing.length) {
            setStatus({
                type: "error",
                message: `Please fill in all required fields: ${missing.join(", ")}.`
            });
            return;
        }
        setLoading(true);
        try {
            // Insert product
            const productPayload = {
                name,
                slug,
                long_description: longDescription || "",
                category_id: Number(categoryId),
                subcategory_id: Number(subcategoryId),
                subsubcategory_id: Number(subsubId),
                is_discounted: isDiscounted,
                base_price: Number(basePrice),
                tags: tags ? tags.split(",").map((t)=>t.trim()).filter(Boolean) : null,
                is_active: isActive,
                is_concept: isConcept
            };
            if (brandId) {
                productPayload.brand_id = Number(brandId);
            }
            const { data: product, error: productError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("products").insert(productPayload).select("id").single();
            if (productError || !product) {
                setStatus({
                    type: "error",
                    message: productError?.message || "Failed to create product – check that category, subcategory and brand are valid."
                });
                setLoading(false);
                return;
            }
            const productId = product.id;
            // Insert all valid variants (multiple rows)
            const variantPayloads = variantRows.filter((v)=>v.label && v.price).map((v)=>({
                    product_id: productId,
                    label: v.label.trim(),
                    sku: `${slug}-${v.label.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`,
                    price: Number(v.price),
                    mrp: v.mrp ? Number(v.mrp) : Number(v.price),
                    stock: v.stock ? Number(v.stock) : 0
                }));
            if (variantPayloads.length > 0) {
                const { error: variantError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("product_variants").insert(variantPayloads);
                if (variantError) {
                    console.error(variantError);
                    throw new Error("Product created but variants insert failed");
                }
            }
            // Determine final image URL: prefer uploaded file, fallback to manual URL
            let finalImageUrl = imageUrl.trim() || "";
            if (imageFile) {
                const ext = imageFile.name.split(".").pop() || "jpg";
                const filePath = `products/${productId}-${Date.now()}.${ext}`;
                const { data: uploadData, error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("product-images").upload(filePath, imageFile, {
                    cacheControl: "3600",
                    upsert: false
                });
                if (uploadError) {
                    console.error(uploadError);
                    throw new Error("Product created but image upload failed");
                }
                const { data: publicUrlData } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from("product-images").getPublicUrl(uploadData.path);
                finalImageUrl = publicUrlData.publicUrl || finalImageUrl;
            }
            if (finalImageUrl) {
                const { error: imgError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("product_images").insert({
                    product_id: productId,
                    url: finalImageUrl,
                    is_primary: true
                });
                if (imgError) {
                    console.error(imgError);
                    throw new Error("Product created but image insert failed");
                }
            }
            setStatus({
                type: "success",
                message: "Product created successfully."
            });
            // Clear form (keep some defaults for fast multi-entry)
            setName("");
            setSlug("");
            setBasePrice("");
            setLongDescription("");
            setIsDiscounted(false);
            setIsConcept(false);
            setTags("");
            setVariantRows([
                {
                    label: "",
                    price: "",
                    mrp: "",
                    stock: ""
                }
            ]);
            setImageUrl("");
            setImageFile(null);
        // keep category / subcategory / brand as is to add similar products fast
        } catch (err) {
            setStatus({
                type: "error",
                message: err?.message || "Something went wrong."
            });
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 text-gray-900 px-4 py-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-4 flex flex-wrap items-center justify-between gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-semibold",
                                    children: "Add new product"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-600 mt-1",
                                    children: "Fill in the basic details, variants, and image. Keep it simple."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/add-product/page.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] px-2 py-1 rounded border border-gray-300 text-gray-600",
                            children: "MatoMart · Admin"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/add-product/page.tsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/add-product/page.tsx",
                    lineNumber: 339,
                    columnNumber: 9
                }, this),
                status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `mb-4 rounded border px-3 py-2 text-xs ${status.type === "success" ? "border-green-500 bg-green-50 text-green-800" : "border-red-500 bg-red-50 text-red-800"}`,
                    children: status.message
                }, void 0, false, {
                    fileName: "[project]/app/admin/add-product/page.tsx",
                    lineNumber: 353,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-6 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xs font-semibold uppercase text-gray-700",
                                    children: "Basic info"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-gray-600",
                                                    children: "Product name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: name,
                                                    onChange: (e)=>setName(e.target.value),
                                                    className: "border rounded px-2 py-1.5 text-sm bg-white",
                                                    placeholder: "Baraka Corn Flakes 500g"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 369,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-gray-600",
                                                    children: "Slug (URL) *"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: slug,
                                                    onChange: (e)=>{
                                                        const val = e.target.value;
                                                        setSlug(val);
                                                        // mark slug as manually edited if it has any content
                                                        setSlugDirty(val.trim().length > 0);
                                                    },
                                                    className: "border rounded px-2 py-1.5 text-sm bg-white",
                                                    placeholder: "baraka-corn-flakes-500g"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-gray-500",
                                                    children: [
                                                        "/product/",
                                                        slug || "slug"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-gray-600",
                                            children: "Long description"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: longDescription,
                                            onChange: (e)=>setLongDescription(e.target.value),
                                            rows: 3,
                                            className: "border rounded px-2 py-1.5 text-sm bg-white",
                                            placeholder: "Describe the product..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/add-product/page.tsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xs font-semibold uppercase text-gray-700",
                                    children: "Category & pricing"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3 md:grid-cols-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-gray-600",
                                                    children: "Category *"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: categoryId,
                                                    onChange: (e)=>setCategoryId(e.target.value ? Number(e.target.value) : ""),
                                                    className: "border rounded px-2 py-1.5 text-sm bg-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                                            lineNumber: 422,
                                                            columnNumber: 19
                                                        }, this),
                                                        categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: c.id,
                                                                children: c.name_en
                                                            }, c.id, false, {
                                                                fileName: "[project]/app/admin/add-product/page.tsx",
                                                                lineNumber: 424,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-gray-600",
                                                    children: "Subcategory *"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: subcategoryId,
                                                    onChange: (e)=>setSubcategoryId(e.target.value ? Number(e.target.value) : ""),
                                                    className: "border rounded px-2 py-1.5 text-sm bg-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 19
                                                        }, this),
                                                        filteredSubcategories.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: s.id,
                                                                children: s.name_en
                                                            }, s.id, false, {
                                                                fileName: "[project]/app/admin/add-product/page.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 431,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-gray-600",
                                                    children: "Sub-subcategory *"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: subsubId,
                                                            onChange: (e)=>setSubsubId(e.target.value ? Number(e.target.value) : ""),
                                                            className: "border rounded px-2 py-1.5 text-sm bg-white flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                                    lineNumber: 459,
                                                                    columnNumber: 21
                                                                }, this),
                                                                filteredSubsubcategories.map((ss)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: ss.id,
                                                                        children: ss.name_en
                                                                    }, ss.id, false, {
                                                                        fileName: "[project]/app/admin/add-product/page.tsx",
                                                                        lineNumber: 461,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                                            lineNumber: 452,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: handleCreateSubsub,
                                                            className: "text-[11px] px-2 py-1 border rounded bg-white text-gray-700 hover:bg-gray-100",
                                                            children: "+ New"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 449,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-gray-600",
                                                    children: "Brand"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2 items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: brandId,
                                                            onChange: (e)=>setBrandId(e.target.value ? Number(e.target.value) : ""),
                                                            className: "border rounded px-2 py-1.5 text-sm bg-white flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 21
                                                                }, this),
                                                                brands.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: b.id,
                                                                        children: b.name
                                                                    }, b.id, false, {
                                                                        fileName: "[project]/app/admin/add-product/page.tsx",
                                                                        lineNumber: 488,
                                                                        columnNumber: 23
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: handleCreateBrand,
                                                            className: "text-[11px] px-2 py-1 border rounded bg-white text-gray-700 hover:bg-gray-100",
                                                            children: "+ New"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3 md:grid-cols-4 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-gray-600",
                                                    children: "Base price (USD) *"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    step: "0.01",
                                                    value: basePrice,
                                                    onChange: (e)=>setBasePrice(e.target.value),
                                                    className: "border rounded px-2 py-1.5 text-sm bg-white",
                                                    placeholder: "3.50"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 505,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 text-xs text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "discounted",
                                                    type: "checkbox",
                                                    checked: isDiscounted,
                                                    onChange: (e)=>setIsDiscounted(e.target.checked)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 17
                                                }, this),
                                                "Discounted item"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 518,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 text-xs text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "active",
                                                    type: "checkbox",
                                                    checked: isActive,
                                                    onChange: (e)=>setIsActive(e.target.checked)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 529,
                                                    columnNumber: 17
                                                }, this),
                                                "Active (visible)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 528,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 text-xs text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "concept",
                                                    type: "checkbox",
                                                    checked: isConcept,
                                                    onChange: (e)=>setIsConcept(e.target.checked)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 17
                                                }, this),
                                                "Concept / import-only"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 538,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                    lineNumber: 504,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-gray-600",
                                            children: "Tags (comma separated)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 550,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: tags,
                                            onChange: (e)=>setTags(e.target.value),
                                            className: "border rounded px-2 py-1.5 text-sm bg-white",
                                            placeholder: "corn flakes, breakfast, baraka"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 551,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                    lineNumber: 549,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/add-product/page.tsx",
                            lineNumber: 410,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "grid gap-6 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xs font-semibold uppercase text-gray-700",
                                            children: "Variants"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 564,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-gray-600",
                                            children: "Add one or more variants (e.g. 500g, 1kg, 6-pack)."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 565,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                variantRows.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border rounded px-3 py-2 space-y-2 bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 flex flex-col gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "text-xs text-gray-600",
                                                                                children: "Label"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/add-product/page.tsx",
                                                                                lineNumber: 574,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                value: row.label,
                                                                                onChange: (e)=>{
                                                                                    const val = e.target.value;
                                                                                    setVariantRows((prev)=>{
                                                                                        const copy = [
                                                                                            ...prev
                                                                                        ];
                                                                                        copy[idx] = {
                                                                                            ...copy[idx],
                                                                                            label: val
                                                                                        };
                                                                                        return copy;
                                                                                    });
                                                                                },
                                                                                className: "border rounded px-2 py-1.5 text-xs bg-white",
                                                                                placeholder: "500g, 1kg, 6-pack..."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/add-product/page.tsx",
                                                                                lineNumber: 575,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/add-product/page.tsx",
                                                                        lineNumber: 573,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    variantRows.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            setVariantRows((prev)=>prev.filter((_, i)=>i !== idx));
                                                                        },
                                                                        className: "text-[11px] text-red-600",
                                                                        children: "Remove"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/add-product/page.tsx",
                                                                        lineNumber: 590,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/add-product/page.tsx",
                                                                lineNumber: 572,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid gap-2 grid-cols-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "text-xs text-gray-600",
                                                                                children: "Price"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/add-product/page.tsx",
                                                                                lineNumber: 604,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                min: "0",
                                                                                step: "0.01",
                                                                                value: row.price,
                                                                                onChange: (e)=>{
                                                                                    const val = e.target.value;
                                                                                    setVariantRows((prev)=>{
                                                                                        const copy = [
                                                                                            ...prev
                                                                                        ];
                                                                                        copy[idx] = {
                                                                                            ...copy[idx],
                                                                                            price: val
                                                                                        };
                                                                                        return copy;
                                                                                    });
                                                                                },
                                                                                className: "border rounded px-2 py-1.5 text-xs bg-white",
                                                                                placeholder: "3.50"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/add-product/page.tsx",
                                                                                lineNumber: 605,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/add-product/page.tsx",
                                                                        lineNumber: 603,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "text-xs text-gray-600",
                                                                                children: "MRP"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/add-product/page.tsx",
                                                                                lineNumber: 623,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                min: "0",
                                                                                step: "0.01",
                                                                                value: row.mrp,
                                                                                onChange: (e)=>{
                                                                                    const val = e.target.value;
                                                                                    setVariantRows((prev)=>{
                                                                                        const copy = [
                                                                                            ...prev
                                                                                        ];
                                                                                        copy[idx] = {
                                                                                            ...copy[idx],
                                                                                            mrp: val
                                                                                        };
                                                                                        return copy;
                                                                                    });
                                                                                },
                                                                                className: "border rounded px-2 py-1.5 text-xs bg-white",
                                                                                placeholder: "4.00"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/add-product/page.tsx",
                                                                                lineNumber: 624,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/add-product/page.tsx",
                                                                        lineNumber: 622,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col gap-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "text-xs text-gray-600",
                                                                                children: "Stock"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/add-product/page.tsx",
                                                                                lineNumber: 642,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                min: "0",
                                                                                step: "1",
                                                                                value: row.stock,
                                                                                onChange: (e)=>{
                                                                                    const val = e.target.value;
                                                                                    setVariantRows((prev)=>{
                                                                                        const copy = [
                                                                                            ...prev
                                                                                        ];
                                                                                        copy[idx] = {
                                                                                            ...copy[idx],
                                                                                            stock: val
                                                                                        };
                                                                                        return copy;
                                                                                    });
                                                                                },
                                                                                className: "border rounded px-2 py-1.5 text-xs bg-white",
                                                                                placeholder: "120"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/add-product/page.tsx",
                                                                                lineNumber: 643,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/add-product/page.tsx",
                                                                        lineNumber: 641,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/add-product/page.tsx",
                                                                lineNumber: 602,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/app/admin/add-product/page.tsx",
                                                        lineNumber: 571,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setVariantRows((prev)=>[
                                                                ...prev,
                                                                {
                                                                    label: "",
                                                                    price: "",
                                                                    mrp: "",
                                                                    stock: ""
                                                                }
                                                            ]),
                                                    className: "text-[11px] px-3 py-1.5 border border-dashed rounded text-gray-700 bg-white",
                                                    children: "+ Add another variant"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 569,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                    lineNumber: 563,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xs font-semibold uppercase text-gray-700",
                                            children: "Primary image"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 681,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-gray-600",
                                            children: "Upload from your computer or paste a public image URL."
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 682,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-gray-600",
                                                    children: "Upload from computer"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 687,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "image/*",
                                                    onChange: (e)=>{
                                                        const file = e.target.files?.[0] || null;
                                                        setImageFile(file);
                                                    },
                                                    className: "block w-full text-xs text-gray-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 688,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 686,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-gray-600",
                                                    children: "Or paste image URL"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 700,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: imageUrl,
                                                    onChange: (e)=>setImageUrl(e.target.value),
                                                    className: "border rounded px-2 py-1.5 text-sm bg-white w-full",
                                                    placeholder: "https://.../product-images/products/example.webp"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                                    lineNumber: 701,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 699,
                                            columnNumber: 15
                                        }, this),
                                        (imageFile || imageUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border rounded px-3 py-2 bg-white flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: imageFile ? URL.createObjectURL(imageFile) : imageUrl,
                                                alt: "Preview",
                                                className: "max-h-40 object-contain",
                                                onError: (e)=>{
                                                    e.target.style.display = "none";
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/add-product/page.tsx",
                                                lineNumber: 712,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/add-product/page.tsx",
                                            lineNumber: 710,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/add-product/page.tsx",
                                    lineNumber: 680,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/add-product/page.tsx",
                            lineNumber: 561,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: loading,
                                className: "px-4 py-2 text-sm rounded bg-blue-600 text-white disabled:opacity-60",
                                children: loading ? "Saving..." : "Save product"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/add-product/page.tsx",
                                lineNumber: 727,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/admin/add-product/page.tsx",
                            lineNumber: 726,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/add-product/page.tsx",
                    lineNumber: 364,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/add-product/page.tsx",
            lineNumber: 337,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/add-product/page.tsx",
        lineNumber: 336,
        columnNumber: 5
    }, this);
}
_s(AddProductPage, "5j5E4Zy+lg04PpRwBmg+BP5OqBc=");
_c = AddProductPage;
var _c;
__turbopack_context__.k.register(_c, "AddProductPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a90ca43e._.js.map