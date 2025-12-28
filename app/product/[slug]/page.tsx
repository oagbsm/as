export const dynamic = "force-dynamic";
export const revalidate = 3600; // rebuild metadata every hour

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AddToCartButton from "@/components/AddToCartButton";
import ProductClient from "./product-client";
import BottomNav from "@/components/BottomNav";

import {
  fetchProductBySlug,
  fetchVariantsByProductId,
  fetchImagesByProductId,
  fetchSubcategoryById,
  fetchRelatedProducts,
  fetchBrandsByIds,
} from "@/lib/db";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://matomart.so";

function money(n: number) {
  return `$${Number(n ?? 0).toFixed(2)}`;
}

function safeImg(src: any) {
  const s = String(src ?? "").trim();
  if (!s) return "/example.png";
  if (s.startsWith("/")) return s;
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  return "/example.png";
}

function subLabel(sub: any) {
  return sub?.name_en ?? sub?.name_so ?? "Product";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  // ✅ Next 16: params is a Promise
  const { slug } = await params;

  // Get product from Supabase
  const product = await fetchProductBySlug(slug);

  // Fallback SEO if product not found
  if (!product) {
    const canonical = new URL(`/product/${slug}`, SITE_URL).toString();

    const title = "Alaab lama helin | MatoMart Soomaaliya";
    const description =
      "Alaabtani lama helin. Ka raadi kumannaan alaab raashin, daryeel iyo guriga ah MatoMart Soomaaliya.";

    return {
      title,
      description,
      alternates: {
        canonical,
      },
      openGraph: {
        title,
        description,
        type: "website", // ✅ must be a valid type
        url: canonical,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
    };
  }

  // ====== Try to pull subcategory names for bilingual SEO ======
  let subNameEn: string | undefined;
  let subNameSo: string | undefined;

  const subId = Number((product as any).subcategory_id);
  if (Number.isFinite(subId) && subId > 0) {
    const sub = await fetchSubcategoryById(subId);
    if (sub) {
      subNameEn = (sub as any).name_en ?? undefined;
      subNameSo = (sub as any).name_so ?? undefined;
    }
  }

  // ====== Build Somali + English SEO text ======
  const baseName = product.name; // e.g. "Baraka Corn Flakes 500g"

  const subLabelSo =
    subNameSo || "Raashin iyo alaabooyin kale oo tayo leh";
  const subLabelEn =
    subNameEn || "Groceries and daily essentials";

  const title = `${baseName} | MatoMart Soomaaliya – ${subLabelSo}`;
  const description =
    `${baseName} – alaab ka tirsan ${subLabelSo} (${subLabelEn}). ` +
    `Raashin iyo adeeg tayo leh oo lagu keeno gurigaaga gudaha Soomaaliya. ` +
    `Order online groceries, baby, health & household items – fast delivery.`;

  // ====== Product image for previews ======
  const imgs = await fetchImagesByProductId(product.id);
  const primary = imgs?.find((i: any) => i.is_primary) ?? imgs?.[0];
  const ogImage = safeImg(primary?.url) || "/example.png";

  const canonical = new URL(`/product/${slug}`, SITE_URL).toString();
  const absoluteOgImage = ogImage.startsWith("http")
    ? ogImage
    : new URL(ogImage, SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: "website", // ✅ avoid invalid 'product' type error
      url: canonical,
      images: [
        {
          url: absoluteOgImage,
          width: 1200,
          height: 630,
          alt: baseName,
        },
      ],
      locale: "so_SO",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteOgImage],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await fetchProductBySlug(slug);
  if (!product) {
    notFound();
  }

  // Ensure we only query with valid numeric ids (prevents 22P02 when undefined/null leaks in)
  const subcategoryId = Number((product as any).subcategory_id);
  const hasSubcategoryId = Number.isFinite(subcategoryId) && subcategoryId > 0;

  const [variants, images, sub, related, brands] = await Promise.all([
    fetchVariantsByProductId(product.id),
    fetchImagesByProductId(product.id),
    hasSubcategoryId
      ? fetchSubcategoryById(subcategoryId)
      : Promise.resolve(null),
    hasSubcategoryId
      ? fetchRelatedProducts({
          subcategoryId,
          excludeProductId: product.id,
          limit: 12,
        })
      : Promise.resolve([]),
    fetchBrandsByIds([(product as any).brand_id]),
  ]);

  const brand = brands?.[0];

  const basePrice = product.base_price ?? 0;

  const firstVariant: any | undefined = (variants as any[])?.[0];
  const priceValue = firstVariant?.price ?? basePrice ?? 0;
  const priceDisplay = money(priceValue);
  const availability =
    firstVariant &&
    typeof firstVariant.stock === "number" &&
    firstVariant.stock > 0
      ? "https://schema.org/InStock"
      : "https://schema.org/OutOfStock";

  const primaryImage =
    images.find((im: any) => im.is_primary) ?? images[0] ?? null;

  const primaryImageUrl = primaryImage ? safeImg(primaryImage.url) : "";
  const absolutePrimaryImage = primaryImageUrl.startsWith("http")
    ? primaryImageUrl
    : primaryImageUrl
    ? new URL(primaryImageUrl, SITE_URL).toString()
    : "";
  const productUrl = new URL(`/product/${product.slug}`, SITE_URL).toString();

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: absolutePrimaryImage ? [absolutePrimaryImage] : [],
    description:
      (product as any).long_description ||
      `${product.name} – alaab raashin iyo adeegyo kale oo laga helo MatoMart Soomaaliya, gaarsiin degdeg ah gudaha Muqdisho & gobollada kale. Order online groceries, baby, health & household items in Somalia.`,
    brand: brand
      ? {
          "@type": "Brand",
          name: (brand as any).name,
        }
      : undefined,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: priceValue,
      availability,
      url: productUrl,
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <main className="min-h-screen bg-[#F4F6F8] pb-32">
      {/* JSON-LD SEO */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* TOP PRODUCT HEADER + CLIENT AREA */}
      <section className="mx-auto max-w-md bg-white border-b">
        <div className="px-4 pt-4">
          <div className="flex items-center justify-between mb-2">
            <Link href="/" className="text-[#0B6EA9] font-semibold text-sm">
              ← Back
            </Link>
          </div>

          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="text-[#0B6EA9] text-sm font-semibold">
                {subLabel(sub)}
              </div>

              <h1 className="mt-1 text-sm font-semibold text-gray-900 leading-snug">
                {product.name}
              </h1>

              <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-gray-500">971</span>
                <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-orange-100 text-orange-700">
                  Trending
                </span>
              </div>
            </div>

            <button className="h-10 w-10 rounded-full border bg-white grid place-items-center text-gray-600">
              ♡
            </button>
          </div>
        </div>

        <ProductClient
          productId={product.id}
          productName={product.name}
          basePrice={basePrice}
          variants={variants}
          images={images}
        />
      </section>

      {/* PRODUCT DETAILS (no return policy / article id) */}
      <section className="mx-auto max-w-md bg-white mt-2 border-t border-b">
        <div className="px-4 py-4">
          <div className="text-base font-semibold text-gray-900">
            Product Details
          </div>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            {(product as any).long_description ||
              (product as any).description ||
              "No description available."}
          </p>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="mx-auto max-w-md bg-white mt-2 border-t border-b">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="text-base font-semibold text-gray-900">
            You may also like
          </div>
        </div>

        <div className="px-4 pb-4 overflow-x-auto">
          <div className="flex gap-3">
            {related.map((p: any) => {
              const img =
                images.find(
                  (im: any) => im.product_id === p.id && im.is_primary
                )?.url ||
                images.find((im: any) => im.product_id === p.id)?.url ||
                "/example.png";

              const price = p.base_price ?? 0;

              return (
                <div
                  key={p.id}
                  className="min-w-[155px] bg-white border rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="p-2 flex justify-end text-gray-500">♡</div>

                  <Link href={`/product/${p.slug}`} className="block px-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={safeImg(img)}
                      alt={p.name}
                      className="mx-auto h-28 w-auto object-contain"
                    />
                  </Link>

                  <div className="px-3 pb-3">
                    <div className="text-[11px] text-gray-500">Sponsored</div>
                    <div className="text-[12px] font-medium text-gray-900 line-clamp-2 min-h-[32px]">
                      {p.name}
                    </div>

                    <div className="mt-1 flex items-end gap-2">
                      <div className="font-extrabold text-gray-900 text-sm">
                        {money(price)}
                      </div>
                    </div>

                    <div className="h-[14px]" />
                    {/* <AddToCartButton productId={p.id} /> */}
                  </div>
                </div>
              );
            })}

            {related.length === 0 && (
              <div className="text-sm text-gray-600">
                No related products yet.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sticky Add to Cart bar above bottom nav */}
      <section className="fixed inset-x-0 bottom-[90px] z-40 border-t bg-white">
        <div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[11px] text-gray-500">Price</span>
            <span className="text-lg font-extrabold text-gray-900">
              {priceDisplay}
            </span>
          </div>
          <div className="flex-1 flex justify-end">
            {/* This button shows:
                - "Add +" when not in cart
                - "-  qty  +" when in cart
               Quantity styling (big, bold, black, spaced out) is handled inside AddToCartButton.tsx
            */}
            <AddToCartButton productId={product.id} />
          </div>
        </div>
      </section>

      <BottomNav />
    </main>
  );
}