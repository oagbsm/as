"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  productId: number;
  variantId: number | null; // ✅ NEW (null for products with no variants)
  qty: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (productId: number, variantId: number | null, qty?: number) => void;
  setQty: (productId: number, variantId: number | null, qty: number) => void;
  removeItem: (productId: number, variantId: number | null) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  function addItem(productId: number, variantId: number | null, qty = 1) {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productId === productId && i.variantId === variantId
      );
      if (existing) {
        return prev.map((i) =>
          i.productId === productId && i.variantId === variantId
            ? { ...i, qty: i.qty + qty }
            : i
        );
      }
      return [...prev, { productId, variantId, qty }];
    });
  }

  function setQty(productId: number, variantId: number | null, qty: number) {
    if (qty <= 0) {
      removeItem(productId, variantId);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.productId === productId && i.variantId === variantId ? { ...i, qty } : i
      )
    );
  }

  function removeItem(productId: number, variantId: number | null) {
    setItems((prev) =>
      prev.filter((i) => !(i.productId === productId && i.variantId === variantId))
    );
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider value={{ items, addItem, setQty, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
