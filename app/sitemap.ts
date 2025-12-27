// app/sitemap.ts
import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabaseClient";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://matomart.so"; // change later

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  // 1️⃣ Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now },
    { url: `${SITE_URL}/search`, lastModified: now },
    { url: `${SITE_URL}/health-hub`, lastModified: now },
    { url: `${SITE_URL}/offers`, lastModified: now },
  ];

  // 2️⃣ Fetch dynamic content
  const [cats, subs, prods] = await Promise.all([
    supabase.from("categories").select("slug, created_at"),
    supabase.from("subcategories").select("slug, created_at"),
    supabase.from("products").select("slug, created_at, is_active"),
  ]);

  // 3️⃣ Build entries
  const entries: MetadataRoute.Sitemap = [...staticRoutes];

  // Categories
  if (cats.data) {
    cats.data.forEach((c: any) =>
      entries.push({
        url: `${SITE_URL}/category/${c.slug}`,
        lastModified: c.created_at ?? now,
      })
    );
  }

  // Subcategories
  if (subs.data) {
    subs.data.forEach((s: any) =>
      entries.push({
        url: `${SITE_URL}/subcategory/${s.slug}`,
        lastModified: s.created_at ?? now,
      })
    );
  }

  // Products
  if (prods.data) {
    prods.data
      .filter((p: any) => p.is_active !== false)
      .forEach((p: any) =>
        entries.push({
          url: `${SITE_URL}/product/${p.slug}`,
          lastModified: p.created_at ?? now,
        })
      );
  }

  return entries;
}