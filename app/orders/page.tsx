"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  readLocalOrders,
  updateLocalOrder,
  payCredit,
  totalCreditDue,
  type LocalOrder,
  type PaymentMethod,
} from "@/lib/localOrders";
import { recordPayment } from "@/lib/payments";

function formatGBP(n: number) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(n);
}

const PRIMARY_METHODS: PaymentMethod[] = ["EVC", "MERCHANT", "EDAHAB"];
const MORE_METHODS: PaymentMethod[] = ["PREMIER_WALLET", "AMTEL"];

function labelPM(m: PaymentMethod) {
  if (m === "EVC") return "EVC";
  if (m === "MERCHANT") return "Merchant";
  if (m === "EDAHAB") return "E-Dahab";
  if (m === "PREMIER_WALLET") return "Premier Wallet";
  return "Amtel";
}

function isSameLocalDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<LocalOrder[]>([]);
  const [q, setQ] = useState("");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [creditDue, setCreditDue] = useState(0);

  const [payingOrder, setPayingOrder] = useState<LocalOrder | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("EVC");
  const [showMorePayments, setShowMorePayments] = useState(false);

  function refresh() {
    setOrders(readLocalOrders());
    setCreditDue(totalCreditDue());
  }

  useEffect(() => {
    refresh();
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return orders;
    return orders.filter((o) => {
      const id = (o.id ?? "").toLowerCase();
      const name = (o.customer?.name ?? "").toLowerCase();
      const phone = String(o.customer?.phone ?? "").toLowerCase();
      const note = (o.note ?? "").toLowerCase();
      const status = o.isCredit && !o.isPaid ? "credit" : "paid";
      return id.includes(s) || name.includes(s) || phone.includes(s) || note.includes(s) || status.includes(s);
    });
  }, [orders, q]);

  const metrics = useMemo(() => {
    const now = new Date();
    const sevenDaysAgo = new Date(now);
    sevenDaysAgo.setDate(now.getDate() - 7);

    let allOrders = 0, allTotal = 0;
    let todayOrders = 0, todayTotal = 0;
    let weekOrders = 0, weekTotal = 0;

    let creditCount = 0;

    for (const o of orders) {
      allOrders += 1;
      allTotal += Number(o.total ?? 0);

      if (o.isCredit && !o.isPaid) creditCount += 1;

      const d = new Date(o.createdAt);
      if (isSameLocalDay(d, now)) {
        todayOrders += 1;
        todayTotal += Number(o.total ?? 0);
      }
      if (d >= sevenDaysAgo) {
        weekOrders += 1;
        weekTotal += Number(o.total ?? 0);
      }
    }

    return { allOrders, allTotal, todayOrders, todayTotal, weekOrders, weekTotal, creditCount };
  }, [orders]);

  function toggleExpand(id: string) {
    setExpanded((p) => ({ ...p, [id]: !p[id] }));
  }

  function openPayModal(order: LocalOrder) {
    setPayingOrder(order);
    setPaymentMethod("EVC");
    setShowMorePayments(false);
  }

  function confirmMarkPaid() {
    if (!payingOrder) return;
    if (!payingOrder.customer) {
      alert("This credit order has no customer. Cannot settle credit.");
      return;
    }

    // update order
    updateLocalOrder(payingOrder.id, {
      isPaid: true,
      isCredit: false,
      paymentMethod,
      paidAt: new Date().toISOString(),
    });

    // reduce credit ledger
    payCredit(payingOrder.customer.id, payingOrder.total);

    // record payment settlement
    recordPayment({
      source: "CREDIT_SETTLEMENT",
      method: paymentMethod,
      amount: payingOrder.total,
      orderId: payingOrder.id,
      customer: payingOrder.customer,
      note: "Credit order settled",
    });

    setPayingOrder(null);
    refresh();
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="sticky top-0 z-20 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-blue-600 hover:underline">← Home</Link>
            <h1 className="text-lg font-semibold">Orders History</h1>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/cart" className="h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50">
              Cart
            </Link>
            <Link href="/credits" className="h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50">
              Credits
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="border rounded-2xl p-4">
            <div className="text-xs text-gray-600">Today</div>
            <div className="mt-1 text-xl font-extrabold">{formatGBP(metrics.todayTotal)}</div>
            <div className="mt-1 text-sm text-gray-700">{metrics.todayOrders} order(s)</div>
          </div>

          <div className="border rounded-2xl p-4">
            <div className="text-xs text-gray-600">Last 7 days</div>
            <div className="mt-1 text-xl font-extrabold">{formatGBP(metrics.weekTotal)}</div>
            <div className="mt-1 text-sm text-gray-700">{metrics.weekOrders} order(s)</div>
          </div>

          <div className="border rounded-2xl p-4">
            <div className="text-xs text-gray-600">All-time</div>
            <div className="mt-1 text-xl font-extrabold">{formatGBP(metrics.allTotal)}</div>
            <div className="mt-1 text-sm text-gray-700">{metrics.allOrders} order(s)</div>
          </div>

          <div className="border rounded-2xl p-4 bg-[#FFF7ED]">
            <div className="text-xs text-orange-800">Credits Due</div>
            <div className="mt-1 text-xl font-extrabold text-orange-900">{formatGBP(creditDue)}</div>
            <div className="mt-1 text-sm text-orange-900">{metrics.creditCount} credit order(s)</div>
          </div>
        </div>

        <div className="mt-4 border rounded-2xl p-4">
          <label className="text-xs text-gray-600">Search (name, phone, order id, note, credit)</label>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="e.g. Hodan / 0622 / LO-... / credit"
            className="mt-1 w-full border rounded-xl px-3 py-2"
          />
          <div className="mt-2 text-xs text-gray-500">
            Showing <span className="font-semibold">{filtered.length}</span> of{" "}
            <span className="font-semibold">{orders.length}</span> orders.
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-6">
        {filtered.length === 0 ? (
          <div className="border rounded-2xl p-8 text-center">
            <div className="text-3xl">🧾</div>
            <p className="mt-3 font-semibold">No orders saved yet</p>
            <p className="text-sm text-gray-600 mt-1">Use Cart → Local order</p>
            <Link href="/cart" className="inline-flex mt-5 px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold">
              Go to cart
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((o) => {
              const open = !!expanded[o.id];
              const customer = o.customer ? `${o.customer.name} • ${o.customer.phone}` : "Walk-in customer";
              const created = new Date(o.createdAt).toLocaleString();

              const isCredit = o.isCredit && !o.isPaid;

              return (
                <div key={o.id} className="border rounded-2xl p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-semibold truncate">{customer}</div>
                        {isCredit ? (
                          <span className="text-xs font-bold px-2 py-1 rounded-full bg-red-100 text-red-700">CREDIT</span>
                        ) : (
                          <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-100 text-green-700">PAID</span>
                        )}
                      </div>

                      <div className="text-xs text-gray-600 mt-1">
                        <span className="font-semibold">{o.id}</span> • {created}
                      </div>

                      {o.paymentMethod && o.isPaid ? (
                        <div className="mt-2 text-xs text-gray-600">
                          Paid by: <span className="text-gray-800 font-semibold">{labelPM(o.paymentMethod)}</span>
                        </div>
                      ) : null}

                      {o.note ? (
                        <div className="mt-2 text-xs text-gray-600">
                          Note: <span className="text-gray-800">{o.note}</span>
                        </div>
                      ) : null}
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-extrabold">{formatGBP(o.total)}</div>
                      <div className="text-xs text-gray-600 mt-1">{o.items.length} line(s)</div>

                      <div className="mt-2 flex gap-2 justify-end">
                        <button
                          onClick={() => toggleExpand(o.id)}
                          className="h-8 px-3 rounded-full border text-xs font-semibold hover:bg-gray-50"
                        >
                          {open ? "Hide" : "View"}
                        </button>

                        {isCredit ? (
                          <button
                            onClick={() => openPayModal(o)}
                            className="h-8 px-3 rounded-full bg-[#0B6EA9] text-white text-xs font-semibold"
                          >
                            Mark paid
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {open ? (
                    <div className="mt-4 border-t pt-4">
                      <div className="space-y-2">
                        {o.items.map((it, idx) => (
                          <div
                            key={`${o.id}-${it.productId}-${it.variantId ?? "base"}-${idx}`}
                            className="flex justify-between text-sm"
                          >
                            <div className="text-gray-800">
                              {it.name} × {it.qty}
                              <div className="text-xs text-gray-500">{formatGBP(it.unitPrice)} each</div>
                            </div>
                            <div className="font-semibold">{formatGBP(it.lineTotal)}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 border-t pt-3 text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal</span>
                          <span className="font-semibold">{formatGBP(o.subtotal)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery</span>
                          <span className="font-semibold">{formatGBP(o.deliveryFee)}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="font-semibold">Total</span>
                          <span className="font-semibold">{formatGBP(o.total)}</span>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {payingOrder ? (
        <div className="fixed inset-0 bg-black/30 z-50 grid place-items-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-5 border shadow">
            <div className="text-lg font-semibold">Mark credit as paid</div>
            <div className="mt-1 text-sm text-gray-600">
              Order <span className="font-semibold">{payingOrder.id}</span> • Total{" "}
              <span className="font-semibold">{formatGBP(payingOrder.total)}</span>
            </div>

            <div className="mt-4">
              <div className="text-xs text-gray-600 mb-2">Payment method</div>
              <div className="flex flex-wrap gap-2">
                {PRIMARY_METHODS.map((m) => {
                  const active = paymentMethod === m;
                  return (
                    <button
                      key={m}
                      onClick={() => setPaymentMethod(m)}
                      className={`h-9 px-4 rounded-full border text-sm font-semibold ${
                        active ? "border-[#0B6EA9] bg-[#EAF4FB] text-[#0B6EA9]" : "bg-white"
                      }`}
                    >
                      {labelPM(m)}
                    </button>
                  );
                })}

                <button
                  onClick={() => setShowMorePayments((v) => !v)}
                  className="h-9 px-4 rounded-full border text-sm font-semibold bg-white"
                >
                  {showMorePayments ? "Show less" : "Show more"}
                </button>

                {showMorePayments
                  ? MORE_METHODS.map((m) => {
                      const active = paymentMethod === m;
                      return (
                        <button
                          key={m}
                          onClick={() => setPaymentMethod(m)}
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

            <div className="mt-6 flex gap-2 justify-end">
              <button onClick={() => setPayingOrder(null)} className="h-10 px-4 rounded-full border font-semibold">
                Cancel
              </button>
              <button onClick={confirmMarkPaid} className="h-10 px-4 rounded-full bg-[#0B6EA9] text-white font-semibold">
                Confirm paid
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
