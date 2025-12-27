"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type OrderRow = {
  id: number;
  created_at: string;
  status: string | null;
  total_amount: any;
  delivery_name: string | null;
  delivery_phone: string | null;
};

type PaymentRow = {
  id?: number;
  order_id: number;
  amount: any;
  status: string;
  method: string;
  created_at: string;
  reference: string | null;
};

type OrderItemRow = {
  id: number;
  order_id: number;
  quantity: number;
  price_at_purchase: any;
  variant_id: number;
  product_id?: number | null;
  variant?: {
    id: number;
    label: string;
    product?: { id: number; name: string } | null;
  } | null;
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

type PaymentMethod = "EVC" | "EDAHAB" | "MERCHANT" | "CASH" | "PREMIER_BANK";

function normalizeMethod(raw: string): PaymentMethod | null {
  const m = raw.trim().toUpperCase();
  if (m === "EVC") return "EVC";
  if (m === "EDAHAB" || m === "E-DAHAB" || m === "EDAHAB+" || m === "EDAHAAB") return "EDAHAB";
  if (m === "MERCHANT") return "MERCHANT";
  if (m === "CASH") return "CASH";
  if (m === "PREMIER_BANK" || m === "PREMIER" || m === "BANK") return "PREMIER_BANK";
  return null;
}

function promptMethod(): PaymentMethod | null {
  const raw = window.prompt(
    "Payment method? Type: EVC, EDAHAB, MERCHANT, CASH, PREMIER_BANK",
    "EVC"
  );
  if (!raw) return null;
  const m = normalizeMethod(raw);
  if (!m) {
    alert("Invalid method. Use: EVC, EDAHAB, MERCHANT, CASH, PREMIER_BANK");
    return null;
  }
  return m;
}

type OrderView = OrderRow & {
  total: number;
  paid: number;
  remaining: number;
  computedStatus: "PENDING" | "PAID";
};

export default function AdminOrdersPage() {
  const [loading, setLoading] = useState(true);
  const [busyOrderId, setBusyOrderId] = useState<number | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [payments, setPayments] = useState<PaymentRow[]>([]);

  // details modal state
  const [openOrderId, setOpenOrderId] = useState<number | null>(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsErr, setDetailsErr] = useState<string | null>(null);
  const [orderItems, setOrderItems] = useState<OrderItemRow[]>([]);

  async function load() {
    setLoading(true);
    setErr(null);

    try {
      const [{ data: o, error: oe }, { data: p, error: pe }] = await Promise.all([
        supabase
          .from("orders")
          .select("id,created_at,status,total_amount,delivery_name,delivery_phone")
          .order("created_at", { ascending: false })
          .limit(200),
        supabase
          .from("payments")
          .select("id,order_id,amount,status,method,created_at,reference")
          .order("created_at", { ascending: false })
          .limit(2000),
      ]);

      if (oe) throw oe;
      if (pe) throw pe;

      setOrders((o ?? []) as any);
      setPayments((p ?? []) as any);
    } catch (e: any) {
      setErr(e?.message || "Failed to load orders");
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

  const paidMap = useMemo(() => {
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

  const viewRows: OrderView[] = useMemo(() => {
    return orders.map((o) => {
      const total = num(o.total_amount);
      const paid = paidMap.get(Number(o.id)) ?? 0;
      const remaining = Math.max(0, total - paid);
      const computedStatus: "PENDING" | "PAID" = remaining > 0 ? "PENDING" : "PAID";
      return { ...o, total, paid, remaining, computedStatus };
    });
  }, [orders, paidMap]);

  const stats = useMemo(() => {
    const pending = viewRows.filter((o) => o.computedStatus === "PENDING").length;
    const total = viewRows.reduce((s, o) => s + o.total, 0);
    const outstanding = viewRows.reduce((s, o) => s + o.remaining, 0);
    return { pending, total, outstanding };
  }, [viewRows]);

  const paymentsForOrder = useMemo(() => {
    const byOrder = new Map<number, PaymentRow[]>();
    for (const p of payments) {
      const oid = Number((p as any).order_id);
      if (!oid) continue;
      if (!byOrder.has(oid)) byOrder.set(oid, []);
      byOrder.get(oid)!.push(p);
    }
    for (const [oid, arr] of byOrder.entries()) {
      arr.sort((a, b) => String(b.created_at).localeCompare(String(a.created_at)));
      byOrder.set(oid, arr);
    }
    return byOrder;
  }, [payments]);

  async function addPayment(args: { orderId: number; amount: number; method: PaymentMethod }) {
    // unique reference to reduce accidental duplicates
    const ref = `ORDPAY-${args.orderId}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

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

  async function pay(order: OrderView, mode: "FULL" | "PARTIAL") {
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
      setBusyOrderId(order.id);

      await addPayment({ orderId: order.id, amount, method });

      const newRemaining = Math.max(0, order.remaining - amount);
      await setOrderStatus(order.id, newRemaining > 0 ? "PENDING" : "PAID");

      await load();

      // refresh modal if open
      if (openOrderId === order.id) {
        await openDetails(order.id);
      }
    } catch (e: any) {
      console.error(e);
      alert(e?.message || "Payment failed");
    } finally {
      setBusyOrderId(null);
    }
  }

  async function openDetails(orderId: number) {
    setOpenOrderId(orderId);
    setDetailsLoading(true);
    setDetailsErr(null);
    setOrderItems([]);

    try {
      // join: order_items -> product_variants -> products
      const { data, error } = await supabase
        .from("order_items")
        .select(
          `
          id, order_id, quantity, price_at_purchase, variant_id, product_id,
          variant:product_variants (
            id, label,
            product:products ( id, name )
          )
        `
        )
        .eq("order_id", orderId)
        .order("id", { ascending: true });

      if (error) throw error;
      setOrderItems((data ?? []) as any);
    } catch (e: any) {
      setDetailsErr(e?.message || "Failed to load order items");
    } finally {
      setDetailsLoading(false);
    }
  }

  const openOrder = useMemo(() => {
    if (openOrderId == null) return null;
    return viewRows.find((x) => Number(x.id) === Number(openOrderId)) ?? null;
  }, [openOrderId, viewRows]);

  const openPayments = useMemo(() => {
    if (openOrderId == null) return [];
    return paymentsForOrder.get(openOrderId) ?? [];
  }, [openOrderId, paymentsForOrder]);

  const openItemsTotal = useMemo(() => {
    return orderItems.reduce((s, it) => s + num(it.price_at_purchase) * num(it.quantity), 0);
  }, [orderItems]);

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href="/admin" className="text-sm text-blue-600 hover:underline">
              ← Admin
            </Link>
            <h1 className="text-xl font-semibold mt-2">Orders</h1>
            <p className="text-xs text-gray-600 mt-1">
              Status here is computed from payments: Total − SUCCESS payments.
            </p>
          </div>

          <div className="text-xs text-gray-700 border bg-white rounded-2xl px-3 py-2">
            <div>
              Pending(credit): <span className="font-semibold">{loading ? "…" : stats.pending}</span>
            </div>
            <div>
              Outstanding: <span className="font-semibold">{loading ? "…" : money(stats.outstanding)}</span>
            </div>
            <div>
              Total(loaded): <span className="font-semibold">{loading ? "…" : money(stats.total)}</span>
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

        <section className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
          {(loading ? Array.from({ length: 8 }) : viewRows).map((o: any, idx: number) => (
            <div
              key={o?.id ?? idx}
              className="border rounded-2xl p-4 bg-white cursor-pointer"
              onClick={() => (o?.id ? openDetails(Number(o.id)) : null)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" && o?.id) openDetails(Number(o.id));
              }}
            >
              <div className="flex justify-between gap-3">
                <div className="text-sm font-semibold">Order #{o?.id ?? "…"}</div>
                <div className="text-xs text-gray-600">{o?.created_at ? String(o.created_at) : "…"}</div>
              </div>

              <div className="mt-2 text-sm">
                <span className="text-gray-600">Status:</span>{" "}
                <span className={`font-semibold ${o?.computedStatus === "PENDING" ? "text-orange-700" : "text-green-700"}`}>
                  {o?.computedStatus ?? "…"}
                </span>
              </div>

              <div className="mt-2 text-sm flex flex-wrap gap-4">
                <div>
                  <span className="text-gray-600">Total:</span>{" "}
                  <span className="font-semibold">{money(o?.total)}</span>
                </div>
                <div>
                  <span className="text-gray-600">Paid:</span>{" "}
                  <span className="font-semibold">{money(o?.paid)}</span>
                </div>
                <div>
                  <span className="text-gray-600">Remaining:</span>{" "}
                  <span className="font-semibold">{money(o?.remaining)}</span>
                </div>
              </div>

              <div className="mt-2 text-xs text-gray-600">
                {o?.delivery_name ?? ""} {o?.delivery_phone ? `• ${o.delivery_phone}` : ""}
              </div>

              {o?.computedStatus === "PENDING" ? (
                <div className="mt-3 flex gap-2" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => pay(o, "FULL")}
                    disabled={busyOrderId != null}
                    className="px-4 py-2 rounded-full bg-green-600 text-white text-sm font-semibold disabled:opacity-60"
                  >
                    {busyOrderId === o.id ? "Working…" : "Mark Paid"}
                  </button>
                  <button
                    onClick={() => pay(o, "PARTIAL")}
                    disabled={busyOrderId != null}
                    className="px-4 py-2 rounded-full border text-sm font-semibold disabled:opacity-60"
                  >
                    {busyOrderId === o.id ? "Working…" : "Pay partial"}
                  </button>
                </div>
              ) : (
                <div className="mt-3 text-xs text-green-700 font-semibold">Paid</div>
              )}

              <div className="mt-2 text-[11px] text-gray-500">Tap to view items</div>
            </div>
          ))}
        </section>
      </div>

      {/* Details modal */}
      {openOrderId != null ? (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-3">
          <div className="w-full sm:max-w-2xl bg-white rounded-2xl border shadow-lg overflow-hidden">
            <div className="p-4 border-b flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">Order #{openOrder?.id ?? openOrderId}</div>
                <div className="text-xs text-gray-600 mt-1">
                  {openOrder?.delivery_name ?? ""} {openOrder?.delivery_phone ? `• ${openOrder.delivery_phone}` : ""}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  Status: <span className="font-semibold">{openOrder?.computedStatus ?? "…"}</span>
                  {openOrder ? (
                    <>
                      {" "}• Remaining: <span className="font-semibold">{money(openOrder.remaining)}</span>
                    </>
                  ) : null}
                </div>
              </div>
              <button
                className="px-3 py-2 rounded-full border text-sm font-semibold"
                onClick={() => setOpenOrderId(null)}
              >
                Close
              </button>
            </div>

            <div className="p-4">
              {detailsErr ? (
                <div className="mb-3 border rounded-xl p-3 text-sm text-red-600">{detailsErr}</div>
              ) : null}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border rounded-2xl p-3">
                  <div className="text-xs text-gray-500">Items</div>
                  {detailsLoading ? (
                    <div className="mt-2 text-sm text-gray-600">Loading…</div>
                  ) : orderItems.length === 0 ? (
                    <div className="mt-2 text-sm text-gray-600">No items found.</div>
                  ) : (
                    <div className="mt-2 space-y-2">
                      {orderItems.map((it) => {
                        const name =
                          it.variant?.product?.name ||
                          (it.product_id ? `Product #${it.product_id}` : `Item #${it.id}`);
                        const label = it.variant?.label ? ` (${it.variant.label})` : "";
                        const line = num(it.price_at_purchase) * num(it.quantity);
                        return (
                          <div key={it.id} className="text-sm flex justify-between gap-3">
                            <div className="text-gray-800">
                              {name}
                              {label} × {it.quantity}
                            </div>
                            <div className="font-semibold">{money(line)}</div>
                          </div>
                        );
                      })}
                      <div className="pt-2 mt-2 border-t flex justify-between text-sm">
                        <span className="font-semibold">Items total</span>
                        <span className="font-semibold">{money(openItemsTotal)}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border rounded-2xl p-3">
                  <div className="text-xs text-gray-500">Payments</div>
                  <div className="mt-2 space-y-2">
                    {openPayments.length === 0 ? (
                      <div className="text-sm text-gray-600">No payments yet.</div>
                    ) : (
                      openPayments.map((p, idx) => (
                        <div key={(p as any)?.id ?? `${p.order_id}-${idx}`} className="text-sm flex justify-between gap-3">
                          <div className="text-gray-800">
                            {String(p.method)} • {String(p.status)}
                            <div className="text-[11px] text-gray-500">{String(p.created_at)}</div>
                          </div>
                          <div className="font-semibold">{money(p.amount)}</div>
                        </div>
                      ))
                    )}
                  </div>

                  {openOrder?.computedStatus === "PENDING" ? (
                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={() => (openOrder ? pay(openOrder, "FULL") : null)}
                        disabled={busyOrderId != null}
                        className="px-4 py-2 rounded-full bg-green-600 text-white text-sm font-semibold disabled:opacity-60"
                      >
                        {busyOrderId === openOrder?.id ? "Working…" : "Mark Paid"}
                      </button>
                      <button
                        onClick={() => (openOrder ? pay(openOrder, "PARTIAL") : null)}
                        disabled={busyOrderId != null}
                        className="px-4 py-2 rounded-full border text-sm font-semibold disabled:opacity-60"
                      >
                        {busyOrderId === openOrder?.id ? "Working…" : "Pay partial"}
                      </button>
                    </div>
                  ) : (
                    <div className="mt-3 text-xs text-green-700 font-semibold">Paid</div>
                  )}

                  <div className="mt-2 text-[11px] text-gray-500">
                    Methods supported here: EVC, EDAHAB, MERCHANT, CASH, PREMIER_BANK
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}