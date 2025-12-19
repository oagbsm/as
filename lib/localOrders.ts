export type PaymentMethod =
  | "EVC"
  | "MERCHANT"
  | "EDAHAB"
  | "PREMIER_WALLET"
  | "AMTEL";

export type LocalOrderItem = {
  productId: number;
  variantId: number | null;
  qty: number;
  unitPrice: number;
  lineTotal: number;
  name: string; // includes variant label e.g. "Basmati Rice (5 kg)"
};

export type LocalOrder = {
  id: string;
  createdAt: string; // ISO
  channel: "local";

  customer: { id: number; name: string; phone: string } | null;

  note?: string;

  subtotal: number;
  deliveryFee: number;
  total: number;

  // NEW
  isCredit: boolean;              // true = unpaid credit
  isPaid: boolean;                // false when credit
  paymentMethod: PaymentMethod | null; // only when paid (or non-credit)
  paidAt?: string;                // when marked paid

  items: LocalOrderItem[];
};

export type CreditLedgerRow = {
  customerId: number;
  name: string;
  phone: string;
  outstanding: number; // current due
  lastOrderAt: string; // ISO
};

const ORDERS_KEY = "local_orders_v2";
const CREDIT_KEY = "credit_ledger_v1";

/* ===== Orders ===== */
export function readLocalOrders(): LocalOrder[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function writeLocalOrders(orders: LocalOrder[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

export function saveLocalOrder(order: LocalOrder) {
  const all = readLocalOrders();
  all.unshift(order);
  writeLocalOrders(all);
}

export function updateLocalOrder(orderId: string, patch: Partial<LocalOrder>) {
  const all = readLocalOrders();
  const idx = all.findIndex((o) => o.id === orderId);
  if (idx === -1) return;
  all[idx] = { ...all[idx], ...patch };
  writeLocalOrders(all);
}

export function clearLocalOrders() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(ORDERS_KEY);
}

/* ===== Credit ledger ===== */
export function readCreditLedger(): CreditLedgerRow[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(CREDIT_KEY) || "[]");
  } catch {
    return [];
  }
}

export function writeCreditLedger(rows: CreditLedgerRow[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CREDIT_KEY, JSON.stringify(rows));
}

export function addCredit(customer: { id: number; name: string; phone: string }, amount: number) {
  const rows = readCreditLedger();
  const idx = rows.findIndex((r) => r.customerId === customer.id);
  const now = new Date().toISOString();

  if (idx === -1) {
    rows.unshift({
      customerId: customer.id,
      name: customer.name,
      phone: customer.phone,
      outstanding: Number(amount || 0),
      lastOrderAt: now,
    });
  } else {
    rows[idx] = {
      ...rows[idx],
      outstanding: Number(rows[idx].outstanding || 0) + Number(amount || 0),
      lastOrderAt: now,
    };
  }
  writeCreditLedger(rows);
}

export function payCredit(customerId: number, amount: number) {
  const rows = readCreditLedger();
  const idx = rows.findIndex((r) => r.customerId === customerId);
  if (idx === -1) return;

  const newOutstanding = Math.max(0, Number(rows[idx].outstanding || 0) - Number(amount || 0));
  rows[idx] = { ...rows[idx], outstanding: newOutstanding };
  writeCreditLedger(rows);
}

export function totalCreditDue(): number {
  return readCreditLedger().reduce((sum, r) => sum + Number(r.outstanding || 0), 0);
}

export function clearCreditLedger() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CREDIT_KEY);
}
