"use client";

import { useOrderMode } from "@/context/OrderModeContext";

export default function OrderModeToggle() {
  const { mode, setMode } = useOrderMode();

  return (
    <div className="flex items-center rounded-full bg-[#0A5F91] p-1">
      <button
        onClick={() => setMode("online")}
        className={`h-10 px-3 rounded-full text-xs font-extrabold transition ${
          mode === "online" ? "bg-white text-[#0B6EA9]" : "text-white/90"
        }`}
      >
        Online
      </button>

      <button
        onClick={() => setMode("local")}
        className={`h-10 px-3 rounded-full text-xs font-extrabold transition ${
          mode === "local" ? "bg-white text-[#0B6EA9]" : "text-white/90"
        }`}
      >
        Local
      </button>
    </div>
  );
}
