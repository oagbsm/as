"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { useCart } from "@/context/CartContext";
import { products, productVariants } from "@/data/store";

function formatGBP(n: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(n);
}

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const cartItems = Array.isArray(items) ? items : [];

  /* ===== BUILD ROWS (VARIANT-AWARE) ===== */
  const rows = useMemo(() => {
    return cartItems
      .map((ci) => {
        const p = products.find((x) => x.id === ci.productId);
        if (!p) return null;

        const v =
          ci.variantId != null
            ? productVariants.find((vv) => vv.id === ci.variantId)
            : null;

        const price = Number(v?.price ?? p.base_price ?? 0);
        const label = v?.label ? ` (${v.label})` : "";

        return {
          key: `${ci.productId}-${ci.variantId ?? "base"}`,
          name: `${p.name}${label}`,
          qty: ci.qty ?? 1,
          price,
          lineTotal: price * (ci.qty ?? 1),
          productId: ci.productId,
          variantId: ci.variantId ?? null,
        };
      })
      .filter(Boolean);
  }, [cartItems]);

  const subtotal = useMemo(
    () => rows.reduce((sum, r: any) => sum + r.lineTotal, 0),
    [rows]
  );
  const deliveryFee = subtotal > 0 ? 1.99 : 0;
  const total = subtotal + deliveryFee;

  /* ===== DUMMY PREFILLED DATA ===== */
  const [name, setName] = useState("Test Customer");
  const [phone, setPhone] = useState("0622000000");
  const [address, setAddress] = useState("Mogadishu, Somalia");
  const [note, setNote] = useState("Leave at the gate (demo).");

  const [placing, setPlacing] = useState(false);
  const [done, setDone] = useState(false);

  async function placeOrder() {
    if (cartItems.length === 0) return;

    if (!name.trim() || !phone.trim() || !address.trim()) {
      alert("Please fill in Name, Phone, and Address.");
      return;
    }

    setPlacing(true);
    try {
      // record bought-together by PRODUCT (not variant)
      const productIds = cartItems.map((x) => x.productId);

      await fetch("/api/copurchase/record", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productIds }),
      });

      clearCart();
      setDone(true);
    } finally {
      setPlacing(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/cart" className="text-sm text-blue-600 hover:underline">
              ← Back to cart
            </Link>
            <h1 className="text-lg font-semibold">Checkout</h1>
          </div>

          <div className="text-sm text-gray-700 flex items-center gap-2">
            🔒 Secure
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[1.6fr_0.9fr] gap-6">
        {/* LEFT: FORM */}
        <section>
          {done ? (
            <div className="border rounded-2xl p-8 text-center">
              <div className="text-4xl">✅</div>
              <p className="text-xl font-semibold mt-3">Order placed</p>
              <p className="text-sm text-gray-600 mt-2">
                Bought-together data updated successfully.
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
              <p className="text-sm text-gray-600 mt-1">
                Dummy data is prefilled for testing.
              </p>

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

              <button
                onClick={placeOrder}
                disabled={placing || cartItems.length === 0}
                className={`mt-5 w-full rounded-full py-3 text-sm font-semibold ${
                  placing || cartItems.length === 0
                    ? "bg-gray-200 text-gray-500"
                    : "bg-blue-600 text-white"
                }`}
              >
                {placing ? "Placing order…" : "Place Order"}
              </button>
            </div>
          )}
        </section>

        {/* RIGHT: SUMMARY */}
        <aside>
          <div className="border rounded-2xl p-5 sticky top-20">
            <h2 className="font-semibold">Order summary</h2>

            <div className="mt-4 space-y-3">
              {rows.length === 0 ? (
                <p className="text-sm text-gray-600">No items.</p>
              ) : (
                rows.map((r: any) => (
                  <div
                    key={r.key}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-gray-700">
                      {r.name} × {r.qty}
                    </span>
                    <span className="font-semibold">
                      {formatGBP(r.lineTotal)}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="mt-4 border-t pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">
                  {formatGBP(subtotal)}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="font-semibold">
                  {formatGBP(deliveryFee)}
                </span>
              </div>

              <div className="flex justify-between border-t pt-3">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">
                  {formatGBP(total)}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Checkout improves future recommendations.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
