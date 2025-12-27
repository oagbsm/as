"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type PaymentRow = {
  id: number | string;
  created_at?: string;
  method?: string | null; // "EVC", "MERCHANT", "CASH", etc
  amount?: number | string | null;
  order_id?: number | string | null;
};

function money(n: any) {
  const x = Number(n ?? 0);
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(x);
}

export default function AdminPaymentsPage() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [payments, setPayments] = useState<PaymentRow[]>([]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setErr(null);

        const { data, error } = await supabase
          .from("payments")
          .select("id,created_at,method,amount,order_id")
          .order("created_at", { ascending: false })
          .limit(200);

        if (error) throw error;
        if (!alive) return;
        setPayments((data ?? []) as any);
      } catch (e: any) {
        if (!alive) return;
        setErr(e?.message || "Failed to load payments (do you have a payments table?)");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const totalsByMethod = useMemo(() => {
    const map: Record<string, number> = {};
    for (const p of payments) {
      const k = String(p.method ?? "UNKNOWN").toUpperCase();
      map[k] = (map[k] ?? 0) + Number(p.amount ?? 0);
    }
    return map;
  }, [payments]);

  const methods = useMemo(() => Object.keys(totalsByMethod).sort(), [totalsByMethod]);

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link href="/admin" className="text-sm text-blue-600 hover:underline">
          ← Admin
        </Link>
        <h1 className="text-xl font-semibold mt-2">Payments</h1>

        {err ? (
          <div className="mt-4 border rounded-2xl p-4 bg-white text-sm text-red-600">{err}</div>
        ) : null}

        {/* 2 cols mobile, 4 cols desktop */}
        <section className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {(loading ? ["…"] : methods).map((m, i) => (
            <div key={m + i} className="border rounded-2xl p-4 bg-white">
              <div className="text-xs text-gray-500">Method</div>
              <div className="mt-1 text-sm font-semibold">{loading ? "…" : m}</div>
              <div className="mt-2 text-lg font-semibold">{loading ? "…" : money(totalsByMethod[m])}</div>
            </div>
          ))}
        </section>

        <section className="mt-4 border rounded-2xl bg-white p-4">
          <div className="font-semibold">Recent payments</div>
          <div className="mt-3 space-y-2">
            {(loading ? Array.from({ length: 6 }) : payments.slice(0, 30)).map((p: any, idx) => (
              <div key={p?.id ?? idx} className="flex justify-between text-sm">
                <span className="text-gray-700">
                  {String(p?.method ?? "…")} {p?.order_id ? `• Order #${p.order_id}` : ""}
                </span>
                <span className="font-semibold">{money(p?.amount)}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}