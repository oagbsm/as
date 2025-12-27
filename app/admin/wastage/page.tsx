"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type VariantRow = { id: number; product_id: number; label: string; stock: number; sku: string; price: string };
type ProductRow = { id: number; name: string };
type WastageRow = { id: number; variant_id: number; qty: number; reason: string; note: string | null; wastage_at: string };

const n = (v: any) => (Number.isFinite(Number(v)) ? Number(v) : 0);

export default function WastagePage() {
  const [variants, setVariants] = useState<VariantRow[]>([]);
  const [history, setHistory] = useState<WastageRow[]>([]);
  const [histLoading, setHistLoading] = useState(false);
  const [products, setProducts] = useState<Record<number, ProductRow>>({});
  const [variantId, setVariantId] = useState<number | "">("");
  const [qty, setQty] = useState("1");
  const [reason, setReason] = useState("Expired");
  const [note, setNote] = useState("");

  async function load() {
    const [vRes, pRes, hRes] = await Promise.all([
      supabase
        .from("product_variants")
        .select("id,product_id,label,stock,sku,price")
        .order("id", { ascending: true }),
      supabase.from("products").select("id,name"),
      supabase
        .from("inventory_wastage")
        .select("id,variant_id,qty,reason,note,wastage_at")
        .order("wastage_at", { ascending: false })
        .limit(200),
    ]);

    if (vRes.error) return alert(vRes.error.message);
    if (pRes.error) return alert(pRes.error.message);
    if (hRes.error) return alert(hRes.error.message);

    setVariants((vRes.data ?? []) as any);

    const pm: Record<number, ProductRow> = {};
    for (const p of pRes.data ?? []) pm[(p as any).id] = p as any;
    setProducts(pm);

    setHistory((hRes.data ?? []) as any);
  }

  useEffect(() => {
    load();
  }, []);

  async function record() {
    if (!variantId) return alert("Choose a variant");
    const q = Math.trunc(n(qty));
    if (q <= 0) return alert("Qty must be > 0");

    const { error } = await supabase.rpc("record_wastage", {
      p_variant_id: Number(variantId),
      p_qty: q,
      p_reason: reason.trim() || "Expired",
      p_note: note.trim() || null,
    });

    if (error) return alert(error.message);

    setQty("1");
    setNote("");
    await load(); // refresh stock on screen
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-xl font-semibold">Wastage</h1>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="border rounded-2xl p-4">
            <div className="font-semibold">Record wastage</div>

            <div className="mt-3 space-y-2 text-sm">
              <select
                className="w-full border rounded-xl px-3 py-2"
                value={variantId}
                onChange={(e) => setVariantId(e.target.value ? Number(e.target.value) : "")}
              >
                <option value="">Select variant…</option>
                {variants.map((v) => (
                  <option key={v.id} value={v.id}>
                    #{v.id} • {products[v.product_id]?.name ?? "Product"} {v.label ? `(${v.label})` : ""} • stock:{v.stock}
                  </option>
                ))}
              </select>

              <input className="w-full border rounded-xl px-3 py-2" value={qty} onChange={(e)=>setQty(e.target.value)} placeholder="Qty" />
              <input className="w-full border rounded-xl px-3 py-2" value={reason} onChange={(e)=>setReason(e.target.value)} placeholder="Reason (Expired/Damaged/etc)" />
              <textarea className="w-full border rounded-xl px-3 py-2" value={note} onChange={(e)=>setNote(e.target.value)} placeholder="Note (optional)" rows={3} />

              <button onClick={record} className="w-full rounded-full bg-blue-600 text-white py-2 font-semibold">
                Record wastage (decrements stock)
              </button>
            </div>
          </div>

          <div className="border rounded-2xl p-4">
            <div className="font-semibold">Recent wastage</div>
            <div className="mt-3 space-y-2 text-sm">
              {history.length === 0 ? (
                <div className="text-sm text-gray-600">No wastage recorded yet.</div>
              ) : (
                history.slice(0, 20).map((w) => {
                  const v = variants.find((x) => x.id === w.variant_id);
                  const pname = v ? products[v.product_id]?.name ?? "Product" : "Product";
                  const vlabel = v?.label ? ` (${v.label})` : "";

                  return (
                    <div key={w.id} className="flex justify-between border rounded-xl px-3 py-2">
                      <div>
                        <div className="font-semibold">
                          {pname}
                          {vlabel}
                        </div>
                        <div className="text-xs text-gray-600">
                          Variant #{w.variant_id} • Qty: {w.qty} • {w.reason}
                        </div>
                        {w.note ? <div className="text-xs text-gray-500">{w.note}</div> : null}
                      </div>
                      <div className="text-xs text-gray-600">{String(w.wastage_at)}</div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="mt-6 border-t pt-4">
              <div className="font-semibold">Quick stock view</div>
              <div className="mt-3 space-y-2 text-sm">
                {variants.slice(0, 30).map((v) => (
                  <div key={v.id} className="flex justify-between border rounded-xl px-3 py-2">
                    <div>
                      <div className="font-semibold">
                        {products[v.product_id]?.name ?? "Product"} {v.label ? `(${v.label})` : ""}
                      </div>
                      <div className="text-xs text-gray-600">Variant #{v.id} • {v.sku}</div>
                    </div>
                    <div className="font-semibold">stock: {v.stock}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}