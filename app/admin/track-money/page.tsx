"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type PaymentRow = {
  id: number;
  order_id: number;
  method: string;
  amount: string | number;
  status: string;
  reference: string | null;
  created_at: string;
};

type ExpenseRow = {
  id: number;
  title: string;
  category: string | null;
  amount: string | number;
  notes: string | null;
  expense_date: string; // date
  paid_method: string; // enum-ish string
  created_at: string;
};

type InvPayRow = {
  id: number;
  batch_id: number;
  method: string;
  amount: string | number;
  status: string;
  reference: string | null;
  created_at: string;
};

type InvBatchRow = {
  id: number;
  variant_id: number;
  qty_received: number | string;
  total_cost: number | string;
  unit_cost: number | string;
  received_at: string;
};

type WastageRow = {
  id: number;
  variant_id: number;
  qty: number | string;
  reason?: string | null;
  note?: string | null;
  wastage_at: string;
};

type OpeningRow = {
  id?: number;
  method?: string | null;
  amount?: string | number | null;
  opening_date?: string | null; // if you have it
  created_at?: string | null;
};

const METHODS = ["EVC", "eDahab", "MERCHANT", "CASH", "PREMIER"] as const;
type Method = (typeof METHODS)[number];

function n(x: any) {
  const v = Number(x ?? 0);
  return Number.isFinite(v) ? v : 0;
}

function money(x: any) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(n(x));
}

type AnyRow = Record<string, any>;

function toCsv(rowsInput: unknown) {
  const rows: AnyRow[] = Array.isArray(rowsInput) ? (rowsInput as AnyRow[]) : [];
  if (rows.length === 0) return "";

  const colSet = new Set<string>();
  for (const r of rows) Object.keys(r ?? {}).forEach((k) => colSet.add(k));
  const cols = [...colSet];

  const esc = (v: any) => {
    const s = v == null ? "" : String(v);
    // wrap + escape quotes
    return `"${s.replace(/"/g, '""')}"`;
  };

  const header = cols.map(esc).join(",");
  const body = rows
    .map((r) => cols.map((c) => esc((r as AnyRow)[c])).join(","))
    .join("\n");

  return `${header}\n${body}`;
}

export default function TrackMoneyPage() {
  const today = new Date();
  const yyyyMmDd = today.toISOString().slice(0, 10);

  const [fromDate, setFromDate] = useState(yyyyMmDd);
  const [toDate, setToDate] = useState(yyyyMmDd);

  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const [payments, setPayments] = useState<PaymentRow[]>([]);
  const [expenses, setExpenses] = useState<ExpenseRow[]>([]);
  const [invPays, setInvPays] = useState<InvPayRow[]>([]);
  const [invBatches, setInvBatches] = useState<InvBatchRow[]>([]);
  const [wastageRows, setWastageRows] = useState<WastageRow[]>([]);
  const [wastageMissing, setWastageMissing] = useState(false);

  const [openings, setOpenings] = useState<OpeningRow[]>([]);
  const [openingsMissing, setOpeningsMissing] = useState(false);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        setErr(null);

        // Payments in range: created_at between from and to+1 day
        const toPlus1 = new Date(`${toDate}T00:00:00.000Z`);
        toPlus1.setUTCDate(toPlus1.getUTCDate() + 1);
        const toIso = toPlus1.toISOString();

        const [pRes, eRes, ipRes, bRes] = await Promise.all([
          supabase
            .from("payments")
            .select("id,order_id,method,amount,status,reference,created_at")
            .eq("status", "SUCCESS")
            .gte("created_at", `${fromDate}T00:00:00.000Z`)
            .lt("created_at", toIso)
            .order("created_at", { ascending: false })
            .limit(5000),

          // expenses use expense_date (date) in your schema
          supabase
            .from("expenses")
            .select("id,title,category,amount,notes,expense_date,paid_method,created_at")
            .gte("expense_date", fromDate)
            .lte("expense_date", toDate)
            .order("expense_date", { ascending: false })
            .limit(5000),

          supabase
            .from("inventory_payments")
            .select("id,batch_id,method,amount,status,reference,created_at")
            .eq("status", "SUCCESS")
            .gte("created_at", `${fromDate}T00:00:00.000Z`)
            .lt("created_at", toIso)
            .order("created_at", { ascending: false })
            .limit(5000),

          // inventory cost (for profit calc) uses inventory_batches total_cost
          supabase
.from("inventory_batches")
.select("id,variant_id,qty_received,total_cost,unit_cost,received_at")
            .gte("received_at", `${fromDate}T00:00:00.000Z`)
            .lt("received_at", toIso)
            .order("received_at", { ascending: false })
            .limit(5000),
        ]);

        if (pRes.error) throw pRes.error;
        if (eRes.error) throw eRes.error;
        if (ipRes.error) throw ipRes.error;
        if (bRes.error) throw bRes.error;

        // wastage is optional; attempt load (not fatal)
        let wData: WastageRow[] = [];
        let wMissing = false;
        try {
          const wRes = await supabase
.from("inventory_wastage")
.select("id,variant_id,qty,wastage_at,reason,note")
  .gte("wastage_at", `${fromDate}T00:00:00.000Z`)
  .lt("wastage_at", toIso)
  .order("wastage_at", { ascending: false })
  .limit(5000);

          if (wRes.error) {
            wMissing = true;
          } else {
            wData = (wRes.data ?? []) as any;
          }
        } catch {
          wMissing = true;
        }

        // wallet_openings is optional (you may not have created it)
        let oData: OpeningRow[] = [];
        let missing = false;

        const oRes = await supabase
          .from("wallet_openings")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(2000);

        if (oRes.error) {
          // If table doesn't exist or RLS blocks it, we just treat openings as 0
          missing = true;
        } else {
          oData = (oRes.data ?? []) as any;
        }

        if (!alive) return;

        setPayments((pRes.data ?? []) as any);
        setExpenses((eRes.data ?? []) as any);
        setInvPays((ipRes.data ?? []) as any);
        setInvBatches((bRes.data ?? []) as any);
        setWastageRows(wData);
        setWastageMissing(wMissing);

        setOpenings(oData);
        setOpeningsMissing(missing);
      } catch (e: any) {
        if (!alive) return;
        setErr(e?.message || "Failed to load track money data");
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [fromDate, toDate]);

  const openingsByMethod = useMemo(() => {
    // We support two patterns:
    // 1) method + amount only (latest row per method is used)
    // 2) opening_date exists (you can filter later if you want)
    const m: Record<string, number> = {};
    for (const row of openings) {
      const method = String((row as any).method ?? "").trim();
      if (!method) continue;
      if (m[method] == null) m[method] = n((row as any).amount);
      // If there are multiple rows, we keep the most recent because we ordered desc
    }
    return m;
  }, [openings]);

  const sums = useMemo(() => {
    const inflowBy: Record<string, number> = {};
    const outflowBy: Record<string, number> = {};

    for (const m of METHODS) {
      inflowBy[m] = 0;
      outflowBy[m] = 0;
    }

    // Money IN: payments
    for (const p of payments) {
      const method = String(p.method ?? "").trim();
      const amt = n(p.amount);
      if (!method) continue;
      inflowBy[method] = (inflowBy[method] ?? 0) + amt;
    }

    // Money OUT: expenses + inventory_payments (CASH FLOW ONLY)
    for (const e of expenses) {
      const method = String(e.paid_method ?? "").trim();
      const amt = n(e.amount);
      if (!method) continue;
      outflowBy[method] = (outflowBy[method] ?? 0) + amt;
    }

    for (const ip of invPays) {
      const method = String(ip.method ?? "").trim();
      const amt = n(ip.amount);
      if (!method) continue;
      outflowBy[method] = (outflowBy[method] ?? 0) + amt;
    }

    const wallet: Record<string, number> = {};
    for (const m of METHODS) {
      const opening = openingsByMethod[m] ?? 0; // if missing, defaults to 0
      wallet[m] = opening + (inflowBy[m] ?? 0) - (outflowBy[m] ?? 0);
    }

    const totalSales = payments.reduce((s, p) => s + n(p.amount), 0);
    const totalExpenses = expenses.reduce((s, e) => s + n(e.amount), 0);
    const totalInvPaid = invPays.reduce((s, ip) => s + n(ip.amount), 0);

    // PROFIT COSTS (ACCRUAL-LIKE SIMPLE MODEL)
    // Inventory cost uses received total_cost (NOT payments), so unpaid inventory still affects profit.
    const inventoryCost = invBatches.reduce((s, b) => s + n((b as any).total_cost), 0);

    // Wastage reduces profit (NOT wallets). We try total_cost first, then cost, then amount.
// ===== WASTAGE COST (uses unit_cost from inventory_batches) =====
const unitAgg: Record<string, { qty: number; cost: number }> = {};

for (const b of invBatches) {
  const vid = String((b as any).variant_id ?? "");
  const q = n((b as any).qty_received);
  const u = n((b as any).unit_cost);

  if (!vid || q <= 0 || u <= 0) continue;

  if (!unitAgg[vid]) unitAgg[vid] = { qty: 0, cost: 0 };
  unitAgg[vid].qty += q;
  unitAgg[vid].cost += q * u;
}

const unitCostByVariant: Record<string, number> = {};
for (const vid of Object.keys(unitAgg)) {
  unitCostByVariant[vid] = unitAgg[vid].cost / Math.max(1, unitAgg[vid].qty);
}

const wastageCost = wastageRows.reduce((s, w) => {
  const vid = String((w as any).variant_id ?? "");
  const q = n((w as any).qty);
  return s + q * (unitCostByVariant[vid] ?? 0);
}, 0);

    const grossProfit = totalSales - inventoryCost - wastageCost;
    const netProfit = grossProfit - totalExpenses;

    return {
      inflowBy,
      outflowBy,
      wallet,
      totalSales,
      totalExpenses,
      totalInvPaid,
      inventoryCost,
      wastageCost,
      grossProfit,
      netProfit,
    };
  }, [payments, expenses, invPays, invBatches, wastageRows, openingsByMethod]);

  const statement = useMemo(() => {
    // unified statement for export/view (cashflow statement)
    const rows: Array<{
      when: string;
      type: "SALE" | "EXPENSE" | "INVENTORY";
      method: string;
      in_amount: number;
      out_amount: number;
      ref: string;
    }> = [];

    for (const p of payments) {
      rows.push({
        when: p.created_at,
        type: "SALE",
        method: String(p.method ?? ""),
        in_amount: n(p.amount),
        out_amount: 0,
        ref: p.reference ? String(p.reference) : `order#${p.order_id}`,
      });
    }

    for (const e of expenses) {
      rows.push({
        when: e.expense_date, // date
        type: "EXPENSE",
        method: String(e.paid_method ?? ""),
        in_amount: 0,
        out_amount: n(e.amount),
        ref: e.title ? String(e.title) : `expense#${e.id}`,
      });
    }

    for (const ip of invPays) {
      rows.push({
        when: ip.created_at,
        type: "INVENTORY",
        method: String(ip.method ?? ""),
        in_amount: 0,
        out_amount: n(ip.amount),
        ref: ip.reference ? String(ip.reference) : `batch#${ip.batch_id}`,
      });
    }

    // Sort newest first (best effort with mixed date formats)
    rows.sort((a, b) => String(b.when).localeCompare(String(a.when)));
    return rows;
  }, [payments, expenses, invPays]);

  function exportCsv() {
    const csv = toCsv(
      statement.map((r) => ({
        when: r.when,
        type: r.type,
        method: r.method,
        in_amount: r.in_amount,
        out_amount: r.out_amount,
        ref: r.ref,
      }))
    );
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `wallet-statement_${fromDate}_to_${toDate}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href="/admin" className="text-sm text-blue-600 hover:underline">
              ← Admin
            </Link>
            <h1 className="text-xl font-semibold mt-2">Track Money</h1>
            <p className="text-xs text-gray-600 mt-1">
              Wallet balances = Opening + Sales − Inventory payments − Expenses.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Profit = Revenue − Inventory cost(received) − Wastage − Expenses.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2 text-sm">
              <label className="text-xs text-gray-600">From</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="border rounded-full px-3 py-2 text-sm bg-white"
              />
              <label className="text-xs text-gray-600">To</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="border rounded-full px-3 py-2 text-sm bg-white"
              />
            </div>

            <button
              onClick={exportCsv}
              disabled={loading || statement.length === 0}
              className="px-4 py-2 rounded-full border bg-white text-sm font-semibold hover:bg-gray-50 disabled:opacity-50"
            >
              Export wallet statement (CSV)
            </button>
          </div>
        </div>

        {err ? (
          <div className="mt-4 border rounded-2xl p-4 bg-white text-sm text-red-600">{err}</div>
        ) : null}

        {openingsMissing ? (
          <div className="mt-4 border rounded-2xl p-4 bg-white text-sm text-amber-700">
            Note: <span className="font-semibold">wallet_openings</span> table not found (or blocked by
            RLS). Openings are treated as <span className="font-semibold">0</span>.
          </div>
        ) : null}

        {wastageMissing ? (
          <div className="mt-4 border rounded-2xl p-4 bg-white text-sm text-amber-700">
            Note: <span className="font-semibold">wastage</span> table not found (or blocked by RLS).
            Wastage cost is treated as <span className="font-semibold">0</span>.
          </div>
        ) : null}

        {/* Summary: revenue / cost / profit */}
        <section className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="border rounded-2xl p-4 bg-white">
            <div className="text-xs text-gray-500">Revenue (Sales)</div>
            <div className="mt-1 text-lg font-semibold">{loading ? "…" : money(sums.totalSales)}</div>
          </div>

          <div className="border rounded-2xl p-4 bg-white">
            <div className="text-xs text-gray-500">Inventory cost (received)</div>
            <div className="mt-1 text-lg font-semibold">
              {loading ? "…" : money(sums.inventoryCost)}
            </div>
            <div className="mt-2 text-[11px] text-gray-500 leading-4">
              Paid to suppliers: {loading ? "…" : money(sums.totalInvPaid)}
            </div>
          </div>

          <div className="border rounded-2xl p-4 bg-white">
            <div className="text-xs text-gray-500">Wastage cost</div>
            <div className="mt-1 text-lg font-semibold">
              {loading ? "…" : money(sums.wastageCost)}
            </div>
          </div>

          <div className="border rounded-2xl p-4 bg-white">
            <div className="text-xs text-gray-500">Gross profit</div>
            <div className="mt-1 text-lg font-semibold">
              {loading ? "…" : money(sums.grossProfit)}
            </div>
            <div className="mt-2 text-[11px] text-gray-500 leading-4">Revenue − Inventory − Wastage</div>
          </div>

          <div className="border rounded-2xl p-4 bg-white">
            <div className="text-xs text-gray-500">Expenses</div>
            <div className="mt-1 text-lg font-semibold">
              {loading ? "…" : money(sums.totalExpenses)}
            </div>
          </div>

          <div className="border rounded-2xl p-4 bg-white">
            <div className="text-xs text-gray-500">Net profit</div>
            <div
              className={`mt-1 text-lg font-semibold ${
                !loading && sums.netProfit < 0 ? "text-red-600" : ""
              }`}
            >
              {loading ? "…" : money(sums.netProfit)}
            </div>
            <div className="mt-2 text-[11px] text-gray-500 leading-4">Gross profit − Expenses</div>
          </div>
        </section>

        {/* Wallet balances */}
        <section className="mt-4 border rounded-2xl bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="font-semibold">Wallet balances</div>
            <div className="text-xs text-gray-600">
              Default wallets shown (even if your enum doesn’t include them yet).
            </div>
          </div>

          {/* 2 cols phone, 5 cols desktop (because 5 wallets) */}
          <div className="mt-3 grid grid-cols-2 lg:grid-cols-5 gap-3">
            {METHODS.map((m) => {
              const bal = sums.wallet[m] ?? 0;
              const neg = bal < -0.0001;
              return (
                <div key={m} className="border rounded-2xl p-4">
                  <div className="text-xs text-gray-500">{m}</div>
                  <div className={`mt-1 text-lg font-semibold ${neg ? "text-red-600" : ""}`}>
                    {loading ? "…" : money(bal)}
                  </div>
                  <div className="mt-2 text-[11px] text-gray-500 leading-4">
                    In: {loading ? "…" : money(sums.inflowBy[m] ?? 0)} • Out:{" "}
                    {loading ? "…" : money(sums.outflowBy[m] ?? 0)}
                  </div>
                  {neg ? <div className="mt-2 text-[11px] text-red-600">Negative balance</div> : null}
                </div>
              );
            })}
          </div>
        </section>

        {/* Statement */}
        <section className="mt-4 border rounded-2xl bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="font-semibold">Recent wallet statement</div>
            <div className="text-xs text-gray-600">
              Showing {loading ? "…" : Math.min(statement.length, 100)} rows
            </div>
          </div>

          <div className="mt-3 space-y-2">
            {(loading ? Array.from({ length: 8 }) : statement.slice(0, 100)).map(
              (r: any, idx: number) => {
                if (loading) return <div key={idx} className="h-10 bg-gray-100 rounded-xl" />;

                const isIn = r.in_amount > 0;
                return (
                  <div
                    key={`${r.type}-${idx}`}
                    className="flex items-center justify-between text-sm border rounded-xl px-3 py-2"
                  >
                    <div className="min-w-0">
                      <div className="font-semibold">
                        {r.type} • {r.method}
                      </div>
                      <div className="text-xs text-gray-600 truncate">
                        {String(r.when)} • {r.ref}
                      </div>
                    </div>
                    <div className={`font-semibold ${isIn ? "text-green-700" : "text-red-600"}`}>
                      {isIn ? `+${money(r.in_amount)}` : `-${money(r.out_amount)}`}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>
      </div>
    </main>
  );
}