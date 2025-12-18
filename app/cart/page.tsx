"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import BottomNav from "@/components/BottomNav";

import { products, productImages, productVariants } from "@/data/store";
import { useCart } from "@/context/CartContext"; // adjust path if yours differs

function money(n: number) {
  return `₹${Number(n ?? 0).toFixed(0)}`;
}

function getPrimaryImageUrl(productId: number) {
  const primary = productImages.find((img) => img.product_id === productId && img.is_primary);
  const any = productImages.find((img) => img.product_id === productId);
  return primary?.url || any?.url || "/example.png";
}

function getBestVariant(productId: number, basePrice?: number) {
  const vars = productVariants.filter((v) => v.product_id === productId);
  if (vars.length === 0) return { price: basePrice ?? 0, mrp: null as number | null };
  const best = vars.reduce((min, v) => (v.price < min.price ? v : min), vars[0]);
  return { price: best.price, mrp: best.mrp ?? null };
}

export default function CartPage() {
  const {
    items, // expected: [{ productId, qty }]
    setQty, // expected: (productId:number, qty:number) => void
    removeItem, // expected: (productId:number) => void
  } = useCart();

  const cartLines = useMemo(() => {
    return (items ?? [])
      .map((it: any) => {
        const p = products.find((x: any) => x.id === it.productId);
        if (!p) return null;
        const { price, mrp } = getBestVariant(p.id, p.base_price);
        return {
          product: p,
          qty: it.qty,
          price,
          mrp,
          lineTotal: price * it.qty,
          img: getPrimaryImageUrl(p.id),
        };
      })
      .filter(Boolean) as any[];
  }, [items]);

  const totals = useMemo(() => {
    const subtotal = cartLines.reduce((s, l) => s + l.price * l.qty, 0);
    const mrpTotal = cartLines.reduce((s, l) => s + (l.mrp ?? l.price) * l.qty, 0);
    const savings = Math.max(0, mrpTotal - subtotal);
    return { subtotal, savings };
  }, [cartLines]);

  const recommended = useMemo(() => {
    // simple: show discounted items not already in cart
    const inCart = new Set((items ?? []).map((x: any) => x.productId));
    return products
      .filter((p: any) => !inCart.has(p.id))
      .slice(0, 6)
      .map((p: any) => {
        const { price, mrp } = getBestVariant(p.id, p.base_price);
        return { p, price, mrp, img: getPrimaryImageUrl(p.id) };
      });
  }, [items]);

  return (
    <main className="min-h-screen bg-[#F4F6F8] pb-24">
      {/* ===== TOP BLUE HEADER ===== */}
      <header className="sticky top-0 z-50 bg-[#0B6EA9]">
        <div className="mx-auto max-w-md px-3 py-2 flex items-center gap-2">
          {/* back to home */}
          <Link href="/" className="h-10 w-10 grid place-items-center rounded-full bg-[#0A5F91] text-white">
            ←
          </Link>

          <div className="flex-1 h-10 rounded-md bg-white/95 px-3 flex items-center gap-2 text-gray-700 text-sm">
            <span className="opacity-70">Search products & brands</span>
            <span className="ml-auto opacity-70">🎤</span>
          </div>

          <button className="h-10 w-10 grid place-items-center rounded-full bg-[#0A5F91] text-white">
            🔔
          </button>
        </div>

        {/* ===== LOCATION ROW ===== */}
        <div className="bg-[#E9EEF2] border-t">
          <div className="mx-auto max-w-md px-4 py-2 text-sm text-gray-800 flex items-center gap-2">
            📍 <span className="font-medium">Deliver To</span>
            <span className="underline font-semibold">Amin Ambulance Taleh</span>
            <button className="ml-auto px-3 py-1 rounded-md border bg-white text-[#0B6EA9] font-semibold">
              Change
            </button>
          </div>
        </div>
      </header>

      {/* ===== TITLE ROW ===== */}
      <section className="mx-auto max-w-md bg-white border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-extrabold text-gray-900">
            Groceries Basket{" "}
            <span className="text-gray-500 font-semibold text-sm">({cartLines.length} items)</span>
          </div>
          <div className="text-xl font-extrabold text-gray-900">{money(totals.subtotal)}</div>
        </div>
      </section>

      {/* ===== OFFER BANNER ===== */}
      <section className="mx-auto max-w-md px-4">
        <div className="mt-3 bg-[#E8F5EE] border border-[#BFE6CF] rounded-lg p-3 text-sm text-gray-800">
          <div className="flex gap-2">
            <span className="text-[#0F8A4B] font-bold">%</span>
            <div>
              Shop groceries worth <b>₹1499</b> & get sugar at <b>₹9</b>.
              <span className="text-gray-500">
                {" "}
                (Offer applicable only on products sold by Reliance Retail. See T&amp;C)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CART ITEMS ===== */}
      <section className="mx-auto max-w-md px-4">
        {cartLines.map((l) => (
          <div key={l.product.id} className="mt-3 bg-white rounded-xl border p-3">
            <div className="flex gap-3">
              <div className="w-20 h-20 rounded-lg bg-gray-50 border overflow-hidden grid place-items-center">
                <Image src={l.img} alt={l.product.name} width={80} height={80} className="object-contain" />
              </div>

              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">{l.product.name}</div>

                <div className="mt-2 flex items-end gap-2">
                  <div className="text-xl font-extrabold text-gray-900">{money(l.price)}</div>
                  {l.mrp ? <div className="text-sm text-gray-400 line-through">{money(l.mrp)}</div> : null}
                  {l.mrp ? (
                    <div className="text-sm font-bold text-[#0F8A4B]">
                      You Save {money((l.mrp - l.price) * l.qty)}
                    </div>
                  ) : null}
                </div>

                <div className="mt-2 text-sm text-gray-600">
                  Sold By <span className="text-[#0B6EA9] font-semibold">Reliance Retail</span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <button
                    onClick={() => alert("Saved for later (demo)")}
                    className="text-sm text-gray-500 font-semibold"
                  >
                    SAVE FOR LATER
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const next = Math.max(0, l.qty - 1);
                        if (next === 0) removeItem?.(l.product.id);
                        else setQty?.(l.product.id, next);
                      }}
                      className="w-12 h-12 rounded-full bg-[#0B6EA9] text-white text-2xl font-bold grid place-items-center"
                      aria-label="Decrease quantity"
                    >
                      –
                    </button>

                    <div className="w-10 text-center text-lg font-bold text-gray-900">{l.qty}</div>

                    <button
                      onClick={() => setQty?.(l.product.id, l.qty + 1)}
                      className="w-12 h-12 rounded-full bg-[#0B6EA9] text-white text-2xl font-bold grid place-items-center"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {cartLines.length === 0 && (
          <div className="mt-6 bg-white rounded-xl border p-5 text-center">
            <div className="text-lg font-bold text-gray-900">Your cart is empty</div>
            <div className="mt-1 text-sm text-gray-600">Go back and add some items.</div>
            <Link
              href="/"
              className="inline-flex mt-4 px-4 h-10 items-center justify-center rounded-lg bg-[#0B6EA9] text-white font-bold"
            >
              Back to Home
            </Link>
          </div>
        )}
      </section>

      {/* ===== RECOMMENDED ===== */}
      {recommended.length > 0 && (
        <section className="mx-auto max-w-md px-4 mt-6">
          <div className="text-2xl font-extrabold text-gray-900">Products You Might Like</div>

          <div className="mt-3 grid grid-cols-3 gap-3">
            {recommended.map(({ p, price, mrp, img }) => {
              const offPct = mrp && price ? Math.round(((mrp - price) / mrp) * 100) : null;
              return (
                <Link key={p.id} href={`/product/${p.slug}`} className="bg-white rounded-xl border p-2 block">
                  <div className="relative">
                    {offPct ? (
                      <div className="absolute left-1 top-1 text-[10px] px-2 py-0.5 rounded-full bg-red-600 text-white font-bold">
                        {offPct}% OFF
                      </div>
                    ) : null}
                    <div className="w-full h-16 bg-gray-50 rounded-lg border grid place-items-center overflow-hidden">
                      <Image src={img} alt={p.name} width={90} height={90} className="object-contain" />
                    </div>
                  </div>

                  <div className="mt-2 text-[12px] font-semibold text-gray-900 line-clamp-2 min-h-[32px]">
                    {p.name}
                  </div>

                  <div className="mt-1 text-sm font-extrabold text-gray-900">{money(price)}</div>
                  <div className="text-[11px] text-gray-500">
                    M.R.P: {mrp ? <span className="line-through">{money(mrp)}</span> : "—"}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* ===== STICKY PLACE ORDER BAR ===== */}
      <div className="fixed bottom-14 left-0 right-0 z-40">
        <div className="mx-auto max-w-md bg-white border-t px-4 py-3 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">Payable Amount</div>
            <div className="text-2xl font-extrabold text-gray-900">{money(totals.subtotal)}</div>
          </div>

          <button
            onClick={() => alert("Place Order (demo)")}
            className="h-12 px-8 rounded-md bg-[#0B6EA9] text-white font-extrabold text-lg shadow-sm"
            disabled={cartLines.length === 0}
          >
            Place Order
          </button>
        </div>
      </div>

      {/* ===== BOTTOM NAV ===== */}
      <BottomNav />

    </main>
  );
}
