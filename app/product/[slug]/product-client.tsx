"use client";

import { useMemo, useState } from "react";

type Variant = {
  id: number;
  product_id: number;
  label: string;
  sku: string;
  price: number;
  mrp?: number;
  stock: number;
};

function money(n: number) {
  return `₹${Number(n ?? 0).toFixed(0)}`;
}

export default function ProductClient({
  productId,
  basePrice,
  variants,
}: {
  productId: number;
  basePrice: number;
  variants: Variant[];
}) {
  const [selectedId, setSelectedId] = useState<number | null>(variants[0]?.id ?? null);

  const selected = useMemo(() => {
    if (!variants.length) return null;
    return variants.find((v) => v.id === selectedId) ?? variants[0];
  }, [variants, selectedId]);

  const price = selected?.price ?? basePrice;
  const mrp = selected?.mrp ?? null;

  const offPct = mrp ? Math.round(((mrp - price) / mrp) * 100) : null;

  return (
    <div className="px-4 pb-4">
      {/* PRICE ROW */}
      <div className="flex items-end gap-3">
        <div className="text-xl font-extrabold text-gray-900">{money(price)}</div>
        {offPct ? (
          <div className="text-sm font-semibold text-green-700">{offPct}% Off</div>
        ) : null}
      </div>

      {/* MRP */}
      {mrp ? (
        <div className="mt-1 text-sm text-gray-700">
          M.R.P: <span className="line-through text-gray-400">{money(mrp)}</span>{" "}
          <span className="text-gray-500">(incl. of all taxes)</span>
        </div>
      ) : (
        <div className="mt-1 text-sm text-gray-500">(incl. of all taxes)</div>
      )}

      {/* VARIANTS (if exist) */}
      {variants.length > 0 ? (
        <div className="mt-3">
          <div className="text-sm font-semibold text-gray-900">Pack size</div>
          <div className="mt-2 flex gap-2 flex-wrap">
            {variants.map((v) => {
              const active = v.id === selectedId;
              return (
                <button
                  key={v.id}
                  onClick={() => setSelectedId(v.id)}
                  className={`px-3 py-2 rounded-xl border text-sm ${
                    active ? "border-[#0B6EA9] bg-[#EAF4FB] text-[#0B6EA9] font-bold" : "bg-white"
                  }`}
                >
                  {v.label}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {/* OFFER STRIP (like screenshot) */}
      <div className="mt-4 rounded-xl border bg-white px-3 py-3 text-sm text-gray-800 flex items-start gap-2">
        <span>🏷️</span>
        <div>
          <div className="font-semibold">Buy 2 &amp; Get Flat Rs 50 Off</div>
          <div className="text-gray-500">Code: DEAL50</div>
        </div>
      </div>

      {/* ADD BUTTON */}
      <button className="mt-4 w-full h-12 rounded-2xl bg-[#0B6EA9] text-white font-extrabold text-base">
        Add to Cart
      </button>

      <div className="mt-2 text-xs text-gray-500">
        Product ID: {productId}
      </div>
    </div>
  );
}
