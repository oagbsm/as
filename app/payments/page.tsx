"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  readPayments,
  clearPayments,
  type PaymentMethod,
  type PaymentRecord,
} from "@/lib/payments";

function formatGBP(n: number) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(n);
}

const METHODS: PaymentMethod[] = ["EVC", "MERCHANT", "EDAHAB", "PREMIER_WALLET", "AMTEL"];

function labelPM(m: PaymentMethod) {
  if (m === "EVC") return "EVC";
  if (m === "MERCHANT") return "Merchant";
  if (m === "EDAHAB") return "E-Dahab";
  if (m === "PREMIER_WALLET") return "Premier Wallet";
  return "Amtel";
}

function badgeSource(src: PaymentRecord["source"]) {
  if (src === "SALE") return { text: "SALE", cls: "bg-green-100 text-green-700" };
  if (src === "CREDIT_PAYMENT") return { text: "CREDIT PAY", cls: "bg-orange-100 text-orange-800" };
  return { text: "CREDIT SETTLE", cls: "bg-blue-100 text-blue-800" };
}

export default function PaymentsPage() {
  const [rows, setRows] = useState<PaymentRecord[]>([]);
  const [activeMethod, setActiveMethod] = useState<PaymentMethod | "ALL">("ALL");
  const [q, setQ] = useState("");
  const [confirmClear, setConfirmClear] = useState(false);

  function refresh() {
    setRows(readPayments());
  }

  useEffect(() => {
    refresh();
  }, []);

  const totals = useMemo(() => {
    const byMethod: Record<string, number> = {};
    for (const m of METHODS) byMethod[m] = 0;

    let all = 0;
    let creditPaidAll = 0;
    const creditPaidByMethod: Record<string, number> = {};
    for (const m of METHODS) creditPaidByMethod[m] = 0;

    for (const p of rows) {
      const amt = Number(p.amount || 0);
      all += amt;
      byMethod[p.method] = (byMethod[p.method] ?? 0) + amt;

      if (p.source === "CREDIT_PAYMENT" || p.source === "CREDIT_SETTLEMENT") {
        creditPaidAll += amt;
        creditPaidByMethod[p.method] = (creditPaidByMethod[p.method] ?? 0) + amt;
      }
    }

    return { all, byMethod, creditPaidAll, creditPaidByMethod };
  }, [rows]);

  const filtered = useMemo(() => {
    let list = rows;

    if (activeMethod !== "ALL") {
      list = list.filter((r) => r.method === activeMethod);
    }

    const s = q.trim().toLowerCase();
    if (!s) return list;

    return list.filter((p) => {
      const id = (p.id ?? "").toLowerCase();
      const orderId = (p.orderId ?? "").toLowerCase();
      const name = (p.customer?.name ?? "").toLowerCase();
      const phone = String(p.customer?.phone ?? "").toLowerCase();
      const note = (p.note ?? "").toLowerCase();
      const src = (p.source ?? "").toLowerCase();
      return (
        id.includes(s) ||
        orderId.includes(s) ||
        name.includes(s) ||
        phone.includes(s) ||
        note.includes(s) ||
        src.includes(s)
      );
    });
  }, [rows, activeMethod, q]);

  function doClear() {
    clearPayments();
    setRows([]);
    setConfirmClear(false);
  }

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-blue-600 hover:underline">← Home</Link>
            <h1 className="text-lg font-semibold">Payments</h1>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/orders" className="h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50">
              Orders
            </Link>
            <Link href="/credits" className="h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50">
              Credits
            </Link>
            <button
              onClick={refresh}
              className="h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50"
            >
              Refresh
            </button>
            <button
              onClick={() => setConfirmClear(true)}
              className="h-9 px-3 rounded-full border text-sm font-semibold text-red-600 hover:bg-red-50"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Totals */}
      <section className="max-w-6xl mx-auto px-4 pt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="border rounded-2xl p-4">
            <div className="text-xs text-gray-600">All payments (total)</div>
            <div className="mt-1 text-2xl font-extrabold">{formatGBP(totals.all)}</div>
            <div className="mt-1 text-sm text-gray-700">{rows.length} record(s)</div>
          </div>

          <div className="border rounded-2xl p-4 bg-[#FFF7ED]">
            <div className="text-xs text-orange-800">Credits paid (total)</div>
            <div className="mt-1 text-2xl font-extrabold text-orange-900">
              {formatGBP(totals.creditPaidAll)}
            </div>
            <div className="mt-1 text-sm text-orange-900">
              Includes partial payments + settlements
            </div>
          </div>

          <div className="border rounded-2xl p-4">
            <div className="text-xs text-gray-600">Search payments</div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search: name, phone, order id, credit, PAY-..."
              className="mt-2 w-full border rounded-xl px-3 py-2"
            />
          </div>
        </div>

        {/* Method totals (clickable) */}
        <div className="mt-4 border rounded-2xl p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="font-semibold">Totals by payment method</div>
            <div className="text-xs text-gray-500">
              Click a method to see its history
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveMethod("ALL")}
              className={`h-9 px-4 rounded-full border text-sm font-semibold ${
                activeMethod === "ALL" ? "border-[#0B6EA9] bg-[#EAF4FB] text-[#0B6EA9]" : "bg-white"
              }`}
            >
              All ({formatGBP(totals.all)})
            </button>

            {METHODS.map((m) => {
              const active = activeMethod === m;
              const total = totals.byMethod[m] ?? 0;
              const credit = totals.creditPaidByMethod[m] ?? 0;

              return (
                <button
                  key={m}
                  onClick={() => setActiveMethod(m)}
                  className={`h-9 px-4 rounded-full border text-sm font-semibold ${
                    active ? "border-[#0B6EA9] bg-[#EAF4FB] text-[#0B6EA9]" : "bg-white"
                  }`}
                  title={`Credits paid via ${labelPM(m)}: ${formatGBP(credit)}`}
                >
                  {labelPM(m)}: {formatGBP(total)}
                  <span className="ml-2 text-xs opacity-70">
                    (credit {formatGBP(credit)})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* History list */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        {filtered.length === 0 ? (
          <div className="border rounded-2xl p-8 text-center">
            <div className="text-3xl">💳</div>
            <p className="mt-3 font-semibold">No payments found</p>
            <p className="text-sm text-gray-600 mt-1">
              Payments appear when you checkout paid orders or receive credit payments.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((p) => {
              const when = new Date(p.createdAt).toLocaleString();
              const src = badgeSource(p.source);
              const cust = p.customer ? `${p.customer.name} • ${p.customer.phone}` : "—";
              return (
                <div key={p.id} className="border rounded-2xl p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-semibold">
                          {labelPM(p.method)} • {formatGBP(p.amount)}
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${src.cls}`}>
                          {src.text}
                        </span>
                      </div>

                      <div className="mt-1 text-xs text-gray-600">
                        {p.id} • {when}
                      </div>

                      <div className="mt-2 text-xs text-gray-700">
                        Customer: <span className="font-semibold">{cust}</span>
                      </div>

                      {p.orderId ? (
                        <div className="mt-1 text-xs text-gray-700">
                          Order: <span className="font-semibold">{p.orderId}</span>
                        </div>
                      ) : null}

                      {p.note ? (
                        <div className="mt-1 text-xs text-gray-600">
                          Note: <span className="text-gray-800">{p.note}</span>
                        </div>
                      ) : null}
                    </div>

                    <div className="text-right text-xs text-gray-500">
                      {p.source === "CREDIT_PAYMENT" ? "Partial/Full credit payment" : null}
                      {p.source === "CREDIT_SETTLEMENT" ? "Credit order marked paid" : null}
                      {p.source === "SALE" ? "Normal paid sale" : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Clear confirm */}
      {confirmClear ? (
        <div className="fixed inset-0 bg-black/30 z-50 grid place-items-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-5 border shadow">
            <div className="text-lg font-semibold">Clear payment ledger?</div>
            <p className="mt-2 text-sm text-gray-600">
              This deletes the saved payments history from this device only (testing mode).
            </p>

            <div className="mt-5 flex gap-2 justify-end">
              <button
                onClick={() => setConfirmClear(false)}
                className="h-10 px-4 rounded-full border font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={doClear}
                className="h-10 px-4 rounded-full bg-red-600 text-white font-semibold"
              >
                Yes, clear
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
