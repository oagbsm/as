"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";

import { useCart } from "@/context/CartContext";
import { supabase } from "@/lib/supabaseClient";
import {
  getProductsByIds,
  getVariantsByIds,
  createOrder,
  createOrderItems,
  type ProductRow,
  type VariantRow,
} from "@/lib/db";

type CartItem = { productId: number; variantId: number; qty: number };
const isUuid = (v: string) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v);

function toIntArray(values: any[]): number[] {
  const out: number[] = [];
  for (const v of values) {
    const n = Number(v);
    if (Number.isFinite(n) && n > 0) out.push(Math.trunc(n));
  }
  return Array.from(new Set(out));
}

function formatMoney(n: number) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
    Number(n ?? 0)
  );
}

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const cartItems = (Array.isArray(items) ? (items as any) : []) as CartItem[];

  const [productMap, setProductMap] = useState<Record<number, ProductRow>>({});
  const [variantMap, setVariantMap] = useState<Record<number, VariantRow>>({});

  const [placing, setPlacing] = useState(false);
  const [done, setDone] = useState(false);

  // Prefilled dummy data (for fast testing)
  const [name, setName] = useState("Test Customer");
  const [phone, setPhone] = useState("0622000000");
  const [address, setAddress] = useState("MATO, MOGADISHU");
  const [note, setNote] = useState("Leave at the gate (demo).");

  // Payment (Pay now vs Credit)
  const [isCredit, setIsCredit] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"EVC" | "CASH" | "MERCHANT">("EVC");
  const [paymentRef, setPaymentRef] = useState("");

  useEffect(() => {
    let alive = true;

    (async () => {
      const pids = cartItems.map((x) => x.productId);
      const vids = cartItems
        .map((x) => x.variantId)
        .filter((v): v is number => v != null);

      try {
        const [ps, vs] = await Promise.all([getProductsByIds(pids), getVariantsByIds(vids)]);
        if (!alive) return;

        const pm: Record<number, ProductRow> = {};
        for (const p of ps) pm[p.id] = p;

        const vm: Record<number, VariantRow> = {};
        for (const v of vs) vm[v.id] = v;

        setProductMap(pm);
        setVariantMap(vm);
      } catch (e) {
        console.error("CHECKOUT LOAD ERROR:", e);
      }
    })();

    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const rows = useMemo(() => {
    return cartItems
      .map((ci) => {
        const p = productMap[ci.productId];
        if (!p) return null;

        const v = ci.variantId != null ? variantMap[ci.variantId] : null;

        const price = Number(v?.price ?? p.base_price ?? 0);
        const label = v?.label ? ` (${v.label})` : "";

        return {
          key: `${ci.productId}-${ci.variantId ?? "base"}`,
          productId: ci.productId,
          variantId: ci.variantId ?? null,
          name: `${p.name}${label}`,
          qty: ci.qty ?? 1,
          price,
          lineTotal: price * (ci.qty ?? 1),
        };
      })
      .filter(Boolean) as Array<{
      key: string;
      productId: number;
      variantId: number | null;
      name: string;
      qty: number;
      price: number;
      lineTotal: number;
    }>;
  }, [cartItems, productMap, variantMap]);

  const subtotal = useMemo(() => rows.reduce((sum, r) => sum + r.lineTotal, 0), [rows]);
  const deliveryFee = subtotal > 0 ? 1.99 : 0;
  const total = subtotal + deliveryFee;

  async function getOrCreateCustomerId(phoneRaw: string, nameRaw: string) {
    const phoneClean = String(phoneRaw ?? "").trim();
    const nameClean = String(nameRaw ?? "").trim() || "Customer";

    // 1) Try find existing customer by phone
    const found = await supabase
      .from("customers")
      .select("id")
      .eq("phone", phoneClean)
      .maybeSingle();

    if (found.error) throw found.error;
    if (found.data?.id) return Number(found.data.id);

    // 2) Create customer
    const created = await supabase
      .from("customers")
      .insert({ name: nameClean, phone: phoneClean })
      .select("id")
      .single();

    if (created.error) throw created.error;
    return Number(created.data.id);
  }

  async function placeOrder() {
    if (cartItems.length === 0) return;

    if (!name.trim() || !phone.trim() || !address.trim()) {
      alert("Please fill in Name, Phone, and Address.");
      return;
    }

    setPlacing(true);

    try {
      // Dedup product ids for copurchase recording (as ints)
      const productIds = toIntArray(cartItems.map((x) => x.productId));

      // 1) Get/Create Customer, then Create Order
      const customerId = await getOrCreateCustomerId(phone, name);

      const order = await createOrder({
        customer_id: customerId,
        delivery: { name, phone, address, note },
        total_amount: Number.isFinite(Number(total)) ? Number(total) : 0,
      });

      // 2) Create Order Items
      const orderItemsPayload = rows.map((r) => ({
        productId: r.productId,
        variantId: r.variantId,
        qty: r.qty,
        priceAtPurchase: Number(r.price),
      }));

      await createOrderItems(order.id, orderItemsPayload);

      // 2.5) If NOT credit, record payment and mark order as PAID
      if (!isCredit) {
        const paymentInsert = await supabase
          .from("payments")
          .insert({
            order_id: order.id,
            method: paymentMethod,
            amount: Number.isFinite(Number(total)) ? Number(total) : 0,
            status: "SUCCESS",
            reference: paymentRef.trim() ? paymentRef.trim() : null,
          })
          .select("id")
          .single();

        if (paymentInsert.error) throw paymentInsert.error;

        const upd = await supabase
          .from("orders")
          .update({ status: "PAID" })
          .eq("id", order.id);

        if (upd.error) throw upd.error;
      }

      // 3) Record co-purchase counts (NOT fatal if it fails)
      // NOTE: 22P02 here is usually a type mismatch between what the RPC expects
      // (e.g., uuid[]) and what we're sending (e.g., int[]). We try both safely.
      try {
        if (productIds.length >= 2) {
          // Try int[] first
          let { data: rpcData, error: rpcErr } = await supabase.rpc("record_copurchase", {
            product_ids: productIds,
          });

          if (rpcErr && (rpcErr as any)?.code === "22P02") {
            // If your schema uses UUID ids, try sending uuid[] instead
            const maybeUuids = cartItems
              .map((x) => String((x as any).productId))
              .filter((s) => isUuid(s));

            if (maybeUuids.length >= 2) {
              const retry = await supabase.rpc("record_copurchase", {
                product_ids: Array.from(new Set(maybeUuids)),
              });
              rpcData = retry.data;
              rpcErr = retry.error;
            }
          }

          if (rpcErr) {
            console.log("record_copurchase rpcErr:", rpcErr);
            console.log("rpcErr.code:", (rpcErr as any)?.code);
            console.log("rpcErr.message:", (rpcErr as any)?.message);
            console.log("rpcErr.details:", (rpcErr as any)?.details);
            console.log("rpcErr.hint:", (rpcErr as any)?.hint);
          } else {
            console.log("record_copurchase OK", rpcData);
          }
        } else {
          // Need at least 2 distinct products for co-purchase
          console.log("record_copurchase skipped (need >= 2 distinct product ids)");
        }
      } catch (err) {
        console.log("record_copurchase threw (ignored):", err);
      }

      clearCart();
      setDone(true);
    } catch (e: any) {
      console.error("PLACE ORDER ERROR:", e);

      const msg =
        e?.message ||
        e?.error?.message ||
        e?.details ||
        (typeof e === "string" ? e : null) ||
        JSON.stringify(e, null, 2);

      if (String(msg).toLowerCase().includes("insufficient stock")) {
        alert(
          "Sorry — one of the items is out of stock. Please reduce quantity or choose another size."
        );
      } else {
        alert(`Failed to place order:\n${msg}`);
      }
    } finally {
      setPlacing(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-4">
          <Link href="/cart" className="text-sm text-blue-600 hover:underline">
            ← Back to cart
          </Link>
          <h1 className="text-xl font-semibold mt-2">Checkout</h1>
          <div className="text-sm text-gray-600 mt-1">🔒 Secure</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_0.9fr] gap-6">
          {/* LEFT */}
          <section>
            {done ? (
              <div className="border rounded-2xl p-8 text-center">
                <div className="text-4xl">✅</div>
                <p className="text-xl font-semibold mt-3">Order placed</p>
                <p className="text-sm text-gray-600 mt-2">
                  Order saved to Supabase. Co-purchase counts attempted.
                </p>

                <div className="mt-6 flex gap-3 justify-center">
                  <Link
                    href="/"
                    className="px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold"
                  >
                    Continue shopping
                  </Link>
                  <Link
                    href="/cart"
                    className="px-5 py-2 rounded-full border text-sm font-semibold"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            ) : (
              <div className="border rounded-2xl p-5">
                <h2 className="font-semibold">Delivery details</h2>
                <p className="text-sm text-gray-600 mt-1">Dummy data is prefilled for testing.</p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="text-sm">
                    Full name
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 w-full border rounded-xl px-3 py-2"
                    />
                  </label>

                  <label className="text-sm">
                    Phone number
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-1 w-full border rounded-xl px-3 py-2"
                    />
                  </label>

                  <label className="text-sm md:col-span-2">
                    Address
                    <input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="mt-1 w-full border rounded-xl px-3 py-2"
                    />
                  </label>

                  <label className="text-sm md:col-span-2">
                    Order note (optional)
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={3}
                      className="mt-1 w-full border rounded-xl px-3 py-2"
                    />
                  </label>
                </div>

                <div className="mt-4 border rounded-xl p-3">
                  <div className="text-sm font-semibold">Payment</div>

                  <div className="mt-2 flex items-center gap-3">
                    <label className="text-sm flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isCredit}
                        onChange={(e) => setIsCredit(e.target.checked)}
                      />
                      Credit order (mark as PENDING)
                    </label>
                  </div>

                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="text-sm">
                      Method
                      <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value as any)}
                        className="mt-1 w-full border rounded-xl px-3 py-2"
                        disabled={isCredit}
                      >
                        <option value="EVC">EVC</option>
                        <option value="MERCHANT">MERCHANT</option>
                        <option value="CASH">CASH</option>
                      </select>
                    </label>

                    <label className="text-sm">
                      Reference (optional)
                      <input
                        value={paymentRef}
                        onChange={(e) => setPaymentRef(e.target.value)}
                        className="mt-1 w-full border rounded-xl px-3 py-2"
                        placeholder="Txn ID / note"
                        disabled={isCredit}
                      />
                    </label>
                  </div>

                  <p className="text-xs text-gray-500 mt-2">
                    If Credit is checked, no payment row is created now (so you won’t get duplicate payments).
                  </p>
                </div>

                <button
                  onClick={placeOrder}
                  disabled={placing || cartItems.length === 0}
                  className={`mt-5 w-full rounded-full py-3 text-sm font-semibold ${
                    placing || cartItems.length === 0
                      ? "bg-gray-200 text-gray-500"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {placing ? "Placing order…" : isCredit ? `Create Credit Order • ${formatMoney(total)}` : `Pay Now • ${formatMoney(total)}`}
                </button>

                <p className="text-xs text-gray-500 mt-3">
                  By placing an order, you help improve “bought together” recommendations.
                </p>
              </div>
            )}
          </section>

          {/* RIGHT */}
          <aside>
            <div className="border rounded-2xl p-5 sticky top-20">
              <h2 className="font-semibold">Order summary</h2>

              <div className="mt-4 space-y-3">
                {rows.length === 0 ? (
                  <p className="text-sm text-gray-600">No items.</p>
                ) : (
                  rows.map((r) => (
                    <div key={r.key} className="flex justify-between text-sm">
                      <span className="text-gray-700">
                        {r.name} × {r.qty}
                      </span>
                      <span className="font-semibold">{formatMoney(r.lineTotal)}</span>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-4 border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatMoney(subtotal)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-semibold">{formatMoney(deliveryFee)}</span>
                </div>

                <div className="flex justify-between border-t pt-3">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">{formatMoney(total)}</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-3">
                Tip: If co-purchase RPC fails, ensure the function exists and EXECUTE is granted for
                anon.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
