export type PaymentMethod =
  | "EVC"
  | "MERCHANT"
  | "EDAHAB"
  | "PREMIER_WALLET"
  | "AMTEL";

export type PaymentSource = "SALE" | "CREDIT_PAYMENT" | "CREDIT_SETTLEMENT";

export type PaymentRecord = {
  id: string; // PAY-...
  createdAt: string; // ISO
  method: PaymentMethod;
  amount: number;

  source: PaymentSource;

  // optional linking
  orderId?: string;
  customer?: { id: number; name: string; phone: string };

  note?: string;
};

const KEY = "payments_ledger_v1";

export function readPayments(): PaymentRecord[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function writePayments(rows: PaymentRecord[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(rows));
}

export function recordPayment(p: Omit<PaymentRecord, "id" | "createdAt">) {
  const rows = readPayments();
  rows.unshift({
    id: `PAY-${Date.now()}`,
    createdAt: new Date().toISOString(),
    ...p,
    amount: Number(p.amount || 0),
  });
  writePayments(rows);
}

export function clearPayments() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}
