import "dotenv/config";
import * as cheerio from "cheerio";
import { createClient } from "@supabase/supabase-js";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Scrape Lulu GCC category/list pages and upsert ONLY:
 * - products.name
 * - products.slug
 * - products.base_price
 *
 * NOTE: Your `products` table has many NOT NULL columns, so we also provide
 * reasonable defaults for those required fields.
 */

// ---- CONFIG ----
// Example: https://gcc.luluhypermarket.com/en-qa/grocery-food-cupboard-canned-foods/
const CATEGORY_URL = process.env.LULU_CATEGORY_URL || "https://gcc.luluhypermarket.com/en-qa/grocery-food-cupboard-canned-foods/";

// How many pages to try (page 1 is the base URL; page 2+ uses ?page=N)
const PAGES = Number(process.env.LULU_PAGES || 10);

// polite delay
const DELAY_MS = Number(process.env.LULU_DELAY_MS || 400);

// Supabase (use SERVICE ROLE for scripts; do NOT use anon key)
const SUPABASE_URL =
  process.env.SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "";

const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_SERVICE_KEY ||
  "";

// Defaults for required NOT NULL columns in your `products` table
const DEFAULT_CATEGORY_ID = Number(process.env.DEFAULT_CATEGORY_ID || 1);
const DEFAULT_SUBCATEGORY_ID = Number(process.env.DEFAULT_SUBCATEGORY_ID || 1);
const DEFAULT_BRAND_ID = Number(process.env.DEFAULT_BRAND_ID || 1);

const SITE_ORIGIN = "https://gcc.luluhypermarket.com";

function assertEnv() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error(
      "Missing env: SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and SUPABASE_SERVICE_ROLE_KEY"
    );
  }
}

function normalizeSlugFromHref(href: string) {
  // href example: /en-qa/kdd-mango-nectar-juice-6-x-125-ml/p/340748-ch5/?convtobuom=6
  const clean = href.split("?")[0];
  const parts = clean.split("/").filter(Boolean);
  // Expect: ["en-qa", "<slug>", "p", "<id>"]
  const slug = parts[1] || parts[0] || "";
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function parsePrice(text: string) {
  // examples: "7.25 QAR", "1.50 QAR"
  const m = String(text || "").replace(/,/g, "").match(/(\d+(?:\.\d+)?)/);
  return m ? Number(m[1]) : null;
}

async function fetchHtml(url: string) {
  const res = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (compatible; MatoScraper/1.0; +https://example.local)",
      accept: "text/html,application/xhtml+xml",
    },
  });
  if (!res.ok) throw new Error(`Fetch failed ${res.status} ${res.statusText} for ${url}`);
  return await res.text();
}

function pageUrl(page: number) {
  // page is 1-indexed
  if (page <= 1) return CATEGORY_URL;

  // Some Lulu pages use query pagination, some use path pagination.
  // We'll try query pagination first; if you want path style, set LULU_PAGE_MODE.
  const mode = (process.env.LULU_PAGE_MODE || "query").toLowerCase();

  if (mode === "path" || mode === "path0") {
    // path: /2  (or /0 for page 1 depending on site)
    const base = CATEGORY_URL.endsWith("/") ? CATEGORY_URL.slice(0, -1) : CATEGORY_URL;
    const n = mode === "path0" ? String(page - 1) : String(page);
    return `${base}/${n}`;
  }

  const joiner = CATEGORY_URL.includes("?") ? "&" : "?";
  return `${CATEGORY_URL}${joiner}page=${page}`;
}

function parseProductsFromListing(html: string) {
  const $ = cheerio.load(html);

  // Cards on Lulu GCC PLP look like: div.rounded-[32px] ... a[href*="/p/"] ... span[data-testid="product-price"]
  const cards = $("div.rounded-[32px]").toArray();

  const seen = new Set<string>();
  const out: { name: string; slug: string; base_price: number }[] = [];

  for (const cardEl of cards) {
    const card = $(cardEl);

    // Prefer the title anchor (has long text, line-clamp-3, and href with /p/)
    const a = card
      .find('a[href*="/p/"]')
      .filter((_, el) => $(el).text().replace(/\s+/g, " ").trim().length > 3)
      .first();

    const href = a.attr("href") || "";
    if (!href || !href.includes("/p/")) continue;

    const name = a.text().replace(/\s+/g, " ").trim();
    if (!name) continue;

    const slug = normalizeSlugFromHref(href);
    if (!slug) continue;

    const priceText =
      card.find('span[data-testid="product-price"]').first().text().trim() ||
      card.find('span[data-testid="price"]').first().text().trim() ||
      card.find("span").filter((_, el) => /QAR/.test($(el).text())).first().text().trim();

    const price = parsePrice(priceText);
    if (price == null) continue;

    const key = `${slug}::${price}`;
    if (seen.has(key)) continue;
    seen.add(key);

    out.push({ name, slug, base_price: price });
  }

  return out;
}

async function upsertProducts(rows: { name: string; slug: string; base_price: number }[]) {
  if (!rows.length) return 0;

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });

  // Your products table requires these NOT NULL columns, so we set defaults.
  // IMPORTANT: Make sure these IDs exist in your DB.
  const payload = rows.map((r) => ({
    name: r.name,
    slug: r.slug,
    base_price: r.base_price,

    // required columns in your schema
    long_description: r.name,
    category_id: DEFAULT_CATEGORY_ID,
    subcategory_id: DEFAULT_SUBCATEGORY_ID,
    brand_id: DEFAULT_BRAND_ID,
    is_discounted: false,
    is_active: true,
  }));

  const { error, data } = await supabase
    .from("products")
    .upsert(payload as any, { onConflict: "slug" })
    .select("slug");

  if (error) throw error;
  return (data ?? []).length;
}

async function main() {
  assertEnv();

  console.log(`[CATEGORY] ${CATEGORY_URL}`);
  console.log(`[PAGES] ${PAGES}`);

  let pagesVisited = 0;
  let parsed = 0;
  let upserted = 0;

  for (let p = 1; p <= PAGES; p++) {
    const url = pageUrl(p);
    console.log(`\n[PAGE] ${url}`);

    const html = await fetchHtml(url);
    pagesVisited++;

    const items = parseProductsFromListing(html);

    if (items.length === 0) {
      const hasCards = cheerio.load(html)("div.rounded-[32px]").length;
      console.log(`[DEBUG] cards found: ${hasCards}`);
      console.log(
        "[HINT] If this is the top-level /grocery/ landing page, it may not contain product cards. Open a subcategory that shows products, copy that full URL, and set LULU_CATEGORY_URL to it."
      );
    }

    console.log(`[FOUND] ${items.length} products on this page`);

    parsed += items.length;

    if (items.length) {
      const n = await upsertProducts(items);
      upserted += n;
      console.log(`[UPSERTED] ${n}`);
    }

    await sleep(DELAY_MS);
  }

  console.log("\nDONE");
  console.log(`Pages visited: ${pagesVisited}`);
  console.log(`Products parsed: ${parsed}`);
  console.log(`Rows upserted: ${upserted}`);
}

main().catch((e) => {
  console.error("\nFATAL:", e);
  process.exit(1);
});