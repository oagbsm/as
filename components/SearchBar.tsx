"use client";

import Link from "next/link";

export default function SearchBar({
  placeholder = "Search products & brands",
}: {
  placeholder?: string;
}) {
  return (
    <Link
      href="/search"
      className="flex-1 h-10 rounded-full bg-[#0A5F91] px-4 flex items-center gap-2 text-white text-sm"
    >
      <span className="opacity-80">🔎</span>
      <span className="opacity-90">{placeholder}</span>
    </Link>
  );
}
