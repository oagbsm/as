"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { getCategoriesWithSubcategories, fetchSubSubcategoriesBySubcategoryId } from "@/lib/db";

type CategoryWithSubcats = {
  id: number;
  slug: string;
  img: string | null;
  name_so: string;
  name_en: string;
  subcats: {
    id: number;
    category_id: number;
    slug: string;
    img: string | null;
    name_so: string;
    name_en: string;
  }[];
};

function getLabel(cat: CategoryWithSubcats, lang: "so" | "en") {
  const so = cat?.name_so ?? "Qayb";
  const en = cat?.name_en ?? "Category";
  return lang === "en" ? en : so;
}

export default function CategoriesPage() {
  const { lang } = useLanguage();
  const [cats, setCats] = useState<CategoryWithSubcats[]>([]);
  const [subsubs, setSubsubs] = useState<Record<number, any[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await getCategoriesWithSubcategories();
        setCats(data as CategoryWithSubcats[]);

        const map: Record<number, any[]> = {};
        for (const cat of data as CategoryWithSubcats[]) {
          for (const sub of cat.subcats) {
            const list = await fetchSubSubcategoriesBySubcategoryId(sub.id);
            map[sub.id] = list;
          }
        }
        setSubsubs(map);
      } catch (e) {
        console.error("getCategoriesWithSubcategories error", e);
        setCats([]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F4F6F8] pb-20">
        <section className="mx-auto max-w-md bg-white border-b">
          <div className="px-4 pt-4 pb-3">
            <h1 className="text-base font-semibold text-gray-900">
              {lang === "en" ? "All Categories" : "Dhammaan Qaybaha"}
            </h1>
            <p className="mt-1 text-xs text-gray-500">
              {lang === "en"
                ? "Loading categories..."
                : "Qaybaha ayaa soo dhacaya..."}
            </p>
          </div>
        </section>
      </main>
    );
  }

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

      {/* SUBCATEGORY → SUBSUBCATEGORY GRID */}
      <section className="mx-auto max-w-md mt-2 space-y-4">
        {cats.flatMap((cat) =>
          cat.subcats.map((sub) => (
            <div key={sub.id} className="bg-white border-b rounded-lg pb-3">
              {/* Subcategory Title */}
              <div className="flex items-center justify-between px-4 pt-4">
                <h2 className="text-base font-semibold text-gray-900">{sub.name_en || sub.name_so}</h2>
              </div>

              {/* Subsubcategory Cards */}
              <div className="mt-3 px-4">
                <div className="relative">
                  <div className="flex gap-3 overflow-x-auto pb-1 pr-6">
                    {(subsubs[sub.id] ?? []).map((ss: any) => (
                      <Link
                        key={ss.id}
                        href={`/subcategory/${sub.slug}?ss=${ss.slug}`}
                        className="min-w-[110px] max-w-[115px] rounded-xl bg-[#EAF3FF] px-2 py-2 flex flex-col items-center"
                      >
                        <div className="h-10 w-full mb-2 flex items-center justify-center">
                          <Image
                            src={(typeof ss.img === "string" ? ss.img.trim() : "/example.png") || "/example.png"}
                            alt={ss.name_so || ss.name_en}
                            width={70}
                            height={55}
                            className="object-contain"
                          />
                        </div>
                        <div className="text-[11px] font-semibold text-gray-900 leading-tight text-center line-clamp-2">
                          {ss.name_en || ss.name_so}
                        </div>
                      </Link>
                    ))}

                    {/* If no subsubs */}
                    {(!subsubs[sub.id] || subsubs[sub.id].length === 0) && (
                      <div className="text-[10px] text-gray-500 italic px-2 py-1">
                        {lang === "en" ? "No subcategories" : "Qeybo ma jiro"}
                      </div>
                    )}
                  </div>

                  {/* Right arrow hint when many items */}
                  {(subsubs[sub.id]?.length ?? 0) > 4 && (
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#F4F6F8] to-transparent flex items-center justify-center">
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
}