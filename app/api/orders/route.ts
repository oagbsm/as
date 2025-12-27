import { NextResponse } from "next/server";
import { products, productVariants } from "@/data/store";

// simple in-memory storage (dev only)
declare global {
  // eslint-disable-next-line no-var
  var __orders: any[] | undefined;
  // eslint-disable-next-line no-var
  var __orderItems: any[] | undefined;
  // eslint-disable-next-line no-var
  var __payments: any[] | undefined;
}
const orders = (globalThis.__orders ??= []);
const orderItems = (globalThis.__orderItems ??= []);
const payments = (globalThis.__payments ??= []);

function nowISO() {
  return new Date().toISOString();
}

export async function POST(req: Request) {
  const body = await req.json();

  const { customer, delivery, items, payment } = body ?? {};
  if (!delivery?.name || !delivery?.phone || !delivery?.address) {
    return NextResponse.json({ error: "Missing delivery fields" }, { status: 400 });
  }
  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: "No items" }, { status: 400 });
  }

  // Build rows the same way your UI does (variant-aware)
  const rows = items
    .map((ci: any) => {
      const p = products.find((x: any) => x.id === ci.productId);
      if (!p) return null;

      const v = ci.variantId != null ? productVariants.find((vv: any) => vv.id === ci.variantId) : null;
      const price = Number(v?.price ?? p.base_price ?? 0);
      const qty = Number(ci.qty ?? 1);

      return {
        productId: p.id,
        variantId: v?.id ?? null,
        qty,
        priceAtPurchase: price,
        lineTotal: price * qty,
      };
    })
    .filter(
      (r): r is {
        productId: number;
        variantId: number | null;
        qty: number;
        priceAtPurchase: number;
        lineTotal: number;
      } => r !== null
    );

  const subtotal = rows.reduce((sum: number, r: any) => sum + r.lineTotal, 0);
  const deliveryFee = subtotal > 0 ? 1.99 : 0;
  const total = subtotal + deliveryFee;

  const orderId = orders.length ? orders[orders.length - 1].id + 1 : 1;

  orders.push({
    id: orderId,
    customer_id: customer?.id ?? null,
    name: delivery.name,
    phone: delivery.phone,
    address: delivery.address,
    note: delivery.note ?? "",
    subtotal,
    delivery_fee: deliveryFee,
    total_amount: total,
    status: payment?.method ? "PENDING" : "PENDING",
    created_at: nowISO(),
  });

  for (const r of rows) {
    orderItems.push({
      id: orderItems.length ? orderItems[orderItems.length - 1].id + 1 : 1,
      order_id: orderId,
      variant_id: r.variantId,
      product_id: r.productId,
      quantity: r.qty,
      price_at_purchase: r.priceAtPurchase,
    });
  }

  // optional payment record (you can keep it pending for COD)
  if (payment?.method) {
    payments.push({
      id: payments.length ? payments[payments.length - 1].id + 1 : 1,
      order_id: orderId,
      method: payment.method, // "EVC" | "CASH" | "MERCHANT"
      amount: total,
      status: "PENDING",
      created_at: nowISO(),
      reference: payment.reference ?? "",
    });
  }

  return NextResponse.json({ ok: true, orderId });
}
