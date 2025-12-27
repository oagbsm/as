"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type SupplierRow = {
  id: number;
  name: string;
  phone: string | null;
  email: string | null;
  address: string | null;
  created_at?: string;
};

type VariantRow = {
  id: number;
  product_id: number;
  label: string;
  sku: string;
  price: string | number;
  mrp: string | number;
  stock: number;
  created_at?: string;

  products?: { id: number; name: string; slug: string } | null;
};

type ProductRow = { id: number; name: string; slug: string };

type BatchRow = {
  id: number;
  variant_id: number;
  supplier_id: number | null;
  qty_received: number;
  qty_remaining: number;
  total_cost: string | number;
  unit_cost?: string | number; // generated column
  reference: string | null;
  received_at: string;

  // NEW
  is_paid: boolean;
  paid_amount: string | number;
  payment_method: string | null;
  payee: string | null;
  note: string | null;
};

type MovementRow = {
  id: number;
  variant_id: number;
  batch_id: number | null;
  type: "IN" | "OUT" | "ADJUST";
  qty: number;
  unit_cost: string | number | null;
  note: string | null;
  order_id: number | null;
  created_at: string;
};

type InventoryPaymentRow = {
  id: number;
  batch_id: number;
  method: string;
  amount: string | number;
  status: string;
  reference: string | null;
  created_at: string;
};

const PAYMENT_METHODS = ["EVC", "eDahab", "MERCHANT", "CASH", "PREMIER"] as const;
// Note: DB enum currently has EVC/CASH/MERCHANT. If you haven't added eDahab/PREMIER to enum yet,
// keep using existing values only OR add them to the enum first.

function n(x: any) {
  const v = Number(x ?? 0);
  return Number.isFinite(v) ? v : 0;
}

function money(x: any) {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(n(x));
}

export default function AdminInventoryPage() {
  // data
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const [variants, setVariants] = useState<VariantRow[]>([]);
  const [productsMap, setProductsMap] = useState<Record<number, ProductRow>>({});
  const [suppliers, setSuppliers] = useState<SupplierRow[]>([]);

  // UI state
  const [q, setQ] = useState("");
  const [selectedVariantId, setSelectedVariantId] = useState<number | null>(null);

  // supplier form
  const [supName, setSupName] = useState("");
  const [supPhone, setSupPhone] = useState("");
  const [supEmail, setSupEmail] = useState("");
  const [supAddress, setSupAddress] = useState("");

  // batch form
  const [batchVariantId, setBatchVariantId] = useState<number | "">("");
  const [batchSupplierId, setBatchSupplierId] = useState<number | "">("");
  const [batchQty, setBatchQty] = useState<number>(10);
  const [batchTotalCost, setBatchTotalCost] = useState<number>(0);
  const [batchRef, setBatchRef] = useState("");

  // NEW: paid now vs pay later
  const [paidNow, setPaidNow] = useState(true);
  const [payMethod, setPayMethod] = useState<string>("EVC"); // default
  const [payAmount, setPayAmount] = useState<number>(0);

  const [savingSupplier, setSavingSupplier] = useState(false);
  const [savingBatch, setSavingBatch] = useState(false);

  // details drawer
  const [batches, setBatches] = useState<BatchRow[]>([]);
  const [movements, setMovements] = useState<MovementRow[]>([]);
  const [invPayments, setInvPayments] = useState<InventoryPaymentRow[]>([]);
  const [detailsLoading, setDetailsLoading] = useState(false);

  // Pay modal (for existing unpaid/partial batch)
  // unpaid invoices (inventory batches where total_cost > paid_amount)
const [unpaidInvoices, setUnpaidInvoices] = useState<BatchRow[]>([]);
  const [payModalOpen, setPayModalOpen] = useState(false);
  const [payBatchId, setPayBatchId] = useState<number | null>(null);
  const [payModalMethod, setPayModalMethod] = useState<string>("EVC");
  const [payModalAmount, setPayModalAmount] = useState<number>(0);
  const [payModalRef, setPayModalRef] = useState<string>("");
  const [payModalSaving, setPayModalSaving] = useState(false);

  async function loadAll() {
    setLoading(true);
    setErr(null);

    try {
      // 1) Variants + embedded product
      const { data: vData, error: vErr } = await supabase
        .from("product_variants")
        .select("id,product_id,label,sku,price,mrp,stock,created_at,products:products(id,name,slug)")
        .order("id", { ascending: true })
        .limit(5000);

      if (vErr) throw vErr;
      setVariants((vData ?? []) as any);

      // 2) Fallback product map
      const { data: pData, error: pErr } = await supabase.from("products").select("id,name,slug").limit(5000);
      if (pErr) throw pErr;

      const pm: Record<number, ProductRow> = {};
      for (const p of (pData ?? []) as any[]) pm[Number(p.id)] = p;
      setProductsMap(pm);

      // 3) Suppliers
      const { data: sData, error: sErr } = await supabase
        .from("suppliers")
        .select("id,name,phone,email,address,created_at")
        .order("id", { ascending: true })
        .limit(2000);

      if (sErr) throw sErr;
      setSuppliers((sData ?? []) as any);
      // 4) Recent batches (used to surface unpaid invoices)
      const { data: bData, error: bErr } = await supabase
        .from("inventory_batches")
        .select(
          "id,variant_id,supplier_id,qty_received,qty_remaining,total_cost,unit_cost,reference,received_at,is_paid,paid_amount,payment_method,payee,note"
        )
        .order("received_at", { ascending: false })
        .limit(500);

      if (bErr) throw bErr;

      const allBatches = ((bData ?? []) as any) as BatchRow[];
      // Unpaid invoice = batch where total_cost > paid_amount
      const unpaid = allBatches.filter((b) => n(b.total_cost) - n(b.paid_amount) > 0.0001);
      setUnpaidInvoices(unpaid);
   
   
   
   
    } catch (e: any) {
      setErr(e?.message || "Failed to load inventory data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // keep payAmount sensible
  useEffect(() => {
    if (paidNow) {
      // default to full cost if user hasn't typed
      setPayAmount((prev) => (prev > 0 ? prev : n(batchTotalCost)));
    } else {
      setPayAmount(0);
    }
  }, [paidNow, batchTotalCost]);

  const supplierById = useMemo(() => {
    const m: Record<number, SupplierRow> = {};
    for (const s of suppliers) m[s.id] = s;
    return m;
  }, [suppliers]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return variants;

    return variants.filter((v) => {
      const prod = v.products ?? (productsMap[v.product_id] ? { ...productsMap[v.product_id] } : null);
      const s = `${prod?.name ?? ""} ${prod?.slug ?? ""} ${v.label ?? ""} ${v.sku ?? ""}`.toLowerCase();
      return s.includes(term);
    });
  }, [q, variants, productsMap]);

  const stats = useMemo(() => {
    const totalVariants = variants.length;
    const low = variants.filter((v) => n(v.stock) <= 5).length;
    const out = variants.filter((v) => n(v.stock) <= 0).length;
    return { totalVariants, low, out };
  }, [variants]);

  async function addSupplier() {
    const name = supName.trim();
    if (!name) return alert("Supplier name is required.");

    setSavingSupplier(true);
    try {
      const { error } = await supabase.from("suppliers").insert({
        name,
        phone: supPhone.trim() || null,
        email: supEmail.trim() || null,
        address: supAddress.trim() || null,
      });

      if (error) throw error;

      setSupName("");
      setSupPhone("");
      setSupEmail("");
      setSupAddress("");
      await loadAll();
    } catch (e: any) {
      alert(e?.message || "Failed to add supplier");
    } finally {
      setSavingSupplier(false);
    }
  }

  async function receiveBatch() {
    if (!batchVariantId) return alert("Choose a variant.");
    const qty = Math.trunc(n(batchQty));
    const totalCost = n(batchTotalCost);

    if (qty <= 0) return alert("Quantity must be > 0.");
    if (totalCost < 0) return alert("Total cost must be >= 0.");

    // if paid now, amount must be > 0 (can be partial if you want)
    if (paidNow && n(payAmount) <= 0) return alert("Enter paid amount (or switch to Pay later).");

    setSavingBatch(true);

    const variantId = Number(batchVariantId);

    try {
      // 1) Insert batch (always)
      const payload: any = {
        variant_id: variantId,
        supplier_id: batchSupplierId ? Number(batchSupplierId) : null,
        qty_received: qty,
        qty_remaining: qty,
        total_cost: totalCost,
        reference: batchRef.trim() || null,

        // NEW
        is_paid: paidNow ? false : false, // will be set correctly by trigger if payment inserted
        paid_amount: 0,
        payment_method: paidNow ? payMethod : null,
      };

      const { data: batchRow, error: bErr } = await supabase
        .from("inventory_batches")
        .insert(payload)
        .select("id")
        .single();

      if (bErr) throw bErr;

      // 2) If paid now => insert inventory payment (trigger will update batch paid_amount/is_paid)
      if (paidNow) {
        const { error: pErr } = await supabase.from("inventory_payments").insert({
          batch_id: Number(batchRow.id),
          method: payMethod,
          amount: n(payAmount),
          status: "SUCCESS",
          reference: batchRef.trim() || null,
        });
        if (pErr) throw pErr;
      }

      // ✅ Optimistically update UI immediately for stock
      setVariants((prev) => prev.map((v) => (v.id === variantId ? { ...v, stock: n(v.stock) + qty } : v)));

      setBatchRef("");

      // ✅ Reload truth from DB
      await loadAll();

      // ✅ If details drawer open for same variant, reload it too
      if (selectedVariantId === variantId) {
        await openDetails(variantId);
      }
    } catch (e: any) {
      alert(e?.message || "Failed to receive batch");
    } finally {
      setSavingBatch(false);
    }
  }

  async function openDetails(variantId: number) {
    setSelectedVariantId(variantId);
    setDetailsLoading(true);

    try {
      const b = await supabase
        .from("inventory_batches")
        .select(
          "id,variant_id,supplier_id,qty_received,qty_remaining,total_cost,unit_cost,reference,received_at,is_paid,paid_amount,payment_method,payee,note"
        )
        .eq("variant_id", variantId)
        .order("received_at", { ascending: false })
        .limit(50);

      const m = await supabase
        .from("inventory_movements")
        .select("id,variant_id,batch_id,type,qty,unit_cost,note,order_id,created_at")
        .eq("variant_id", variantId)
        .order("created_at", { ascending: false })
        .limit(100);

      if (b.error) throw b.error;
      if (m.error) throw m.error;

      const batchRows = (b.data ?? []) as any as BatchRow[];
      setBatches(batchRows);
      setMovements((m.data ?? []) as any);

      // Payments for those batches
      const batchIds = batchRows.map((x) => Number(x.id)).filter(Boolean);
      if (batchIds.length === 0) {
        setInvPayments([]);
      } else {
        const p = await supabase
          .from("inventory_payments")
          .select("id,batch_id,method,amount,status,reference,created_at")
          .in("batch_id", batchIds)
          .order("created_at", { ascending: false })
          .limit(200);

        if (p.error) throw p.error;
        setInvPayments((p.data ?? []) as any);
      }
    } catch (e: any) {
      alert(e?.message || "Failed to load details");
      setBatches([]);
      setMovements([]);
      setInvPayments([]);
    } finally {
      setDetailsLoading(false);
    }
  }

  const selectedVariant = useMemo(() => {
    if (!selectedVariantId) return null;
    return variants.find((v) => v.id === selectedVariantId) ?? null;
  }, [selectedVariantId, variants]);

  const selectedProduct = useMemo(() => {
    if (!selectedVariant) return null;
    return selectedVariant.products ?? productsMap[selectedVariant.product_id] ?? null;
  }, [selectedVariant, productsMap]);

  const avgUnitCost = useMemo(() => {
    const qty = batches.reduce((s, r) => s + n(r.qty_received), 0);
    const cost = batches.reduce((s, r) => s + n(r.total_cost), 0);
    return qty > 0 ? cost / qty : 0;
  }, [batches]);

  const unpaidBatches = useMemo(() => {
    return (batches ?? []).filter((b) => n(b.total_cost) - n(b.paid_amount) > 0.0001);
  }, [batches]);

  function openPayModal(batch: BatchRow) {
    const due = Math.max(0, n(batch.total_cost) - n(batch.paid_amount));
    setPayBatchId(Number(batch.id));
    setPayModalAmount(due);
    setPayModalMethod(String(batch.payment_method ?? "EVC"));
    setPayModalRef(batch.reference ?? "");
    setPayModalOpen(true);
  }

  async function submitPayModal() {
    if (!payBatchId) return;
    const amt = n(payModalAmount);
    if (amt <= 0) return alert("Amount must be > 0.");

    setPayModalSaving(true);
    try {
      const { error } = await supabase.from("inventory_payments").insert({
        batch_id: payBatchId,
        method: payModalMethod,
        amount: amt,
        status: "SUCCESS",
        reference: payModalRef.trim() || null,
      });

      if (error) throw error;

      // refresh details
      if (selectedVariantId) await openDetails(selectedVariantId);
      // refresh stock list (not required for payments, but keeps UI consistent)
      await loadAll();

      setPayModalOpen(false);
      setPayBatchId(null);
      setPayModalRef("");
    } catch (e: any) {
      alert(e?.message || 'Failed to record payment');
    } finally {
      setPayModalSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href="/admin" className="text-sm text-blue-600 hover:underline">
              ← Admin
            </Link>
            <h1 className="text-xl font-semibold mt-2">Inventory</h1>
            <p className="text-xs text-gray-600 mt-1">
              Stock comes from <span className="font-semibold">product_variants.stock</span>. Batches log purchases; payments can be paid now or later.
            </p>
          </div>

          <button onClick={loadAll} className="px-4 py-2 rounded-full border bg-white text-sm font-semibold">
            Refresh
          </button>
        </div>

        {err ? <div className="mt-4 border rounded-2xl p-4 bg-white text-sm text-red-600">{err}</div> : null}

        {/* STAT CARDS: 2 cols phone, 4 cols desktop */}
        <section className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="border rounded-2xl p-4 bg-white">
            <div className="text-xs text-gray-500">Variants</div>
            <div className="mt-1 text-lg font-semibold">{loading ? "…" : stats.totalVariants}</div>
          </div>
          <div className="border rounded-2xl p-4 bg-white">
            <div className="text-xs text-gray-500">Low stock (≤ 5)</div>
            <div className="mt-1 text-lg font-semibold">{loading ? "…" : stats.low}</div>
          </div>
          <div className="border rounded-2xl p-4 bg-white">
            <div className="text-xs text-gray-500">Out of stock</div>
            <div className="mt-1 text-lg font-semibold">{loading ? "…" : stats.out}</div>
          </div>
          <div className="border rounded-2xl p-4 bg-white">
            <div className="text-xs text-gray-500">Suppliers</div>
            <div className="mt-1 text-lg font-semibold">{loading ? "…" : suppliers.length}</div>
          </div>
        </section>
{/* UNPAID SUPPLIER INVOICES */}
<section className="mt-4 border rounded-2xl bg-white p-4">
  <div className="flex items-center justify-between gap-3">
    <div>
      <div className="font-semibold">Unpaid supplier invoices (Pay later)</div>
      <div className="text-xs text-gray-600 mt-1">
        When you choose <span className="font-semibold">Pay later</span>, the invoice appears here as an unpaid batch.
      </div>
    </div>
    <div className="text-xs text-gray-600">
      Unpaid: <span className="font-semibold">{loading ? "…" : unpaidInvoices.length}</span>
    </div>
  </div>

  {unpaidInvoices.length === 0 ? (
    <div className="mt-3 text-sm text-gray-600">No unpaid invoices.</div>
  ) : (
    <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-2">
      {unpaidInvoices.slice(0, 50).map((b) => {
        const v = variants.find((x) => x.id === Number(b.variant_id));
        const prod = v?.products ?? (v ? productsMap[v.product_id] : null);
        const title = prod?.name ?? "Product";
        const subtitle = v ? `${v.label} • SKU:${v.sku}` : `Variant #${b.variant_id}`;

        const supplierName = b.supplier_id
          ? supplierById[Number(b.supplier_id)]?.name ?? "Supplier"
          : "No supplier";

        const due = Math.max(0, n(b.total_cost) - n(b.paid_amount));

        return (
          <div key={b.id} className="border rounded-2xl p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold">Invoice (Batch) #{b.id}</div>
                <div className="text-xs text-gray-600 mt-1">
                  {supplierName}
                  {b.reference ? ` • ${b.reference}` : ""}
                  {b.received_at ? ` • ${String(b.received_at)}` : ""}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold">{money(due)}</div>
                <div className="text-xs text-gray-600">due</div>
              </div>
            </div>

            <div className="mt-2 text-xs text-gray-700">
              <div className="font-semibold">{title}</div>
              <div className="text-gray-600">{subtitle}</div>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <button
                onClick={() => openDetails(Number(b.variant_id))}
                className="px-3 py-2 rounded-full border text-xs font-semibold"
              >
                View movements
              </button>
              <button
                onClick={() => openPayModal(b)}
                className="px-3 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold"
              >
                Pay / Partial
              </button>
            </div>
          </div>
        );
      })}
    </div>
  )}
</section>
        {/* TOP GRID */}
        <section className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Add Supplier */}
          <div className="border rounded-2xl p-4 bg-white">
            <div className="font-semibold">Add supplier</div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className="text-sm">
                Name *
                <input value={supName} onChange={(e) => setSupName(e.target.value)} className="mt-1 w-full border rounded-xl px-3 py-2" />
              </label>
              <label className="text-sm">
                Phone
                <input value={supPhone} onChange={(e) => setSupPhone(e.target.value)} className="mt-1 w-full border rounded-xl px-3 py-2" />
              </label>
              <label className="text-sm">
                Email
                <input value={supEmail} onChange={(e) => setSupEmail(e.target.value)} className="mt-1 w-full border rounded-xl px-3 py-2" />
              </label>
              <label className="text-sm">
                Address
                <input value={supAddress} onChange={(e) => setSupAddress(e.target.value)} className="mt-1 w-full border rounded-xl px-3 py-2" />
              </label>
            </div>

            <button
              onClick={addSupplier}
              disabled={savingSupplier}
              className={`mt-3 w-full rounded-full py-2 text-sm font-semibold ${savingSupplier ? "bg-gray-200 text-gray-500" : "bg-blue-600 text-white"}`}
            >
              {savingSupplier ? "Saving…" : "Save supplier"}
            </button>
          </div>

          {/* Receive Stock */}
          <div className="border rounded-2xl p-4 bg-white">
            <div className="font-semibold">Receive stock (log a batch)</div>
            <p className="text-xs text-gray-600 mt-1">
              Enter <span className="font-semibold">qty</span> + <span className="font-semibold">total cost</span>. Choose paid now or pay later.
            </p>

            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className="text-sm md:col-span-2">
                Variant *
                <select
                  value={batchVariantId}
                  onChange={(e) => setBatchVariantId(e.target.value ? Number(e.target.value) : "")}
                  className="mt-1 w-full border rounded-xl px-3 py-2 bg-white"
                >
                  <option value="">Select variant…</option>
                  {variants.map((v) => {
                    const prod = v.products ?? productsMap[v.product_id];
                    const title = `${prod?.name ?? `Product ${v.product_id}`} • ${v.label} • SKU:${v.sku}`;
                    return (
                      <option key={v.id} value={v.id}>
                        {title}
                      </option>
                    );
                  })}
                </select>
              </label>

              <label className="text-sm">
                Supplier (optional)
                <select
                  value={batchSupplierId}
                  onChange={(e) => setBatchSupplierId(e.target.value ? Number(e.target.value) : "")}
                  className="mt-1 w-full border rounded-xl px-3 py-2 bg-white"
                >
                  <option value="">None</option>
                  {suppliers.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm">
                Qty received *
                <input type="number" value={batchQty} onChange={(e) => setBatchQty(Number(e.target.value))} className="mt-1 w-full border rounded-xl px-3 py-2" />
              </label>

              <label className="text-sm">
                Total cost *
                <input type="number" value={batchTotalCost} onChange={(e) => setBatchTotalCost(Number(e.target.value))} className="mt-1 w-full border rounded-xl px-3 py-2" />
              </label>

              <label className="text-sm">
                Unit cost (auto)
                <input
                  value={batchQty > 0 ? String(n(batchTotalCost) / n(batchQty)) : "0"}
                  readOnly
                  className="mt-1 w-full border rounded-xl px-3 py-2 bg-gray-50 text-gray-700"
                />
              </label>

              <label className="text-sm md:col-span-2">
                Reference (invoice/PO)
                <input value={batchRef} onChange={(e) => setBatchRef(e.target.value)} className="mt-1 w-full border rounded-xl px-3 py-2" />
              </label>

              {/* Paid now toggle */}
              <div className="md:col-span-2 flex items-center justify-between border rounded-xl px-3 py-2">
                <div className="text-sm">
                  <div className="font-semibold">Paid now?</div>
                  <div className="text-xs text-gray-600">If no, it will show as unpaid and you can pay later.</div>
                </div>
                <button
                  type="button"
                  onClick={() => setPaidNow((v) => !v)}
                  className={`px-3 py-2 rounded-full text-sm font-semibold ${paidNow ? "bg-blue-600 text-white" : "bg-gray-100 text-black"}`}
                >
                  {paidNow ? "Yes" : "No"}
                </button>
              </div>

              {/* Payment fields if paid now */}
              {paidNow ? (
                <>
                  <label className="text-sm">
                    Payment method
                    <select
                      value={payMethod}
                      onChange={(e) => setPayMethod(e.target.value)}
                      className="mt-1 w-full border rounded-xl px-3 py-2 bg-white"
                    >
                      {/* Use only values that exist in your DB enum, unless you added more */}
                      <option value="EVC">EVC</option>
                      <option value="MERCHANT">Merchant</option>
                      <option value="CASH">Cash</option>
                      {/* If you added these to the enum, enable them: */}
                      <option value="eDahab">eDahab</option>
                      <option value="PREMIER">Premier Bank</option>
                    </select>
                  </label>

                  <label className="text-sm">
                    Paid amount
                    <input
                      type="number"
                      value={payAmount}
                      onChange={(e) => setPayAmount(Number(e.target.value))}
                      className="mt-1 w-full border rounded-xl px-3 py-2"
                    />
                    <div className="text-xs text-gray-500 mt-1">
                      Due after this: <span className="font-semibold">{money(Math.max(0, n(batchTotalCost) - n(payAmount)))}</span>
                    </div>
                  </label>
                </>
              ) : null}
            </div>

            <button
              onClick={receiveBatch}
              disabled={savingBatch}
              className={`mt-3 w-full rounded-full py-2 text-sm font-semibold ${savingBatch ? "bg-gray-200 text-gray-500" : "bg-blue-600 text-white"}`}
            >
              {savingBatch ? "Saving…" : paidNow ? "Receive & record payment" : "Receive (pay later)"}
            </button>
          </div>
        </section>

        {/* Inventory list */}
        <section className="mt-4 border rounded-2xl bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="font-semibold">Current stock</div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search product / sku / label…"
              className="w-[280px] max-w-full border rounded-full px-4 py-2 text-sm"
            />
          </div>

          <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-2">
            {(loading ? Array.from({ length: 10 }) : filtered).map((v: any, idx: number) => {
              if (loading) {
                return (
                  <div key={idx} className="border rounded-2xl p-3 bg-gray-50">
                    <div className="h-4 w-2/3 bg-gray-200 rounded" />
                    <div className="mt-2 h-3 w-1/2 bg-gray-200 rounded" />
                  </div>
                );
              }

              const prod = v.products ?? productsMap[v.product_id];
              const title = prod?.name ?? `Product ${v.product_id}`;
              const stock = n(v.stock);

              return (
                <button key={v.id} onClick={() => openDetails(v.id)} className="border rounded-2xl p-3 text-left hover:bg-gray-50">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold">{title}</div>
                      <div className="text-xs text-gray-600 mt-1">
                        {v.label} • SKU:{v.sku}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className={`text-sm font-semibold ${stock <= 0 ? "text-red-600" : stock <= 5 ? "text-orange-600" : "text-black"}`}>
                        {stock}
                      </div>
                      <div className="text-xs text-gray-600">in stock</div>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-gray-600 flex gap-4">
                    <span>
                      Price: <span className="font-semibold">{money(v.price)}</span>
                    </span>
                    <span>
                      MRP: <span className="font-semibold">{money(v.mrp)}</span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Details drawer */}
        {selectedVariantId ? (
          <div className="fixed inset-0 bg-black/40 flex items-end lg:items-center justify-center p-3 z-50">
            <div className="bg-white w-full max-w-3xl rounded-2xl p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm text-gray-600">Variant details</div>
                  <div className="text-lg font-semibold">
                    {selectedProduct?.name ?? "—"}{" "}
                    <span className="text-sm font-normal text-gray-600">
                      • {selectedVariant?.label ?? ""} • SKU:{selectedVariant?.sku ?? ""}
                    </span>
                  </div>
                  <div className="text-sm mt-1">
                    Stock: <span className="font-semibold">{selectedVariant ? n(selectedVariant.stock) : "—"}</span>
                    {" • "}
                    Avg unit cost (from batches): <span className="font-semibold">{money(avgUnitCost)}</span>
                  </div>
                </div>

                <button onClick={() => setSelectedVariantId(null)} className="px-3 py-2 rounded-full border text-sm font-semibold">
                  Close
                </button>
              </div>

              {detailsLoading ? (
                <div className="mt-4 text-sm text-gray-600">Loading…</div>
              ) : (
                <>
                  {/* Unpaid/partial batches quick actions */}
                  {unpaidBatches.length > 0 ? (
                    <div className="mt-4 border rounded-2xl p-3 bg-yellow-50">
                      <div className="font-semibold text-sm">Unpaid / partial batches</div>
                      <div className="mt-2 space-y-2">
                        {unpaidBatches.slice(0, 6).map((b) => {
                          const due = Math.max(0, n(b.total_cost) - n(b.paid_amount));
                          return (
                            <div key={b.id} className="flex items-center justify-between text-sm">
                              <div className="text-gray-700">
                                Batch #{b.id} • Due <span className="font-semibold">{money(due)}</span>
                              </div>
                              <button
                                onClick={() => openPayModal(b)}
                                className="px-3 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold"
                              >
                                Pay / Partial
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {/* Batches */}
                    <div className="border rounded-2xl p-3">
                      <div className="font-semibold">Recent batches</div>
                      <div className="mt-3 space-y-2 text-sm">
                        {batches.length === 0 ? (
                          <div className="text-gray-600 text-sm">No batches.</div>
                        ) : (
                          batches.map((b) => {
                            const due = Math.max(0, n(b.total_cost) - n(b.paid_amount));
                            return (
                              <div key={b.id} className="border rounded-xl p-2">
                                <div className="flex justify-between">
                                  <div className="text-gray-700">
                                    +{b.qty_received}{" "}
                                    <span className="text-xs text-gray-500">
                                      {b.supplier_id ? `• ${supplierById[b.supplier_id]?.name ?? "Supplier"}` : ""}
                                      {b.reference ? ` • ${b.reference}` : ""}
                                    </span>
                                  </div>
                                  <div className="font-semibold">
                                    {money(b.unit_cost ?? (n(b.total_cost) / n(b.qty_received)))}
                                  </div>
                                </div>

                                <div className="mt-1 text-xs text-gray-600 flex items-center justify-between">
                                  <span>
                                    Cost: <span className="font-semibold">{money(b.total_cost)}</span> • Paid:{" "}
                                    <span className="font-semibold">{money(b.paid_amount)}</span> • Due:{" "}
                                    <span className="font-semibold">{money(due)}</span>
                                  </span>
                                  <span className="text-gray-500">
                                    {b.payment_method ? String(b.payment_method) : ""}
                                  </span>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>

                    {/* Movements */}
                    <div className="border rounded-2xl p-3">
                      <div className="font-semibold">Movements</div>
                      <div className="mt-3 space-y-2 text-sm">
                        {movements.length === 0 ? (
                          <div className="text-gray-600 text-sm">No movements.</div>
                        ) : (
                          movements.map((m) => (
                            <div key={m.id} className="flex justify-between">
                              <div className="text-gray-700">
                                {m.type}{" "}
                                <span className="font-semibold">{m.qty > 0 ? `+${m.qty}` : `${m.qty}`}</span>
                                <span className="text-xs text-gray-500">
                                  {m.order_id ? ` • order #${m.order_id}` : ""}
                                  {m.note ? ` • ${m.note}` : ""}
                                </span>
                              </div>
                              <div className="text-xs text-gray-500">{String(m.created_at)}</div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Payments history */}
                  <div className="mt-4 border rounded-2xl p-3">
                    <div className="font-semibold">Inventory payments</div>
                    <div className="mt-2 space-y-2 text-sm">
                      {invPayments.length === 0 ? (
                        <div className="text-gray-600 text-sm">No payments recorded.</div>
                      ) : (
                        invPayments.slice(0, 30).map((p) => (
                          <div key={p.id} className="flex justify-between">
                            <div className="text-gray-700">
                              Batch #{p.batch_id} • {p.method} • <span className="font-semibold">{money(p.amount)}</span>{" "}
                              <span className="text-xs text-gray-500">{p.reference ? ` • ${p.reference}` : ""}</span>
                            </div>
                            <div className="text-xs text-gray-500">{String(p.created_at)}</div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ) : null}

        {/* Pay modal */}
        {payModalOpen ? (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-3 z-50">
            <div className="bg-white w-full max-w-md rounded-2xl p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-gray-600">Pay inventory batch</div>
                  <div className="text-lg font-semibold">Batch #{payBatchId}</div>
                </div>
                <button
                  onClick={() => setPayModalOpen(false)}
                  className="px-3 py-2 rounded-full border text-sm font-semibold"
                >
                  Close
                </button>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-3">
                <label className="text-sm">
                  Method
                  <select
                    value={payModalMethod}
                    onChange={(e) => setPayModalMethod(e.target.value)}
                    className="mt-1 w-full border rounded-xl px-3 py-2 bg-white"
                  >
                    <option value="EVC">EVC</option>
                    <option value="MERCHANT">Merchant</option>
                    <option value="CASH">Cash</option>
                    <option value="eDahab">eDahab</option>
                    <option value="PREMIER">Premier Bank</option>
                  </select>
                </label>

                <label className="text-sm">
                  Amount
                  <input
                    type="number"
                    value={payModalAmount}
                    onChange={(e) => setPayModalAmount(Number(e.target.value))}
                    className="mt-1 w-full border rounded-xl px-3 py-2"
                  />
                </label>

                <label className="text-sm">
                  Reference (optional)
                  <input
                    value={payModalRef}
                    onChange={(e) => setPayModalRef(e.target.value)}
                    className="mt-1 w-full border rounded-xl px-3 py-2"
                  />
                </label>

                <button
                  onClick={submitPayModal}
                  disabled={payModalSaving}
                  className={`w-full rounded-full py-2 text-sm font-semibold ${payModalSaving ? "bg-gray-200 text-gray-500" : "bg-blue-600 text-white"}`}
                >
                  {payModalSaving ? "Saving…" : "Save payment"}
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div> 
    </main>
  );
}