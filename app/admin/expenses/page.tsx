"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type ExpenseRow = {
  id: number;
  title: string;
  category: string;
  paid_method?: string | null;
  amount: string; // numeric comes back as string
  notes:  string | null;
  expense_date: string; // YYYY-MM-DD
  created_at: string;
};

const n = (v: any) => (Number.isFinite(Number(v)) ? Number(v) : 0);

export default function ExpensesPage() {
  const [rows, setRows] = useState<ExpenseRow[]>([]);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("Delivery fuel");
  const [category, setCategory] = useState<"MATO" | "LIIBAN" | "ABDIRAZAK">("MATO");
  const [paidMethod, setPaidMethod] = useState<"EVC" | "EDAHAB" | "MERCHANT" | "CASH" | "PREMIER_BANK">("EVC");
  const [amount, setAmount] = useState("5");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from("expenses")
      .select("*")
      .order("expense_date", { ascending: false })
      .order("id", { ascending: false })
      .limit(200);
    setLoading(false);
    if (error) return alert(error.message);
    setRows((data ?? []) as any);
  }

  useEffect(() => {
    load();
  }, []);

  const totalToday = useMemo(() => {
    return rows
      .filter((r) => r.expense_date === date)
      .reduce((s, r) => s + n(r.amount), 0);
  }, [rows, date]);

  async function add() {
    if (!title.trim()) return alert("Title required");
    const { error } = await supabase.from("expenses").insert({
      title: title.trim(),
      category,
      paid_method: paidMethod,
      amount: n(amount),
      notes: notes.trim() || null,
      expense_date: date,
    });
    if (error) return alert(error.message);
    setNotes("");
    await load();
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-xl font-semibold">Expenses</h1>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="border rounded-2xl p-4">
            <div className="font-semibold">Add expense</div>
            <div className="mt-3 space-y-2 text-sm">
              <input className="w-full border rounded-xl px-3 py-2" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
              <label className="text-xs text-gray-600">Expense owner</label>
              <select
                className="w-full border rounded-xl px-3 py-2"
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
              >
                <option value="MATO">MATO</option>
                <option value="LIIBAN">LIIBAN</option>
                <option value="ABDIRAZAK">ABDIRAZAK</option>
              </select>
              <label className="text-xs text-gray-600">Paid method</label>
              <select
                className="w-full border rounded-xl px-3 py-2"
                value={paidMethod}
                onChange={(e) => setPaidMethod(e.target.value as any)}
              >
                <option value="EVC">EVC</option>
                <option value="EDAHAB">eDahab</option>
                <option value="MERCHANT">Merchant</option>
                <option value="CASH">Cash</option>
                <option value="PREMIER_BANK">Premier Bank</option>
              </select>
              <input className="w-full border rounded-xl px-3 py-2" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Amount" />
              <input className="w-full border rounded-xl px-3 py-2" value={date} onChange={(e)=>setDate(e.target.value)} type="date" />
              <textarea className="w-full border rounded-xl px-3 py-2" value={notes} onChange={(e)=>setNotes(e.target.value)} placeholder="Notes (optional)" rows={3} />
              <button onClick={add} className="w-full rounded-full bg-blue-600 text-white py-2 font-semibold">
                Add
              </button>
              <div className="text-xs text-gray-600">Today total: {totalToday.toFixed(2)}</div>
            </div>
          </div>

          <div className="lg:col-span-2 border rounded-2xl p-4">
            <div className="font-semibold">Recent</div>
            <div className="mt-3 text-sm">
              {loading ? (
                <div className="text-gray-600">Loading…</div>
              ) : rows.length === 0 ? (
                <div className="text-gray-600">No expenses.</div>
              ) : (
                <div className="space-y-2">
                  {rows.map((r) => (
                    <div key={r.id} className="flex justify-between border rounded-xl px-3 py-2">
                      <div>
                        <div className="font-semibold">{r.title}</div>
                        <div className="text-xs text-gray-600">{r.category} • {r.paid_method ?? "EVC"} • {r.expense_date}</div>
                      </div>
                      <div className="font-semibold">{n(r.amount).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}