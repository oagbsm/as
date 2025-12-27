"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const itemClass = (href: string) =>
    `grid place-items-center gap-1 text-[11px] ${
      isActive(href) ? "text-[#0B6EA9] font-extrabold" : "text-gray-700"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
      <div className="mx-auto max-w-md relative grid grid-cols-5 py-2">
        {/* Home */}
        <Link href="/" className={itemClass("/")}>
          <span className="text-lg leading-none">🏠</span>
          <span>Home</span>
        </Link>

        {/* Categories */}
        <Link href="/categories" className={itemClass("/categories")}>
          <span className="text-lg leading-none">📂</span>
          <span>Categories</span>
        </Link>

        {/* ✅ Center big “Shop Fast” */}
        <div className="relative grid place-items-center">
          <Link
            href="/fast"
            className={`-mt-6 h-14 w-14 rounded-full bg-[#0B6EA9] text-white grid place-items-center shadow-lg border-4 border-white ${
              isActive("/fast") ? "ring-2 ring-[#0B6EA9]/30" : ""
            }`}
            aria-label="Shop Fast"
          >
            <span className="text-xl leading-none">⚡</span>
          </Link>

        </div>

        {/* Cart */}
        <Link href="/cart" className={itemClass("/cart")}>
          <span className="text-lg leading-none">🛒</span>
          <span>Cart</span>
        </Link>

        {/* Profile */}
        <Link href="/profile" className={itemClass("/profile")}>
          <span className="text-lg leading-none">👤</span>
          <span>Profile</span>
        </Link>
      </div>
    </nav>
  );
}
