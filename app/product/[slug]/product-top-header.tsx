"use client";

import Link from "next/link";
import CartIcon from "@/components/CartIcon";
import { useLanguage } from "@/context/LanguageContext";

function getLabel(obj: any, lang: "so" | "en") {
  const so = obj?.name_so ?? obj?.name ?? "Alaab";
  const en = obj?.name_en ?? obj?.name ?? "Product";
  return lang === "en" ? en : so;
}

export function SubcategoryLabel({ sub }: { sub: any }) {
  const { lang } = useLanguage();
  return (
    <div className="text-[#0B6EA9] text-sm font-semibold">
      {sub ? getLabel(sub, lang) : lang === "en" ? "Product" : "Alaab"}
    </div>
  );
}

export default function ProductTopHeader() {
  const { lang } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-[#0B6EA9]">
      <div className="mx-auto max-w-md px-3 py-2 flex items-center gap-2">
        <Link
          href="/"
          className="h-10 w-10 grid place-items-center rounded-full bg-[#0A5F91] text-white"
          aria-label={lang === "en" ? "Back" : "Dib u noqo"}
        >
          ←
        </Link>

        <div className="flex-1 h-10 rounded-full bg-[#0A5F91] px-4 flex items-center text-white/90 text-sm">
          🔎 {lang === "en" ? "Search JioMart" : "Raadi JioMart"}
        </div>

        <CartIcon />
      </div>

      <div className="bg-white border-t">
        <div className="mx-auto max-w-md px-4 py-2 text-sm text-gray-800 flex items-center gap-2">
          📍 <span className="font-medium">Amin Ambulance Taleh</span>{" "}
          <span className="text-gray-500">▾</span>
        </div>
      </div>
    </header>
  );
}
