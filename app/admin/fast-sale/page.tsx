"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Variant = {
  id: number;
  product_id: number;
  label: string;
  price: string | number;
  stock: number;
  products?: { name?: string | null; slug?: string | null } | null;
};

type CartLine = {
  variant_id: number;
  product_id: number;
  name: string;
  label: string;
  price: number;
  qty: number;
  stock: number;
};

type CustomerRow = {
  id: number | string;
  name: string;
  phone: string;
};

const PAYMENT_METHODS = ["EVC", "eDahab", "MERCHANT", "CASH", "PREMIER"] as const;
type PayMethod = (typeof PAYMENT_METHODS)[number];

function n(x: any) {
  const v = Number(x ?? 0);
  return Number.isFinite(v) ? v : 0;
}
function money(x: any) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(n(x));
}
function todayYmd() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

export default function FastSalePage() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const [variants, setVariants] = useState<Variant[]>([]);
  const [q, setQ] = useState("");

  const [cart, setCart] = useState<CartLine[]>([]);

  // customer (Somalia phone)
  const [custName, setCustName] = useState("");
  const [custPhone, setCustPhone] = useState("062");
  const [address, setAddress] = useState("MATO minmart");
  const [custSuggestions, setCustSuggestions] = useState<CustomerRow[]>([]);
  const [custSuggestOpen, setCustSuggestOpen] = useState(false);
  const [custSuggestLoading, setCustSuggestLoading] = useState(false);
  const [lastCustField, setLastCustField] = useState<"name" | "phone">("phone");

  // checkout modal
  const [showPay, setShowPay] = useState(false);
  const [payMethod, setPayMethod] = useState<PayMethod>("EVC");
  const [payAmount, setPayAmount] = useState<number>(0);
  const [placing, setPlacing] = useState(false);
  const [doneMsg, setDoneMsg] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setErr(null);

        // Pull variants with product name (variant_id is required by your order_items table)
        // Assumes FK: product_variants.product_id -> products.id
        const { data, error } = await supabase
          .from("product_variants")
          .select("id,product_id,label,price,stock,products(name,slug)")
          .order("id", { ascending: true })
          .limit(5000);

        if (error) throw error;
        if (!alive) return;

        setVariants((data ?? []) as any);
      } catch (e: any) {
        if (!alive) return;
        setErr(e?.message || "Failed to load variants");
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return variants;

    return variants.filter((v) => {
      const name = String(v.products?.name ?? "").toLowerCase();
      const label = String(v.label ?? "").toLowerCase();
      const slug = String(v.products?.slug ?? "").toLowerCase();
      return name.includes(s) || label.includes(s) || slug.includes(s) || String(v.id).includes(s);
    });
  }, [variants, q]);

  const subtotal = useMemo(() => cart.reduce((sum, l) => sum + l.price * l.qty, 0), [cart]);

  useEffect(() => {
    setPayAmount(subtotal);
  }, [subtotal]);

  useEffect(() => {
    let alive = true;
    const termRaw = (lastCustField === "name" ? custName : custPhone).trim();
    const term = termRaw;

    const shouldSearch =
      (lastCustField === "name" && term.length >= 2) ||
      (lastCustField === "phone" && term.replace(/\D/g, "").length >= 3);

    if (!shouldSearch) {
      setCustSuggestions([]);
      setCustSuggestOpen(false);
      return;
    }

    const t = setTimeout(async () => {
      try {
        setCustSuggestLoading(true);
        const safe = term.replace(/%/g, "");

        const { data, error } = await supabase
          .from("customers")
          .select("id,name,phone")
          .or(`name.ilike.%${safe}%,phone.ilike.%${safe}%`)
          .order("id", { ascending: false })
          .limit(10);

        if (error) throw error;
        if (!alive) return;
        setCustSuggestions((data ?? []) as any);
        setCustSuggestOpen(true);
      } catch {
        if (!alive) return;
        setCustSuggestions([]);
        setCustSuggestOpen(false);
      } finally {
        if (alive) setCustSuggestLoading(false);
      }
    }, 250);

    return () => {
      alive = false;
      clearTimeout(t);
    };
  }, [custName, custPhone, lastCustField]);

  function addVariant(v: Variant) {
    const name = String(v.products?.name ?? `Product #${v.product_id}`);
    const label = String(v.label ?? "");
    const price = n(v.price);

    setCart((prev) => {
      const idx = prev.findIndex((x) => x.variant_id === v.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [
        ...prev,
        {
          variant_id: v.id,
          product_id: v.product_id,
          name,
          label,
          price,
          qty: 1,
          stock: n(v.stock),
        },
      ];
    });
  }

  function setQty(variantId: number, qty: number) {
    setCart((prev) =>
      prev
        .map((l) => (l.variant_id === variantId ? { ...l, qty: Math.max(1, Math.floor(qty)) } : l))
        .filter((l) => l.qty > 0)
    );
  }

  function setPrice(variantId: number, price: number) {
    const p = Math.max(0, n(price));
    setCart((prev) => prev.map((l) => (l.variant_id === variantId ? { ...l, price: p } : l)));
  }

  function selectCustomer(c: CustomerRow) {
    setCustName(String(c?.name ?? ""));
    setCustPhone(String(c?.phone ?? ""));
    setCustSuggestOpen(false);
  }

  function closeSuggestionsSoon() {
    // allow click on dropdown items
    setTimeout(() => setCustSuggestOpen(false), 120);
  }

  function removeLine(variantId: number) {
    setCart((prev) => prev.filter((l) => l.variant_id !== variantId));
  }

  function resetSale() {
    setCart([]);
    setCustName("");
    setCustPhone("062");
    setAddress("MATO minmart");
    setShowPay(false);
    setPayMethod("EVC");
    setPayAmount(0);
    setCustSuggestions([]);
    setCustSuggestOpen(false);
  }

  async function upsertCustomer(): Promise<number | null> {
    const phone = custPhone.trim();
    const name = custName.trim();

    if (!phone) return null;

    // 1) find existing by phone
    const { data: found, error: fErr } = await supabase
      .from("customers")
      .select("id,name,phone")
      .eq("phone", phone)
      .limit(1);

    if (fErr) throw fErr;
    if (found && found.length > 0) return Number((found[0] as any).id);

    // 2) create if not found (name optional, but your customers.name is NOT NULL)
    const safeName = name || phone;
    const { data: created, error: cErr } = await supabase
      .from("customers")
      .insert({ name: safeName, phone })
      .select("id")
      .single();

    if (cErr) throw cErr;
    return created ? Number((created as any).id) : null;
  }

  async function createOrderAndItems(args: {
    customerId: number | null;
    status: "PAID" | "PENDING";
    total: number;
  }) {
    // order
    const { data: order, error: oErr } = await supabase
      .from("orders")
      .insert({
        customer_id: args.customerId,
        total_amount: args.total,
        status: args.status,
        delivery_name: custName.trim() || null,
        delivery_phone: custPhone.trim() || null,
        delivery_address: address.trim() || "MATO minmart",
        delivery_note: null,
      })
      .select("id")
      .single();

    if (oErr) throw oErr;

    const orderId = Number((order as any).id);

    // items (variant_id is required in your schema)
    const payload = cart.map((l) => ({
      order_id: orderId,
      product_id: l.product_id, // can be null in schema, but we have it
      variant_id: l.variant_id, // NOT NULL in schema
      quantity: l.qty,
      price_at_purchase: l.price,
    }));

    const { error: iErr } = await supabase.from("order_items").insert(payload);
    if (iErr) throw iErr;

    return orderId;
  }

  async function payNow() {
    if (cart.length === 0) return;
    if (!custPhone.trim()) {
      alert("Phone number is required.");
      return;
    }

    setPlacing(true);
    setErr(null);
    setDoneMsg(null);

    try {
      const customerId = await upsertCustomer();

      // create order as PAID (cash sale)
      const orderId = await createOrderAndItems({
        customerId,
        status: "PAID",
        total: subtotal,
      });

      // create payment SUCCESS
      const amt = Math.min(n(payAmount), subtotal);
      const { error: pErr } = await supabase.from("payments").insert({
        order_id: orderId,
        method: payMethod,
        amount: amt,
        status: "SUCCESS",
        reference: null,
      });

      if (pErr) throw pErr;

      setDoneMsg(`✅ Paid sale saved. Order #${orderId}`);
      resetSale();
    } catch (e: any) {
      setErr(e?.message || "Failed to save paid sale");
    } finally {
      setPlacing(false);
      setShowPay(false);
    }
  }

  async function creditOrder() {
    if (cart.length === 0) return;
    if (!custPhone.trim()) {
      alert("Phone number is required.");
      return;
    }

    setPlacing(true);
    setErr(null);
    setDoneMsg(null);

    try {
      const customerId = await upsertCustomer();

      // Credit order: status PENDING + NO payment row (prevents duplicate transactions)
      const orderId = await createOrderAndItems({
        customerId,
        status: "PENDING",
        total: subtotal,
      });

      setDoneMsg(`🟡 Credit order saved (PENDING). Order #${orderId}`);
      resetSale();
    } catch (e: any) {
      setErr(e?.message || "Failed to save credit order");
    } finally {
      setPlacing(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href="/admin" className="text-sm text-blue-600 hover:underline">
              ← Admin
            </Link>
            <h1 className="text-xl font-semibold mt-2">Fast Sale</h1>
            <p className="text-xs text-gray-600 mt-1">
              Quick sales + credit orders (variant-based, so it matches your DB schema).
            </p>
          </div>

          <div className="text-right">
            <div className="text-xs text-gray-600">Today</div>
            <div className="text-sm font-semibold">{todayYmd()}</div>
          </div>
        </div>

        {err ? (
          <div className="mt-4 border rounded-2xl p-4 bg-white text-sm text-red-600">{err}</div>
        ) : null}

        {doneMsg ? (
          <div className="mt-4 border rounded-2xl p-4 bg-white text-sm text-green-700">
            {doneMsg}
          </div>
        ) : null}

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr] gap-4">
          {/* LEFT: variants */}
          <section className="border rounded-2xl bg-white p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="font-semibold">Products</div>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search (name, label, slug, id)…"
                className="border rounded-full px-3 py-2 text-sm w-[220px] bg-white"
              />
            </div>

            <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {(loading ? Array.from({ length: 12 }) : filtered.slice(0, 200)).map(
                (v: any, idx: number) => {
                  if (loading) return <div key={idx} className="h-28 bg-gray-100 rounded-2xl" />;

                  const name = String(v.products?.name ?? `Product #${v.product_id}`);
                  const label = String(v.label ?? "");
                  const price = n(v.price);
                  const stock = n(v.stock);

                  return (
                    <button
                      key={v.id}
                      onClick={() => addVariant(v)}
                      className="text-left border rounded-2xl p-3 hover:bg-gray-50 active:scale-[0.99]"
                      title={`Variant #${v.id}`}
                    >
                      <div className="text-sm font-semibold line-clamp-2">{name}</div>
                      <div className="mt-1 text-xs text-gray-600 line-clamp-1">{label}</div>
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <div className="font-semibold">{money(price)}</div>
                        <div className={`text-xs ${stock <= 0 ? "text-red-600" : "text-gray-600"}`}>
                          Stock: {stock}
                        </div>
                      </div>
                    </button>
                  );
                }
              )}
            </div>
          </section>

          {/* RIGHT: cart */}
          <aside className="border rounded-2xl bg-white p-4 lg:sticky lg:top-6 h-fit">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Cart</div>
              <button
                onClick={resetSale}
                className="text-xs px-3 py-2 rounded-full border hover:bg-gray-50"
              >
                Clear
              </button>
            </div>

            <div className="mt-3 space-y-2">
              {cart.length === 0 ? (
                <div className="text-sm text-gray-600">No items.</div>
              ) : (
                cart.map((l) => (
                  <div key={l.variant_id} className="border rounded-xl p-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-sm font-semibold line-clamp-2">{l.name}</div>
                        <div className="text-xs text-gray-600">
                          {l.label} • Variant #{l.variant_id}
                        </div>
                        <div className="mt-1 flex items-center justify-between gap-2">
                          <div className="text-sm font-semibold">{money(l.price)}</div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">Edit</span>
                            <input
                              type="number"
                              step="0.01"
                              value={String(l.price)}
                              onChange={(e) => setPrice(l.variant_id, Number(e.target.value))}
                              className="w-24 text-right border rounded-xl px-2 py-1 text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => removeLine(l.variant_id)}
                        className="text-xs px-2 py-1 rounded-full border hover:bg-gray-50"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="text-xs text-gray-600">Stock: {l.stock}</div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQty(l.variant_id, l.qty - 1)}
                          className="w-9 h-9 rounded-full border hover:bg-gray-50"
                        >
                          −
                        </button>
                        <input
                          value={String(l.qty)}
                          onChange={(e) => setQty(l.variant_id, Number(e.target.value))}
                          className="w-14 text-center border rounded-xl py-2"
                        />
                        <button
                          onClick={() => setQty(l.variant_id, l.qty + 1)}
                          className="w-9 h-9 rounded-full border hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="mt-2 text-sm font-semibold text-right">
                      {money(l.price * l.qty)}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">{money(subtotal)}</span>
              </div>

              {/* customer */}
              <div className="mt-4">
                <div className="text-sm font-semibold">Customer</div>

                <div className="mt-2 grid grid-cols-1 gap-2">
                  <div className="relative">
                    <input
                      value={custPhone}
                      onChange={(e) => {
                        setLastCustField("phone");
                        setCustPhone(e.target.value);
                      }}
                      onFocus={() => setCustSuggestOpen(true)}
                      onBlur={closeSuggestionsSoon}
                      placeholder="Phone (Somalia)"
                      className="border rounded-xl px-3 py-2 text-sm w-full"
                    />

                    {custSuggestOpen && (custSuggestLoading || custSuggestions.length > 0) ? (
                      <div className="absolute z-20 mt-2 w-full bg-white border rounded-2xl shadow-lg overflow-hidden">
                        <div className="px-3 py-2 text-xs text-gray-600 border-b">
                          {custSuggestLoading ? "Searching…" : "Select customer"}
                        </div>
                        <div className="max-h-64 overflow-auto">
                          {custSuggestions.length === 0 ? (
                            <div className="px-3 py-3 text-sm text-gray-600">No matches.</div>
                          ) : (
                            custSuggestions.map((c) => (
                              <button
                                key={String(c.id)}
                                type="button"
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => selectCustomer(c)}
                                className="w-full text-left px-3 py-2 hover:bg-gray-50"
                              >
                                <div className="text-sm font-semibold line-clamp-1">
                                  {c.name || c.phone}
                                </div>
                                <div className="text-xs text-gray-600">{c.phone}</div>
                              </button>
                            ))
                          )}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <input
                    value={custName}
                    onChange={(e) => {
                      setLastCustField("name");
                      setCustName(e.target.value);
                    }}
                    onFocus={() => setCustSuggestOpen(true)}
                    onBlur={closeSuggestionsSoon}
                    placeholder="Name (optional)"
                    className="border rounded-xl px-3 py-2 text-sm"
                  />
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Delivery location"
                    className="border rounded-xl px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setShowPay(true)}
                  disabled={cart.length === 0 || placing}
                  className="rounded-full py-3 text-sm font-semibold bg-blue-600 text-white disabled:opacity-50"
                >
                  Pay now
                </button>

                <button
                  onClick={creditOrder}
                  disabled={cart.length === 0 || placing}
                  className="rounded-full py-3 text-sm font-semibold border disabled:opacity-50"
                >
                  Credit
                </button>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                Credit orders save as <span className="font-semibold">PENDING</span> and do not create
                payment rows.
              </p>
            </div>
          </aside>
        </div>

        {/* Pay modal */}
        {showPay ? (
          <div className="fixed inset-0 bg-black/40 flex items-end lg:items-center justify-center p-4 z-50">
            <div className="w-full max-w-lg bg-white rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold">Take payment</div>
                <button
                  onClick={() => setShowPay(false)}
                  className="text-xs px-3 py-2 rounded-full border hover:bg-gray-50"
                >
                  Close
                </button>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-3">
                <label className="text-sm">
                  Method (default EVC)
                  <select
                    value={payMethod}
                    onChange={(e) => setPayMethod(e.target.value as PayMethod)}
                    className="mt-1 w-full border rounded-xl px-3 py-2"
                  >
                    {PAYMENT_METHODS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="text-sm">
                  Amount
                  <input
                    type="number"
                    value={String(payAmount)}
                    onChange={(e) => setPayAmount(Number(e.target.value))}
                    className="mt-1 w-full border rounded-xl px-3 py-2"
                  />
                  <div className="mt-1 text-xs text-gray-600">
                    Total: <span className="font-semibold">{money(subtotal)}</span>
                  </div>
                </label>

                <button
                  onClick={payNow}
                  disabled={placing || cart.length === 0}
                  className="w-full rounded-full py-3 text-sm font-semibold bg-blue-600 text-white disabled:opacity-50"
                >
                  {placing ? "Saving…" : `Confirm payment • ${money(Math.min(payAmount, subtotal))}`}
                </button>

                <div className="text-xs text-gray-500">
                  This creates: <b>orders(PAID)</b> + <b>order_items</b> + <b>payments(SUCCESS)</b>.
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}   