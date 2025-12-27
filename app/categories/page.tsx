"use client";

import Image from "next/image";
import Link from "next/link";

import { categories, subcategories } from "@/data/store";
import { useLanguage } from "@/context/LanguageContext";

function getLabel(cat: any, lang: "so" | "en") {
  const so = cat?.name_so ?? cat?.name ?? "Qayb";
  const en = cat?.name_en ?? cat?.name ?? "Category";
  return lang === "en" ? en : so;
}

export default function CategoriesPage() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-[#F4F6F8] pb-20">
      {/* HEADER */}
      <section className="mx-auto max-w-md bg-white border-b">
        <div className="px-4 pt-4 pb-3">
          <h1 className="text-base font-semibold text-gray-900">
            {lang === "en" ? "All Categories" : "Dhammaan Qaybaha"}
          </h1>
          <p className="mt-1 text-xs text-gray-500">
            {lang === "en"
              ? "Browse all sections of the store."
              : "Ka dooro qaybaha kala duwan ee dukaanka."}
          </p>
        </div>
      </section>

      {/* CATEGORY SECTIONS WITH SUBCATEGORY ROWS */}
      <section className="mx-auto max-w-md mt-2">
        {categories.map((cat: any) => {
          const label = getLabel(cat, lang);
          const catHref = `/category/${cat.slug}`;
          const subsForCat = subcategories.filter((sub: any) => {
            const cid = (sub.category_id ?? sub.categoryId) as number | undefined;
            return cid === cat.id;
          });

          if (!subsForCat.length) return null;

          return (
            <div key={cat.id} className="mb-3 bg-white border-b">
              <div className="px-4 pt-4 flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-900">
                  {label}
                </h2>
                <Link
                  href={catHref}
                  className="text-sm font-semibold text-[#0B6EA9]"
                >
                  {lang === "en" ? "View All" : "Dhammaan"}
                </Link>
              </div>

              <div className="mt-3 px-4 pb-4">
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {subsForCat.map((sub: any) => (
                    <Link
                      key={sub.id}
                      href={`/subcategory/${sub.slug}`}
                      className="min-w-[85px] max-w-[90px] rounded-xl bg-[#EAF3FF] px-1.5 py-1.5 flex flex-col items-center"
                    >
                      <div className="h-10 w-full mb-2 flex items-center justify-center">
                        <Image
                          src={(sub.img as string) || "/example.png"}
                          alt={sub.name_so || sub.name_en}
                          width={55}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <div className="text-[9px] font-semibold text-gray-900 leading-tight text-center line-clamp-2">
                        {sub.name_en || sub.name_so}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}