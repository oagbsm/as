import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import { OrderModeProvider } from "@/context/OrderModeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import AppShell from "@/components/AppShell";
import BottomNav from "@/components/BottomNav";

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
