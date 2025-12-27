"use client";

import { useEffect } from "react";
import { NavbarConfig, useNavbarConfig } from "@/context/NavbarConfigContext";

export function useNavbar(partial: Partial<NavbarConfig>) {
  const { mergeConfig, resetConfig } = useNavbarConfig();

  useEffect(() => {
    mergeConfig(partial);
    return () => resetConfig(); // reset when leaving page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
