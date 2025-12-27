"use client";

import Link from "next/link";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <Link
      href="/search"
      className="flex items-center w-full h-10 rounded-md bg-white px-3 gap-2 text-sm text-gray-700 shadow-sm border border-gray-300"
    >
      {/* Left logo placeholder – you can replace with your brand logo */}
      <div className="h-5 w-5 rounded-md bg-[#0B6EA9] flex items-center justify-center text-white text-[11px] font-bold">
        M
      </div>

      <span className="flex-1 truncate text-[13px] text-gray-600 font-medium leading-snug">
        <span>Search </span>
        <span className="font-semibold text-gray-600">{placeholder}</span>
        <span> items</span>
      </span>

      <span className="text-[#0B6EA9] text-lg">🔍</span>
    </Link>
  );
}