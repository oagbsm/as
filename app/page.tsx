"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import SearchBar from "@/components/SearchBar";
import OrderModeToggle from "@/components/OrderModeToggle";

import { categories, subcategories, products, productVariants } from "@/data/store";
import { useCart } from "@/context/CartContext";
import CartIcon from "@/components/CartIcon";
import TopNavbar from "@/components/TopNavBar";
const HERO_SLIDES = [
  { id: 1, img: "/hero1.webp" },
  { id: 2, img: "/hero2.webp" },
  { id: 3, img: "/hero3.webp" },
];

function money(n: number) {
  return `₹${Number(n ?? 0).toFixed(0)}`;
}

function getBestVariant(productId: number, basePrice?: number) {
  const vars = productVariants.filter((v: any) => v.product_id === productId);
  if (vars.length === 0) return { price: basePrice ?? 0 };
  const best = vars.reduce((min: any, v: any) => (v.price < min.price ? v : min), vars[0]);
  return { price: best.price };
}

export default function HomePage() {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [activeSlide, setActiveSlide] = useState(0);

  const { items } = useCart();

  const categoryMap = useMemo(() => {
    return categories.map((cat) => ({
      ...cat,
      subcats: subcategories.filter((sub: any) => sub.category_id === cat.id),
    }));
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setActiveSlide((s) => (s + 1) % HERO_SLIDES.length),
      3500
    );
    return () => clearInterval(t);
  }, []);

  const scrollToCategory = (slug: string) => {
    const el = sectionRefs.current[slug];
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ✅ Sticky cart bar totals
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

  return (
    <main className="min-h-screen bg-white text-black pb-28">
      {/* HEADER */}
      <TopNavbar
        locationText="Deliver to: Mogadishu"
        rightSlot={
          <button
            className="h-10 w-10 rounded-full bg-[#0A5F91] text-white"
            aria-label="Profile"
          >
            👤
          </button>
        }
      />
      {/* TOP CATEGORY STRIP */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-md px-2 py-2 flex gap-4 overflow-x-auto">
          {categoryMap.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.slug)}
              className="min-w-[78px]"
            >
              <div className="mx-auto h-14 w-14 rounded-full bg-blue-50 overflow-hidden flex items-center justify-center">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain p-1"
                />
              </div>

              <div className="mt-1 text-[11px] text-center leading-tight">
                {cat.name}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* HERO */}
      <section className="bg-white px-3 pt-3">
        <div className="relative overflow-hidden rounded-2xl h-[180px]">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {HERO_SLIDES.map((s) => (
              <Image
                key={s.id}
                src={s.img}
                alt="promo"
                width={400}
                height={180}
                className="flex-none w-full h-[180px] object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      <section className="bg-white px-3 pb-10 pt-3">
        {categoryMap.map((cat) => (
          <div
            key={cat.id}
            ref={(el) => {
              sectionRefs.current[cat.slug] = el;
            }}
            className="scroll-mt-[140px] pb-6"
          >
            <h2 className="mb-3 text-lg font-extrabold">{cat.name}</h2>

            <div className="grid grid-cols-4 gap-x-3 gap-y-5">
              {cat.subcats.slice(0, 8).map((sub: any) => (
                <Link
                  key={sub.id}
                  href={`/subcategory/${sub.slug}`}
                  className="flex flex-col items-center"
                >
                  <div className="relative h-[54px] w-[54px] rounded-xl overflow-hidden bg-gray-100">
                    <Image src={sub.img} alt={sub.name} fill className="object-cover" />
                  </div>
                  <div className="mt-1 text-[11px] text-center leading-tight">
                    {sub.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ✅ STICKY GO TO CART BAR */}
      {cartTotals.count > 0 && (
        <div className="fixed left-0 right-0 bottom-4 z-40">
          <div className="mx-auto max-w-md px-3">
            <Link
              href="/cart"
              className="flex items-center justify-between bg-[#0B6EA9] text-white rounded-2xl px-4 py-3 shadow-lg"
            >
              <div>
                <div className="text-xs opacity-90">
                  {cartTotals.count} item{cartTotals.count > 1 ? "s" : ""} in cart
                </div>
                <div className="text-lg font-extrabold">{money(cartTotals.total)}</div>
              </div>
              <div className="font-extrabold">Go to Cart →</div>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
