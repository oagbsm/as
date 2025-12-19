"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  readCreditLedger,
  payCredit,
  totalCreditDue,
  type CreditLedgerRow,
  type PaymentMethod,
} from "@/lib/localOrders";
import { recordPayment } from "@/lib/payments";

function formatGBP(n: number) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(n);
}

const QUICK_AMOUNTS = [5, 10, 20, 50];

const PRIMARY_METHODS: PaymentMethod[] = ["EVC", "MERCHANT", "EDAHAB"];
const MORE_METHODS: PaymentMethod[] = ["PREMIER_WALLET", "AMTEL"];

function labelPM(m: PaymentMethod) {
  if (m === "EVC") return "EVC";
  if (m === "MERCHANT") return "Merchant";
  if (m === "EDAHAB") return "E-Dahab";
  if (m === "PREMIER_WALLET") return "Premier Wallet";
  return "Amtel";
}

export default function CreditsPage() {
  const [rows, setRows] = useState<CreditLedgerRow[]>([]);
  const [q, setQ] = useState("");
  const [totalDue, setTotalDue] = useState(0);

  const [paying, setPaying] = useState<CreditLedgerRow | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");

  const [method, setMethod] = useState<PaymentMethod>("EVC");
  const [showMore, setShowMore] = useState(false);

  function refresh() {
    const ledger = readCreditLedger()
      .slice()
      .filter((r) => Number(r.outstanding || 0) > 0)
      .sort((a, b) => {
        const d = Number(b.outstanding || 0) - Number(a.outstanding || 0);
        if (d !== 0) return d;
        return new Date(b.lastOrderAt).getTime() - new Date(a.lastOrderAt).getTime();
      });

    setRows(ledger);
    setTotalDue(totalCreditDue());
  }

  useEffect(() => {
    refresh();
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return rows;
    return rows.filter((r) => (r.name ?? "").toLowerCase().includes(s) || String(r.phone ?? "").toLowerCase().includes(s));
  }, [rows, q]);

  function openPay(row: CreditLedgerRow) {
    setPaying(row);
    setCustomAmount("");
    setMethod("EVC");
    setShowMore(false);
  }

  function closePay() {
    setPaying(null);
    setCustomAmount("");
  }

  function doPay(amount: number) {
    if (!paying) return;

    const due = Number(paying.outstanding || 0);
    const payAmt = Number(amount || 0);
    if (!Number.isFinite(payAmt) || payAmt <= 0) return;

    const finalAmt = Math.min(due, payAmt);

    // subtract from ledger
    payCredit(paying.customerId, finalAmt);

    // record payment event
    recordPayment({
      source: "CREDIT_PAYMENT",
      method,
      amount: finalAmt,
      customer: { id: paying.customerId, name: paying.name, phone: paying.phone },
      note: due - finalAmt === 0 ? "Credit fully paid" : "Partial credit payment",
    });

    closePay();
    refresh();
  }

  function payCustom() {
    const n = Number(customAmount);
    if (!Number.isFinite(n) || n <= 0) return;
    doPay(n);
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="sticky top-0 z-20 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-blue-600 hover:underline">← Home</Link>
            <h1 className="text-lg font-semibold">Credits</h1>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/orders" className="h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50">
              Orders
            </Link>
            <Link href="/payments" className="h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50">
              Payments
            </Link>
            <button onClick={refresh} className="h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50">
              Refresh
            </button>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 pt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="border rounded-2xl p-4 bg-[#FFF7ED]">
            <div className="text-xs text-orange-800">Total credit due</div>
            <div className="mt-1 text-2xl font-extrabold text-orange-900">{formatGBP(totalDue)}</div>
            <div className="mt-1 text-sm text-orange-900">{rows.length} customer(s)</div>
          </div>

          <div className="border rounded-2xl p-4">
            <div className="text-xs text-gray-600">Search</div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Type name or phone (e.g. Hodan / 0622)"
              className="mt-2 w-full border rounded-xl px-3 py-2"
            />
            <div className="mt-2 text-xs text-gray-500">
              Showing <span className="font-semibold">{filtered.length}</span> of{" "}
              <span className="font-semibold">{rows.length}</span>.
            </div>
          </div>

          <div className="border rounded-2xl p-4">
            <div className="text-xs text-gray-600">Quick links</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link href="/cart" className="h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50">
                Cart
              </Link>
              <Link href="/payments" className="h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50">
                Payments
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-6">
        {filtered.length === 0 ? (
          <div className="border rounded-2xl p-8 text-center">
            <div className="text-3xl">✅</div>
            <p className="mt-3 font-semibold">No credits found</p>
            <p className="text-sm text-gray-600 mt-1">No credit customers or no match.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((r) => {
              const last = new Date(r.lastOrderAt).toLocaleString();
              const due = Number(r.outstanding || 0);
              return (
                <div key={r.customerId} className="border rounded-2xl p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-sm font-semibold truncate">{r.name} • {r.phone}</div>
                      <div className="text-xs text-gray-600 mt-1">Last credit order: {last}</div>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-extrabold text-orange-900">{formatGBP(due)}</div>
                      <button onClick={() => openPay(r)} className="mt-2 h-9 px-4 rounded-full bg-[#0B6EA9] text-white text-sm font-semibold">
                        Pay now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {paying ? (
        <div className="fixed inset-0 bg-black/30 z-50 grid place-items-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-5 border shadow">
            <div className="text-lg font-semibold">Pay credit</div>
            <div className="mt-1 text-sm text-gray-600">{paying.name} • {paying.phone}</div>

            <div className="mt-3 rounded-xl border bg-[#FFF7ED] px-3 py-2 flex items-center justify-between">
              <div className="text-sm font-semibold text-orange-800">Outstanding</div>
              <div className="text-sm font-extrabold text-orange-900">
                {formatGBP(Number(paying.outstanding || 0))}
              </div>
            </div>

            {/* Payment method */}
            <div className="mt-4">
              <div className="text-xs text-gray-600 mb-2">Payment method</div>
              <div className="flex flex-wrap gap-2">
                {PRIMARY_METHODS.map((m) => {
                  const active = method === m;
                  return (
                    <button
                      key={m}
                      onClick={() => setMethod(m)}
                      className={`h-9 px-4 rounded-full border text-sm font-semibold ${
                        active ? "border-[#0B6EA9] bg-[#EAF4FB] text-[#0B6EA9]" : "bg-white"
                      }`}
                    >
                      {labelPM(m)}
                    </button>
                  );
                })}

                <button
                  onClick={() => setShowMore((v) => !v)}
                  className="h-9 px-4 rounded-full border text-sm font-semibold bg-white"
                >
                  {showMore ? "Show less" : "Show more"}
                </button>

                {showMore
                  ? MORE_METHODS.map((m) => {
                      const active = method === m;
                      return (
                        <button
                          key={m}
                          onClick={() => setMethod(m)}
                          className={`h-9 px-4 rounded-full border text-sm font-semibold ${
                            active ? "border-[#0B6EA9] bg-[#EAF4FB] text-[#0B6EA9]" : "bg-white"
                          }`}
                        >
                          {labelPM(m)}
                        </button>
                      );
                    })
                  : null}
              </div>
            </div>

            {/* Quick amounts */}
            <div className="mt-4">
              <div className="text-xs text-gray-600 mb-2">Quick amounts</div>
              <div className="flex flex-wrap gap-2">
                {QUICK_AMOUNTS.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => doPay(amt)}
                    className="h-9 px-4 rounded-full border text-sm font-semibold hover:bg-gray-50"
                  >
                    {formatGBP(amt)}
                  </button>
                ))}

                <button
                  onClick={() => doPay(Number(paying.outstanding || 0))}
                  className="h-9 px-4 rounded-full bg-green-600 text-white text-sm font-semibold"
                >
                  Pay full
                </button>
              </div>
            </div>

            {/* Custom amount */}
            <div className="mt-4">
              <div className="text-xs text-gray-600 mb-2">Custom amount</div>
              <div className="flex gap-2">
                <input
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="e.g. 7.5"
                  inputMode="decimal"
                  className="flex-1 border rounded-xl px-3 py-2"
                />
                <button onClick={payCustom} className="h-10 px-4 rounded-xl bg-[#0B6EA9] text-white font-semibold">
                  Pay
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Paying more than due will only pay up to the due amount.
              </div>
            </div>

            <div className="mt-6 flex gap-2 justify-end">
              <button onClick={closePay} className="h-10 px-4 rounded-full border font-semibold">
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
