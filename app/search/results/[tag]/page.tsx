"use client";

import TopNavbar from "@/components/TopNavBar";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import {
  fetchAllProducts,
  fetchAllProductImages,
  fetchAllProductVariants,
  safeImg,
} from "@/lib/db";

export default function SearchResultsPage() {
  const { tag } = useParams();
  const decodedTag = decodeURIComponent(tag as string).trim().toLowerCase();

  const [products, setProducts] = useState<any[]>([]);
  const [productImages, setProductImages] = useState<any[]>([]);
  const [productVariants, setProductVariants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [prods, vars, imgs] = await Promise.all([
          fetchAllProducts(),
          fetchAllProductVariants(),
          fetchAllProductImages(),
        ]);
        setProducts(prods);
        setProductVariants(vars);
        setProductImages(imgs);
      } finally {
        setLoading(false);
      }
    })();
  }, [decodedTag]);

  const matched = useMemo(() => {
    if (!decodedTag) return [];

    return products.filter((p: any) => {
      const tags = Array.isArray(p.tags)
        ? p.tags.map((t: string) => String(t).toLowerCase().trim())
        : [];

      return tags.includes(decodedTag);
    });
  }, [products, decodedTag]);

  function getPrimaryImageUrl(productId: number) {
    const primary = productImages.find(
      (img: any) => img.product_id === productId && img.is_primary,
    );
    const anyImg = productImages.find((img: any) => img.product_id === productId);
    return safeImg(primary?.url || anyImg?.url || "/example.png");
  }

  function getBestVariant(productId: number, basePrice?: number) {
    const vars = productVariants.filter((v: any) => v.product_id === productId);
    if (vars.length === 0)
      return { price: basePrice ?? 0, mrp: null as number | null };
    const best = vars.reduce((min: any, v: any) => (v.price < min.price ? v : min), vars[0]);
    return { price: best.price, mrp: best.mrp ?? null };
  }

  return (
    <>
      <TopNavbar />

      <main className="max-w-md mx-auto p-4 bg-white min-h-screen text-[#0B6EA9] flex flex-col gap-4">
        {/* Heading */}
        <h2 className="text-lg font-semibold">
          Results for: <span className="font-bold">"{decodedTag}"</span>
        </h2>

        {/* Loading State */}
        {loading && (
          <div className="mt-10 text-center text-base">Loading products…</div>
        )}

        {/* No Results */}
        {!loading && matched.length === 0 && (
          <div className="text-center mt-8 text-base">
            No results found.
            <br />
            <a
              href="https://wa.me/252622073874"
              className="underline font-bold text-[#0B6EA9]"
            >
              Contact us on WhatsApp 📩
            </a>
          </div>
        )}

        {/* Product Grid */}
        {!loading && matched.length > 0 && (
          <section className="grid grid-cols-2 gap-4">
            {matched.map((p: any) => {
              const img = getPrimaryImageUrl(p.id);
              const { price, mrp } = getBestVariant(p.id, p.base_price);

              return (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl shadow-sm p-2 flex flex-col gap-2"
                >
                  <Link href={`/product/${p.slug}`} className="block">
                    <div className="relative">
                      <Image
                        src={img}
                        alt={p.name}
                        width={200}
                        height={200}
                        className="object-contain w-full h-40 rounded-lg bg-white"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium line-clamp-2">{p.name}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="font-bold text-md">{price ?? "—"} SOS</span>
                      {mrp && (
                        <span className="text-xs line-through text-gray-400">{mrp} SOS</span>
                      )}
                    </div>
                  </Link>

                  <button
                    onClick={() =>
                      window.dispatchEvent(
                        new CustomEvent("cart:add", { detail: { productId: p.id } }),
                      )
                    }
                    className="w-full bg-[#0B6EA9] text-white rounded-full py-2 mt-auto"
                  >
                    + Add to Cart
                  </button>
                </div>
              );
            })}
          </section>
        )}
      </main>
    </>
  );
}