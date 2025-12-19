"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

type Variant = {
  id: number;
  product_id: number;
  label: string;
  sku: string;
  price: number;
  mrp?: number;
  stock: number;
};

type ProductImage = {
  id: number;
  product_id: number;
  url: string;
  is_primary?: boolean;
  variant_id?: number;
};

function money(n: number) {
  return `₹${Number(n ?? 0).toFixed(0)}`;
}

export default function ProductClient({
  productId,
  productName,
  basePrice,
  variants,
  images,
}: {
  productId: number;
  productName: string;
  basePrice: number;
  variants: Variant[];
  images: ProductImage[];
}) {
  const { addItem } = useCart();

  const [selectedId, setSelectedId] = useState<number | null>(
    variants[0]?.id ?? null
  );
  const [qty, setQty] = useState(1);
  const [slide, setSlide] = useState(0);

  const selected = useMemo(() => {
    if (!variants.length) return null;
    return variants.find((v) => v.id === selectedId) ?? variants[0];
  }, [variants, selectedId]);

  const price = selected?.price ?? basePrice;
  const mrp = selected?.mrp ?? null;
  const offPct = mrp ? Math.round(((mrp - price) / mrp) * 100) : null;

  // ✅ slideshow list: variant-specific first; fallback to product images
  const slideImages = useMemo(() => {
    const variantImgs =
      selected?.id != null ? images.filter((im) => im.variant_id === selected.id) : [];

    const baseImgs = images.filter((im) => !im.variant_id);

    const list = (variantImgs.length ? variantImgs : baseImgs).sort(
      (a, b) => Number(!!b.is_primary) - Number(!!a.is_primary)
    );

    return list.length
      ? list
      : [{ id: -1, product_id: productId, url: "/example.png" }];
  }, [images, selected?.id, productId]);

  // reset slide whenever variant changes or list changes
  useEffect(() => {
    setSlide(0);
  }, [selected?.id, slideImages.length]);

  const activeUrl =
    slideImages[Math.min(slide, slideImages.length - 1)]?.url ?? "/example.png";

  const maxStock = selected?.stock ?? 999999;
  const canDec = qty > 1;
  const canInc = qty < maxStock;

  function prev() {
    if (slideImages.length <= 1) return;
    setSlide((s) => (s - 1 + slideImages.length) % slideImages.length);
  }
  function next() {
    if (slideImages.length <= 1) return;
    setSlide((s) => (s + 1) % slideImages.length);
  }

  function onAdd() {
    // ✅ store variant in cart so 5kg != 10kg
    addItem(productId, selected?.id ?? null, qty);
  }

  return (
    <div className="px-4 pb-4">
      {/* ✅ SLIDESHOW (one image only) */}
      <div className="py-4">
        <div className="relative bg-gray-50 rounded-2xl border overflow-hidden">
          <div className="relative h-[360px] w-full">
            <Image
              src={activeUrl}
              alt={productName}
              fill
              className="object-contain p-6"
              priority
            />
          </div>

          {slideImages.length > 1 ? (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 border grid place-items-center"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 border grid place-items-center"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>

              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {slideImages.slice(0, 6).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`h-2.5 w-2.5 rounded-full border ${
                      i === slide
                        ? "bg-[#0B6EA9] border-[#0B6EA9]"
                        : "bg-white"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>

      {/* PRICE */}
      <div className="flex items-end gap-3">
        <div className="text-xl font-extrabold text-gray-900">{money(price)}</div>
        {offPct ? (
          <div className="text-sm font-semibold text-green-700">{offPct}% Off</div>
        ) : null}
      </div>

      {mrp ? (
        <div className="mt-1 text-sm text-gray-700">
          M.R.P: <span className="line-through text-gray-400">{money(mrp)}</span>{" "}
          <span className="text-gray-500">(incl. of all taxes)</span>
        </div>
      ) : (
        <div className="mt-1 text-sm text-gray-500">(incl. of all taxes)</div>
      )}

      {/* VARIANTS */}
      {variants.length > 0 ? (
        <div className="mt-3">
          <div className="text-sm font-semibold text-gray-900">Pack size</div>
          <div className="mt-2 flex gap-2 flex-wrap">
            {variants.map((v) => {
              const active = v.id === selectedId;
              return (
                <button
                  key={v.id}
                  onClick={() => {
                    setSelectedId(v.id);
                    setQty(1);
                  }}
                  className={`px-3 py-2 rounded-xl border text-sm ${
                    active
                      ? "border-[#0B6EA9] bg-[#EAF4FB] text-[#0B6EA9] font-bold"
                      : "bg-white"
                  }`}
                >
                  {v.label}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {/* QUANTITY */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm font-semibold text-gray-900">Quantity</div>

        <div className="flex items-center gap-2">
          <button
            disabled={!canDec}
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className={`h-10 w-10 rounded-xl border grid place-items-center ${
              canDec ? "bg-white" : "bg-gray-100 text-gray-400"
            }`}
          >
            −
          </button>

          <div className="min-w-[44px] text-center font-extrabold">{qty}</div>

          <button
            disabled={!canInc}
            onClick={() => setQty((q) => q + 1)}
            className={`h-10 w-10 rounded-xl border grid place-items-center ${
              canInc ? "bg-white" : "bg-gray-100 text-gray-400"
            }`}
          >
            +
          </button>
        </div>
      </div>

      {/* ADD */}
      <button
        onClick={onAdd}
        className="mt-4 w-full h-12 rounded-2xl bg-[#0B6EA9] text-white font-extrabold text-base"
      >
        Add to Cart
      </button>

      <div className="mt-2 text-xs text-gray-500">Product ID: {productId}</div>
    </div>
  );
}
