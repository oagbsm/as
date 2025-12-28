"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Simple outline icons using currentColor so they inherit text color
function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 11.5L12 3l9 8.5" />
      <path d="M5.5 10.5V20h13v-9.5" />
    </svg>
  );
}

function CategoriesIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12.5a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
      <path d="M5 20.25a7 7 0 0 1 14 0" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="20" r="1.25" />
      <circle cx="17" cy="20" r="1.25" />
      <path d="M3 4h2l1.6 10.2A1.5 1.5 0 0 0 8.1 15.5h8.8a1.5 1.5 0 0 0 1.48-1.2L19.8 8H7" />
    </svg>
  );
}

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const baseColor = "#0B3C6E"; // deep blue similar to screenshot

  const itemClass = (href: string) =>
    `grid place-items-center gap-1 text-[11px] ${
      isActive(href)
        ? "text-[#0B6EA9] font-extrabold"
        : "text-[#1e3a5f] font-medium"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5EEF4] z-50">
      <div className="mx-auto max-w-md relative grid grid-cols-5 py-2 text-[11px]" style={{ color: baseColor }}>
        {/* Home */}
        <Link href="/" className={itemClass("/")}>
          <HomeIcon />
          <span>Home</span>
        </Link>

        {/* Categories */}
        <Link href="/categories" className={itemClass("/categories")}>
          <CategoriesIcon />
          <span>Categories</span>
        </Link>

        {/* Center Explore button with circular logo */}
        <div className="relative grid place-items-center">
          <Link
            href="/explore"
            className={`-mt-6 h-14 w-14 rounded-full bg-[#E03C6F] text-white grid place-items-center shadow-lg border-4 border-white ${
              isActive("/explore") ? "ring-2 ring-[#E03C6F]/40" : ""
            }`}
            aria-label="Explore"
          >
            <span className="text-base font-extrabold tracking-tight">M</span>
          </Link>
          <span className="mt-5 text-[11px] font-semibold text-[#1e3a5f]">
            Explore
          </span>
        </div>

        {/* Profile */}
        <Link href="/profile" className={itemClass("/profile")}>
          <ProfileIcon />
          <span>Profile</span>
        </Link>

        {/* Cart */}
        <Link href="/cart" className={itemClass("/cart")}>
          <CartIcon />
          <span>Cart</span>
        </Link>
      </div>
    </nav>
  );
}
