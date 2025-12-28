"use client";

import { useMemo } from "react";
import { useCart } from "@/context/CartContext";
import { productVariants } from "@/data/store";

export default function AddToCartButton({ productId }: { productId: number }) {
  const { items, addItem, setQty } = useCart();

  // Pick a default variant for this product (cheapest)
  const defaultVariantId = useMemo(() => {
    const vars = productVariants.filter((v) => v.product_id === productId);
    if (!vars.length) return null;
    const cheapest = vars.reduce((min, v) => (v.price < min.price ? v : min), vars[0]);
    return cheapest.id;
  }, [productId]);

  // Find cart line for this product+variant
  const item = items.find(
    (i) => i.productId === productId && i.variantId === defaultVariantId
  );

  const qty = item?.qty ?? 0;

  // NOT in cart → show Add
  if (!item) {
    return (
      <button
        onClick={() => addItem(productId, defaultVariantId, 1)}
        className="mt-2 w-full h-10 bg-[#0B6EA9] rounded-xl border-2 border-[#0B6EA9] text-white font-bold"
      >
        Add +
      </button>
    );
  }

  // IN cart → show − qty +
  return (
    <div className="mt-2 flex items-center gap-4">
      <button
        onClick={() => setQty(productId, defaultVariantId, qty - 1)}
        className="h-10 w-10 rounded-xl border bg-white text-[#0B6EA9] text-2xl font-bold grid place-items-center"
      >
        −
      </button>

      <span className="min-w-[60px] text-center text-black font-bold text-xl">
        {qty}
      </span>

      <button
        onClick={() => setQty(productId, defaultVariantId, qty + 1)}
        className="h-10 w-10 rounded-xl border bg-white text-[#0B6EA9] text-2xl font-bold grid place-items-center"
      >
        +
      </button>
    </div>
  );
}
