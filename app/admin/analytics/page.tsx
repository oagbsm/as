"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Row = {
  product_id: number;
  product_name: string;
  total_qty: number;
  orders_count: number;
  revenue: string | number;
  avg_qty_per_day: string | number;
};

function money(n: any) {
  const x = Number(n ?? 0);
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(x);
}

function toISODate(d: Date) {
  // YYYY-MM-DD (local)
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function AdminAnalyticsPage() {
  const today = useMemo(() => new Date(), []);
  const defaultEnd = toISODate(today);
  const defaultStart = toISODate(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29));

  const [start, setStart] = useState(defaultStart);
  const [end, setEnd] = useState(defaultEnd);
  const [limit, setLimit] = useState(20);

  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [rows, setRows] = useState<Row[]>([]);

  async function load() {
    try {
      setLoading(true);
      setErr(null);

      const { data, error } = await supabase.rpc("analytics_top_products", {
        p_start: start,
        p_end: end,
        p_limit: limit,
      });

      if (error) throw error;
      setRows((data ?? []) as Row[]);
    } catch (e: any) {
      setErr(e?.message || "Failed to load analytics");
      setRows([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stats = useMemo(() => {
    const totalQty = rows.reduce((s, r) => s + Number(r.total_qty ?? 0), 0);
    const revenue = rows.reduce((s, r) => s + Number(r.revenue ?? 0), 0);
    const avgPerDay = rows.reduce((s, r) => s + Number(r.avg_qty_per_day ?? 0), 0);
    return { totalQty, revenue, avgPerDay };
  }, [rows]);

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href="/admin" className="text-sm text-blue-600 hover:underline">
              ← Admin
            </Link>
            <h1 className="text-xl font-semibold mt-2">Analytics</h1>
            <p className="text-xs text-gray-600 mt-1">
              Most bought products + average qty per day (based on orders + order_items).
            </p>
          </div>

          <button
            onClick={load}
            className="h-10 px-4 rounded-xl bg-black text-white text-sm"
            disabled={loading}
          >
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>

        {/* Filters */}
        <section className="mt-4 border rounded-2xl bg-white p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div>
              <div className="text-xs text-gray-600 mb-1">Start</div>
              <input
                type="date"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                className="w-full h-10 rounded-xl border px-3 text-sm"
              />
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">End</div>
              <input
                type="date"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                className="w-full h-10 rounded-xl border px-3 text-sm"
              />
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Top</div>
              <input
                type="number"
                min={5}
                max={200}
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value || 20))}
                className="w-full h-10 rounded-xl border px-3 text-sm"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={load}
                className="w-full h-10 rounded-xl bg-blue-600 text-white text-sm"
                disabled={loading}
              >
                Apply
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="border rounded-2xl p-4">
              <div className="text-xs text-gray-500">Products (shown)</div>
              <div className="mt-1 text-lg font-semibold">{loading ? "…" : rows.length}</div>
            </div>
            <div className="border rounded-2xl p-4">
              <div className="text-xs text-gray-500">Total qty (shown)</div>
              <div className="mt-1 text-lg font-semibold">{loading ? "…" : stats.totalQty}</div>
            </div>
            <div className="border rounded-2xl p-4">
              <div className="text-xs text-gray-500">Revenue (shown)</div>
              <div className="mt-1 text-lg font-semibold">{loading ? "…" : money(stats.revenue)}</div>
            </div>
            <div className="border rounded-2xl p-4">
              <div className="text-xs text-gray-500">Sum avg/day (shown)</div>
              <div className="mt-1 text-lg font-semibold">
                {loading ? "…" : Number(stats.avgPerDay).toFixed(2)}
              </div>
            </div>
          </div>
        </section>

        {err ? (
          <div className="mt-4 border rounded-2xl p-4 bg-white text-sm text-red-600">{err}</div>
        ) : null}

        {/* Table */}
        <section className="mt-4 border rounded-2xl bg-white overflow-hidden">
          <div className="p-4 font-semibold">Top products</div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="text-left px-4 py-3">#</th>
                  <th className="text-left px-4 py-3">Product</th>
                  <th className="text-right px-4 py-3">Qty</th>
                  <th className="text-right px-4 py-3">Avg / day</th>
                  <th className="text-right px-4 py-3">Orders</th>
                  <th className="text-right px-4 py-3">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {(loading ? Array.from({ length: 8 }) : rows).map((r: any, idx: number) => (
                  <tr key={r?.product_id ?? idx} className="border-t">
                    <td className="px-4 py-3 text-gray-500">{idx + 1}</td>
                    <td className="px-4 py-3">
                      <div className="font-medium">{r?.product_name ?? "…"}</div>
                      <div className="text-xs text-gray-500">ID: {r?.product_id ?? "…"}</div>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold">{r?.total_qty ?? "…"}</td>
                    <td className="px-4 py-3 text-right">
                      {r?.avg_qty_per_day != null ? Number(r.avg_qty_per_day).toFixed(2) : "…"}
                    </td>
                    <td className="px-4 py-3 text-right">{r?.orders_count ?? "…"}</td>
                    <td className="px-4 py-3 text-right font-semibold">{money(r?.revenue)}</td>
                  </tr>
                ))}
                {!loading && rows.length === 0 ? (
                  <tr>
                    <td className="px-4 py-6 text-sm text-gray-600" colSpan={6}>
                      No results for this range. (Make sure order_items.product_id is being saved.)
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
