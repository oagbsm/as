"use client";

import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import CartIcon from "@/components/CartIcon";
import { useOrderMode } from "@/context/OrderModeContext";

export default function TopNavbar({
  locationText = "Deliver to: Mogadishu",
  showBack = false,
  backHref = "/",
  rightSlot,
}: {
  locationText?: string;
  showBack?: boolean;
  backHref?: string;
  rightSlot?: React.ReactNode; // optional (profile button etc.)
}) {
  const { mode, setMode } = useOrderMode();

  return (
    <header className="sticky top-0 z-50 bg-[#0B6EA9]">
      <div className="mx-auto max-w-md px-3 pt-2">
        {/* Row 1: Back (optional) + wide Search + Cart + optional right slot */}
        <div className="flex items-center gap-2">
          {showBack ? (
            <Link
              href={backHref}
              className="h-10 w-10 rounded-full bg-[#0A5F91] text-white grid place-items-center"
              aria-label="Back"
            >
              ←
            </Link>
          ) : null}

          {/* Search is already flex-1 inside your SearchBar component */}
<SearchBar placeholder="Search products" />

          <CartIcon />

          {rightSlot ? rightSlot : null}
        </div>

        {/* Row 2: Location + tiny mode toggle */}
        <div className="mt-2 pb-2 flex items-center justify-between">
          <div className="text-xs text-white/90 flex items-center gap-2">
            <span className="text-sm">📍</span>
            <span className="font-semibold">{locationText}</span>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-[#0A5F91] p-1">
            <button
              onClick={() => setMode("local")}
              className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold transition ${
                mode === "local" ? "bg-white text-[#0B6EA9]" : "text-white/90"
              }`}
            >
              In-store
            </button>
            <button
              onClick={() => setMode("online")}
              className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold transition ${
                mode === "online" ? "bg-white text-[#0B6EA9]" : "text-white/90"
              }`}
            >
              Online
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
