import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import CartIcon from "@/components/CartIcon";
import { useCart } from "@/context/CartContext";

import { products, productVariants, productImages, subcategories } from "@/data/store";
import ProductClient from "./product-client";
import BottomNav from "@/components/BottomNav";

function money(n: number) {
  return `₹${Number(n ?? 0).toFixed(0)}`;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const variants = productVariants.filter((v) => v.product_id === product.id);
  const images = productImages
    .filter((img) => img.product_id === product.id)
    .sort((a, b) => Number(b.is_primary) - Number(a.is_primary));

  const sub = subcategories.find((s) => s.id === product.subcategory_id);

  // Simple related: same subcategory, not same product
  const related = products
    .filter((p) => p.subcategory_id === product.subcategory_id && p.id !== product.id)
    .slice(0, 10);

  // Base price shown if no variants exist
  const basePrice = product.base_price ?? 0;

  return (
    <main className="min-h-screen bg-[#F4F6F8] pb-16">
      {/* ===== TOP BLUE HEADER (like JioMart) ===== */}
      <header className="sticky top-0 z-50 bg-[#0B6EA9]">
        <div className="mx-auto max-w-md px-3 py-2 flex items-center gap-2">
          <Link href="/" className="h-10 w-10 grid place-items-center rounded-full bg-[#0A5F91] text-white">
            ←
          </Link>

          <div className="flex-1 h-10 rounded-full bg-[#0A5F91] px-4 flex items-center text-white/90 text-sm">
            🔎 Search JioMart
          </div>

<CartIcon />

        </div>

        <div className="bg-white border-t">
          <div className="mx-auto max-w-md px-4 py-2 text-sm text-gray-800 flex items-center gap-2">
            📍 <span className="font-medium">Amin Ambulance Taleh</span> <span className="text-gray-500">▾</span>
          </div>
        </div>
      </header>

      {/* ===== PRODUCT HEADER CARD ===== */}
      <section className="mx-auto max-w-md bg-white border-b">
        <div className="px-4 pt-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="text-[#0B6EA9] text-sm font-semibold">
                {sub?.name ?? "Product"}
              </div>

              <h1 className="mt-1 text-sm font-semibold text-gray-900 leading-snug">
                {product.name}
              </h1>

              <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-gray-500">971</span>
                <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-orange-100 text-orange-700">
                  Trending
                </span>
              </div>
            </div>

            <button className="h-10 w-10 rounded-full border bg-white grid place-items-center text-gray-600">
              ♡
            </button>
          </div>
        </div>

        {/* Image area */}
        <div className="px-4 py-4">
          <div className="relative bg-gray-50 rounded-2xl border overflow-hidden">
            <div className="relative h-[360px] w-full">
              <Image
                src={images[0]?.url || "/example.png"}
                alt={product.name}
                fill
                className="object-contain p-6"
                priority
              />
            </div>

            {/* dots */}
            <div className="pb-3 flex justify-center gap-2">
              {Array.from({ length: Math.max(1, Math.min(images.length, 6)) }).map((_, i) => (
                <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-[#0B6EA9]" : "bg-gray-300"}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Buy box (client: variant selection + add) */}
        <ProductClient
          productId={product.id}
          basePrice={basePrice}
          variants={variants}
        />
      </section>

      {/* ===== DETAILS ===== */}
      <section className="mx-auto max-w-md bg-white mt-2 border-t border-b">
        <div className="px-4 py-4">
          <div className="text-base font-semibold text-gray-900">Product Details</div>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            {product.long_description || "No description available."}
          </p>
        </div>

        <div className="px-4 py-4 border-t">
          <div className="text-base font-semibold text-gray-900">Return Policy</div>
          <p className="mt-2 text-sm text-gray-700">
            This product is non-returnable. For more details, please refer to the policy.
          </p>
        </div>

        <div className="px-4 py-4 border-t flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-gray-900">Article ID</div>
            <div className="text-sm text-gray-600">PVKJTWVCE1</div>
          </div>
          <button className="h-10 w-10 rounded-xl border bg-white grid place-items-center">📋</button>
        </div>
      </section>

      {/* ===== YOU MAY ALSO LIKE (horizontal) ===== */}
      <section className="mx-auto max-w-md bg-white mt-2 border-t border-b">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="text-base font-semibold text-gray-900">You may also like</div>
        </div>

        <div className="px-4 pb-4 overflow-x-auto">
          <div className="flex gap-3">
            {related.map((p) => {
              const img = productImages.find((im) => im.product_id === p.id && im.is_primary)?.url
                || productImages.find((im) => im.product_id === p.id)?.url
                || "/example.png";

              const vars = productVariants.filter((v) => v.product_id === p.id);
              const best = vars.length
                ? vars.reduce((min, v) => (v.price < min.price ? v : min), vars[0])
                : null;

              const price = best?.price ?? p.base_price ?? 0;
              const mrp = best?.mrp ?? null;
              const offPct = mrp ? Math.round(((mrp - price) / mrp) * 100) : null;

              return (
                <div key={p.id} className="min-w-[155px] bg-white border rounded-2xl overflow-hidden shadow-sm">
                  <div className="p-2 flex justify-end text-gray-500">♡</div>

                  <Link href={`/product/${p.slug}`} className="block px-3">
                    <Image src={img} alt={p.name} width={160} height={160} className="mx-auto h-28 w-auto object-contain" />
                  </Link>

                  <div className="px-3 pb-3">
                    <div className="text-[11px] text-gray-500">Sponsored</div>
                    <div className="text-[12px] font-medium text-gray-900 line-clamp-2 min-h-[32px]">
                      {p.name}
                    </div>

                    <div className="mt-1 flex items-end gap-2">
                      <div className="font-extrabold text-gray-900 text-sm">{money(price)}</div>
                      {mrp ? <div className="text-[11px] text-gray-400 line-through">{money(mrp)}</div> : null}
                    </div>

                    {offPct ? (
                      <div className="text-[11px] font-semibold text-green-700">{offPct}% OFF</div>
                    ) : (
                      <div className="h-[14px]" />
                    )}

<AddToCartButton productId={p.id} />

                  </div>
                </div>
              );
            })}

            {related.length === 0 && (
              <div className="text-sm text-gray-600">No related products yet.</div>
            )}
          </div>
        </div>
      </section>

<BottomNav />
    </main>
  );
}
