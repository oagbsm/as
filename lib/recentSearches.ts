const LS_KEY = "recent_searches_v1";
const MAX = 10;

export function loadRecentSearches(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveRecentSearch(term: string) {
  if (typeof window === "undefined") return;
  const t = term.trim();
  if (!t) return;

  const prev = loadRecentSearches();
  const next = [t, ...prev.filter(x => x.toLowerCase() !== t.toLowerCase())].slice(0, MAX);

  localStorage.setItem(LS_KEY, JSON.stringify(next));
}

export function clearRecentSearches() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(LS_KEY);
}
