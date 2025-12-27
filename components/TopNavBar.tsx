"use client";

import { usePathname, useRouter } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import { useLanguage } from "@/context/LanguageContext";

/* cookie helper */
function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

export default function TopNavbar() {
  const pathname = usePathname() || "/";
  const router = useRouter();

  const isSearchPage = pathname === "/search";

  const { lang, setLang } = useLanguage();

  const showBack =
    pathname !== "/" &&
    (pathname.startsWith("/product") ||
      pathname.startsWith("/subcategory") ||
      isSearchPage);

  const placeholderCount = "50,000+";

  return (
<header className="sticky top-0 z-50 bg-gradient-to-b from-[#6FB7E6] via-[#2E8CCF] to-[#0B6EA9]">
  <div className="mx-auto max-w-md px-2 pt-2 pb-2">
        {/* LANGUAGE TOGGLE */}
        <div className="flex justify-end mb-2">
          <div className="flex bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 gap-1 text-white text-xs font-medium border border-white/30">
            <button
              onClick={() => {
                setLang("so");
                setCookie("lang", "so");
              }}
              className={`px-2 py-0.5 rounded-full transition ${
                lang === "so"
                  ? "bg-white text-[#0B6EA9]"
                  : "text-white/80"
              }`}
            >
              SO
            </button>
            <button
              onClick={() => {
                setLang("en");
                setCookie("lang", "en");
              }}
              className={`px-2 py-0.5 rounded-full transition ${
                lang === "en"
                  ? "bg-white text-[#0B6EA9]"
                  : "text-white/80"
              }`}
            >
              EN
            </button>
          </div>
        </div>
        {/* ===== ROW 1 ===== */}
<div className="flex items-center gap-1 bg-white rounded-md px-2 py-1 shadow-sm border border-gray-200">
          {showBack && (
            <button
              onClick={() =>
                window.history.length > 1 ? router.back() : router.push("/")
              }
              className="h-10 w-10 rounded-full bg-[#0A5F91] text-white grid place-items-center"
              aria-label="Back"
            >
              ←
            </button>
          )}

          {!isSearchPage && (
            <div className="flex-1">
              <SearchBar placeholder={placeholderCount} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
