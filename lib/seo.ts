// lib/seo.ts
import type { Metadata } from "next";

const DEFAULT_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mato.so"; // change later if needed

export function getSiteUrl() {
  return DEFAULT_SITE_URL.replace(/\/+$/, "");
}

/**
 * Build bilingual (Somali + English) SEO text for a product.
 */
export function buildProductMeta(opts: {
  slug: string;
  productName: string;
  longDescription?: string | null;
  subcategoryNameEn?: string | null;
  subcategoryNameSo?: string | null;
}): Metadata {
  const baseUrl = getSiteUrl();
  const url = `${baseUrl}/product/${opts.slug}`;

  const somaliLine = `Soo iibso ${opts.productName} online — keenis degdeg ah gudaha Soomaaliya.`;
  const englishLine = `Buy ${opts.productName} online with fast local delivery in Somalia.`;

  const desc =
    opts.longDescription && opts.longDescription.trim().length > 10
      ? `${opts.longDescription} ${somaliLine}`
      : `${somaliLine} ${englishLine}`;

  const title = opts.subcategoryNameEn
    ? `${opts.productName} | ${opts.subcategoryNameEn} | Mato Minimart`
    : `${opts.productName} | Mato Minimart`;

  return {
    title,
    description: desc,
    alternates: {
      canonical: `/product/${opts.slug}`,
    },
    openGraph: {
      title,
      description: desc,
      url,
      type: "website",
      images: [
        {
          url: `${baseUrl}/api/og?title=${encodeURIComponent(title)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
    },
  };
}

/**
 * Category / Subcategory bilingual metadata.
 */
export function buildListingMeta(opts: {
  slug: string;
  level: "category" | "subcategory";
  nameEn: string;
  nameSo: string;
}): Metadata {
  const baseUrl = getSiteUrl();
  const path =
    opts.level === "category"
      ? `/category/${opts.slug}`
      : `/subcategory/${opts.slug}`;
  const url = `${baseUrl}${path}`;

  const title = `${opts.nameEn} | ${opts.nameSo} | Mato Minimart`;
  const somaliLine = `${opts.nameSo} – dalab online ah oo laguugu keeno gudaha Soomaaliya.`;
  const englishLine = `Browse ${opts.nameEn} online with fast delivery.`;
  const desc = `${somaliLine} ${englishLine}`;

  return {
    title,
    description: desc,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description: desc,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
    },
  };
}