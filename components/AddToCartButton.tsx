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
        className="mt-2 w-full h-10 rounded-xl border-2 border-[#0B6EA9] text-[#0B6EA9] font-bold"
      >
        Add +
      </button>
    );
  }

  // IN cart → show − qty +
  return (
    <div className="mt-2 flex items-center justify-between">
      <button
        onClick={() => setQty(productId, defaultVariantId, qty - 1)}
        className="w-10 h-10 rounded-full bg-[#0B6EA9] text-white text-xl"
      >
        −
      </button>

      <span className="font-bold">{qty}</span>

      <button
        onClick={() => setQty(productId, defaultVariantId, qty + 1)}
        className="w-10 h-10 rounded-full bg-[#0B6EA9] text-white text-xl"
      >
        +
      </button>
    </div>
  );
}
