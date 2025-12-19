"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import TopNavbar from "@/components/TopNavBar";
import { useCart } from "@/context/CartContext";
import { useOrderMode } from "@/context/OrderModeContext";

import { products, productImages, productVariants, customers } from "@/data/store";

import {
  saveLocalOrder,
  addCredit,
  totalCreditDue,
  type PaymentMethod,
  type LocalOrder,
} from "@/lib/localOrders";

import { recordPayment } from "@/lib/payments";

type CartItem = { productId: number; variantId: number | null; qty: number };

function formatGBP(n: number) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
    Number(n || 0)
  );
}

function getVariantLabel(variantId: number | null) {
  if (variantId == null) return null;
  return productVariants.find((v: any) => v.id === variantId)?.label ?? null;
}

function getVariantPrice(productId: number, variantId: number | null, basePrice: number) {
  if (variantId == null) return Number(basePrice ?? 0);
  const v = productVariants.find(
    (vv: any) => vv.product_id === productId && vv.id === variantId
  );
  return Number(v?.price ?? basePrice ?? 0);
}

function getVariantImageUrl(productId: number, variantId: number | null) {
  // optional: if you later add variant_id to productImages, this will work automatically
  if (variantId != null) {
    const img = productImages.find(
      (im: any) => im.product_id === productId && im.variant_id === variantId
    )?.url;
    if (img) return img;
  }

  return (
    productImages.find((im: any) => im.product_id === productId && im.is_primary)?.url ||
    productImages.find((im: any) => im.product_id === productId)?.url ||
    "/example.png"
  );
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

export default function CartPage() {
  const { mode } = useOrderMode();

  // IMPORTANT:
  // This cart page expects variant-safe cart items and functions:
  // items: { productId, variantId, qty }[]
  // setQty(productId, variantId, qty)
  // removeItem(productId, variantId)
  const { items, setQty, removeItem, clearCart } = useCart();
  const cartItems: CartItem[] = Array.isArray(items) ? (items as any) : [];

  // Local order fields
  const [customerQuery, setCustomerQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<
    null | { id: number; name: string; phone: string }
  >(null);
  const [note, setNote] = useState("Local minimart order (test)");

  const [isCredit, setIsCredit] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("EVC");
  const [showMorePayments, setShowMorePayments] = useState(false);

  const [savedMsg, setSavedMsg] = useState<string | null>(null);
  const [creditDue, setCreditDue] = useState<number>(0);

  // ✅ reset local-only state when switching to ONLINE (clean UX)
  useEffect(() => {
    if (mode === "online") {
      setCustomerQuery("");
      setSelectedCustomer(null);
      setNote("");
      setIsCredit(false);
      setPaymentMethod("EVC");
      setShowMorePayments(false);
      setSavedMsg(null);
      setCreditDue(0);
    } else {
      setCreditDue(totalCreditDue());
      if (!note) setNote("Local minimart order (test)");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  useEffect(() => {
    if (mode === "local") setCreditDue(totalCreditDue());
  }, [mode, savedMsg]);

  useEffect(() => {
    if (!savedMsg) return;
    const t = setTimeout(() => setSavedMsg(null), 1500);
    return () => clearTimeout(t);
  }, [savedMsg]);

  const suggestions = useMemo(() => {
    if (mode !== "local") return [];
    const q = customerQuery.trim().toLowerCase();
    if (!q) return [];
    return (customers as any[])
      .filter((c) => {
        const name = (c.name ?? "").toLowerCase();
        const phone = String(c.phone ?? "").toLowerCase();
        return name.includes(q) || phone.includes(q);
      })
      .slice(0, 8);
  }, [mode, customerQuery]);

  const rows = useMemo(() => {
    return cartItems
      .map((ci) => {
        const p: any = (products as any[]).find((x) => x.id === ci.productId);
        if (!p) return null;

        const basePrice = Number(p?.base_price ?? 0);
        const price = getVariantPrice(ci.productId, ci.variantId ?? null, basePrice);

        const vLabel = getVariantLabel(ci.variantId ?? null);
        const name = vLabel ? `${p.name} (${vLabel})` : p.name;

        const img = getVariantImageUrl(ci.productId, ci.variantId ?? null);
        const qty = Number(ci.qty ?? 1);

        return {
          ci,
          name,
          img,
          price,
          qty,
          lineTotal: price * qty,
          key: `${ci.productId}-${ci.variantId ?? "base"}`,
        };
      })
      .filter(Boolean) as any[];
  }, [cartItems]);

  const subtotal = useMemo(
    () => rows.reduce((sum, r) => sum + (r?.lineTotal ?? 0), 0),
    [rows]
  );

  const deliveryFee = mode === "local" ? 0 : subtotal > 0 ? 1.99 : 0;
  const total = subtotal + deliveryFee;
  const canCheckout = rows.length > 0;

  async function checkoutLocal() {
    if (!canCheckout) return;

    if (isCredit && !selectedCustomer) {
      alert("Select a customer for credit orders (name/phone).");
      return;
    }

    const order: LocalOrder = {
      id: `LO-${Date.now()}`,
      createdAt: new Date().toISOString(),
      channel: "local",
      customer: selectedCustomer,
      note: note?.trim() || undefined,
      subtotal,
      deliveryFee,
      total,

      isCredit,
      isPaid: !isCredit,
      paymentMethod: isCredit ? null : paymentMethod,

      items: rows.map((r: any) => ({
        productId: r.ci.productId,
        variantId: r.ci.variantId ?? null,
        qty: r.qty,
        unitPrice: r.price,
        lineTotal: r.lineTotal,
        name: r.name,
      })),
    };

    saveLocalOrder(order);

    if (isCredit && selectedCustomer) {
      addCredit(selectedCustomer, total);
      setSavedMsg("✅ Credit order saved");
    } else {
      recordPayment({
        source: "SALE",
        method: paymentMethod,
        amount: total,
        orderId: order.id,
        customer: selectedCustomer ?? undefined,
        note: "Local paid sale",
      });
      setSavedMsg("✅ Paid order saved");
    }

    clearCart();

    setCustomerQuery("");
    setSelectedCustomer(null);
    setIsCredit(false);
    setPaymentMethod("EVC");
    setShowMorePayments(false);
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <TopNavbar showBack backHref="/" locationText="Mini-mart / Delivery" />

      {/* ✅ Local-only panel */}
      {mode === "local" ? (
        <div className="max-w-6xl mx-auto px-4 pt-4">
          <div className="border rounded-2xl p-4 bg-white">
            <div className="rounded-xl border bg-[#FFF7ED] px-3 py-2 text-sm flex items-center justify-between">
              <div className="font-semibold text-orange-800">Credits due</div>
              <div className="font-extrabold text-orange-900">{formatGBP(creditDue)}</div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="relative">
                <label className="text-xs text-gray-600">Customer (type name or phone)</label>
                <input
                  value={
                    selectedCustomer
                      ? `${selectedCustomer.name} • ${selectedCustomer.phone}`
                      : customerQuery
                  }
                  onChange={(e) => {
                    setSelectedCustomer(null);
                    setCustomerQuery(e.target.value);
                  }}
                  placeholder="e.g. Hodan / 0622"
                  className="mt-1 w-full border rounded-xl px-3 py-2"
                />

                {!selectedCustomer && suggestions.length > 0 ? (
                  <div className="absolute z-30 mt-2 w-full border bg-white rounded-xl shadow overflow-hidden">
                    {suggestions.map((c: any) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          setSelectedCustomer(c);
                          setCustomerQuery("");
                        }}
                        className="w-full px-3 py-2 text-left hover:bg-gray-50"
                      >
                        <div className="text-sm font-semibold">{c.name}</div>
                        <div className="text-xs text-gray-600">{c.phone}</div>
                      </button>
                    ))}
                  </div>
                ) : null}

                {selectedCustomer ? (
                  <button
                    onClick={() => {
                      setSelectedCustomer(null);
                      setCustomerQuery("");
                    }}
                    className="mt-2 text-xs text-blue-600 hover:underline"
                  >
                    Change customer
                  </button>
                ) : (
                  <div className="mt-2 text-xs text-gray-500">Optional: walk-in (not for credit).</div>
                )}
              </div>

              <div>
                <label className="text-xs text-gray-600">Staff note (optional)</label>
                <input
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="mt-1 w-full border rounded-xl px-3 py-2"
                  placeholder="e.g. delivery later"
                />
                {savedMsg ? (
                  <div className="mt-2 text-xs text-green-700 font-semibold">{savedMsg}</div>
                ) : null}
              </div>

              <div className="md:col-span-2 flex items-center justify-between border rounded-xl px-3 py-3">
                <div>
                  <div className="font-semibold">Credit</div>
                  <div className="text-xs text-gray-600">
                    Tick if customer pays later (requires customer selected).
                  </div>
                </div>

                <button
                  onClick={() => setIsCredit((v) => !v)}
                  className={`h-9 px-4 rounded-full border text-sm font-semibold ${
                    isCredit ? "border-red-600 bg-red-50 text-red-700" : "bg-white"
                  }`}
                >
                  {isCredit ? "Credit: ON" : "Credit: OFF"}
                </button>
              </div>

              {!isCredit ? (
                <div className="md:col-span-2">
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
              ) : null}
            </div>

            {/* Optional: local quick links */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/orders"
                className="h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50"
              >
                Orders
              </Link>
              <Link
                href="/payments"
                className="h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50"
              >
                Payments
              </Link>
              <Link
                href="/credits"
                className="h-9 px-3 rounded-full border text-sm font-semibold hover:bg-gray-50"
              >
                Credits
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {/* Cart items + summary */}
      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[1.6fr_0.9fr] gap-6">
        <section className="bg-white">
          {rows.length === 0 ? (
            <div className="border rounded-2xl p-8 text-center">
              <p className="text-lg font-semibold">Your cart is empty</p>
              <p className="text-sm text-gray-600 mt-1">Add items to checkout.</p>
              <Link
                href="/"
                className="inline-flex mt-5 px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold"
              >
                Start shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {rows.map(({ ci, name, price, img, qty, lineTotal, key }: any) => (
                <div key={key} className="border rounded-2xl p-4">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                      <Image
                        src={img}
                        alt={name ?? "Product"}
                        width={120}
                        height={120}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="font-semibold truncate">{name ?? "Item"}</p>
                          <p className="text-sm text-gray-600 mt-0.5">{formatGBP(price)}</p>
                        </div>

                        <button
                          onClick={() => removeItem(ci.productId, ci.variantId ?? null)}
                          className="p-2 rounded-xl hover:bg-gray-50 text-sm text-gray-700"
                          aria-label="Remove item"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border rounded-full overflow-hidden">
                          <button
                            onClick={() =>
                              setQty(ci.productId, ci.variantId ?? null, Math.max(1, qty - 1))
                            }
                            className="px-4 py-2 hover:bg-gray-50"
                          >
                            −
                          </button>
                          <span className="px-4 py-2 text-sm font-semibold">{qty}</span>
                          <button
                            onClick={() => setQty(ci.productId, ci.variantId ?? null, qty + 1)}
                            className="px-4 py-2 hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>

                        <p className="font-semibold">{formatGBP(lineTotal)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <button
                  onClick={clearCart}
                  className="text-sm font-semibold text-red-600 hover:underline"
                >
                  Clear cart
                </button>
              </div>
            </div>
          )}
        </section>

        <aside className="bg-white">
          <div className="border rounded-2xl p-5 sticky top-20">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-base">🧾</span> Summary
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-semibold">{formatGBP(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Delivery</span>
                <span className="font-semibold">{formatGBP(deliveryFee)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">{formatGBP(total)}</span>
              </div>
            </div>

            {mode === "local" ? (
              <button
                onClick={checkoutLocal}
                disabled={!canCheckout}
                className={`mt-5 inline-flex w-full justify-center rounded-full py-3 text-sm font-semibold ${
                  !canCheckout ? "bg-gray-200 text-gray-500" : "bg-blue-600 text-white hover:opacity-95"
                }`}
              >
                {isCredit ? "Save Credit Order" : `Checkout (Paid: ${labelPM(paymentMethod)})`}
              </button>
            ) : (
              <Link
                href="/checkout"
                className={`mt-5 inline-flex w-full justify-center rounded-full py-3 text-sm font-semibold ${
                  !canCheckout ? "bg-gray-200 text-gray-500 pointer-events-none" : "bg-blue-600 text-white hover:opacity-95"
                }`}
              >
                Checkout (Online)
              </Link>
            )}

            {mode === "local" ? (
              <p className="text-xs text-gray-500 mt-3">
                Local paid checkouts appear in Payments.
              </p>
            ) : (
              <p className="text-xs text-gray-500 mt-3">
                Online checkout uses your normal flow.
              </p>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
