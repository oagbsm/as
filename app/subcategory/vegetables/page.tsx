"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

type VegType = {
  slug: string;
  name_en: string;
  name_so: string;
  img: string;
};

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

export default function VegetablesSubcategoryPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-md px-4 pt-4 pb-3">
        <h1 className="text-base font-semibold text-gray-900">
          {lang === "en" ? "Fresh Vegetables" : "Khudaar Cusub"}
        </h1>
        <p className="mt-1 text-xs text-gray-500">
          {lang === "en"
            ? "Tap a vegetable to see all available items."
            : "Guji khudaar kasta si aad u aragto dhammaan alaabta la heli karo."}
        </p>
      </section>

      <section className="mx-auto max-w-md px-4 pb-6">
        <div className="grid grid-cols-3 gap-3">
          {VEG_TYPES.map((veg) => {
            const label = lang === "en" ? veg.name_en : veg.name_so;
            return (
              <Link
                key={veg.slug}
                href={`/subcategory/vegetables/${veg.slug}`}
                className="flex flex-col items-center"
              >
                <div className="h-28 w-28 rounded-full bg-gradient-to-b from-green-200 via-green-300 to-green-500 flex items-center justify-center shadow-sm">
                  <Image
                    src={veg.img || "/example.png"}
                    alt={label}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="mt-2 text-[13px] font-semibold text-gray-900 text-center leading-tight">
                  {label}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}