"use client";

import Link from "next/link";

const SECTIONS = [
  {
    slug: "/health-hub",
    title: "Health Hub",
    desc: "Vitamins, supplements, healthy snacks and tips to feel your best.",
    badge: "Wellbeing",
    emoji: "💊",
  },
  {
    slug: "/one-dollar-deals",
    title: "$1 Deals",
    desc: "Everyday essentials and surprise offers for just 1 dollar.",
    badge: "Save More",
    emoji: "/dollar.webp",
  },
  {
    slug: "/adeeg-bile",
    title: "Adeeg Bile",
    desc: "Regular-use items you always need, made easy to reorder.",
    badge: "Daily Needs",
    emoji: "🛒",
  },
  {
    slug: "/quick-recipes",
    title: "Quick Recipes",
    desc: "Fast, simple ideas using common ingredients from your basket.",
    badge: "Inspiration",
    emoji: "🍲",
  },
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F4F6FB] to-white text-gray-900">
      <div className="mx-auto max-w-md px-4 pt-6 pb-24">
        {/* Header */}
        <header className="mb-6">
          <p className="text-xs font-semibold tracking-wide text-[#0B6EA9]/80 uppercase">
            Explore
          </p>
          <h1 className="mt-1 text-2xl font-extrabold text-gray-900">
            Discover more ways to shop
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Shortcuts to health picks, dollar deals, everyday services and
            recipe ideas – all in one place.
          </p>
        </header>

        {/* Sections grid */}
        <section className="grid grid-cols-2 gap-3">
          {SECTIONS.map((s) => (
            <Link
              key={s.slug}
              href={s.slug}
              className="flex flex-col justify-center items-center rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-150 overflow-hidden aspect-square p-3"
            >
              <div className="flex flex-col items-center text-center">
                {typeof s.emoji === "string" && s.emoji.startsWith("/") ? (
                  // If image path, show image
                  <img
                    src={s.emoji}
                    alt={s.title}
                    className="mb-2 h-10 w-10 object-contain"
                  />
                ) : (
                  // Otherwise, show emoji text
                  <div className="text-3xl mb-2">{s.emoji}</div>
                )}
                <h2 className="text-sm font-semibold text-gray-900">{s.title}</h2>
                <p className="mt-1 text-[11px] text-gray-600 line-clamp-2">{s.desc}</p>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}