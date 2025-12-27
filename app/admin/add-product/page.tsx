// app/admin/add-product/page.tsx
"use client";

import { useEffect, useState, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";

type Category = {
  id: number;
  name_en: string;
  slug: string;
};

type Subcategory = {
  id: number;
  category_id: number;
  name_en: string;
  slug: string;
};

type Brand = {
  id: number;
  name: string;
  slug: string;
};

type VariantForm = {
  label: string;
  price: string;
  mrp: string;
  stock: string;
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function AddProductPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);

  const [categoryId, setCategoryId] = useState<number | "">("");
  const [subcategoryId, setSubcategoryId] = useState<number | "">("");
  const [brandId, setBrandId] = useState<number | "">("");

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [slugDirty, setSlugDirty] = useState(false);
  const [basePrice, setBasePrice] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [isDiscounted, setIsDiscounted] = useState(false);
  const [tags, setTags] = useState(""); // comma separated
  const [isActive, setIsActive] = useState(true);
  const [isConcept, setIsConcept] = useState(false);

  // VARIANTS: allow multiple
  const [variantRows, setVariantRows] = useState<VariantForm[]>([
    { label: "", price: "", mrp: "", stock: "" },
  ]);

  // PRIMARY IMAGE: either URL or uploaded file
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(
    null
  );

  // --- Load reference data on mount ---
  useEffect(() => {
    const loadMeta = async () => {
      const [catRes, subRes, brandRes] = await Promise.all([
        supabase.from("categories").select("id,name_en,slug").order("id"),
        supabase.from("subcategories").select("id,category_id,name_en,slug").order("id"),
        supabase.from("brands").select("id,name,slug").order("name"),
      ]);

      if (!catRes.error && catRes.data) setCategories(catRes.data as Category[]);
      if (!subRes.error && subRes.data) setSubcategories(subRes.data as Subcategory[]);
      if (!brandRes.error && brandRes.data) setBrands(brandRes.data as Brand[]);
    };

    loadMeta();
  }, []);

  // auto-generate slug from name until user manually edits slug
  useEffect(() => {
    if (!name) {
      if (!slugDirty) setSlug("");
      return;
    }
    if (slugDirty) return; // user manually edited slug, don't override

    setSlug(slugify(name));
  }, [name, slugDirty]);
  const handleCreateBrand = async () => {
    const name = window.prompt("New brand name");
    if (!name) return;

    const newSlug = slugify(name);

    const { data, error } = await supabase
      .from("brands")
      .insert({ name, slug: newSlug })
      .select("id,name,slug")
      .single();

    if (error || !data) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Failed to create brand. Please try again.",
      });
      return;
    }

    const brand = data as Brand;
    setBrands((prev) => [...prev, brand]);
    setBrandId(brand.id);
    setStatus({ type: "success", message: `Brand "${brand.name}" created.` });
  };

  const filteredSubcategories = subcategories.filter((s) =>
    categoryId ? s.category_id === Number(categoryId) : true
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const missing: string[] = [];
    if (!name.trim()) missing.push("Product name");
    if (!slug.trim()) missing.push("Slug");
    if (!categoryId) missing.push("Category");
    if (!subcategoryId) missing.push("Subcategory");
    if (!brandId) missing.push("Brand");
    if (!basePrice) missing.push("Base price");

    if (missing.length) {
      setStatus({
        type: "error",
        message: `Please fill in all required fields: ${missing.join(", ")}.`,
      });
      return;
    }

    setLoading(true);
    try {
      // Insert product
      const { data: product, error: productError } = await supabase
        .from("products")
        .insert({
          name,
          slug,
          long_description: longDescription || "",
          category_id: Number(categoryId),
          subcategory_id: Number(subcategoryId),
          brand_id: Number(brandId),
          is_discounted: isDiscounted,
          base_price: Number(basePrice),
          tags: tags
            ? tags
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean)
            : null,
          is_active: isActive,
          is_concept: isConcept,
        })
        .select("id")
        .single();

      if (productError || !product) {
        setStatus({
          type: "error",
          message:
            productError?.message ||
            "Failed to create product – check that category, subcategory and brand are valid.",
        });
        setLoading(false);
        return;
      }

      const productId = product.id as number;

      // Insert all valid variants (multiple rows)
      const variantPayloads = variantRows
        .filter((v) => v.label && v.price)
        .map((v) => ({
          product_id: productId,
          label: v.label.trim(),
          sku: `${slug}-${v.label.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`,
          price: Number(v.price),
          mrp: v.mrp ? Number(v.mrp) : Number(v.price),
          stock: v.stock ? Number(v.stock) : 0,
        }));

      if (variantPayloads.length > 0) {
        const { error: variantError } = await supabase
          .from("product_variants")
          .insert(variantPayloads);

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

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(filePath, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) {
          console.error(uploadError);
          throw new Error("Product created but image upload failed");
        }

        const { data: publicUrlData } = supabase.storage
          .from("product-images")
          .getPublicUrl(uploadData.path);

        finalImageUrl = publicUrlData.publicUrl || finalImageUrl;
      }

      if (finalImageUrl) {
        const { error: imgError } = await supabase.from("product_images").insert({
          product_id: productId,
          url: finalImageUrl,
          is_primary: true,
        });

        if (imgError) {
          console.error(imgError);
          throw new Error("Product created but image insert failed");
        }
      }

      setStatus({ type: "success", message: "Product created successfully." });

      // Clear form (keep some defaults for fast multi-entry)
      setName("");
      setSlug("");
      setBasePrice("");
      setLongDescription("");
      setIsDiscounted(false);
      setIsConcept(false);
      setTags("");
      setVariantRows([{ label: "", price: "", mrp: "", stock: "" }]);
      setImageUrl("");
      setImageFile(null);
      // keep category / subcategory / brand as is to add similar products fast
    } catch (err: any) {
      setStatus({ type: "error", message: err?.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-4 py-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h1 className="text-xl font-semibold">Add new product</h1>
            <p className="text-xs text-gray-600 mt-1">
              Fill in the basic details, variants, and image. Keep it simple.
            </p>
          </div>
          <span className="text-[11px] px-2 py-1 rounded border border-gray-300 text-gray-600">
            MatoMart · Admin
          </span>
        </header>

        {/* Status */}
        {status && (
          <div
            className={`mb-4 rounded border px-3 py-2 text-xs ${
              status.type === "success"
                ? "border-green-500 bg-green-50 text-green-800"
                : "border-red-500 bg-red-50 text-red-800"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 text-sm">
          {/* Basic info */}
          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase text-gray-700">Basic info</h2>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-600">Product name *</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded px-2 py-1.5 text-sm bg-white"
                  placeholder="Baraka Corn Flakes 500g"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-600">Slug (URL) *</label>
                <input
                  value={slug}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSlug(val);
                    // mark slug as manually edited if it has any content
                    setSlugDirty(val.trim().length > 0);
                  }}
                  className="border rounded px-2 py-1.5 text-sm bg-white"
                  placeholder="baraka-corn-flakes-500g"
                />
                <p className="text-[11px] text-gray-500">
                  /product/{slug || "slug"}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-600">Long description</label>
              <textarea
                value={longDescription}
                onChange={(e) => setLongDescription(e.target.value)}
                rows={3}
                className="border rounded px-2 py-1.5 text-sm bg-white"
                placeholder="Describe the product..."
              />
            </div>
          </section>

          {/* Classification & pricing */}
          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase text-gray-700">Category & pricing</h2>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-600">Category *</label>
                <select
                  value={categoryId}
                  onChange={(e) =>
                    setCategoryId(e.target.value ? Number(e.target.value) : "")
                  }
                  className="border rounded px-2 py-1.5 text-sm bg-white"
                >
                  <option value="">Select</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name_en}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-600">Subcategory *</label>
                <select
                  value={subcategoryId}
                  onChange={(e) =>
                    setSubcategoryId(e.target.value ? Number(e.target.value) : "")
                  }
                  className="border rounded px-2 py-1.5 text-sm bg-white"
                >
                  <option value="">Select</option>
                  {filteredSubcategories.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name_en}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-600">Brand *</label>
                <div className="flex gap-2 items-center">
                  <select
                    value={brandId}
                    onChange={(e) =>
                      setBrandId(e.target.value ? Number(e.target.value) : "")
                    }
                    className="border rounded px-2 py-1.5 text-sm bg-white flex-1"
                  >
                    <option value="">Select</option>
                    {brands.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={handleCreateBrand}
                    className="text-[11px] px-2 py-1 border rounded bg-white text-gray-700 hover:bg-gray-100"
                  >
                    + New
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-4 items-center">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-600">Base price (USD) *</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={basePrice}
                  onChange={(e) => setBasePrice(e.target.value)}
                  className="border rounded px-2 py-1.5 text-sm bg-white"
                  placeholder="3.50"
                />
              </div>

              <label className="flex items-center gap-2 text-xs text-gray-700">
                <input
                  id="discounted"
                  type="checkbox"
                  checked={isDiscounted}
                  onChange={(e) => setIsDiscounted(e.target.checked)}
                />
                Discounted item
              </label>

              <label className="flex items-center gap-2 text-xs text-gray-700">
                <input
                  id="active"
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                />
                Active (visible)
              </label>

              <label className="flex items-center gap-2 text-xs text-gray-700">
                <input
                  id="concept"
                  type="checkbox"
                  checked={isConcept}
                  onChange={(e) => setIsConcept(e.target.checked)}
                />
                Concept / import-only
              </label>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-600">Tags (comma separated)</label>
              <input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="border rounded px-2 py-1.5 text-sm bg-white"
                placeholder="corn flakes, breakfast, baraka"
              />
            </div>
          </section>

          {/* Variants and image side by side */}
          <section className="grid gap-6 md:grid-cols-2">
            {/* Variants */}
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase text-gray-700">Variants</h2>
              <p className="text-[11px] text-gray-600">
                Add one or more variants (e.g. 500g, 1kg, 6-pack).
              </p>

              <div className="space-y-3">
                {variantRows.map((row, idx) => (
                  <div key={idx} className="border rounded px-3 py-2 space-y-2 bg-white">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 flex flex-col gap-1">
                        <label className="text-xs text-gray-600">Label</label>
                        <input
                          value={row.label}
                          onChange={(e) => {
                            const val = e.target.value;
                            setVariantRows((prev) => {
                              const copy = [...prev];
                              copy[idx] = { ...copy[idx], label: val };
                              return copy;
                            });
                          }}
                          className="border rounded px-2 py-1.5 text-xs bg-white"
                          placeholder="500g, 1kg, 6-pack..."
                        />
                      </div>
                      {variantRows.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            setVariantRows((prev) => prev.filter((_, i) => i !== idx));
                          }}
                          className="text-[11px] text-red-600"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="grid gap-2 grid-cols-3">
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-gray-600">Price</label>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          value={row.price}
                          onChange={(e) => {
                            const val = e.target.value;
                            setVariantRows((prev) => {
                              const copy = [...prev];
                              copy[idx] = { ...copy[idx], price: val };
                              return copy;
                            });
                          }}
                          className="border rounded px-2 py-1.5 text-xs bg-white"
                          placeholder="3.50"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-gray-600">MRP</label>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          value={row.mrp}
                          onChange={(e) => {
                            const val = e.target.value;
                            setVariantRows((prev) => {
                              const copy = [...prev];
                              copy[idx] = { ...copy[idx], mrp: val };
                              return copy;
                            });
                          }}
                          className="border rounded px-2 py-1.5 text-xs bg-white"
                          placeholder="4.00"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-gray-600">Stock</label>
                        <input
                          type="number"
                          min="0"
                          step="1"
                          value={row.stock}
                          onChange={(e) => {
                            const val = e.target.value;
                            setVariantRows((prev) => {
                              const copy = [...prev];
                              copy[idx] = { ...copy[idx], stock: val };
                              return copy;
                            });
                          }}
                          className="border rounded px-2 py-1.5 text-xs bg-white"
                          placeholder="120"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() =>
                    setVariantRows((prev) => [
                      ...prev,
                      { label: "", price: "", mrp: "", stock: "" },
                    ])
                  }
                  className="text-[11px] px-3 py-1.5 border border-dashed rounded text-gray-700 bg-white"
                >
                  + Add another variant
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase text-gray-700">Primary image</h2>
              <p className="text-[11px] text-gray-600">
                Upload from your computer or paste a public image URL.
              </p>

              <div className="space-y-2">
                <label className="text-xs text-gray-600">Upload from computer</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setImageFile(file);
                  }}
                  className="block w-full text-xs text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-600">Or paste image URL</label>
                <input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="border rounded px-2 py-1.5 text-sm bg-white w-full"
                  placeholder="https://.../product-images/products/example.webp"
                />
              </div>

              {(imageFile || imageUrl) && (
                <div className="border rounded px-3 py-2 bg-white flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageFile ? URL.createObjectURL(imageFile) : imageUrl}
                    alt="Preview"
                    className="max-h-40 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>
          </section>

          {/* Submit */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-sm rounded bg-blue-600 text-white disabled:opacity-60"
            >
              {loading ? "Saving..." : "Save product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}