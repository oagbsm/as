"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import CartIcon from "@/components/CartIcon";
import AddToCartButton from "@/components/AddToCartButton";

import {
  categories,
  subcategories,
  products,
  productImages,
  productVariants,
} from "@/data/store";

/** ===== Recent searches (localStorage) ===== */
const LS_KEY = "recent_searches_v1";
const MAX_RECENT = 10;

function loadRecent(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveRecent(term: string) {
  if (typeof window === "undefined") return;
  const t = term.trim();
  if (!t) return;

  const prev = loadRecent();
  const next = [t, ...prev.filter((x) => x.toLowerCase() !== t.toLowerCase())].slice(
    0,
    MAX_RECENT
  );

  localStorage.setItem(LS_KEY, JSON.stringify(next));
}

function clearRecent() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(LS_KEY);
}

/** ===== Helpers ===== */
function money(n: number) {
  return `₹${Number(n ?? 0).toFixed(0)}`;
}

function normalize(s: string) {
  return (s ?? "").toLowerCase().trim();
}

function getPrimaryImageUrl(productId: number) {
  const primary = productImages.find(
    (img: any) => img.product_id === productId && img.is_primary
  );
  const any = productImages.find((img: any) => img.product_id === productId);
  return primary?.url || any?.url || "/example.png";
}

function getBestVariant(productId: number, basePrice?: number) {
  const vars = productVariants.filter((v: any) => v.product_id === productId);
  if (vars.length === 0) return { price: basePrice ?? 0, mrp: null as number | null };
  const best = vars.reduce((min: any, v: any) => (v.price < min.price ? v : min), vars[0]);
  return { price: best.price, mrp: best.mrp ?? null };
}

/** ===== Basic scoring search (still fast) ===== */
function scoreProduct(term: string, p: any) {
  const t = term;
  const name = (p.name ?? "").toLowerCase();
  const slug = (p.slug ?? "").toLowerCase();
  const tags = (p.tags ?? []).join(" ").toLowerCase();

  // strong matches
  if (name === t) return 1000;
  if (slug === t) return 950;

  let score = 0;

  if (name.includes(t)) score += 150;
  if (slug.includes(t)) score += 90;
  if (tags.includes(t)) score += 120;

  // slight boost if term matches start of name
  if (name.startsWith(t)) score += 60;

  return score;
}

export default function SearchPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [q, setQ] = useState("");
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    setRecent(loadRecent());
    // autofocus like shopping apps
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const term = normalize(q);

  const results = useMemo(() => {
    if (!term) return [];

    const scored = products
      .map((p: any) => {
        // include category/subcategory names in search space (small boost)
        const cat = categories.find((c: any) => c.id === p.category_id);
        const sub = subcategories.find((s: any) => s.id === p.subcategory_id);

        const extraHay = `${cat?.name ?? ""} ${sub?.name ?? ""}`.toLowerCase();
        const baseScore = scoreProduct(term, p);
        const extra = extraHay.includes(term) ? 30 : 0;

        const s = baseScore + extra;
        return s > 0 ? { p, s } : null;
      })
      .filter(Boolean) as any[];

    scored.sort((a, b) => b.s - a.s);

    return scored.slice(0, 30).map((x) => x.p);
  }, [term]);

  function submitSearch() {
    if (!term) return;
    saveRecent(q);
    setRecent(loadRecent());
  }

  function onClearAll() {
    clearRecent();
    setRecent([]);
  }

  const popularCats = useMemo(() => categories.slice(0, 8), []);

  return (
    <main className="min-h-screen bg-white text-black pb-20">
      {/* ===== TOP BLUE BAR ===== */}
      <header className="sticky top-0 z-50 bg-[#0B6EA9]">
        <div className="mx-auto max-w-md px-3 py-2 flex items-center gap-2">
          <Link
            href="/"
            className="h-10 w-10 grid place-items-center rounded-full bg-[#0A5F91] text-white"
            aria-label="Back"
          >
            ←
          </Link>

          <div className="flex-1 h-10 rounded-full bg-[#0A5F91] px-3 flex items-center gap-2">
            <span className="text-white/80">🔎</span>
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") submitSearch();
              }}
              placeholder="Search products & brands"
              className="w-full bg-transparent outline-none text-white placeholder:text-white/70 text-sm"
            />
            {q.length > 0 && (
              <button
                onClick={() => setQ("")}
                className="text-white/90 text-sm px-2"
                aria-label="Clear"
              >
                ✕
              </button>
            )}
          </div>

          <CartIcon />
        </div>

        {/* location row */}
        <div className="bg-white border-t">
          <div className="mx-auto max-w-md px-4 py-2 text-sm text-gray-800 flex items-center gap-2">
            📍 <span className="font-medium">Mumbai 400020</span>{" "}
            <span className="text-gray-500">▾</span>
          </div>
        </div>
      </header>

      {/* ===== EMPTY STATE (like JioMart) ===== */}
      {!term && (
        <section className="mx-auto max-w-md px-4 pt-4">
          {/* Shopping list card */}
          <button className="w-full text-left bg-white rounded-2xl border shadow-sm p-4 flex items-center justify-between">
            <div>
              <div className="font-extrabold text-gray-900">Have a Shopping List?</div>
              <div className="text-sm text-gray-500 mt-1">
                Search multiple products together
              </div>
            </div>
            <div className="text-gray-400 text-2xl">›</div>
          </button>

          {/* Recent searches */}
          <div className="mt-6 flex items-center justify-between">
            <div className="font-extrabold text-gray-900">Recent Searches</div>
            {recent.length > 0 && (
              <button onClick={onClearAll} className="text-sm font-semibold text-[#0B6EA9]">
                Clear All
              </button>
            )}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {recent.length === 0 ? (
              <div className="text-sm text-gray-500">No recent searches</div>
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

          {/* Popular categories */}
          <div className="mt-8 font-extrabold text-gray-900">Popular categories</div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {popularCats.map((cat: any) => (
              <button
                key={cat.id}
                onClick={() => {
                  // go home and scroll? keep simple: go home
                  window.location.href = "/";
                }}
                className="flex flex-col items-center text-center"
              >
                <div className="h-14 w-14 rounded-full bg-pink-50 overflow-hidden grid place-items-center">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    width={56}
                    height={56}
                    className="object-contain p-1"
                  />
                </div>
                <div className="mt-2 text-[11px] leading-tight">{cat.name}</div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ===== RESULTS LIST ===== */}
      {term && (
        <section className="mx-auto max-w-md px-4 pt-4">
          <div className="flex items-center justify-between">
            <div className="font-extrabold text-gray-900">
              Search Results
              <span className="ml-2 text-sm text-gray-500">
                ({results.length})
              </span>
            </div>

            <div className="flex gap-2">
              <button className="h-9 px-3 rounded-full border text-sm bg-white flex items-center gap-2">
                ↕ Sort
              </button>
              <button className="h-9 px-3 rounded-full border text-sm bg-white flex items-center gap-2">
                ⚙ Filter
              </button>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {results.length === 0 ? (
              <div className="bg-white border rounded-2xl p-4 text-sm text-gray-600">
                No results for <b>{q}</b>
              </div>
            ) : (
              results.map((p: any) => {
                const img = getPrimaryImageUrl(p.id);
                const { price, mrp } = getBestVariant(p.id, p.base_price);
                const offPct =
                  mrp && price ? Math.round(((mrp - price) / mrp) * 100) : null;

                return (
                  <div key={p.id} className="bg-white border rounded-2xl p-3 flex gap-3">
                    <Link
                      href={`/product/${p.slug}`}
                      onClick={() => submitSearch()}
                      className="w-24 h-24 rounded-xl bg-gray-50 border overflow-hidden grid place-items-center"
                    >
                      <Image src={img} alt={p.name} width={96} height={96} className="object-contain" />
                    </Link>

                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/product/${p.slug}`}
                        onClick={() => submitSearch()}
                        className="block"
                      >
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

                      {/* Add to cart */}
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

      {/* ===== BOTTOM NAV (wishlist disabled) ===== */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="mx-auto max-w-md grid grid-cols-4 py-2 text-xs text-gray-700">
          <Link href="/" className="grid place-items-center gap-1">
            🏠<span>Home</span>
          </Link>
          <Link href="/categories" className="grid place-items-center gap-1">
            📂<span>Categories</span>
          </Link>
          <button
            disabled
            className="grid place-items-center gap-1 opacity-40 cursor-not-allowed"
            title="Wishlist disabled"
          >
            ♡<span>Wishlist</span>
          </button>
          <Link href="/orders" className="grid place-items-center gap-1">
            📦<span>Orders</span>
          </Link>
        </div>
      </nav>
    </main>
  );
}
