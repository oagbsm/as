"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type SupplierRow = {
  id: number;
  name: string;
  phone: string | null;
  email: string | null;
  address: string | null;
  created_at?: string;
};

type ProductRow = { id: number; name: string; slug: string };

type VariantRow = {
  id: number;
  product_id: number;
  label: string;
  sku: string;
  stock: number;
  products?: ProductRow | null;
};

type BatchRow = {
  id: number;
  variant_id: number;
  supplier_id: number | null;
  qty_received: number;
  qty_remaining: number;
  total_cost: string | number;
  paid_amount: string | number;
  payment_method: string | null;
  reference: string | null;
  received_at: string;
  note?: string | null;
};

type MovementRow = {
  id: number;
  variant_id: number;
  batch_id: number | null;
  type: "IN" | "OUT" | "ADJUST";
  qty: number;
  note: string | null;
  order_id: number | null;
  created_at: string;
};

function n(x: any) {
  const v = Number(x ?? 0);
  return Number.isFinite(v) ? v : 0;
}
function money(x: any) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(n(x));
}

const paymentMethods = ["EVC", "eDahab", "MERCHANT", "CASH", "PREMIER"];

export default function AdminSuppliersPage() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const [suppliers, setSuppliers] = useState<SupplierRow[]>([]);
  const [variants, setVariants] = useState<VariantRow[]>([]);
  const [batches, setBatches] = useState<BatchRow[]>([]);
  const [movements, setMovements] = useState<MovementRow[]>([]);

  const [q, setQ] = useState("");
  const [selectedSupplierId, setSelectedSupplierId] = useState<number | null>(null);

  const [payOpen, setPayOpen] = useState(false);
  const [payBatch, setPayBatch] = useState<BatchRow | null>(null);
  const [payAmount, setPayAmount] = useState("");
  const [payMethod, setPayMethod] = useState("EVC");
  const [payRef, setPayRef] = useState("");
  const [paySaving, setPaySaving] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setErr(null);

        const [sRes, vRes, bRes, mRes] = await Promise.all([
          supabase
            .from("suppliers")
            .select("id,name,phone,email,address,created_at")
            .order("name", { ascending: true })
            .limit(5000),
          supabase
            .from("product_variants")
            .select("id,product_id,label,sku,stock,products:products(id,name,slug)")
            .order("id", { ascending: true })
            .limit(5000),
          supabase
            .from("inventory_batches")
            .select(
              "id,variant_id,supplier_id,qty_received,qty_remaining,total_cost,paid_amount,payment_method,reference,received_at,note"
            )
            .order("received_at", { ascending: false })
            .limit(2000),
          supabase
            .from("inventory_movements")
            .select("id,variant_id,batch_id,type,qty,note,order_id,created_at")
            .order("created_at", { ascending: false })
            .limit(3000),
        ]);

        if (sRes.error) throw sRes.error;
        if (vRes.error) throw vRes.error;
        if (bRes.error) throw bRes.error;
        if (mRes.error) throw mRes.error;

        if (!alive) return;

        setSuppliers((sRes.data ?? []) as any);
        setVariants((vRes.data ?? []) as any);
        setBatches((bRes.data ?? []) as any);
        setMovements((mRes.data ?? []) as any);
      } catch (e: any) {
        if (!alive) return;
        setErr(e?.message || "Failed to load suppliers");
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  const supplierById = useMemo(() => {
    const m: Record<number, SupplierRow> = {};
    for (const s of suppliers) m[s.id] = s;
    return m;
  }, [suppliers]);

  const variantById = useMemo(() => {
    const m: Record<number, VariantRow> = {};
    for (const v of variants) m[v.id] = v;
    return m;
  }, [variants]);

  const unpaidInvoices = useMemo(() => {
    return batches
      .filter((b) => n(b.total_cost) - n(b.paid_amount) > 0.0001)
      .slice(0, 300);
  }, [batches]);

  const filteredSuppliers = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return suppliers;
    return suppliers.filter((s) => `${s.name} ${s.phone ?? ""} ${s.email ?? ""}`.toLowerCase().includes(term));
  }, [suppliers, q]);

  const selectedSupplier = selectedSupplierId ? supplierById[selectedSupplierId] : null;

  const supplierBatches = useMemo(() => {
    if (!selectedSupplierId) return [];
    return batches.filter((b) => Number(b.supplier_id) === Number(selectedSupplierId));
  }, [batches, selectedSupplierId]);

  const supplierUnpaid = useMemo(() => {
    return supplierBatches.filter((b) => n(b.total_cost) - n(b.paid_amount) > 0.0001);
  }, [supplierBatches]);

  const supplierProducts = useMemo(() => {
    if (!selectedSupplierId) return [];
    const map: Record<number, { variantId: number; productName: string; variantLabel: string; sku: string; times: number }> =
      {};
    for (const b of supplierBatches) {
      const v = variantById[Number(b.variant_id)];
      if (!v) continue;
      const prodName = v.products?.name ?? `Product #${v.product_id}`;
      const key = Number(v.id);
      map[key] = map[key] || {
        variantId: v.id,
        productName: prodName,
        variantLabel: v.label,
        sku: v.sku,
        times: 0,
      };
      map[key].times += 1;
    }
    return Object.values(map).sort((a, b) => b.times - a.times);
  }, [supplierBatches, selectedSupplierId, variantById]);

  const supplierMovements = useMemo(() => {
    if (!selectedSupplierId) return [];
    const batchIds = new Set(supplierBatches.map((b) => Number(b.id)));
    return movements.filter((m) => m.batch_id && batchIds.has(Number(m.batch_id))).slice(0, 200);
  }, [movements, supplierBatches, selectedSupplierId]);

  const totals = useMemo(() => {
    const totalUnpaid = unpaidInvoices.reduce((s, b) => s + Math.max(0, n(b.total_cost) - n(b.paid_amount)), 0);
    return { suppliers: suppliers.length, unpaidCount: unpaidInvoices.length, totalUnpaid };
  }, [suppliers.length, unpaidInvoices]);

  function openPay(b: BatchRow) {
    const due = Math.max(0, n(b.total_cost) - n(b.paid_amount));
    setPayBatch(b);
    setPayAmount(due > 0 ? String(due) : "");
    setPayMethod("EVC");
    setPayRef("");
    setPayOpen(true);
  }

  async function submitPay() {
    if (!payBatch) {
      setErr("No batch selected for payment.");
      return;
    }
    const amount = n(payAmount);
    const due = Math.max(0, n(payBatch.total_cost) - n(payBatch.paid_amount));
    if (amount <= 0) {
      setErr("Payment amount must be greater than zero.");
      return;
    }
    if (amount > due + 0.0001) {
      setErr("Payment amount cannot exceed amount due.");
      return;
    }
    setPaySaving(true);
    setErr(null);
    try {
      const { error: insertError } = await supabase
        .from("inventory_payments")
        .insert({
          batch_id: payBatch.id,
          amount,
          method: payMethod,
          reference: payRef || null,
        });
      if (insertError) throw insertError;

      const newPaid = n(payBatch.paid_amount) + amount;
      const { error: updateError } = await supabase
        .from("inventory_batches")
        .update({
          paid_amount: newPaid,
          payment_method: payMethod,
          reference: payRef || payBatch.reference || null,
        })
        .eq("id", payBatch.id);
      if (updateError) throw updateError;

      setBatches((old) =>
        old.map((b) =>
          b.id === payBatch.id
            ? { ...b, paid_amount: newPaid, payment_method: payMethod, reference: payRef || payBatch.reference || null }
            : b
        )
      );

      setPayOpen(false);
      setPayBatch(null);
      setPayAmount("");
      setPayMethod("EVC");
      setPayRef("");
    } catch (e: any) {
      setErr(e?.message || "Failed to submit payment");
    } finally {
      setPaySaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href="/admin" className="text-sm text-blue-600 hover:underline">
              ← Admin
            </Link>
            <h1 className="text-xl font-semibold mt-2">Suppliers</h1>
            <p className="text-xs text-gray-600 mt-1">
              See supplier list, unpaid invoices (Pay later), and what each supplier brings.
            </p>
          </div>
          <div className="text-xs text-gray-600 text-right">
            Suppliers: <span className="font-semibold">{loading ? "…" : totals.suppliers}</span>
            <br />
            Unpaid invoices: <span className="font-semibold">{loading ? "…" : totals.unpaidCount}</span> • Total due:{" "}
            <span className="font-semibold">{loading ? "…" : money(totals.totalUnpaid)}</span>
          </div>
        </div>

        {err ? <div className="mt-4 border rounded-2xl p-4 bg-white text-sm text-red-600">{err}</div> : null}

        {/* 2 cols phone, 4 cols desktop */}
        <section className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="border rounded-2xl p-4 bg-white">
            <div className="text-xs text-gray-500">Unpaid invoices</div>
            <div className="mt-1 text-lg font-semibold">{loading ? "…" : totals.unpaidCount}</div>
          </div>
          <div className="border rounded-2xl p-4 bg-white">
            <div className="text-xs text-gray-500">Total due</div>
            <div className="mt-1 text-lg font-semibold">{loading ? "…" : money(totals.totalUnpaid)}</div>
          </div>
        </section>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-3">
          {/* Left: supplier list */}
          <section className="border rounded-2xl bg-white p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="font-semibold">Supplier list</div>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search supplier…"
                className="w-[220px] max-w-full border rounded-full px-4 py-2 text-sm"
              />
            </div>

            <div className="mt-3 space-y-2">
              {(loading ? Array.from({ length: 8 }) : filteredSuppliers).map((s: any, idx: number) => {
                if (loading) {
                  return <div key={idx} className="h-12 bg-gray-100 rounded-xl" />;
                }
                const isActive = Number(s.id) === Number(selectedSupplierId);
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSupplierId(Number(s.id))}
                    className={`w-full text-left border rounded-xl p-3 hover:bg-gray-50 ${
                      isActive ? "border-blue-600" : ""
                    }`}
                  >
                    <div className="text-sm font-semibold">{s.name}</div>
                    <div className="text-xs text-gray-600 mt-1">
                      {s.phone ? s.phone : ""} {s.email ? `• ${s.email}` : ""}
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Right: supplier details */}
          <section className="border rounded-2xl bg-white p-4">
            {!selectedSupplier ? (
              <div className="text-sm text-gray-600">Select a supplier to view invoices and items.</div>
            ) : (
              <>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm text-gray-600">Supplier</div>
                    <div className="text-lg font-semibold">{selectedSupplier.name}</div>
                    <div className="text-xs text-gray-600 mt-1">
                      {selectedSupplier.phone ? selectedSupplier.phone : ""}
                      {selectedSupplier.address ? ` • ${selectedSupplier.address}` : ""}
                    </div>
                  </div>
                  <div className="text-right text-xs text-gray-600">
                    Unpaid: <span className="font-semibold">{supplierUnpaid.length}</span>
                  </div>
                </div>

                {/* Unpaid invoices */}
                <div className="mt-4 border rounded-2xl p-3 bg-yellow-50">
                  <div className="font-semibold text-sm">Unpaid invoices</div>
                  {supplierUnpaid.length === 0 ? (
                    <div className="mt-2 text-sm text-gray-600">No unpaid invoices.</div>
                  ) : (
                    <div className="mt-2 space-y-2">
                      {supplierUnpaid.slice(0, 20).map((b) => {
                        const due = Math.max(0, n(b.total_cost) - n(b.paid_amount));
                        const v = variantById[Number(b.variant_id)];
                        const prodName = v?.products?.name ?? "Product";
                        return (
                          <div key={b.id} className="flex items-center justify-between text-sm">
                            <div className="text-gray-700">
                              Batch #{b.id} • {prodName}
                              {b.reference ? ` • ${b.reference}` : ""}
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">{money(due)}</div>
                              <button
                                onClick={() => openPay(b)}
                                className="px-3 py-1 rounded-full border bg-white text-xs font-semibold hover:bg-gray-50"
                              >
                                Pay / Partial
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Products supplied */}
                <div className="mt-4 border rounded-2xl p-3">
                  <div className="font-semibold text-sm">Products supplied</div>
                  {supplierProducts.length === 0 ? (
                    <div className="mt-2 text-sm text-gray-600">No batches found for this supplier.</div>
                  ) : (
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                      {supplierProducts.slice(0, 24).map((p) => (
                        <div key={p.variantId} className="border rounded-xl p-2">
                          <div className="text-sm font-semibold">{p.productName}</div>
                          <div className="text-xs text-gray-600 mt-1">
                            {p.variantLabel} • SKU:{p.sku}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            Delivered batches: <span className="font-semibold">{p.times}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Supply history */}
                <div className="mt-4 border rounded-2xl p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold text-sm">Supply history</div>
                    <div className="text-xs text-gray-600">
                      Total deliveries: <span className="font-semibold">{supplierBatches.length}</span>
                    </div>
                  </div>

                  {supplierBatches.length === 0 ? (
                    <div className="mt-2 text-sm text-gray-600">No deliveries recorded for this supplier.</div>
                  ) : (
                    <div className="mt-3 overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="text-left text-xs text-gray-500 border-b">
                            <th className="py-2 pr-3">Date</th>
                            <th className="py-2 pr-3">Product</th>
                            <th className="py-2 pr-3">Qty</th>
                            <th className="py-2 pr-3">Total cost</th>
                            <th className="py-2 pr-3">Paid</th>
                            <th className="py-2 pr-3">Due</th>
                            <th className="py-2 pr-3">Note</th>
                          </tr>
                        </thead>
                        <tbody>
                          {supplierBatches.slice(0, 50).map((b) => {
                            const v = variantById[Number(b.variant_id)];
                            const prodName = v?.products?.name ?? "Product";
                            const label = v?.label ? ` (${v.label})` : "";
                            const due = Math.max(0, n(b.total_cost) - n(b.paid_amount));

                            return (
                              <tr key={b.id} className="border-b last:border-b-0">
                                <td className="py-2 pr-3 whitespace-nowrap text-xs text-gray-600">
                                  {String(b.received_at)}
                                </td>
                                <td className="py-2 pr-3">
                                  <div className="font-semibold text-gray-900">{prodName}{label}</div>
                                  <div className="text-xs text-gray-500">Batch #{b.id}{b.reference ? ` • ${b.reference}` : ""}</div>
                                </td>
                                <td className="py-2 pr-3 whitespace-nowrap">{n(b.qty_received)}</td>
                                <td className="py-2 pr-3 whitespace-nowrap">{money(b.total_cost)}</td>
                                <td className="py-2 pr-3 whitespace-nowrap">{money(b.paid_amount)}</td>
                                <td className="py-2 pr-3 whitespace-nowrap">
                                  <span className={due > 0 ? "font-semibold text-amber-700" : "text-gray-600"}>
                                    {money(due)}
                                  </span>
                                </td>
                                <td className="py-2 pr-3 text-xs text-gray-600">{b.note ?? ""}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>

                      {supplierBatches.length > 50 ? (
                        <div className="mt-2 text-xs text-gray-500">
                          Showing latest 50 deliveries. (Add pagination later if you want.)
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>

                {/* Movements */}
                <div className="mt-4 border rounded-2xl p-3">
                  <div className="font-semibold text-sm">Inventory movements (from this supplier’s batches)</div>
                  {supplierMovements.length === 0 ? (
                    <div className="mt-2 text-sm text-gray-600">No movements found.</div>
                  ) : (
                    <div className="mt-2 space-y-2 text-sm">
                      {supplierMovements.slice(0, 40).map((m) => (
                        <div key={m.id} className="flex justify-between">
                          <div className="text-gray-700">
                            {m.type} <span className="font-semibold">{m.qty > 0 ? `+${m.qty}` : m.qty}</span>
                            <span className="text-xs text-gray-500">
                              {m.batch_id ? ` • batch #${m.batch_id}` : ""}
                              {m.order_id ? ` • order #${m.order_id}` : ""}
                              {m.note ? ` • ${m.note}` : ""}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500">{String(m.created_at)}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </section>
        </div>
      </div>

      {payOpen && payBatch ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          onClick={() => {
            setPayOpen(false);
            setPayBatch(null);
          }}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pay-modal-title"
          >
            <h2 id="pay-modal-title" className="text-lg font-semibold mb-2">
              Pay supplier invoice
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Batch #{payBatch.id} •{" "}
              {variantById[payBatch.variant_id]?.products?.name ?? `Product #${variantById[payBatch.variant_id]?.product_id}`}
            </p>
            <p className="mb-4">
              Due: <span className="font-semibold">{money(Math.max(0, n(payBatch.total_cost) - n(payBatch.paid_amount)))}</span>
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="pay-amount" className="block text-sm font-medium text-gray-700 mb-1">
                  Amount
                </label>
                <input
                  id="pay-amount"
                  type="number"
                  step="0.01"
                  min="0"
                  max={Math.max(0, n(payBatch.total_cost) - n(payBatch.paid_amount))}
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label htmlFor="pay-method" className="block text-sm font-medium text-gray-700 mb-1">
                  Method
                </label>
                <select
                  id="pay-method"
                  value={payMethod}
                  onChange={(e) => setPayMethod(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                >
                  {paymentMethods.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="pay-ref" className="block text-sm font-medium text-gray-700 mb-1">
                  Reference
                </label>
                <input
                  id="pay-ref"
                  type="text"
                  value={payRef}
                  onChange={(e) => setPayRef(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setPayOpen(false);
                  setPayBatch(null);
                }}
                className="px-4 py-2 rounded border bg-gray-100 hover:bg-gray-200"
                disabled={paySaving}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={submitPay}
                disabled={paySaving}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {paySaving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}