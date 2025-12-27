"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { fetchAllProducts, fetchAllProductVariants } from "@/lib/db";

type Product = {
  id: number;
  name: string;
  base_price: any;
  is_active: boolean;
};

type Variant = {
  id: number;
  product_id: number;
  label: string;
  price: any;
  stock: number;
};

type Line = {
  key: string;
  productId: number;
  variantId: number;
  name: string;
  qty: number;
  price: number;
};

const n = (v: any) => (Number.isFinite(Number(v)) ? Number(v) : 0);
const money = (v: number) => `£${Number(v ?? 0).toFixed(2)}`;

export default function AdminPOS() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);
  const [variants, setVariants] = useState<Variant[]>([]);

  const [q, setQ] = useState("");
  const [selectedProductId, setSelectedProductId] = useState<number | "">("");
  const [selectedVariantId, setSelectedVariantId] = useState<number | "">("");

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const [note, setNote] = useState("");

  // payment modes (CREDIT is not a payments.method enum, it's just a workflow)
  const [payMode, setPayMode] = useState<"EVC" | "CASH" | "MERCHANT" | "CREDIT">("EVC");

  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true);
      try {
        const [ps, vs] = await Promise.all([fetchAllProducts(), fetchAllProductVariants()]);
        if (!alive) return;
        setProducts((ps as any[]).filter((p) => p.is_active !== false));
        setVariants(vs as any[]);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return products.slice(0, 50);
    return products
      .filter((p) => p.name.toLowerCase().includes(s))
      .slice(0, 50);
  }, [q, products]);

  const variantsForSelected = useMemo(() => {
    if (!selectedProductId) return [];
    return variants.filter((v) => v.product_id === selectedProductId);
  }, [variants, selectedProductId]);

  const total = useMemo(() => lines.reduce((sum, l) => sum + l.qty * l.price, 0), [lines]);

  function addLine() {
    if (!selectedProductId || !selectedVariantId) return;

    const p = products.find((x) => x.id === selectedProductId);
    const v = variants.find((x) => x.id === selectedVariantId);
    if (!p || !v) return;

    const key = `${p.id}-${v.id}`;
    const price = n(v.price);

    setLines((prev) => {
      const idx = prev.findIndex((x) => x.key === key);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [
        ...prev,
        {
          key,
          productId: p.id,
          variantId: v.id,
          name: `${p.name} (${v.label})`,
          qty: 1,
          price,
        },
      ];
    });
  }

  function setQty(key: string, qty: number) {
    setLines((prev) =>
      prev
        .map((x) => (x.key === key ? { ...x, qty: Math.max(1, qty) } : x))
        .filter((x) => x.qty > 0)
    );
  }

  function removeLine(key: string) {
    setLines((prev) => prev.filter((x) => x.key !== key));
  }

  async function getOrCreateCustomerId() {
    const phone = String(customerPhone ?? "").trim();
    const name = String(customerName ?? "").trim() || "Customer";

    if (!phone) return null; // allow walk-in

    const found = await supabase
      .from("customers")
      .select("id")
      .eq("phone", phone)
      .maybeSingle();

    if (found.error) throw found.error;
    if (found.data?.id) return Number(found.data.id);

    const created = await supabase
      .from("customers")
      .insert({ name, phone })
      .select("id")
      .single();

    if (created.error) throw created.error;
    return Number(created.data.id);
  }

  async function saveSale() {
    if (lines.length === 0) return alert("Add at least 1 item.");
    setSaving(true);

    try {
      const customerId = await getOrCreateCustomerId();
      const isCredit = payMode === "CREDIT";

      // 1) create order
      const orderRes = await supabase
        .from("orders")
        .insert({
          customer_id: customerId,
          total_amount: total,
          status: isCredit ? "PENDING" : "PAID",
          delivery_name: customerName || null,
          delivery_phone: customerPhone || null,
          delivery_address: "MATO Minmart",
          delivery_note: note || null,
        })
        .select("id")
        .single();

      if (orderRes.error) throw orderRes.error;
      const orderId = Number(orderRes.data.id);

      // 2) create items (variant_id is NOT NULL in your schema)
      const itemsPayload = lines.map((l) => ({
        order_id: orderId,
        product_id: l.productId,
        variant_id: l.variantId,
        quantity: l.qty,
        price_at_purchase: l.price,
      }));

      const oi = await supabase.from("order_items").insert(itemsPayload);
      if (oi.error) throw oi.error;

      // 3) payment (only if not credit)
      if (!isCredit) {
        const pay = await supabase.from("payments").insert({
          order_id: orderId,
          method: payMode, // EVC/CASH/MERCHANT
          amount: total,
          status: "SUCCESS",
          reference: `POS-${orderId}-${Date.now()}`, // unique
        });
        if (pay.error) throw pay.error;
      }

      // reset UI
      setLines([]);
      setSelectedProductId("");
      setSelectedVariantId("");
      setCustomerName("");
      setCustomerPhone("");
      setNote("");
      setPayMode("EVC");
      alert("Sale saved ✅");
    } catch (e: any) {
      console.error(e);
      alert(e?.message || "Failed to save sale");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Fast Sale (Admin POS)</h1>
            <p className="text-sm text-gray-600">Quick sale + credit orders for your shop staff.</p>
          </div>
          <Link href="/admin" className="text-sm text-blue-600 hover:underline">
            ← Back
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* LEFT */}
          <section className="border rounded-2xl p-4 col-span-2 lg:col-span-2">
            <div className="font-semibold">Add items</div>

            <input
              className="mt-3 w-full border rounded-xl px-3 py-2 text-sm"
              placeholder="Search product…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />

            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
              <select
                className="border rounded-xl px-3 py-2 text-sm"
                value={selectedProductId}
                onChange={(e) => {
                  const v = e.target.value;
                  setSelectedProductId(v ? Number(v) : "");
                  setSelectedVariantId("");
                }}
                disabled={loading}
              >
                <option value="">Select product…</option>
                {filteredProducts.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>

              <select
                className="border rounded-xl px-3 py-2 text-sm"
                value={selectedVariantId}
                onChange={(e) => setSelectedVariantId(e.target.value ? Number(e.target.value) : "")}
                disabled={!selectedProductId}
              >
                <option value="">Select variant…</option>
                {variantsForSelected.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.label} • {money(n(v.price))} • stock {v.stock}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={addLine}
              disabled={!selectedProductId || !selectedVariantId}
              className={`mt-3 w-full rounded-full py-2 text-sm font-semibold ${
                !selectedProductId || !selectedVariantId
                  ? "bg-gray-200 text-gray-500"
                  : "bg-black text-white"
              }`}
            >
              Add
            </button>

            <div className="mt-6 font-semibold">Customer</div>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                className="border rounded-xl px-3 py-2 text-sm"
                placeholder="Name (optional)"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <input
                className="border rounded-xl px-3 py-2 text-sm"
                placeholder="Phone (Somalia)"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
              />
            </div>

            <textarea
              className="mt-3 border rounded-xl px-3 py-2 text-sm w-full"
              rows={2}
              placeholder="Note (optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <div className="mt-4 font-semibold">Payment</div>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {(["EVC", "CASH", "MERCHANT", "CREDIT"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setPayMode(m)}
                  className={`rounded-xl border py-2 text-xs font-semibold ${
                    payMode === m ? "bg-blue-600 text-white border-blue-600" : "bg-white"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </section>

          {/* RIGHT */}
          <aside className="border rounded-2xl p-4 col-span-2 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Sale</div>
              <div className="text-sm font-semibold">{money(total)}</div>
            </div>

            <div className="mt-3 space-y-2">
              {lines.length === 0 ? (
                <div className="text-sm text-gray-600">No items.</div>
              ) : (
                lines.map((l) => (
                  <div key={l.key} className="border rounded-2xl p-3">
                    <div className="flex justify-between gap-2">
                      <div className="min-w-0">
                        <div className="text-sm font-semibold">{l.name}</div>
                        <div className="text-xs text-gray-600">
                          {money(l.price)} • line {money(l.price * l.qty)}
                        </div>
                      </div>
                      <button className="text-xs text-red-600" onClick={() => removeLine(l.key)}>
                        Remove
                      </button>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <button className="h-9 w-9 rounded-xl border" onClick={() => setQty(l.key, l.qty - 1)}>
                        −
                      </button>
                      <input
                        className="h-9 w-16 border rounded-xl text-center text-sm"
                        value={l.qty}
                        onChange={(e) => setQty(l.key, Number(e.target.value || 1))}
                      />
                      <button className="h-9 w-9 rounded-xl border" onClick={() => setQty(l.key, l.qty + 1)}>
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <button
              onClick={saveSale}
              disabled={saving || lines.length === 0}
              className={`mt-4 w-full rounded-full py-3 text-sm font-semibold ${
                saving || lines.length === 0 ? "bg-gray-200 text-gray-500" : "bg-green-600 text-white"
              }`}
            >
              {saving ? "Saving…" : `Complete • ${money(total)}`}
            </button>

            <p className="mt-2 text-xs text-gray-500">
              CREDIT saves order as PENDING (no payment row). EVC/CASH/MERCHANT saves PAID + payment SUCCESS.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}