"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const { items } = useCart();
  const count = (items ?? []).reduce((s, i) => s + i.qty, 0);

  return (
    <Link
      href="/cart"
      className="relative h-10 w-10 grid place-items-center rounded-full bg-[#0A5F91] text-white"
      aria-label="Go to cart"
    >
      🛒
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] px-1.5 rounded-full font-bold">
          {count}
        </span>
      )}
    </Link>
  );
}
