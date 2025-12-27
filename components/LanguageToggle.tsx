"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full bg-[#0A5F91] p-1">
      <button
        onClick={() => setLang("so")}
        className={`h-10 w-10 rounded-full grid place-items-center text-sm font-extrabold transition ${
          lang === "so" ? "bg-white text-[#0B6EA9]" : "text-white/90"
        }`}
        aria-label="Somali"
        title="Somali"
      >
        🇸🇴
      </button>

      <button
        onClick={() => setLang("en")}
        className={`h-10 w-10 rounded-full grid place-items-center text-sm font-extrabold transition ${
          lang === "en" ? "bg-white text-[#0B6EA9]" : "text-white/90"
        }`}
        aria-label="English"
        title="English"
      >
        🇬🇧
      </button>
    </div>
  );
}
