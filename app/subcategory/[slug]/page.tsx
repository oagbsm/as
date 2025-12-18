"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useParams } from "next/navigation";

import {
  subcategories,
  products,
  productVariants,
  productImages,
  subsubcategories,
} from "@/data/store";

import CartIcon from "@/components/CartIcon";
import { useCart } from "@/context/CartContext";

/** ===== helpers ===== */
function money(n: number) {
  return `₹${Number(n ?? 0).toFixed(0)}`;
}

function getPrimaryImageUrl(productId: number) {
  const primary = productImages.find(
    (img) => img.product_id === productId && img.is_primary
  );
  const any = productImages.find((img) => img.product_id === productId);
  return primary?.url || any?.url || "/example.png";
}

function getBestVariant(productId: number, basePrice?: number) {
  const vars = productVariants.filter((v) => v.product_id === productId);
  if (vars.length === 0) {
    return { price: basePrice ?? 0, mrp: null as number | null, label: "" };
  }
  const best = vars.reduce((min, v) => (v.price < min.price ? v : min), vars[0]);
  return { price: best.price, mrp: best.mrp ?? null, label: best.label ?? "" };
}

/** ===== page ===== */
export default function SubcategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { items, addItem, setQty } = useCart();

  const currentSub = useMemo(
    () => subcategories.find((s) => s.slug === slug),
    [slug]
  );

  if (!currentSub) {
    return (
      <main className="min-h-screen bg-white p-6 text-black">
        Subcategory not found.
      </main>
    );
  }

  // Sub-subcategories under this subcategory
  const ssList = useMemo(
    () =>
      (subsubcategories ?? []).filter(
        (x: any) => x.subcategory_id === currentSub.id
      ),
    [currentSub.id]
  );

  // selected sub-subcategory slug (null = All)
  const [activeSS, setActiveSS] = useState<string | null>(null);

  // "Added ✓" animation state
  const [justAddedId, setJustAddedId] = useState<number | null>(null);
  useEffect(() => {
    if (justAddedId === null) return;
    const t = setTimeout(() => setJustAddedId(null), 900);
    return () => clearTimeout(t);
  }, [justAddedId]);

  // Products in this subcategory
  const baseList = useMemo(
    () => products.filter((p: any) => p.subcategory_id === currentSub.id),
    [currentSub.id]
  );

  // Filtered products (tags-based)
  const filtered = useMemo(() => {
    if (!activeSS) return baseList;
    return baseList.filter((p: any) => (p.tags ?? []).includes(activeSS));
  }, [activeSS, baseList]);

  // Title
  const titleText = activeSS
    ? ssList.find((x: any) => x.slug === activeSS)?.name ?? currentSub.name
    : currentSub.name;

  // Cart totals for sticky bar
  const cartTotals = useMemo(() => {
    let total = 0;
    let count = 0;

    for (const it of items ?? []) {
      const p: any = products.find((x: any) => x.id === it.productId);
      if (!p) continue;
      const { price } = getBestVariant(p.id, p.base_price);
      total += price * it.qty;
      count += it.qty;
    }
    return { total, count };
  }, [items]);

  function ProductAdd({ productId }: { productId: number }) {
    const item = (items ?? []).find((i) => i.productId === productId);
    const qty = item?.qty ?? 0;

    // Not in cart
    if (!item) {
      return (
        <button
          onClick={() => {
            addItem(productId, 1);
            setJustAddedId(productId);
          }}
          className="mt-2 w-full h-10 rounded-xl border-2 border-[#0B6EA9] text-[#0B6EA9] font-bold flex items-center justify-center gap-2 active:scale-[0.99] transition"
        >
          Add <span className="text-xl leading-none">+</span>
        </button>
      );
    }

    // In cart
    return (
      <div className="mt-2 flex items-center justify-between">
        <button
          onClick={() => setQty(productId, qty - 1)}
          className="w-10 h-10 rounded-full bg-[#0B6EA9] text-white text-xl font-bold grid place-items-center"
        >
          −
        </button>
        <div className="text-sm font-extrabold text-gray-900">{qty}</div>
        <button
          onClick={() => setQty(productId, qty + 1)}
          className="w-10 h-10 rounded-full bg-[#0B6EA9] text-white text-xl font-bold grid place-items-center"
        >
          +
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F4F6F8] pb-28">
      {/* ===== TOP BLUE HEADER ===== */}
      <header className="sticky top-0 z-50 bg-[#0B6EA9]">
        <div className="mx-auto max-w-md px-3 py-2 flex items-center gap-2">
          <Link
            href="/"
            className="h-10 w-10 grid place-items-center rounded-full bg-[#0A5F91] text-white"
          >
            ←
          </Link>

          <div className="flex-1 h-10 rounded-full bg-[#0A5F91] px-4 flex items-center text-white/90 text-sm">
            🔎 Search JioMart
          </div>

          {/* ✅ cart count visible here */}
          <CartIcon />
        </div>

        {/* location */}
        <div className="bg-white border-t">
          <div className="mx-auto max-w-md px-4 py-2 text-sm text-gray-800 flex items-center gap-2">
            📍 <span className="font-medium">Amin Ambulance Taleh</span>{" "}
            <span className="text-gray-500">▾</span>
          </div>
        </div>
      </header>

      {/* ===== TITLE + SORT/FILTER ===== */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-900">{titleText}</div>

          <div className="flex gap-2">
            <button className="h-9 px-3 rounded-full border text-sm bg-white flex items-center gap-2">
              ↕ Sort
            </button>
            <button className="h-9 px-3 rounded-full border text-sm bg-white flex items-center gap-2">
              ⚙ Filter
            </button>
          </div>
        </div>

        {/* chips row */}
        <div className="mx-auto max-w-md px-4 pb-3 flex gap-2 overflow-x-auto">
          <button className="h-8 px-3 rounded-full bg-gray-100 text-xs whitespace-nowrap flex items-center gap-2">
            ↕ By Popularity ▾
          </button>
          <button className="h-8 px-3 rounded-full bg-gray-100 text-xs whitespace-nowrap">
            Brands ▾
          </button>
          <button className="h-8 px-3 rounded-full bg-gray-100 text-xs whitespace-nowrap">
            Filters ▾
          </button>
        </div>
      </section>

      {/* ===== MAIN: LEFT RAIL + GRID ===== */}
      <section className="mx-auto max-w-md grid grid-cols-[96px_1fr]">
        {/* LEFT RAIL (All + sub-subcategories only) */}
        <aside className="bg-white border-r">
          {/* ALL */}
          <button
            onClick={() => setActiveSS(null)}
            className={`w-full block px-2 py-3 border-l-4 ${
              activeSS === null
                ? "border-[#0B6EA9] bg-[#EAF4FB]"
                : "border-transparent"
            }`}
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-gray-100 overflow-hidden grid place-items-center">
              <span className="text-[11px] font-extrabold text-gray-700">
                All
              </span>
            </div>
            <div
              className={`mt-2 text-[11px] text-center ${
                activeSS === null
                  ? "text-[#0B6EA9] font-semibold"
                  : "text-gray-700"
              }`}
            >
              All
            </div>
          </button>

          {/* SUB-SUBCATEGORIES */}
          {ssList.map((ss: any) => {
            const isActive = activeSS === ss.slug;
            return (
              <button
                key={ss.id}
                onClick={() => setActiveSS(ss.slug)}
                className={`w-full block px-2 py-3 border-l-4 ${
                  isActive
                    ? "border-[#0B6EA9] bg-[#EAF4FB]"
                    : "border-transparent"
                }`}
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-gray-100 overflow-hidden grid place-items-center">
                  <span className="text-[10px] font-bold text-gray-700 text-center px-1 leading-tight">
                    {ss.name?.split(" ").slice(0, 2).join(" ")}
                  </span>
                </div>
                <div
                  className={`mt-2 text-[11px] leading-tight text-center ${
                    isActive
                      ? "text-[#0B6EA9] font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {ss.name}
                </div>
              </button>
            );
          })}
        </aside>

        {/* RIGHT GRID */}
        <div className="p-3">
          <div className="grid grid-cols-2 gap-3">
            {filtered.map((p: any) => {
              const imgUrl = getPrimaryImageUrl(p.id);
              const { price, mrp, label } = getBestVariant(p.id, p.base_price);
              const offPct =
                mrp && price ? Math.round(((mrp - price) / mrp) * 100) : null;

              return (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl shadow-sm border overflow-hidden"
                >
                  {/* image block */}
                  <div className="relative p-2">
                    {/* ✅ Wishlist disabled: removed heart button */}

                    {/* weight badge */}
                    {label ? (
                      <div className="absolute right-2 bottom-2 text-[10px] px-2 py-0.5 rounded-full bg-black/70 text-white">
                        {label}
                      </div>
                    ) : null}

                    {/* Added animation */}
                    {justAddedId === p.id ? (
                      <div className="absolute left-2 top-2 text-[11px] px-2 py-1 rounded-full bg-green-600 text-white font-bold shadow">
                        Added ✓
                      </div>
                    ) : null}

                    <Link href={`/product/${p.slug}`} className="block">
                      <Image
                        src={imgUrl}
                        alt={p.name}
                        width={220}
                        height={220}
                        className="mx-auto h-28 w-auto object-contain"
                      />
                    </Link>
                  </div>

                  {/* info */}
                  <div className="px-3 pb-3">
                    <div className="text-[12px] text-gray-900 line-clamp-2 min-h-[34px]">
                      {p.name}
                    </div>

                    <div className="mt-1 flex items-end gap-2">
                      <div className="text-[14px] font-extrabold text-gray-900">
                        {money(price)}
                      </div>
                      {mrp ? (
                        <div className="text-[11px] text-gray-400 line-through">
                          {money(mrp)}
                        </div>
                      ) : null}
                    </div>

                    {offPct ? (
                      <div className="text-[12px] font-semibold text-red-600">
                        {offPct}% Off
                      </div>
                    ) : (
                      <div className="h-[18px]" />
                    )}

                    {/* ✅ REAL add-to-cart */}
                    <ProductAdd productId={p.id} />

                    {/* Quick strip */}
                    <div className="mt-2 h-7 rounded-lg bg-[#E8F5EE] text-[#0F8A4B] text-xs font-semibold grid place-items-center">
                      ⚡ Quick
                    </div>
                  </div>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div className="col-span-2 bg-white rounded-2xl border p-4 text-sm text-gray-600">
                No products found in this section.
                <div className="mt-1 text-xs text-gray-500">
                  (Make sure products have matching <code>tags</code> for this
                  sub-subcategory.)
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ✅ STICKY GO TO CART BAR (only when cart has items) */}
      {cartTotals.count > 0 && (
        <div className="fixed left-0 right-0 bottom-12 z-40">
          <div className="mx-auto max-w-md px-3">
            <Link
              href="/cart"
              className="flex items-center justify-between bg-[#0B6EA9] text-white rounded-2xl px-4 py-3 shadow-lg"
            >
              <div>
                <div className="text-xs opacity-90">
                  {cartTotals.count} item{cartTotals.count > 1 ? "s" : ""} in
                  cart
                </div>
                <div className="text-lg font-extrabold">
                  {money(cartTotals.total)}
                </div>
              </div>
              <div className="font-extrabold">Go to Cart →</div>
            </Link>
          </div>
        </div>
      )}

      {/* ===== BOTTOM NAV ===== */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="mx-auto max-w-md grid grid-cols-4 py-2 text-xs text-gray-700">
          <Link href="/" className="grid place-items-center gap-1">
            🏠<span>Home</span>
          </Link>

          <Link href="/categories" className="grid place-items-center gap-1">
            📂<span>Categories</span>
          </Link>

          {/* ✅ Wishlist disabled */}
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
