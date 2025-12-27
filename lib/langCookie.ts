export type Lang = "so" | "en";

const COOKIE_NAME = "lang";

export function getLangCookie(): Lang | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;

  const value = decodeURIComponent(match.split("=")[1] || "");
  return value === "so" || value === "en" ? value : null;
}

export function setLangCookie(lang: Lang) {
  if (typeof document === "undefined") return;
  // 180 days
  const maxAge = 60 * 60 * 24 * 180;
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(lang)}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}
