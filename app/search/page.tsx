"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

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

export default function SearchPage() {
  const { lang } = useLanguage();
  const inputRef = useRef<HTMLInputElement | null>(null);

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
  }, []);

  const term = normalize(q);

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

  const popularCats = useMemo(() => categories.slice(0, 8), [categories]);
  const quickSubs = useMemo(() => subcategories.slice(0, 14), [subcategories]);
  const recommended = useMemo(() => products.slice(0, 10), [products]);

  function runSearch() {
    if (!q.trim()) return;
    saveRecent(q);
    setRecent(loadRecent());
  }

  return (
    <main className="min-h-screen bg-white text-black pb-24">
      {/* ✅ In-page Search (since you asked to hide navbar search on this page) */}
      <section className="mx-auto max-w-md px-4 pt-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            runSearch();
          }}
          className="flex items-center gap-2"
        >
          <div className="flex-1 h-11 rounded-full border bg-white px-4 flex items-center gap-2">
            <span className="text-gray-400">🔎</span>
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={lang === "en" ? "Search products & brands" : "Raadi alaab & summado"}
              className="flex-1 outline-none text-sm"
            />
            {q ? (
              <button type="button" onClick={() => setQ("")} className="text-gray-500 px-2">
                ✕
              </button>
            ) : null}
          </div>

          <button
            type="submit"
            className="h-11 px-4 rounded-full bg-[#0B6EA9] text-white font-extrabold text-sm"
          >
            {lang === "en" ? "Search" : "Raadi"}
          </button>
        </form>
      </section>

      {!term ? (
        <>
          {/* RECENT */}
          <section className="mx-auto max-w-md px-4 pt-6">
            <div className="flex items-center justify-between">
              <div className="font-extrabold text-gray-900">
                {lang === "en" ? "Recent Searches" : "Raadintii u dambeysay"}
              </div>
              {recent.length > 0 ? (
                <button
                  onClick={() => {
                    clearRecent();
                    setRecent([]);
                  }}
                  className="text-sm font-semibold text-[#0B6EA9]"
                >
                  {lang === "en" ? "Clear" : "Tirtir"}
                </button>
              ) : null}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {recent.length === 0 ? (
                <div className="text-sm text-gray-500">
                  {lang === "en" ? "No recent searches yet." : "Weli wax raadis ah ma jiraan."}
                </div>
              ) : (
                recent.map((r) => (
                  <button
                    key={r}
                    onClick={() => setQ(r)}
                    className="px-3 py-1.5 rounded-full bg-gray-100 text-sm"
                  >
                    {r}
                  </button>
                ))
              )}
            </div>
          </section>

          {/* POPULAR CATEGORIES */}
          <section className="mx-auto max-w-md px-4 pt-8">
            <div className="font-extrabold text-gray-900">
              {lang === "en" ? "Popular Categories" : "Qaybaha Caanka ah"}
            </div>

            <div className="mt-3 grid grid-cols-4 gap-3">
              {popularCats.map((cat: any) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  className="flex flex-col items-center text-center"
                >
                  <div className="h-14 w-14 rounded-full bg-blue-50 overflow-hidden grid place-items-center">
                    <Image
                      src={safeImg(cat.img)}
                      alt={getLabel(cat, lang)}
                      width={56}
                      height={56}
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="mt-2 text-[11px] leading-tight">{getLabel(cat, lang)}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* QUICK PICKS */}
          <section className="mx-auto max-w-md px-4 pt-8">
            <div className="font-extrabold text-gray-900">
              {lang === "en" ? "Quick Picks" : "Doorasho Degdeg ah"}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {quickSubs.map((sub: any) => (
                <Link
                  key={sub.id}
                  href={`/subcategory/${sub.slug}`}
                  className="px-3 py-1.5 rounded-full border bg-white text-sm"
                >
                  {getLabel(sub, lang)}
                </Link>
              ))}
            </div>
          </section>

          {/* RECOMMENDED */}
          <section className="mx-auto max-w-md px-4 pt-8">
            <div className="flex items-center justify-between">
              <div className="font-extrabold text-gray-900">
                {lang === "en" ? "Recommended for you" : "Kugula Talo Galay"}
              </div>
              <Link href="/" className="text-sm font-semibold text-[#0B6EA9]">
                {lang === "en" ? "Browse" : "Daawo"}
              </Link>
            </div>

            <div className="mt-4 space-y-3">
              {recommended.map((p: any) => {
                const img = getPrimaryImageUrl(p.id);
                const { price, mrp } = getBestVariant(p.id, p.base_price);
                const offPct = mrp && price ? Math.round(((mrp - price) / mrp) * 100) : null;

                return (
                  <div key={p.id} className="bg-white border rounded-2xl p-3 flex gap-3">
                    <Link
                      href={`/product/${p.slug}`}
                      className="w-24 h-24 rounded-xl bg-gray-50 border overflow-hidden grid place-items-center"
                    >
                      <Image src={img} alt={p.name} width={96} height={96} className="object-contain" />
                    </Link>

                    <div className="flex-1 min-w-0">
                      <Link href={`/product/${p.slug}`} className="block">
                        <div className="text-sm font-semibold text-gray-900 line-clamp-2">
                          {p.name}
                        </div>
                      </Link>

                      <div className="mt-2 flex items-end gap-2">
                        <div className="text-lg font-extrabold text-gray-900">{money(price)}</div>
                        {mrp ? (
                          <div className="text-sm text-gray-400 line-through">{money(mrp)}</div>
                        ) : null}
                        {offPct ? (
                          <div className="text-xs font-extrabold text-green-700 bg-green-50 px-2 py-1 rounded-full">
                            {offPct}% OFF
                          </div>
                        ) : null}
                      </div>

                      <div className="mt-3 max-w-[160px]">
                        <AddToCartButton productId={p.id} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      ) : (
        // RESULTS
        <section className="mx-auto max-w-md px-4 pt-6">
          <div className="flex items-center justify-between">
            <div className="font-extrabold text-gray-900">
              {lang === "en" ? "Search Results" : "Natiijooyinka Raadinta"}
              <span className="ml-2 text-sm text-gray-500">({results.length})</span>
            </div>
            <button onClick={() => setQ("")} className="text-sm font-semibold text-[#0B6EA9]">
              {lang === "en" ? "Clear" : "Tirtir"}
            </button>
          </div>

          <div className="mt-4 space-y-3">
            {results.length === 0 ? (
              <>
                <div className="bg-white border rounded-2xl p-4 text-sm text-gray-600">
                  {lang === "en" ? (
                    <>
                      No results for <b>{q}</b>.
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
                      Natiijo ma leh <b>{q}</b>.
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

                {recommended.length > 0 && (
                  <div className="mt-6">
                    <div className="font-extrabold text-gray-900">
                      {lang === "en" ? "You may like these instead" : "Kuwani ayaa laga yaabaa inay ku anficiyaan"}
                    </div>
                    <div className="mt-4 space-y-3">
                      {recommended.slice(0, 8).map((p: any) => {
                        const img = getPrimaryImageUrl(p.id);
                        const { price, mrp } = getBestVariant(p.id, p.base_price);
                        const offPct = mrp && price ? Math.round(((mrp - price) / mrp) * 100) : null;

                        return (
                          <div key={p.id} className="bg-white border rounded-2xl p-3 flex gap-3">
                            <Link
                              href={`/product/${p.slug}`}
                              className="w-24 h-24 rounded-xl bg-gray-50 border overflow-hidden grid place-items-center"
                            >
                              <Image src={img} alt={p.name} width={96} height={96} className="object-contain" />
                            </Link>

                            <div className="flex-1 min-w-0">
                              <Link href={`/product/${p.slug}`} className="block">
                                <div className="text-sm font-semibold text-gray-900 line-clamp-2">
                                  {p.name}
                                </div>
                              </Link>

                              <div className="mt-2 flex items-end gap-2">
                                <div className="text-lg font-extrabold text-gray-900">{money(price)}</div>
                                {mrp ? (
                                  <div className="text-sm text-gray-400 line-through">{money(mrp)}</div>
                                ) : null}
                                {offPct ? (
                                  <div className="text-xs font-extrabold text-green-700 bg-green-50 px-2 py-1 rounded-full">
                                    {offPct}% OFF
                                  </div>
                                ) : null}
                              </div>

                              <div className="mt-3 max-w-[160px]">
                                <AddToCartButton productId={p.id} />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            ) : (
              results.map((p: any) => {
                const img = getPrimaryImageUrl(p.id);
                const { price, mrp } = getBestVariant(p.id, p.base_price);
                const offPct = mrp && price ? Math.round(((mrp - price) / mrp) * 100) : null;

                return (
                  <div key={p.id} className="bg-white border rounded-2xl p-3 flex gap-3">
                    <Link
                      href={`/product/${p.slug}`}
                      className="w-24 h-24 rounded-xl bg-gray-50 border overflow-hidden grid place-items-center"
                    >
                      <Image src={img} alt={p.name} width={96} height={96} className="object-contain" />
                    </Link>

                    <div className="flex-1 min-w-0">
                      <Link href={`/product/${p.slug}`} className="block">
                        <div className="text-sm font-semibold text-gray-900 line-clamp-2">
                          {p.name}
                        </div>
                      </Link>

                      <div className="mt-2 flex items-end gap-2">
                        <div className="text-lg font-extrabold text-gray-900">{money(price)}</div>
                        {mrp ? (
                          <div className="text-sm text-gray-400 line-through">{money(mrp)}</div>
                        ) : null}
                        {offPct ? (
                          <div className="text-xs font-extrabold text-green-700 bg-green-50 px-2 py-1 rounded-full">
                            {offPct}% OFF
                          </div>
                        ) : null}
                      </div>

                      <div className="mt-3 max-w-[160px]">
                        <AddToCartButton productId={p.id} />
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>
      )}
    </main>
  );
}
