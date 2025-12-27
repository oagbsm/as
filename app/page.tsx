"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  getCategoriesWithSubcategories,
  getProductsByIds,
  getVariantsByIds,
  type ProductRow,
  type VariantRow,
} from "@/lib/db";

const HERO_SLIDES = [
  {
    id: 1,
    img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/ad1.webp",
  },
  {
    id: 2,
    img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/ad2.webp",
  },
  {
    id: 3,
    img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/ad3.webp",
  },
    {
    id: 4,
    img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/ad1.webp",
  },
];

const PROMO_CARDS = [
  {
    id: "members",
    title_en: "Members Only",
    title_so: "Xubnaha Kaliya",
    desc_en: "Special SHARE prices on 2000+ products.",
    desc_so: "Qiimooyin SHARE oo gaar ah in ka badan 2000 alaab.",
  },
  {
    id: "tech",
    title_en: "Tech & Appliances",
    title_so: "Tiknoolaji & Qalab",
    desc_en: "Up to 50% off selected electronics.",
    desc_so: "Illaa 50% dhimis qalabka korontada.",
  },
  {
    id: "food",
    title_en: "Food & Pantry",
    title_so: "Cunto & Raashin",
    desc_en: "Stock up on everyday essentials.",
    desc_so: "Kaydi raashinka iyo alaabta maalinlaha ah.",
  },
];

function money(n: number) {
  return `₹${Number(n ?? 0).toFixed(0)}`;
}

function PrimarySecondary({
  primary,
  secondary,
  center = true,
  primaryClass = "text-[11px] font-medium",
  secondaryClass = "text-[9px] text-gray-500",
}: {
  primary: string;
  secondary?: string;
  center?: boolean;
  primaryClass?: string;
  secondaryClass?: string;
}) {
  return (
    <div className={`${center ? "text-center" : "text-left"} leading-tight`}>
      <div className={primaryClass}>{primary}</div>
      {secondary ? <div className={secondaryClass}>{secondary}</div> : null}
    </div>
  );
}

type CartItem = { productId: number; variantId?: number | null; qty: number };

export default function HomePage() {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [activeSlide, setActiveSlide] = useState(0);

  const { items } = useCart();
  const { lang } = useLanguage();

  const [categoryMap, setCategoryMap] = useState<any[]>([]);
  const [loadingCats, setLoadingCats] = useState(true);

  // Lookup maps for cart totals
  const [productMap, setProductMap] = useState<Record<number, ProductRow>>({});
  const [variantMap, setVariantMap] = useState<Record<number, VariantRow>>({});

  useEffect(() => {
    const t = setInterval(
      () => setActiveSlide((s) => (s + 1) % HERO_SLIDES.length),
      3500
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoadingCats(true);
        const cats = await getCategoriesWithSubcategories();
        if (!alive) return;
        setCategoryMap(cats);
      } catch (e: any) {
        console.error("HOME LOAD CATEGORIES ERROR:", e);
      } finally {
        if (alive) setLoadingCats(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  // Fetch ONLY what's needed to price items in cart
  useEffect(() => {
    let alive = true;

    (async () => {
      const cart = (Array.isArray(items) ? (items as any) : []) as CartItem[];
      const pids = cart.map((x) => x.productId);
      const vids = cart.map((x) => x.variantId).filter((v): v is number => v != null);

      try {
        const [ps, vs] = await Promise.all([getProductsByIds(pids), getVariantsByIds(vids)]);
        if (!alive) return;

        const pm: Record<number, ProductRow> = {};
        for (const p of ps) pm[p.id] = p;

        const vm: Record<number, VariantRow> = {};
        for (const v of vs) vm[v.id] = v;

        setProductMap(pm);
        setVariantMap(vm);
      } catch (e) {
        console.error(e);
      }
    })();

    return () => {
      alive = false;
    };
  }, [items]);

  const scrollToCategory = (slug: string) => {
    const el = sectionRefs.current[slug];
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const cartTotals = useMemo(() => {
    const cart = (Array.isArray(items) ? (items as any) : []) as CartItem[];

    let total = 0;
    let count = 0;

    for (const it of cart) {
      const p = productMap[it.productId];
      if (!p) continue;

      const v = it.variantId != null ? variantMap[it.variantId] : null;
      const price = Number(v?.price ?? p.base_price ?? 0);

      total += price * (it.qty ?? 1);
      count += it.qty ?? 1;
    }

    return { total, count };
  }, [items, productMap, variantMap]);

  const cartCtaPrimary = lang === "en" ? "Go to Cart →" : "U gudub Gaadhiga →";

  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO / AD SLIDESHOW */}
      <section className="bg-white pt-0">
        <div className="relative overflow-hidden rounded-2xl bg-white h-[140px] w-[90%] mx-auto">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {HERO_SLIDES.map((s) => (
              <div
                key={s.id}
                className="flex-none w-full h-[140px] flex items-center justify-center bg-white">
                <Image
                  src={s.img}
                  alt="promo"
                  width={500}
                  height={140}
                  className="max-h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO CARDS ROW - CLEAN SUPERMARKET STYLE */}
      <section className="bg-white px-4 pt-0 -mt-2">
        <div className="relative">
          <div className="flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory">
            {[
              "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/bar1.webp",
              "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/bar2.webp",
              "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/bar3.webp",
              "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/bar4.webp",
            ].map((url, i) => (
              <div
                key={i}
                className="min-w-[100px] h-[140px] rounded-2xl overflow-hidden bg-white shadow-sm flex-shrink-0 snap-start border border-gray-200"
              >
                <Image
                  src={url}
                  alt="promo"
                  width={100}
                  height={140}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* subtle edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-white to-transparent" />
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      <section className="bg-white px-3 pb-6 pt-1">
        {categoryMap.map((cat: any) => {
          const catPrimary = lang === "en" ? cat.name_en : cat.name_so;

          return (
            <div
              key={cat.id}
              ref={(el) => {
                sectionRefs.current[cat.slug] = el;
              }}
              className="scroll-mt-[140px] pb-3"
            >
              <div className="mb-1">
                <PrimarySecondary
                  primary={catPrimary}
                  center={false}
                  primaryClass="text-lg font-bold text-gray-900"
                />
              </div>

              <div className="grid grid-cols-3 gap-x-3 gap-y-2.5">
                {(cat.subcats || []).slice(0, 8).map((sub: any) => {
                  const subPrimary = lang === "en" ? sub.name_en : sub.name_so;

                  return (
                    <Link
                      key={sub.id}
                      href={`/subcategory/${sub.slug}`}
                      className="flex flex-col items-center"
                    >
                      <div className="relative h-[90px] w-[90px] rounded-2xl overflow-hidden bg-gray-100">
                        <Image
                          src={
                            typeof sub.img === "string" && sub.img.trim().length > 0
                              ? sub.img.trimEnd()
                              : "/example.png"
                          }
                          alt={subPrimary}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="mt-0.5">
                        <PrimarySecondary
                          primary={subPrimary}
                          primaryClass="text-[12px] font-semibold text-gray-800"
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      {/* STICKY GO TO CART BAR */}
      {cartTotals.count > 0 && (
        <div className="fixed left-0 right-0 bottom-16 z-40">
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

              <div className="text-right leading-tight font-extrabold">
                <div>{cartCtaPrimary}</div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
