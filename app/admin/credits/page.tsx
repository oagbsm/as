"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type OrderRow = {
  id: number;
  created_at: string;
  status: string;
  total_amount: any;
  customer_id: number | null;
  delivery_name: string | null;
  delivery_phone: string | null;
};

type PaymentRow = {
  order_id: number;
  amount: any;
  status: string;
  method: string;
  created_at: string;
  reference: string | null;
};

function money(n: any) {
  const x = Number(n ?? 0);
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
    Number.isFinite(x) ? x : 0
  );
}

function num(n: any) {
  const x = Number(n ?? 0);
  return Number.isFinite(x) ? x : 0;
}

function fmtDate(s?: string | null) {
  if (!s) return "…";
  return String(s).replace("T", " ").replace("Z", "");
}

function promptMethod(): "EVC" | "CASH" | "MERCHANT" | null {
  const m = window
    .prompt("Payment method? Type: EVC, CASH, or MERCHANT", "EVC")
    ?.trim()
    .toUpperCase();
  if (!m) return null;
  if (m === "EVC" || m === "CASH" || m === "MERCHANT") return m;
  alert("Invalid method. Use: EVC, CASH, MERCHANT");
  return null;
}

type CreditOrder = OrderRow & {
  total: number;
  paid: number;
  remaining: number;
};

type CreditGroup = {
  key: string; // customer_id or phone
  customer_id: number | null;
  name: string;
  phone: string;
  outstanding: number;
  ordersCount: number;
  lastOrderAt: string | null;
  orders: CreditOrder[];
};

export default function AdminCreditsPage() {
  const [loading, setLoading] = useState(true);
  const [busyKey, setBusyKey] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [payments, setPayments] = useState<PaymentRow[]>([]);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setErr(null);

    try {
      const [{ data: o, error: oe }, { data: p, error: pe }] = await Promise.all([
        supabase
          .from("orders")
          .select("id,created_at,status,total_amount,customer_id,delivery_name,delivery_phone")
          .order("created_at", { ascending: false })
          .limit(500),
        supabase
          .from("payments")
          .select("order_id,amount,status,method,created_at,reference")
          .order("created_at", { ascending: false })
          .limit(2000),
      ]);

      if (oe) throw oe;
      if (pe) throw pe;

      setOrders((o ?? []) as any);
      setPayments((p ?? []) as any);
    } catch (e: any) {
      setErr(e?.message || "Failed to load credits");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let alive = true;
    (async () => {
      await load();
      if (!alive) return;
    })();
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const payMap = useMemo(() => {
    // order_id -> paid SUCCESS sum
    const m = new Map<number, number>();
    for (const row of payments) {
      const orderId = Number((row as any).order_id);
      if (!orderId) continue;
      const st = String((row as any).status || "").toUpperCase();
      if (st !== "SUCCESS") continue;
      m.set(orderId, (m.get(orderId) ?? 0) + num((row as any).amount));
    }
    return m;
  }, [payments]);

  const creditGroups = useMemo(() => {
    const creditOrders: CreditOrder[] = orders
      .map((o) => {
        const total = num(o.total_amount);
        const paid = payMap.get(Number(o.id)) ?? 0;
        const remaining = Math.max(0, total - paid);
        return { ...o, total, paid, remaining };
      })
      .filter((o) => {
        const st = String(o.status || "").toUpperCase();
        if (st === "CANCELLED") return false;
        // credit = remaining > 0
        return o.remaining > 0;
      });

    const groups = new Map<string, CreditGroup>();

    for (const o of creditOrders) {
      const key =
        o.customer_id != null
          ? `cid:${o.customer_id}`
          : o.delivery_phone
            ? `phone:${o.delivery_phone}`
            : `unknown`;

      const phone = o.delivery_phone ?? "";
      const name = o.delivery_name ?? (o.customer_id != null ? `Customer #${o.customer_id}` : "Unknown");

      const prev = groups.get(key);
      const lastAt = !prev?.lastOrderAt ? o.created_at : o.created_at > prev.lastOrderAt ? o.created_at : prev.lastOrderAt;

      if (!prev) {
        groups.set(key, {
          key,
          customer_id: o.customer_id,
          name,
          phone,
          outstanding: o.remaining,
          ordersCount: 1,
          lastOrderAt: lastAt,
          orders: [o],
        });
      } else {
        prev.outstanding += o.remaining;
        prev.ordersCount += 1;
        prev.lastOrderAt = lastAt;
        prev.orders.push(o);
      }
    }

    // sort highest outstanding first
    return Array.from(groups.values()).sort((a, b) => b.outstanding - a.outstanding);
  }, [orders, payMap]);

  const stats = useMemo(() => {
    const outstanding = creditGroups.reduce((s, g) => s + g.outstanding, 0);
    const people = creditGroups.length;
    const creditOrders = creditGroups.reduce((s, g) => s + g.ordersCount, 0);
    return { outstanding, people, creditOrders };
  }, [creditGroups]);

  const selected = useMemo(() => {
    if (!selectedKey) return null;
    return creditGroups.find((g) => g.key === selectedKey) ?? null;
  }, [selectedKey, creditGroups]);

  async function addPayment(args: {
    orderId: number;
    amount: number;
    method: "EVC" | "CASH" | "MERCHANT";
  }) {
    const ref = `CREDITS-${args.orderId}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const ins = await supabase.from("payments").insert({
      order_id: args.orderId,
      method: args.method,
      amount: args.amount,
      status: "SUCCESS",
      reference: ref,
    });

    if (ins.error) throw ins.error;
  }

  async function setOrderStatus(orderId: number, status: "PENDING" | "PAID") {
    const up = await supabase.from("orders").update({ status }).eq("id", orderId);
    if (up.error) throw up.error;
  }

  async function payOrder(order: CreditOrder, mode: "FULL" | "PARTIAL") {
    if (order.remaining <= 0) return;

    const method = promptMethod();
    if (!method) return;

    let amount = order.remaining;

    if (mode === "PARTIAL") {
      const raw = window.prompt(`Enter amount to pay (remaining: ${money(order.remaining)})`, "");
      if (!raw) return;
      amount = num(raw);
      if (amount <= 0) return alert("Amount must be > 0");
      if (amount > order.remaining) return alert("Amount cannot exceed remaining");
    }

    try {
      setBusyKey(selectedKey ?? String(order.id));

      await addPayment({ orderId: order.id, amount, method });

      const newRemaining = Math.max(0, order.remaining - amount);
      await setOrderStatus(order.id, newRemaining > 0 ? "PENDING" : "PAID");

      await load();
    } catch (e: any) {
      console.error(e);
      alert(e?.message || "Payment failed");
    } finally {
      setBusyKey(null);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href="/admin" className="text-sm text-blue-600 hover:underline">
              ← Admin
            </Link>
            <h1 className="text-xl font-semibold mt-2">Credits</h1>
            <p className="text-xs text-gray-600 mt-1">
              Credits are derived from orders where (Total − SUCCESS payments) &gt; 0.
            </p>
          </div>

          <div className="text-xs text-gray-700 border bg-white rounded-2xl px-3 py-2">
            <div>
              People owing: <span className="font-semibold">{loading ? "…" : stats.people}</span>
            </div>
            <div>
              Credit orders: <span className="font-semibold">{loading ? "…" : stats.creditOrders}</span>
            </div>
            <div>
              Outstanding: <span className="font-semibold">{loading ? "…" : money(stats.outstanding)}</span>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={load}
            className="px-4 py-2 rounded-full border bg-white text-sm font-semibold"
            disabled={loading}
          >
            {loading ? "Refreshing…" : "Refresh"}
          </button>
        </div>

        {err ? (
          <div className="mt-4 border rounded-2xl p-4 bg-white text-sm text-red-600">{err}</div>
        ) : null}

        {/* 2 cols phone, 4 cols PC */}
        <section className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {(loading ? Array.from({ length: 8 }) : creditGroups).slice(0, 16).map((g: any, idx: number) => (
            <button
              key={g?.key ?? idx}
              onClick={() => setSelectedKey(g.key)}
              className={`text-left border rounded-2xl p-4 bg-white hover:border-blue-400 ${
                selectedKey === g?.key ? "border-blue-600" : ""
              }`}
            >
              <div className="text-xs text-gray-500">Customer</div>
              <div className="mt-1 text-sm font-semibold line-clamp-1">{g?.name ?? "Unknown"}</div>
              <div className="mt-1 text-xs text-gray-600 line-clamp-1">{g?.phone || "—"}</div>
              <div className="mt-3 text-xs text-gray-500">Outstanding</div>
              <div className="mt-1 text-lg font-semibold">{money(g?.outstanding)}</div>
              <div className="mt-2 text-[11px] text-gray-500">
                {g?.ordersCount ?? 0} orders • last {fmtDate(g?.lastOrderAt)}
              </div>
            </button>
          ))}
        </section>

        {/* Details */}
        <section className="mt-6 border rounded-2xl bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="font-semibold">Credit details</div>
            <div className="text-xs text-gray-600">
              {selected ? (
                <>
                  Outstanding: <span className="font-semibold">{money(selected.outstanding)}</span>
                </>
              ) : (
                "Select a customer"
              )}
            </div>
          </div>

          {!selected ? (
            <div className="mt-3 text-sm text-gray-600">Tap a customer card above to manage their credit.</div>
          ) : (
            <div className="mt-4 space-y-3">
              <div className="text-sm">
                <div className="font-semibold">{selected.name}</div>
                <div className="text-gray-600">{selected.phone || "—"}</div>
              </div>

              {selected.orders.map((o) => (
                <div key={o.id} className="border rounded-2xl p-4">
                  <div className="flex justify-between gap-3">
                    <div className="text-sm font-semibold">Order #{o.id}</div>
                    <div className="text-xs text-gray-600">{fmtDate(o.created_at)}</div>
                  </div>

                  <div className="mt-2 text-sm flex flex-wrap gap-4">
                    <div>
                      <span className="text-gray-600">Total:</span>{" "}
                      <span className="font-semibold">{money(o.total)}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Paid:</span>{" "}
                      <span className="font-semibold">{money(o.paid)}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Remaining:</span>{" "}
                      <span className="font-semibold">{money(o.remaining)}</span>
                    </div>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => payOrder(o, "FULL")}
                      disabled={busyKey != null}
                      className="px-4 py-2 rounded-full bg-green-600 text-white text-sm font-semibold disabled:opacity-60"
                    >
                      {busyKey ? "Working…" : "Mark Paid"}
                    </button>
                    <button
                      onClick={() => payOrder(o, "PARTIAL")}
                      disabled={busyKey != null}
                      className="px-4 py-2 rounded-full border text-sm font-semibold disabled:opacity-60"
                    >
                      Pay partial
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}