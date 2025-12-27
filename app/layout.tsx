import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import { OrderModeProvider } from "@/context/OrderModeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import AppShell from "@/components/AppShell";

export const metadata = {
  metadataBase: new URL("https://matomart.so"),
  title: {
    default: "MatoMart – Raashin Soomaaliya | Minimart Online",
    template: "%s | MatoMart",
  },
  description:
    "MatoMart waa minimart online ah oo bixisa raashin, cabitaanno, alaabo guriga & ilmaha. Keenid degdeg ah gudaha Soomaaliya.",
  alternates: {
    canonical: "https://matomart.so",
  },
  openGraph: {
    siteName: "MatoMart",
    type: "website",
    locale: "so_SO",
    url: "https://matomart.so",
    images: ["https://matomart.so/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between px-6 py-2 text-[11px] font-medium text-gray-600">
        <a href="/" className="flex flex-1 flex-col items-center gap-0.5">
          <span className="text-lg">🏠</span>
          <span>Home</span>
        </a>
        <a href="/categories" className="flex flex-1 flex-col items-center gap-0.5">
          <span className="text-lg">🧺</span>
          <span>Categories</span>
        </a>
        {/* <a href="/profile" className="flex flex-1 flex-col items-center gap-0.5">
          <span className="text-lg">👤</span>
          <span>Profile</span>
        </a> */}
        <a href="/cart" className="flex flex-1 flex-col items-center gap-0.5">
          <span className="text-lg">🛒</span>
          <span>Cart</span>
        </a>
      </div>
    </nav>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="so" data-default-lang="so">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MatoMart" />

        {/* ======= SEO BASE (Somali-first) ======= */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Default Title / Description */}
        <title>MatoMart – Raashin & Alaabo Guriga | Soomaaliya</title>
        <meta
          name="description"
          content="MatoMart waa minimart online ah oo bixisa raashin, cabitaanno, alaabo guriga & ilmaha. Keenid degdeg ah gudaha Soomaaliya — Fast delivery & quality Somali store."
        />

        {/* Canonical Base */}
        <link rel="canonical" href="https://matomart.so" />

        {/* Language / Geo SEO */}
        <meta name="language" content="so-SO" />
        <meta name="geo.region" content="SO" />
        <meta name="geo.placename" content="Beledweyne" />
        <meta name="geo.position" content="4.7351;45.2030" />
        <meta name="ICBM" content="4.7351, 45.2030" />

        {/* OGP */}
        <meta property="og:title" content="MatoMart – Raashinkaaga Online ee Soomaaliya" />
        <meta
          property="og:description"
          content="Raashin, cabitaanno, alaabta guriga & ilmaha — keenis degdeg ah Soomaaliya oo dhan."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://matomart.so/og-default.jpg" />
        <meta property="og:url" content="https://matomart.so" />
        <meta property="og:locale" content="so_SO" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MatoMart – Raashin & Alaabo Guriga" />
        <meta
          name="twitter:description"
          content="Dalbo online — keenis degdeg ah! Minimart online ah oo Soomaali ah."
        />
        <meta name="twitter:image" content="https://matomart.so/og-default.jpg" />
      </head>
      <body>
        <LanguageProvider>
          <OrderModeProvider>
            <CartProvider>
              <div className="min-h-screen pb-28">
                <AppShell>{children}</AppShell>
              </div>
              <BottomNav />
            </CartProvider>
          </OrderModeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
