// app/admin/customers/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type CustomerRow = {
  id: number;
  name: string;
  phone: string;
  created_at: string;
};

type CustomerSummary = CustomerRow & {
  orders_count: number;
  total_spent: number;
  last_order_at: string | null;
};

const n = (v: any) => (Number.isFinite(Number(v)) ? Number(v) : 0);

export default function AdminCustomersPage() {
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<CustomerSummary[]>([]);

  // quick add customer
  const [name, setName] = useState("Test Customer");
  const [phone, setPhone] = useState("0622000000");
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);

    // 1) customers
    const custRes = q.trim()
      ? await supabase
          .from("customers")
          .select("id,name,phone,created_at")
          .or(`name.ilike.%${q.trim()}%,phone.ilike.%${q.trim()}%`)
          .order("id", { ascending: false })
          .limit(200)
      : await supabase
          .from("customers")
          .select("id,name,phone,created_at")
          .order("id", { ascending: false })
          .limit(200);

    if (custRes.error) {
      setLoading(false);
      alert(custRes.error.message);
      return;
    }

    const customers = (custRes.data ?? []) as CustomerRow[];
    const ids = customers.map((c) => c.id);

    if (ids.length === 0) {
      setRows([]);
      setLoading(false);
      return;
    }

    // 2) orders aggregation (client-side reduce)
    const ordersRes = await supabase
      .from("orders")
      .select("id,customer_id,total_amount,created_at")
      .in("customer_id", ids)
      .order("created_at", { ascending: false });

    if (ordersRes.error) {
      setLoading(false);
      alert(ordersRes.error.message);
      return;
    }

    const agg = new Map<number, { count: number; sum: number; last: string | null }>();
    for (const o of ordersRes.data ?? []) {
      const cid = (o as any).customer_id as number | null;
      if (!cid) continue;
      const cur = agg.get(cid) ?? { count: 0, sum: 0, last: null };
      cur.count += 1;
      cur.sum += n((o as any).total_amount);
      if (!cur.last) cur.last = (o as any).created_at ?? null;
      agg.set(cid, cur);
    }

    const out: CustomerSummary[] = customers.map((c) => {
      const a = agg.get(c.id);
      return {
        ...c,
        orders_count: a?.count ?? 0,
        total_spent: a?.sum ?? 0,
        last_order_at: a?.last ?? null,
      };
    });

    // show most valuable first (JioMart-style admin)
    out.sort((a, b) => b.total_spent - a.total_spent);

    setRows(out);
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return rows;
    return rows.filter(
      (r) => r.name.toLowerCase().includes(s) || String(r.phone ?? "").toLowerCase().includes(s)
    );
  }, [rows, q]);

  async function addCustomer() {
    const nm = name.trim();
    const ph = phone.trim();
    if (!nm || !ph) return alert("Name + phone required");

    setSaving(true);
    try {
      const { error } = await supabase.from("customers").insert({
        name: nm,
        phone: ph,
      });
      if (error) throw error;

      setName("");
      setPhone("");
      await load();
    } catch (e: any) {
      alert(e?.message || "Failed to add customer");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold">Customers</h1>
            <p className="text-sm text-gray-600 mt-1">Search, view totals, and add customers.</p>
          </div>
          <Link href="/admin" className="text-sm text-blue-600 hover:underline">
            ← Back
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* LEFT: add + search */}
          <div className="border rounded-2xl p-4">
            <div className="font-semibold">Search</div>
            <input
              className="mt-2 w-full border rounded-xl px-3 py-2 text-sm"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search name or phone…"
            />
            <button
              onClick={load}
              className="mt-2 w-full rounded-full bg-blue-600 text-white py-2 text-sm font-semibold"
            >
              Refresh
            </button>

            <div className="mt-6 font-semibold">Add customer</div>
            <div className="mt-2 space-y-2">
              <input
                className="w-full border rounded-xl px-3 py-2 text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
              />
              <input
                className="w-full border rounded-xl px-3 py-2 text-sm"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone (e.g. 0622...)"
              />
              <button
                disabled={saving}
                onClick={addCustomer}
                className={`w-full rounded-full py-2 text-sm font-semibold ${
                  saving ? "bg-gray-200 text-gray-500" : "bg-black text-white"
                }`}
              >
                {saving ? "Saving…" : "Add"}
              </button>
            </div>
          </div>

          {/* RIGHT: list */}
          <div className="lg:col-span-2 border rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Customer list</div>
              <div className="text-xs text-gray-600">
                Showing {filtered.length}
                {loading ? " • loading…" : ""}
              </div>
            </div>

            <div className="mt-3 space-y-2">
              {filtered.length === 0 ? (
                <div className="text-sm text-gray-600">No customers.</div>
              ) : (
                filtered.map((c) => (
                  <div key={c.id} className="border rounded-2xl p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold">{c.name}</div>
                        <div className="text-xs text-gray-600 mt-1">
                          {c.phone} • ID #{c.id}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs text-gray-600">Total spent</div>
                        <div className="font-semibold">{c.total_spent.toFixed(2)}</div>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                      <div className="border rounded-xl p-2">
                        <div className="text-xs text-gray-600">Orders</div>
                        <div className="font-semibold">{c.orders_count}</div>
                      </div>
                      <div className="border rounded-xl p-2 col-span-2">
                        <div className="text-xs text-gray-600">Last order</div>
                        <div className="font-semibold">
                          {c.last_order_at ? new Date(c.last_order_at).toLocaleString() : "—"}
                        </div>
                      </div>
                    </div>

                    {/* optional: drill-down later */}
                    <div className="mt-3 text-xs text-gray-500">
                      Next: we can add “View orders” drawer + credits balance here.
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}