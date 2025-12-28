"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useParams } from "next/navigation";

import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

import {
  fetchSubcategoryBySlug,
  fetchSubSubcategoriesBySubcategoryId,
  fetchProductsBySubcategoryId,
  fetchVariantsByProductIds,
  fetchImagesByProductIds,
} from "@/lib/db";

/** ===== helpers ===== */
function money(n: number) {
  return `$${Number(n ?? 0).toFixed(2)}`;
}

function safeImg(src: any) {
  const s = String(src ?? "");
  const clean = s.trim();
  if (!clean) return "/example.png";
  if (clean.startsWith("http://") || clean.startsWith("https://")) return clean;
  if (clean.startsWith("/")) return clean;
  return "/example.png";
}

function getLabel(obj: any, lang: "so" | "en") {
  const so = obj?.name_so ?? obj?.name ?? "";
  const en = obj?.name_en ?? obj?.name ?? "";
  return lang === "en" ? en : so;
}

function getSecondary(obj: any, lang: "so" | "en") {
  const so = obj?.name_so ?? obj?.name ?? "";
  const en = obj?.name_en ?? obj?.name ?? "";
  return lang === "en" ? so : en;
}

function norm(x: any) {
  return String(x ?? "")
    .toLowerCase()
    .trim()
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ");
}

/** ===== page ===== */
export default function SubcategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { items, addItem, setQty } = useCart();
  const { lang } = useLanguage();

  const [loading, setLoading] = useState(true);
  const [currentSub, setCurrentSub] = useState<any | null>(null);
  const [ssList, setSsList] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [variants, setVariants] = useState<any[]>([]);
  const [images, setImages] = useState<any[]>([]);

  const [activeSS, setActiveSS] = useState<string | null>(null);
  const [selectedVariantByProduct, setSelectedVariantByProduct] = useState<
    Record<number, number | null>
  >({});
  const [justAddedId, setJustAddedId] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);
    setActiveSS(null);
    (async () => {
      const sub = await fetchSubcategoryBySlug(String(slug));
      if (!sub) {
        setCurrentSub(null);
        setSsList([]);
        setProducts([]);
        setVariants([]);
        setImages([]);
        setLoading(false);
        return;
      }

      const prods = await fetchProductsBySubcategoryId(sub.id);
      const ids = prods.map((p: any) => p.id);

      const [sss, vars, imgs] = await Promise.all([
        fetchSubSubcategoriesBySubcategoryId(sub.id),
        fetchVariantsByProductIds(ids),
        fetchImagesByProductIds(ids),
      ]);

      setCurrentSub(sub);
      setSsList(sss);
      setProducts(prods);
      setVariants(vars);
      setImages(imgs);

      setLoading(false);
    })();
  }, [slug]);

  useEffect(() => {
    if (justAddedId === null) return;
    const t = setTimeout(() => setJustAddedId(null), 900);
    return () => clearTimeout(t);
  }, [justAddedId]);

  const getPrimaryImageUrl = (productId: number) => {
    const primary = images.find(
      (img: any) => img.product_id === productId && img.is_primary
    );
    const anyImg = images.find((img: any) => img.product_id === productId);
    return safeImg(primary?.url || anyImg?.url || "/example.png");
  };

  const getVariantsFor = (productId: number) => {
    return variants
      .filter((v: any) => v.product_id === productId)
      .slice()
      .sort((a: any, b: any) => a.price - b.price);
  };

  const getDefaultVariantId = (productId: number) => {
    const vars = getVariantsFor(productId);
    return vars.length ? vars[0].id : null;
  };

  const getVariantById = (productId: number, variantId: number | null) => {
    if (variantId == null) return null;
    return (
      variants.find(
        (v: any) => v.product_id === productId && v.id === variantId
      ) || null
    );
  };

  const getVariantPrice = (
    productId: number,
    variantId: number | null,
    basePrice?: number
  ) => {
    if (variantId == null) return Number(basePrice ?? 0);
    const v = getVariantById(productId, variantId);
    return Number(v?.price ?? basePrice ?? 0);
  };

  const getVariantMRP = (productId: number, variantId: number | null) => {
    if (variantId == null) return null;
    const v = getVariantById(productId, variantId);
    return v?.mrp ?? null;
  };

  const baseList = useMemo(
    () => products.filter((p: any) => p.subcategory_id === currentSub?.id),
    [products, currentSub?.id]
  );

  const filtered = useMemo(() => {
    let list = baseList;

    if (activeSS) {
      const ss = ssList.find((x: any) => x.slug === activeSS);
      const slugKey = norm(activeSS);
      const nameKey = norm(
        ss?.name ?? ss?.name_en ?? ss?.name_so ?? ""
      );

      list = list.filter((p: any) => {
        const tags = Array.isArray(p.tags) ? p.tags : [];
        const tagStr = tags.map(norm);
        return (
          tagStr.includes(slugKey) ||
          (nameKey && tagStr.includes(nameKey))
        );
      });
    }

    return list;
  }, [activeSS, baseList, ssList]);

  useEffect(() => {
    setSelectedVariantByProduct((prev) => {
      const next = { ...prev };
      for (const p of filtered as any[]) {
        if (next[p.id] === undefined) {
          next[p.id] = getDefaultVariantId(p.id);
        }
      }
      return next;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtered.length, variants.length]);

const activeObj = activeSS
  ? ssList.find((x: any) => x.slug === activeSS)
  : null;

const titlePrimary = activeObj
  ? getLabel(activeObj, lang)
  : getLabel(currentSub, lang);
const titleSecondary = activeObj
  ? getSecondary(activeObj, lang)
  : getSecondary(currentSub, lang);

const seoLine =
  lang === "so"
    ? `Ka hel ${titlePrimary} (${titleSecondary}) online MatoMart – raashin iyo alaabooyin tayo leh oo lagu keeno gudaha Soomaaliya.`
    : `Shop ${titleSecondary} (${titlePrimary}) online in Somalia with MatoMart – quality groceries and essentials delivered fast.`;

  // (brand filter UI removed)

  const cartTotals = useMemo(() => {
    let total = 0;
    let count = 0;

    for (const it of items ?? []) {
      const p: any = products.find((x: any) => x.id === it.productId);
      if (!p) continue;

      const price = getVariantPrice(
        it.productId,
        it.variantId ?? null,
        p.base_price
      );
      total += price * (it.qty ?? 1);
      count += it.qty ?? 1;
    }

    return { total, count };
  }, [items, products]);

  /** ===== Subcategory JSON-LD (CollectionPage + ItemList) ===== */
  const jsonLdString = useMemo(() => {
    try {
      const origin =
        typeof window !== "undefined" ? window.location.origin : "";
      const url = origin
        ? `${origin}/subcategory/${String(slug)}`
        : undefined;

      const items = (baseList as any[]).map((p, index) => {
        const prodUrl = origin
          ? `${origin}/product/${p.slug}`
          : `/product/${p.slug}`;

        const entry: any = {
          "@type": "Product",
          position: index + 1,
          name: p.name,
          url: prodUrl,
        };

        return entry;
      });

      const ld: any = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: titlePrimary,
        description: seoLine,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: items.length,
          itemListElement: items,
        },
      };

      if (url) ld.url = url;

      return JSON.stringify(ld);
    } catch {
      return "";
    }
  }, [slug, baseList, titlePrimary, seoLine]);

  if (!loading && !currentSub) {
    return (
      <main className="min-h-screen bg-white p-6 text-black">
        Subcategory not found.
      </main>
    );
  }

  function ProductAdd({
    productId,
    basePrice,
    selectedVariantId,
  }: {
    productId: number;
    basePrice?: number;
    selectedVariantId: number | null;
  }) {
    const item = (items ?? []).find(
      (i: any) =>
        i.productId === productId &&
        (i.variantId ?? null) === (selectedVariantId ?? null)
    );
    const qty = item?.qty ?? 0;

    if (!item) {
      return (
        <button
          onClick={() => {
            addItem(productId, selectedVariantId, 1);
            setJustAddedId(productId);
          }}
          className="mt-2 w-full h-10 rounded-xl border-2 border-[#0B6EA9] text-[#0B6EA9] font-bold flex items-center justify-center gap-2 active:scale-[0.99] transition"
        >
          {lang === "en" ? "Add" : "Ku dar"}{" "}
          <span className="text-xl leading-none">+</span>
        </button>
      );
    }

    return (
      <div className="mt-2 flex items-center justify-between">
        <button
          onClick={() => setQty(productId, selectedVariantId, qty - 1)}
          className="w-10 h-10 rounded-full bg-[#0B6EA9] text-white text-xl font-bold grid place-items-center"
        >
          −
        </button>

        <div className="text-sm font-extrabold text-gray-900">{qty}</div>

        <button
          onClick={() => setQty(productId, selectedVariantId, qty + 1)}
          className="w-10 h-10 rounded-full bg-[#0B6EA9] text-white text-xl font-bold grid place-items-center"
        >
          +
        </button>
      </div>
    );
  }

  const hasRail = ssList.length > 0;

  return (
    <>
      {jsonLdString && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
      )}

      <main className="min-h-screen bg-[#F4F6F8] pb-28">
        {/* TITLE + SORT/FILTER */}
        <section className="bg-white border-b">
          <div className="mx-auto max-w-md px-4 py-2 flex items-center justify-between">
            <div className="leading-tight">
              <div className="text-[13px] font-semibold text-gray-900">
                {loading ? "..." : titlePrimary}
              </div>
              <div className="text-[10px] text-gray-500">
                {loading ? "" : titleSecondary}
              </div>
              {!loading && (
                <p className="mt-0.5 text-[10px] text-gray-500 max-w-xs leading-snug">
                  {seoLine}
                </p>
              )}
            </div>
            <div className="w-8" />
          </div>

          <div className="mx-auto max-w-md px-4 pb-2 space-y-1.5"></div>
        </section>

        {/* MAIN */}
        <section
          className={`mx-auto max-w-md grid ${
            hasRail ? "grid-cols-[72px_1fr]" : "grid-cols-1"
          }`}
        >
          {/* LEFT RAIL */}
          {hasRail && (
            <aside className="bg-gray-50 border-r px-1.5 py-2 space-y-1.5">
              <button
                type="button"
                onClick={() => setActiveSS(null)}
                className={`w-full flex items-center justify-center rounded-xl px-2 py-3 ${
                  activeSS === null
                    ? "bg-[#0B6EA9]/10 border border-[#0B6EA9]"
                    : "bg-white border border-gray-200"
                }`}
              >
                <span
                  className={`text-[11px] font-bold ${
                    activeSS === null ? "text-[#0B6EA9]" : "text-gray-800"
                  }`}
                >
                  {lang === "en" ? "ALL" : "DHAMMAAN"}
                </span>
              </button>

              {ssList.map((ss: any) => {
                const isActive = activeSS === ss.slug;
                const primary = getLabel(ss, lang);

                return (
                  <button
                    key={ss.id}
                    type="button"
                    onClick={() => setActiveSS(ss.slug)}
                    className="w-full flex flex-col items-center rounded-xl px-1.5 py-2"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gray-100 overflow-hidden relative">
                      <Image
                        src={safeImg(ss.img)}
                        alt={primary}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="mt-1 text-[10px] text-center leading-tight">
                      <div
                        className={
                          isActive
                            ? "text-[#0B6EA9] font-semibold"
                            : "text-gray-800 font-semibold"
                        }
                      >
                        {primary}
                      </div>
                    </div>
                  </button>
                );
              })}
            </aside>
          )}

          {/* RIGHT GRID */}
          <div className="p-3">
            <div className="grid grid-cols-2 gap-2">
              {loading ? (
                <div className="col-span-2 bg-white rounded-2xl border p-4 text-sm text-gray-600">
                  Loading...
                </div>
              ) : (
                <>
                  {filtered.map((p: any) => {
                    const imgUrl = getPrimaryImageUrl(p.id);

                    const vars = getVariantsFor(p.id);
                    const hasVariants = vars.length > 0;

                    const selectedVariantId =
                      selectedVariantByProduct[p.id] ??
                      getDefaultVariantId(p.id);

                    const selectedV = getVariantById(
                      p.id,
                      selectedVariantId
                    );
                    const price = getVariantPrice(
                      p.id,
                      selectedVariantId,
                      p.base_price
                    );
                    const mrp = getVariantMRP(
                      p.id,
                      selectedVariantId
                    );

                    const label = selectedV?.label ?? "";
                    const offPct =
                      mrp && price
                        ? Math.round(
                            ((mrp - price) / mrp) * 100
                          )
                        : null;

                    const chips = vars.slice(0, 3);
                    const extraCount = Math.max(
                      0,
                      vars.length - chips.length
                    );

                    return (
                      <div
                        key={p.id}
                        className={`rounded-2xl shadow-sm overflow-hidden border relative flex flex-col ${
                          p.is_concept
                            ? "bg-[#FFFDF4] border-[#F4D79B]"
                            : "bg-white border-gray-200"
                        }`}
                      >
                        <div className="relative pt-3 px-3 pb-1 flex-1">
                          {label ? (
                            <div className="absolute right-2 bottom-2 text-[10px] px-2 py-0.5 rounded-full bg-black/70 text-white">
                              {label}
                            </div>
                          ) : null}

                          {justAddedId === p.id ? (
                            <div className="absolute left-2 top-2 text-[11px] px-2 py-1 rounded-full bg-green-600 text-white font-bold shadow">
                              {lang === "en"
                                ? "Added ✓"
                                : "Waa la daray ✓"}
                            </div>
                          ) : null}

                          <Link
                            href={`/product/${p.slug}`}
                            className="block"
                          >
                            <Image
                              src={imgUrl}
                              alt={p.name}
                              width={220}
                              height={220}
                              className={`mx-auto h-32 object-contain w-full ${
                                p.is_concept
                                  ? "drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
                                  : ""
                              }`}
                            />
                          </Link>
                        </div>

                        <div className="px-3 pb-2">
                          <div className="text-[13px] font-semibold text-gray-900 line-clamp-2 min-h-[32px]">
                            {p.name}
                          </div>


                          {hasVariants ? (
                            <div className="mt-1 flex flex-wrap gap-1.5">
                              {chips.map((v: any) => {
                                const active =
                                  v.id === selectedVariantId;
                                return (
                                  <button
                                    key={v.id}
                                    onClick={() =>
                                      setSelectedVariantByProduct(
                                        (prev) => ({
                                          ...prev,
                                          [p.id]: v.id,
                                        })
                                      )
                                    }
                                    className={`h-7 px-2 rounded-full border text-[11px] font-semibold ${
                                      active
                                        ? "border-[#0B6EA9] bg-[#EAF4FB] text-[#0B6EA9]"
                                        : "bg-white text-gray-700"
                                    }`}
                                  >
                                    {v.label}
                                  </button>
                                );
                              })}

                              {extraCount > 0 ? (
                                <Link
                                  href={`/product/${p.slug}`}
                                  className="h-7 px-2 rounded-full border text-[11px] font-semibold bg-white text-[#0B6EA9] grid place-items-center"
                                >
                                  +{extraCount}{" "}
                                  {lang === "en"
                                    ? "more"
                                    : "kale"}
                                </Link>
                              ) : null}
                            </div>
                          ) : (
                            <div className="h-[10px]" />
                          )}

                          <div className="mt-1 flex items-end gap-2">
                            <div className="text-[16px] font-extrabold text-gray-900 leading-none">
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
                              {offPct}%
                              {lang === "en"
                                ? " Off"
                                : " Dhimis"}
                            </div>
                          ) : (
                            <div className="h-[8px]" />
                          )}

                          <div className="mt-1">
                            <ProductAdd
                              productId={p.id}
                              basePrice={p.base_price}
                              selectedVariantId={
                                selectedVariantId
                              }
                            />
                          </div>

<div className="mt-1 text-[11px] font-semibold text-[#0F8A4B]">
  ⚡ {lang === "en" ? "Quick" : "Degdeg"}
</div>
                        </div>
                      </div>
                    );
                  })}

                  {filtered.length === 0 && (
                    <div className="col-span-2 bg-white rounded-2xl border p-4 text-sm text-gray-600">
                      {lang === "en"
                        ? "No products found in this section."
                        : "Alaab lagama helin qaybtaan."}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>

        {/* STICKY CART BAR */}
        {cartTotals.count > 0 && (
          <div className="fixed left-0 right-0 bottom-4 z-40">
            <div className="mx-auto max-w-md px-3">
              <Link
                href="/cart"
                className="flex items-center justify-between bg-[#0B6EA9] text-white rounded-2xl px-4 py-3 shadow-lg"
              >
                <div>
                  <div className="text-xs opacity-90">
                    {cartTotals.count}{" "}
                    {lang === "en" ? "item" : "shay"}
                    {cartTotals.count > 1 ? "s" : ""}{" "}
                    {lang === "en"
                      ? "in cart"
                      : "gaadhiga ku jira"}
                  </div>
                  <div className="text-lg font-extrabold">
                    {money(cartTotals.total)}
                  </div>
                </div>

                <div className="text-right leading-tight font-extrabold">
                  <div>
                    {lang === "en"
                      ? "Go to Cart →"
                      : "U gudub Gaadhiga →"}
                  </div>
                  <div className="text-[10px] opacity-80">
                    {lang === "en"
                      ? "U gudub Gaadhiga"
                      : "Go to Cart"}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </main>
    </>
  );
}