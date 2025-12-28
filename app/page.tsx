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
    img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/ads/ad5.webp",
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

const CATEGORY_BG: Record<string, string> = {
  groceries: "bg-[#0E5C1C]", // darker bold green
  baby: "bg-[#F8B8D0]", // richer baby pink
  "health-beauty": "bg-[#E89A3D]", // deeper warm orange/peach
  household: "bg-[#8FC5E8]", // stronger blue
};

const CATEGORY_ICON: Record<string, string> = {
  groceries: "🥕",
  baby: "👶",
  "health-beauty": "✨",
  household: "🏠",
};

function getCategoryBg(slug: string | undefined) {
  if (!slug) return "bg-[#F3F4F6]"; // default light gray
  return CATEGORY_BG[slug] ?? "bg-[#F3F4F6]";
}

type CartItem = { productId: number; variantId?: number | null; qty: number };

export default function HomePage() {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [activeSlide, setActiveSlide] = useState(0);

  const { items } = useCart();
  const { lang } = useLanguage();

  const [categoryMap, setCategoryMap] = useState<any[]>([]);
  const [loadingCats, setLoadingCats] = useState(true);
  const [activeCatSlug, setActiveCatSlug] = useState<string | null>(null);
  const [compactTopCats, setCompactTopCats] = useState(false);

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

  // Compact top categories (hide images) when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      // When user scrolls past ~140px, hide topcat images
      setCompactTopCats(window.scrollY > 140);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observe category sections and update active slug when scrolling
  useEffect(() => {
    if (!categoryMap.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const slug = entry.target.getAttribute("data-cat-slug");
          if (!slug) return;
          if (entry.isIntersecting) {
            setActiveCatSlug(slug);
          }
        });
      },
      {
        root: null,
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0.2,
      }
    );

    categoryMap.forEach((cat: any) => {
      const el = sectionRefs.current[cat.slug];
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [categoryMap]);

  // Lookup maps for cart totals
  const [productMap, setProductMap] = useState<Record<number, ProductRow>>({});
  const [variantMap, setVariantMap] = useState<Record<number, VariantRow>>({});

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
    if (!el) return;

    // Approximate combined height of TopNavbar + sticky top categories strip
    const headerOffset = 170; // adjusted for TopNavbar + sticky top categories strip

    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top - headerOffset;

    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
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

      {/* TOP CATEGORIES STRIP (just under search bar) */}
      {categoryMap.length > 0 && (
<section className="sticky top-[110px] z-40 border-b bg-white shadow-sm">          <div className="mx-auto max-w-md px-2 py-2 flex gap-4 overflow-x-auto">
            {categoryMap.map((cat: any) => {
              const label = lang === "en" ? cat.name_en : cat.name_so;
              const imgSrc =
                typeof cat.img === "string" && cat.img.trim().length > 0
                  ? cat.img.trimEnd()
                  : "/example.png";
              const isActive = activeCatSlug === cat.slug;

              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.slug)}
                  className={`min-w-[78px] px-1 py-0.5 rounded-xl transition-all duration-200 ${
                    isActive ? "bg-[#E3F2FF] shadow-md scale-[1.02]" : "bg-transparent"
                  }`}
                  type="button"
                >
                  {!compactTopCats && (
                    <div
                      className={`mx-auto h-14 w-14 pt-[-10px] ounded-full overflow-hidden flex items-center justify-center transition-shadow ${
                        isActive
                          ? "bg-[#DBEAFE] ring-2 ring-[#0B6EA9] shadow-lg"
                          : "bg-blue-50"
                      }`}
                    >
                      <Image
                        src={imgSrc}
                        alt={label}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  )}

                  <div
                    className={`mt-1 text-[11px] text-center leading-tight font-semibold transition-colors ${
                      isActive ? "text-[#0B6EA9]" : "text-[#0B3C6E]"
                    }`}
                  >
                    {label}
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}

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
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-white to-transparent" /> */}
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
              data-cat-slug={cat.slug}
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
                      <div
                        className={`relative h-[90px] w-[90px] rounded-2xl overflow-hidden flex items-center justify-center ${getCategoryBg(
                          cat.slug,
                        )}`}
                      >
                        <Image
                          src={
                            typeof sub.img === "string" && sub.img.trim().length > 0
                              ? sub.img.trimEnd()
                              : "/example.png"
                          }
                          alt={subPrimary}
                          fill
                          className="object-contain"
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
