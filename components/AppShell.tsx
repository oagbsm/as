"use client";

import { usePathname } from "next/navigation";
import TopNavbar from "@/components/TopNavBar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideSearch =
    pathname === "/search" || pathname.startsWith("/search/results");

  return (
    <>
      {!hideSearch && <TopNavbar />}
      {children}
    </>
  );
}
