"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type OrderMode = "local" | "online";

type Ctx = { mode: OrderMode; setMode: (m: OrderMode) => void };

const OrderModeContext = createContext<Ctx | null>(null);
const KEY = "order_mode_v1";

export function OrderModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<OrderMode>("online");

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (stored === "local" || stored === "online") setModeState(stored);
  }, []);

  function setMode(m: OrderMode) {
    setModeState(m);
    localStorage.setItem(KEY, m);
  }

  return (
    <OrderModeContext.Provider value={{ mode, setMode }}>
      {children}
    </OrderModeContext.Provider>
  );
}

export function useOrderMode() {
  const ctx = useContext(OrderModeContext);
  if (!ctx) throw new Error("useOrderMode must be used inside OrderModeProvider");
  return ctx;
}
