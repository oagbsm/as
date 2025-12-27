"use client";

import TopNavbar from "@/components/TopNavBar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNavbar />
      {children}
    </>
  );
}
