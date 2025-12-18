"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import CartIcon from "@/components/CartIcon";
import BottomNav from "@/components/BottomNav";

function cleanPhone(input: string) {
  // keep digits only
  const digits = (input || "").replace(/[^\d]/g, "");
  return digits;
}

export default function ShopFastPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [items, setItems] = useState("");

  const phoneDigits = useMemo(() => cleanPhone(phone), [phone]);

  const canSend = useMemo(() => {
    return items.trim().length >= 3 && phoneDigits.length >= 8;
  }, [items, phoneDigits]);

  const waNumber = "252622073874"; // ✅ destination WhatsApp number

  const message = useMemo(() => {
    const lines = [
      "SHOP FAST ORDER",
      name.trim() ? `Name: ${name.trim()}` : null,
      phoneDigits ? `Customer phone: ${phoneDigits}` : null,
      "",
      "Items:",
      items.trim() || "(not provided)",
      "",
      "Please confirm price & delivery.",
    ].filter(Boolean);

    return lines.join("\n");
  }, [name, phoneDigits, items]);

  function openWhatsApp() {
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#F4F6F8] pb-24 text-black">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-[#0B6EA9]">
        <div className="mx-auto max-w-md px-3 py-2 flex items-center gap-2">
          <Link
            href="/"
            className="h-10 w-10 grid place-items-center rounded-full bg-[#0A5F91] text-white"
            aria-label="Back"
          >
            ←
          </Link>

          <div className="flex-1 h-10 rounded-full bg-[#0A5F91] px-4 flex items-center text-white/90 text-sm font-semibold">
            ⚡ Shop Fast
          </div>

          <CartIcon />
        </div>

        <div className="bg-white border-t">
          <div className="mx-auto max-w-md px-4 py-2 text-sm text-gray-800">
            📍 Amiin Ambulance , Taleh ▾
          </div>
        </div>
      </header>

      {/* ===== CONTENT ===== */}
      <section className="mx-auto max-w-md px-4 pt-4">
        {/* Intro card */}
        <div className="bg-white rounded-2xl border p-4 shadow-sm">
          <div className="text-lg font-extrabold text-gray-900">
            Quick Order on WhatsApp
          </div>
          <div className="mt-1 text-sm text-gray-600">
            Type your shopping list and we’ll confirm availability, price, and delivery.
          </div>

          <div className="mt-2 text-xs text-gray-500">
            Your message will be sent to: <span className="font-semibold">+252 622 073 874</span>
          </div>
        </div>

        {/* Form card */}
        <div className="mt-2 bg-white rounded-2xl border p-4 shadow-sm">
          <label className="block text-sm font-semibold text-gray-900">
            Your name (optional)
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Asha"
            className="mt-1 w-full h-8 rounded-xl border px-3 outline-none focus:ring-2 focus:ring-[#0B6EA9]/30"
          />

          <label className="mt-2 block text-sm font-semibold text-gray-900">
            Your phone number (required)
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            inputMode="tel"
            placeholder="e.g. 0612345678 or +252..."
            className="mt-2 w-full h-11 rounded-xl border px-3 outline-none focus:ring-2 focus:ring-[#0B6EA9]/30"
          />
          <div className="mt-1 text-xs text-gray-500">
            We use this to confirm your order.
          </div>

          <label className="mt-2 block text-sm font-semibold text-gray-900">
            Shopping list (required)
          </label>
          <textarea
            value={items}
            onChange={(e) => setItems(e.target.value)}
            placeholder={`Example:\n- Bananas 2kg\n- Rice 5kg\n- Tea bags 1 box\n- Dog food 10kg`}
            className="mt-1 w-full min-h-[140px] rounded-xl border p-3 outline-none focus:ring-2 focus:ring-[#0B6EA9]/30"
          />

          {/* Preview (nice + reassuring) */}
          <div className="mt-2 rounded-xl bg-[#F4F6F8] border p-3">
            <div className="text-xs font-bold text-gray-700 mb-1">Message preview</div>
            <pre className="text-xs text-gray-700 whitespace-pre-wrap leading-relaxed">
{message}
            </pre>
          </div>

          <button
            onClick={openWhatsApp}
            disabled={!canSend}
            className={`mt-2 w-full h-8 rounded-xl font-extrabold text-white shadow-sm ${
              canSend ? "bg-[#0B6EA9]" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Send on WhatsApp
          </button>

          {!canSend && (
            <div className="mt-2 text-xs text-gray-500">
              Enter your phone number and a shopping list to enable WhatsApp.
            </div>
          )}
        </div>

        {/* Quick tips */}
        <div className="mt-3 bg-white rounded-2xl border p-4">
          <div className="text-sm font-extrabold text-gray-900">Tips</div>
          <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
            <li>Include quantity (e.g. “2kg”, “1 pack”, “3 bottles”).</li>
            <li>If you want a brand, write it (e.g. “Nescafe”).</li>
            <li>We’ll reply with price + delivery confirmation.</li>
          </ul>
        </div>
      </section>

      {/* Bottom Nav */}
      <BottomNav />
    </main>
  );
}
