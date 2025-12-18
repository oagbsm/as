"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ productId }: { productId: number }) {
  const { items, addItem, setQty } = useCart();

  const item = items.find((i) => i.productId === productId);
  const qty = item?.qty ?? 0;

  // NOT in cart → show Add
  if (!item) {
    return (
      <button
        onClick={() => addItem(productId, 1)}
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
        onClick={() => setQty(productId, qty - 1)}
        className="w-10 h-10 rounded-full bg-[#0B6EA9] text-white text-xl"
      >
        −
      </button>

      <span className="font-bold">{qty}</span>

      <button
        onClick={() => setQty(productId, qty + 1)}
        className="w-10 h-10 rounded-full bg-[#0B6EA9] text-white text-xl"
      >
        +
      </button>
    </div>
  );
}
