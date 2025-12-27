"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

export type NavbarConfig = {
  show?: boolean; // allow hiding on some pages (e.g. checkout)
  showBack?: boolean;
  backHref?: string;
  locationText?: string;
  rightSlot?: React.ReactNode;
};

type CtxType = {
  config: NavbarConfig;
  setConfig: (next: NavbarConfig) => void;
  mergeConfig: (partial: Partial<NavbarConfig>) => void;
  resetConfig: () => void;
};

const DEFAULT_CONFIG: NavbarConfig = {
  show: true,
  showBack: false,
  backHref: "/",
  locationText: "Deliver to: Mogadishu",
  rightSlot: null,
};

const Ctx = createContext<CtxType | null>(null);

export function NavbarConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfigState] = useState<NavbarConfig>(DEFAULT_CONFIG);

  const api = useMemo<CtxType>(() => {
    return {
      config,
      setConfig: (next) => setConfigState({ ...DEFAULT_CONFIG, ...next }),
      mergeConfig: (partial) =>
        setConfigState((prev) => ({ ...prev, ...partial })),
      resetConfig: () => setConfigState(DEFAULT_CONFIG),
    };
  }, [config]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useNavbarConfig() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useNavbarConfig must be used inside NavbarConfigProvider");
  return v;
}
