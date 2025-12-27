"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

type VegType = {
  slug: string;
  name_en: string;
  name_so: string;
  img: string;
};

// Keep this in sync with the list on /subcategory/vegetables
const VEG_TYPES: VegType[] = [
  {
    slug: "potatoes",
    name_en: "Potatoes",
    name_so: "Baradho",
    img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/subsub/potatoes.webp",
  },
  {
    slug: "tomatoes",
    name_en: "Tomatoes",
    name_so: "Yaanyo",
    img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/subsub/tomatoes.webp",
  },
  {
    slug: "onions",
    name_en: "Onions",
    name_so: "Basal",
    img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/subsub/onions.webp",
  },
  {
    slug: "carrots",
    name_en: "Carrots",
    name_so: "Karootada",
    img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/subsub/carrots.webp",
  },
  {
    slug: "cabbage",
    name_en: "Cabbage",
    name_so: "Kalmoon",
    img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/subsub/cabbage.webp",
  },
  {
    slug: "spinach",
    name_en: "Spinach",
    name_so: "Isbinaaj",
    img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/subsub/spinach.webp",
  },
  {
    slug: "green-peppers",
    name_en: "Green Peppers",
    name_so: "Basal Cagaaran",
    img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/subsub/greenpepper.webp",
  },
  {
    slug: "garlic",
    name_en: "Garlic",
    name_so: "Tuuni",
    img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/subsub/garlic.webp",
  },
  {
    slug: "ginger",
    name_en: "Ginger",
    name_so: "Sanjabiil",
    img: "https://ecfxrmhrfjqdmqewzrfz.supabase.co/storage/v1/object/public/product-images/subsub/ginger.webp",
  },
];

export default function VegItemsPage() {
  const { veg } = useParams<{ veg: string }>();
  const { lang } = useLanguage();

  const vegType = VEG_TYPES.find((v) => v.slug === veg);

  if (!vegType) {
    return (
      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-md px-4 pt-6 pb-4">
          <p className="text-sm text-gray-600">
            {lang === "en"
              ? "Vegetable type not found."
              : "Noocan khudaarta lama helin."}
          </p>
          <div className="mt-3">
            <Link
              href="/subcategory/vegetables"
              className="text-sm font-semibold text-[#0B6EA9]"
            >
              ← {lang === "en" ? "Back to vegetables" : "Ku noqo khudaar"}
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const label = lang === "en" ? vegType.name_en : vegType.name_so;

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-md px-4 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <Link
            href="/subcategory/vegetables"
            className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-sm"
            aria-label={lang === "en" ? "Back" : "Dib u noqo"}
          >
            ←
          </Link>
          <div>
            <h1 className="text-base font-semibold text-gray-900">
              {label}
            </h1>
            <p className="mt-0.5 text-xs text-gray-500">
              {lang === "en"
                ? "Select the items you want to add to your basket."
                : "Ka dooro alaabta aad rabto inaad gaadhiga geliso."}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-md px-4 pb-6">
        <div className="mb-4 flex justify-center">
          <div className="h-24 w-24 rounded-full bg-emerald-900/15 flex items-center justify-center">
            <Image
              src={vegType.img || "/example.png"}
              alt={label}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        {/* Placeholder list for items of this veg type.
           You can later replace this with real products from your DB. */}
        <div className="rounded-2xl border border-gray-100 bg-gray-50 px-3 py-4 text-xs text-gray-600">
          {lang === "en" ? (
            <>
              <p className="font-semibold mb-1">
                Items for {vegType.name_en} will appear here.
              </p>
              <p>
                Once you connect this page to your products table, you can
                show different kinds (e.g. Kenyan, local, organic) and allow
                adding them to the basket.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold mb-1">
                Alaabta {vegType.name_so} halkan bay ka soo muuqan doonaan.
              </p>
              <p>
                Marka aad ku xirto miiska alaabta, waxaad halkan ka soo
                bandhigi kartaa noocyo kala duwan oo {vegType.name_so} ah oo
                lagu daro gaadhiga.
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
