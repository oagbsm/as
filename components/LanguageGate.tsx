"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/langCookie";
import { getLangCookie } from "@/lib/langCookie";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageGate() {
  const { setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = getLangCookie();
    // if no cookie => show the picker
    setOpen(!saved);
  }, []);

  const choose = (l: Lang) => {
    setLang(l);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/40 grid place-items-center p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl">
        <div className="text-lg font-extrabold text-gray-900">Choose language</div>
        <div className="text-sm text-gray-600 mt-1">
          Doorasho luuqad / Select your language
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            onClick={() => choose("so")}
            className="rounded-2xl border p-4 hover:bg-gray-50 active:scale-[0.99] transition"
          >
            <div className="text-3xl">🇸🇴</div>
            <div className="mt-2 font-bold">Somali</div>
            <div className="text-xs text-gray-500">Af-Soomaali</div>
          </button>

          <button
            onClick={() => choose("en")}
            className="rounded-2xl border p-4 hover:bg-gray-50 active:scale-[0.99] transition"
          >
            <div className="text-3xl">🇬🇧</div>
            <div className="mt-2 font-bold">English</div>
            <div className="text-xs text-gray-500">English</div>
          </button>
        </div>
      </div>
    </div>
  );
}
