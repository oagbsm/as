"use client";

import Link from "next/link";
import Image from "next/image";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import AddToCartButton from "@/components/AddToCartButton";
import { useLanguage } from "@/context/LanguageContext";

import {
  fetchAllCategories,
  fetchAllSubcategories,
  fetchAllProducts,
  fetchAllProductVariants,
  fetchAllProductImages,
  safeImg,
} from "@/lib/db";

const LS_KEY = "recent_searches_v1";
const MAX_RECENT = 10;

function loadRecent(): string[] {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveRecent(term: string) {
  const t = term.trim();
  if (!t) return;
  const prev = loadRecent();
  const next = [t, ...prev.filter((x) => x.toLowerCase() !== t.toLowerCase())].slice(0, MAX_RECENT);
  localStorage.setItem(LS_KEY, JSON.stringify(next));
}

function clearRecent() {
  localStorage.removeItem(LS_KEY);
}

function normalize(s: unknown) {
  return String(s ?? "")
    .toLowerCase()
    .trim()
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ");
}

function money(n: number) {
  return `₹${Number(n ?? 0).toFixed(0)}`;
}

function getLabel(obj: any, lang: "so" | "en") {
  const so = obj?.name_so ?? obj?.name ?? "";
  const en = obj?.name_en ?? obj?.name ?? "";
  return lang === "en" ? en : so;
}

function scoreProduct(termRaw: string, p: any) {
  const t = normalize(termRaw);
  if (!t) return 0;

  const tokens = t.split(" ").filter(Boolean);
  const name = normalize(p.name);
  const slug = normalize(p.slug);
  const desc = normalize(p.long_description);
  const tagsStr = Array.isArray(p.tags) ? p.tags.map(normalize).join(" ") : "";

  if (name === t) return 1000;
  if (slug === t) return 950;

  let score = 0;
  for (const tok of tokens) {
    if (name.includes(tok)) score += 150;
    if (slug.includes(tok)) score += 90;
    if (tagsStr.includes(tok)) score += 120;
    if (desc.includes(tok)) score += 20;
  }
  if (tokens[0] && name.startsWith(tokens[0])) score += 60;

  return score;
}

function highlightMatch(text: string, termRaw: string) {
  const t = termRaw.trim();
  if (!t) return text;
  const lowerText = text.toLowerCase();
  const lowerT = t.toLowerCase();
  const idx = lowerText.indexOf(lowerT);
  if (idx === -1) return text;

  return (
    <>
      {text.slice(0, idx)}
      <span className="font-semibold">{text.slice(idx, idx + t.length)}</span>
      {text.slice(idx + t.length)}
    </>
  );
}

function SearchPageInner() {
  const { lang } = useLanguage();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const searchParams = useSearchParams();
  const activeTag = searchParams.get("tag") || "";
  const isResults = !!activeTag;

  const [q, setQ] = useState("");
  const [recent, setRecent] = useState<string[]>([]);

  // ✅ Supabase data
  const [categories, setCategories] = useState<any[]>([]);
  const [subcategories, setSubcategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [productVariants, setProductVariants] = useState<any[]>([]);
  const [productImages, setProductImages] = useState<any[]>([]);

  useEffect(() => {
    setRecent(loadRecent());
    if (activeTag) {
      setQ(activeTag);
    }
    setTimeout(() => inputRef.current?.focus(), 50);

    (async () => {
      const [cats, subs, prods, vars, imgs] = await Promise.all([
        fetchAllCategories(),
        fetchAllSubcategories(),
        fetchAllProducts(),
        fetchAllProductVariants(),
        fetchAllProductImages(),
      ]);

      setCategories(cats);
      setSubcategories(subs);
      setProducts(prods);
      setProductVariants(vars);
      setProductImages(imgs);
    })();
  }, [activeTag]);

  const term = normalize(isResults ? activeTag : q);

  function getPrimaryImageUrl(productId: number) {
    const primary = productImages.find((img: any) => img.product_id === productId && img.is_primary);
    const anyImg = productImages.find((img: any) => img.product_id === productId);
    return safeImg(primary?.url || anyImg?.url || "/example.png");
  }

  function getBestVariant(productId: number, basePrice?: number) {
    const vars = productVariants.filter((v: any) => v.product_id === productId);
    if (vars.length === 0) return { price: basePrice ?? 0, mrp: null as number | null };
    const best = vars.reduce((min: any, v: any) => (v.price < min.price ? v : min), vars[0]);
    return { price: best.price, mrp: best.mrp ?? null };
  }

  const results = useMemo(() => {
    if (!term) return [];

    const scored = products
      .map((p: any) => {
        const cat = categories.find((c: any) => c.id === p.category_id);
        const sub = subcategories.find((s: any) => s.id === p.subcategory_id);

        const extraHay = normalize(
          `${cat?.name_so ?? ""} ${cat?.name_en ?? ""} ${sub?.name_so ?? ""} ${sub?.name_en ?? ""}`
        );

        const baseScore = scoreProduct(term, p);
        const tokens = term.split(" ").filter(Boolean);
        const extra = tokens.some((tok) => extraHay.includes(tok)) ? 30 : 0;

        const s = baseScore + extra;
        return s > 0 ? { p, s } : null;
      })
      .filter(Boolean) as any[];

    scored.sort((a, b) => b.s - a.s);
    return scored.slice(0, 30).map((x) => x.p);
  }, [term, products, categories, subcategories]);

  const suggestions = useMemo(() => {
    if (!term) return [];

    const tokens = term.split(" ").filter(Boolean);
    const tagScores = new Map<string, number>();

    products.forEach((p: any) => {
      if (!Array.isArray(p.tags)) return;

      p.tags.forEach((tag: string) => {
        const normTag = normalize(tag);
        let score = 0;

        for (const tok of tokens) {
          if (normTag.includes(tok)) score += 100;
          if (normTag.startsWith(tok)) score += 50;
        }

        if (score > 0) {
          const prev = tagScores.get(tag) ?? 0;
          if (score > prev) {
            tagScores.set(tag, score);
          }
        }
      });
    });

    return Array.from(tagScores.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([tag]) => tag);
  }, [term, products]);

  const popularCats = useMemo(() => categories.slice(0, 8), [categories]);
  const quickSubs = useMemo(() => subcategories.slice(0, 14), [subcategories]);
  const recommended = useMemo(() => products.slice(0, 10), [products]);

  function runSearch(tagOverride?: string) {
    const value = (tagOverride ?? q).trim();
    if (!value) return;
    saveRecent(value);
    setRecent(loadRecent());
    router.push(`/search/results/${encodeURIComponent(value)}`);
  }

  return (
    <main className="min-h-screen bg-white text-black pb-24">
      {/* FULL SCREEN SEARCH HEADER LIKE REFERENCE UI */}
      <section className="px-3 pt-3 pb-2 border-b border-gray-200">
        <div className="relative max-w-md mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              runSearch();
            }}
            className="flex items-center gap-3"
          >
            {/* Back button */}
            <button
              type="button"
              onClick={() =>
                typeof window !== "undefined" && window.history.length > 1
                  ? router.back()
                  : router.push("/")
              }
              className="h-9 w-9 rounded-full flex items-center justify-center border border-gray-300 bg-white"
              aria-label="Back"
            >
              <span className="text-xl leading-none text-gray-700">←</span>
            </button>

            {/* Search bar */}
            <div className="flex-1 h-11 rounded-full border border-[#4A6FB8] bg-white px-3 flex items-center gap-2">
              {/* Logo-style icon */}
              <div className="h-7 w-7 rounded-md border border-[#4A6FB8] flex items-center justify-center">
                <span className="text-lg font-extrabold text-[#4A6FB8]">m</span>
              </div>

              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={lang === "en" ? "Search" : "Raadi"}
                className="flex-1 outline-none text-base"
              />
            </div>

            {/* Clear button on the far right */}
            <button
              type="button"
              onClick={() => {
                setQ("");
                if (isResults) {
                  router.push("/search");
                }
              }}
              className="h-9 w-9 rounded-full flex items-center justify-center border border-gray-300 bg-white"
              aria-label="Clear"
            >
              <span className="text-xl leading-none text-gray-700">✕</span>
            </button>
          </form>

          {/* DROPDOWN SUGGESTIONS REMOVED */}
        </div>
      </section>
      {!isResults ? (
        // FULL-PAGE TAG LIST
        <section className="px-3 pt-4 pb-6">
          <div className="max-w-md mx-auto">
            {q && suggestions.length > 0 ? (
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {suggestions.map((tag: string) => (
                  <button
                    key={tag}
                    type="button"
                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 border-b last:border-b-0"
                    onClick={() => runSearch(tag)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full border border-gray-400 flex items-center justify-center">
                        <span className="text-gray-500">🔍</span>
                      </div>
                      <div className="text-base text-gray-900 text-left">
                        {highlightMatch(tag, q)}
                      </div>
                    </div>
                    <div className="text-2xl leading-none text-[#4A6FB8]">→</div>
                  </button>
                ))}
              </div>
            ) : q ? (
              // NO TAGS FOUND → WHATSAPP CONTACT
              <div className="bg-white border rounded-2xl p-4 text-sm text-gray-700">
                {lang === "en" ? (
                  <>
                    No matching tags found for <b>{q}</b>.
                    <br />
                    <span className="block mt-2 text-gray-700">
                      Can&apos;t find what you need? We can try to source it for you.
                    </span>
                    <span className="block mt-1 text-gray-700">
                      Do you want it yourself or know a shop that has it? Tap WhatsApp and send us details.
                    </span>
                  </>
                ) : (
                  <>
                    Calaamado ku habboon lagama helin <b>{q}</b>.
                    <br />
                    <span className="block mt-2 text-gray-700">
                      Ma helaysid waxaad raadineysay? Waxaan isku dayi karnaa inaan kuu soo helno.
                    </span>
                    <span className="block mt-1 text-gray-700">
                      Adigu ma rabtaa mise qof ama dukaan ayaad taqaannaa oo haysta? Riix WhatsApp oo
                      noogu soo dir faahfaahinta.
                    </span>
                  </>
                )}

                <a
                  href={`https://wa.me/252622073874?text=${encodeURIComponent(
                    `MatoMart - I can't find this item: "${q}". Please help me source it.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-[#0B6EA9] px-4 py-2 text-sm font-semibold text-white"
                >
                  WhatsApp
                </a>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-white text-black pb-24" />
      }
    >
      <SearchPageInner />
    </Suspense>
  );
}
