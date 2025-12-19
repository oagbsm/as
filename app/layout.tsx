import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { OrderModeProvider } from "@/context/OrderModeContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <OrderModeProvider>
          <CartProvider>{children}</CartProvider>
        </OrderModeProvider>
      </body>
    </html>
  );
}
