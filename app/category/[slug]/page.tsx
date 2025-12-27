// app/category/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { supabase } from "@/lib/supabaseClient";
import { safeImg } from "@/lib/db";
import Link from "next/link";

type CategoryPageProps = {
  params: { slug: string };
};

/* =========================
   DB helper (local to this file)
========================= */

async function getCategoryWithSubcategories(slug: string) {
  const { data: category, error: catErr } = await supabase
    .from("categories")
    .select("id, slug, name_so, name_en, img")
    .eq("slug", slug)
    .maybeSingle();

  if (catErr) {
    console.error("getCategoryWithSubcategories category error", catErr);
    throw catErr;
  }

  if (!category) return null;

  const { data: subcats, error: subErr } = await supabase
    .from("subcategories")
    .select("id, slug, name_so, name_en, img")
    .eq("category_id", category.id)
    .order("id", { ascending: true });

  if (subErr) {
    console.error("getCategoryWithSubcategories subcats error", subErr);
    throw subErr;
  }

  return { category, subcats: subcats ?? [] };
}

/* =========================
   SEO: generateMetadata
========================= */

export async function generateMetadata(
  { params }: CategoryPageProps
): Promise<Metadata> {
  const { slug } = params;
  const data = await getCategoryWithSubcategories(slug);

  // Fallback SEO if category not found
  if (!data) {
    return {
      title: "Qayb lama helin | MatoMart",
      description:
        "Qaybtaan lama helin MatoMart. Fadlan ku noqo bogga hore oo mar kale dooro qayb.",
      alternates: {
        canonical: "https://matomart.so/category/not-found",
      },
    };
  }

  const { category } = data;

  const titleSo = `${category.name_so} – Dukaanka Online-ka ee MatoMart`;
  const titleEn = `${category.name_en} Online Groceries – MatoMart Somalia`;

  const description = `${category.name_so} (${category.name_en}) ka dalbo MatoMart – raashin iyo alaabo tayo leh, keenis degdeg ah gudaha Soomaaliya.`;

  const canonical = `https://matomart.so/category/${category.slug}`;

  return {
    title: titleSo,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: titleSo,
      description,
      url: canonical,
      type: "website",
      locale: "so_SO",
      siteName: "MatoMart",
      images: [safeImg(category.img) || "https://matomart.so/og-default.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: titleSo,
      description,
      images: [safeImg(category.img) || "https://matomart.so/og-default.jpg"],
    },
  };
}

/* =========================
   PAGE UI
========================= */

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const data = await getCategoryWithSubcategories(slug);

  if (!data) {
    notFound();
  }

  const { category, subcats } = data;

  const titlePrimary = category.name_so || category.name_en;
  const titleSecondary = category.name_en;

  // Simple Somali-first SEO sentence reused in JSON-LD
  const seoLine = `Ka raadi ${titlePrimary} (${titleSecondary}) – raashin, alaabo iyo adeegyo ku habboon qoysaska Soomaaliyeed. Keenid degdeg ah gudaha magaalada.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${titlePrimary} | MatoMart`,
    description: seoLine,
    url: `https://matomart.so/category/${category.slug}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: subcats.length,
      itemListElement: subcats.map((sub: any, index: number) => ({
        "@type": "Thing",
        position: index + 1,
        name: `${sub.name_so || sub.name_en} / ${sub.name_en}`,
        url: `https://matomart.so/subcategory/${sub.slug}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-[#F4F6F8] pb-20">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER */}
      <section className="mx-auto max-w-md bg-white border-b">
        <div className="px-4 pt-4 pb-3">
          <h1 className="text-base font-semibold text-gray-900">
            {titlePrimary}{" "}
            <span className="text-xs text-gray-500">({titleSecondary})</span>
          </h1>
          <p className="mt-1 text-xs text-gray-500">
            Ka raadi {titlePrimary} – raashin, alaabo iyo adeegyo ku habboon
            qoysaska Soomaaliyeed. Keenid degdeg ah gudaha magaalada.
          </p>
        </div>
      </section>

      {/* SUBCATEGORIES AS CARDS */}
      <section className="mx-auto max-w-md bg-white mt-2 border-t border-b">
        <div className="px-3 py-3">
          {subcats.length === 0 ? (
            <p className="text-sm text-slate-600">
              Qayb-hoosaad weli lama gelin qaybtaan. Fadlan soo noqo mar dambe.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {subcats.map((sub: any) => (
                <Link
                  key={sub.id}
                  href={`/subcategory/${sub.slug}`}
                  className="rounded-2xl border bg-white overflow-hidden shadow-sm flex flex-col"
                >
                  <div className="relative h-24 w-full bg-gray-50">
                    <img
                      src={safeImg(sub.img)}
                      alt={sub.name_so || sub.name_en}
                      className="w-full h-full object-contain p-3"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-3 py-2">
                    <div className="text-sm font-semibold text-gray-900 line-clamp-2">
                      {sub.name_so || sub.name_en}
                    </div>
                    <div className="mt-0.5 text-[11px] text-gray-500">
                      {sub.name_en}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}