module.exports = [
"[project]/lib/supabaseClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://ecfxrmhrfjqdmqewzrfz.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjZnhybWhyZmpxZG1xZXd6cmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzNDA0OTgsImV4cCI6MjA4MTkxNjQ5OH0.jtF3Qp9N7rH-KCWEMHU0atH7h-LQEJBKYO9Q2HdxkX0"));
}),
"[project]/app/admin/track-money/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrackMoneyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const METHODS = [
    "EVC",
    "eDahab",
    "MERCHANT",
    "CASH",
    "PREMIER"
];
function n(x) {
    const v = Number(x ?? 0);
    return Number.isFinite(v) ? v : 0;
}
function money(x) {
    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(n(x));
}
function toCsv(rowsInput) {
    const rows = Array.isArray(rowsInput) ? rowsInput : [];
    if (rows.length === 0) return "";
    const colSet = new Set();
    for (const r of rows)Object.keys(r ?? {}).forEach((k)=>colSet.add(k));
    const cols = [
        ...colSet
    ];
    const esc = (v)=>{
        const s = v == null ? "" : String(v);
        // wrap + escape quotes
        return `"${s.replace(/"/g, '""')}"`;
    };
    const header = cols.map(esc).join(",");
    const body = rows.map((r)=>cols.map((c)=>esc(r[c])).join(",")).join("\n");
    return `${header}\n${body}`;
}
function TrackMoneyPage() {
    const today = new Date();
    const yyyyMmDd = today.toISOString().slice(0, 10);
    const [fromDate, setFromDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(yyyyMmDd);
    const [toDate, setToDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(yyyyMmDd);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [payments, setPayments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [expenses, setExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [invPays, setInvPays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [invBatches, setInvBatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [wastageRows, setWastageRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [wastageMissing, setWastageMissing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openings, setOpenings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [openingsMissing, setOpeningsMissing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let alive = true;
        (async ()=>{
            try {
                setLoading(true);
                setErr(null);
                // Payments in range: created_at between from and to+1 day
                const toPlus1 = new Date(`${toDate}T00:00:00.000Z`);
                toPlus1.setUTCDate(toPlus1.getUTCDate() + 1);
                const toIso = toPlus1.toISOString();
                const [pRes, eRes, ipRes, bRes] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("payments").select("id,order_id,method,amount,status,reference,created_at").eq("status", "SUCCESS").gte("created_at", `${fromDate}T00:00:00.000Z`).lt("created_at", toIso).order("created_at", {
                        ascending: false
                    }).limit(5000),
                    // expenses use expense_date (date) in your schema
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("expenses").select("id,title,category,amount,notes,expense_date,paid_method,created_at").gte("expense_date", fromDate).lte("expense_date", toDate).order("expense_date", {
                        ascending: false
                    }).limit(5000),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("inventory_payments").select("id,batch_id,method,amount,status,reference,created_at").eq("status", "SUCCESS").gte("created_at", `${fromDate}T00:00:00.000Z`).lt("created_at", toIso).order("created_at", {
                        ascending: false
                    }).limit(5000),
                    // inventory cost (for profit calc) uses inventory_batches total_cost
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("inventory_batches").select("id,variant_id,qty_received,total_cost,unit_cost,received_at").gte("received_at", `${fromDate}T00:00:00.000Z`).lt("received_at", toIso).order("received_at", {
                        ascending: false
                    }).limit(5000)
                ]);
                if (pRes.error) throw pRes.error;
                if (eRes.error) throw eRes.error;
                if (ipRes.error) throw ipRes.error;
                if (bRes.error) throw bRes.error;
                // wastage is optional; attempt load (not fatal)
                let wData = [];
                let wMissing = false;
                try {
                    const wRes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("inventory_wastage").select("id,variant_id,qty,wastage_at,reason,note").gte("wastage_at", `${fromDate}T00:00:00.000Z`).lt("wastage_at", toIso).order("wastage_at", {
                        ascending: false
                    }).limit(5000);
                    if (wRes.error) {
                        wMissing = true;
                    } else {
                        wData = wRes.data ?? [];
                    }
                } catch  {
                    wMissing = true;
                }
                // wallet_openings is optional (you may not have created it)
                let oData = [];
                let missing = false;
                const oRes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("wallet_openings").select("*").order("created_at", {
                    ascending: false
                }).limit(2000);
                if (oRes.error) {
                    // If table doesn't exist or RLS blocks it, we just treat openings as 0
                    missing = true;
                } else {
                    oData = oRes.data ?? [];
                }
                if (!alive) return;
                setPayments(pRes.data ?? []);
                setExpenses(eRes.data ?? []);
                setInvPays(ipRes.data ?? []);
                setInvBatches(bRes.data ?? []);
                setWastageRows(wData);
                setWastageMissing(wMissing);
                setOpenings(oData);
                setOpeningsMissing(missing);
            } catch (e) {
                if (!alive) return;
                setErr(e?.message || "Failed to load track money data");
            } finally{
                if (alive) setLoading(false);
            }
        })();
        return ()=>{
            alive = false;
        };
    }, [
        fromDate,
        toDate
    ]);
    const openingsByMethod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // We support two patterns:
        // 1) method + amount only (latest row per method is used)
        // 2) opening_date exists (you can filter later if you want)
        const m = {};
        for (const row of openings){
            const method = String(row.method ?? "").trim();
            if (!method) continue;
            if (m[method] == null) m[method] = n(row.amount);
        // If there are multiple rows, we keep the most recent because we ordered desc
        }
        return m;
    }, [
        openings
    ]);
    const sums = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const inflowBy = {};
        const outflowBy = {};
        for (const m of METHODS){
            inflowBy[m] = 0;
            outflowBy[m] = 0;
        }
        // Money IN: payments
        for (const p of payments){
            const method = String(p.method ?? "").trim();
            const amt = n(p.amount);
            if (!method) continue;
            inflowBy[method] = (inflowBy[method] ?? 0) + amt;
        }
        // Money OUT: expenses + inventory_payments (CASH FLOW ONLY)
        for (const e of expenses){
            const method = String(e.paid_method ?? "").trim();
            const amt = n(e.amount);
            if (!method) continue;
            outflowBy[method] = (outflowBy[method] ?? 0) + amt;
        }
        for (const ip of invPays){
            const method = String(ip.method ?? "").trim();
            const amt = n(ip.amount);
            if (!method) continue;
            outflowBy[method] = (outflowBy[method] ?? 0) + amt;
        }
        const wallet = {};
        for (const m of METHODS){
            const opening = openingsByMethod[m] ?? 0; // if missing, defaults to 0
            wallet[m] = opening + (inflowBy[m] ?? 0) - (outflowBy[m] ?? 0);
        }
        const totalSales = payments.reduce((s, p)=>s + n(p.amount), 0);
        const totalExpenses = expenses.reduce((s, e)=>s + n(e.amount), 0);
        const totalInvPaid = invPays.reduce((s, ip)=>s + n(ip.amount), 0);
        // PROFIT COSTS (ACCRUAL-LIKE SIMPLE MODEL)
        // Inventory cost uses received total_cost (NOT payments), so unpaid inventory still affects profit.
        const inventoryCost = invBatches.reduce((s, b)=>s + n(b.total_cost), 0);
        // Wastage reduces profit (NOT wallets). We try total_cost first, then cost, then amount.
        // ===== WASTAGE COST (uses unit_cost from inventory_batches) =====
        const unitAgg = {};
        for (const b of invBatches){
            const vid = String(b.variant_id ?? "");
            const q = n(b.qty_received);
            const u = n(b.unit_cost);
            if (!vid || q <= 0 || u <= 0) continue;
            if (!unitAgg[vid]) unitAgg[vid] = {
                qty: 0,
                cost: 0
            };
            unitAgg[vid].qty += q;
            unitAgg[vid].cost += q * u;
        }
        const unitCostByVariant = {};
        for (const vid of Object.keys(unitAgg)){
            unitCostByVariant[vid] = unitAgg[vid].cost / Math.max(1, unitAgg[vid].qty);
        }
        const wastageCost = wastageRows.reduce((s, w)=>{
            const vid = String(w.variant_id ?? "");
            const q = n(w.qty);
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
            netProfit
        };
    }, [
        payments,
        expenses,
        invPays,
        invBatches,
        wastageRows,
        openingsByMethod
    ]);
    const statement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // unified statement for export/view (cashflow statement)
        const rows = [];
        for (const p of payments){
            rows.push({
                when: p.created_at,
                type: "SALE",
                method: String(p.method ?? ""),
                in_amount: n(p.amount),
                out_amount: 0,
                ref: p.reference ? String(p.reference) : `order#${p.order_id}`
            });
        }
        for (const e of expenses){
            rows.push({
                when: e.expense_date,
                type: "EXPENSE",
                method: String(e.paid_method ?? ""),
                in_amount: 0,
                out_amount: n(e.amount),
                ref: e.title ? String(e.title) : `expense#${e.id}`
            });
        }
        for (const ip of invPays){
            rows.push({
                when: ip.created_at,
                type: "INVENTORY",
                method: String(ip.method ?? ""),
                in_amount: 0,
                out_amount: n(ip.amount),
                ref: ip.reference ? String(ip.reference) : `batch#${ip.batch_id}`
            });
        }
        // Sort newest first (best effort with mixed date formats)
        rows.sort((a, b)=>String(b.when).localeCompare(String(a.when)));
        return rows;
    }, [
        payments,
        expenses,
        invPays
    ]);
    function exportCsv() {
        const csv = toCsv(statement.map((r)=>({
                when: r.when,
                type: r.type,
                method: r.method,
                in_amount: r.in_amount,
                out_amount: r.out_amount,
                ref: r.ref
            })));
        const blob = new Blob([
            csv
        ], {
            type: "text/csv;charset=utf-8;"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `wallet-statement_${fromDate}_to_${toDate}.csv`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gray-50 text-black",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 py-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/admin",
                                    className: "text-sm text-blue-600 hover:underline",
                                    children: "← Admin"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-semibold mt-2",
                                    children: "Track Money"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 422,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-600 mt-1",
                                    children: "Wallet balances = Opening + Sales − Inventory payments − Expenses."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 423,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-600 mt-1",
                                    children: "Profit = Revenue − Inventory cost(received) − Wastage − Expenses."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 418,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-gray-600",
                                            children: "From"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/track-money/page.tsx",
                                            lineNumber: 433,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: fromDate,
                                            onChange: (e)=>setFromDate(e.target.value),
                                            className: "border rounded-full px-3 py-2 text-sm bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/track-money/page.tsx",
                                            lineNumber: 434,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-gray-600",
                                            children: "To"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/track-money/page.tsx",
                                            lineNumber: 440,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: toDate,
                                            onChange: (e)=>setToDate(e.target.value),
                                            className: "border rounded-full px-3 py-2 text-sm bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/track-money/page.tsx",
                                            lineNumber: 441,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 432,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: exportCsv,
                                    disabled: loading || statement.length === 0,
                                    className: "px-4 py-2 rounded-full border bg-white text-sm font-semibold hover:bg-gray-50 disabled:opacity-50",
                                    children: "Export wallet statement (CSV)"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 431,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/track-money/page.tsx",
                    lineNumber: 417,
                    columnNumber: 9
                }, this),
                err ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 border rounded-2xl p-4 bg-white text-sm text-red-600",
                    children: err
                }, void 0, false, {
                    fileName: "[project]/app/admin/track-money/page.tsx",
                    lineNumber: 460,
                    columnNumber: 11
                }, this) : null,
                openingsMissing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 border rounded-2xl p-4 bg-white text-sm text-amber-700",
                    children: [
                        "Note: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: "wallet_openings"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 465,
                            columnNumber: 19
                        }, this),
                        " table not found (or blocked by RLS). Openings are treated as ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: "0"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 466,
                            columnNumber: 43
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/track-money/page.tsx",
                    lineNumber: 464,
                    columnNumber: 11
                }, this) : null,
                wastageMissing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 border rounded-2xl p-4 bg-white text-sm text-amber-700",
                    children: [
                        "Note: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: "wastage"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 472,
                            columnNumber: 19
                        }, this),
                        " table not found (or blocked by RLS). Wastage cost is treated as ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: "0"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 473,
                            columnNumber: 40
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/track-money/page.tsx",
                    lineNumber: 471,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-4 grid grid-cols-2 lg:grid-cols-3 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border rounded-2xl p-4 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500",
                                    children: "Revenue (Sales)"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 480,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-lg font-semibold",
                                    children: loading ? "…" : money(sums.totalSales)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 481,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 479,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border rounded-2xl p-4 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500",
                                    children: "Inventory cost (received)"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-lg font-semibold",
                                    children: loading ? "…" : money(sums.inventoryCost)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 486,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-[11px] text-gray-500 leading-4",
                                    children: [
                                        "Paid to suppliers: ",
                                        loading ? "…" : money(sums.totalInvPaid)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 489,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 484,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border rounded-2xl p-4 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500",
                                    children: "Wastage cost"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 495,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-lg font-semibold",
                                    children: loading ? "…" : money(sums.wastageCost)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 496,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 494,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border rounded-2xl p-4 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500",
                                    children: "Gross profit"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 502,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-lg font-semibold",
                                    children: loading ? "…" : money(sums.grossProfit)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 503,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-[11px] text-gray-500 leading-4",
                                    children: "Revenue − Inventory − Wastage"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 506,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 501,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border rounded-2xl p-4 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500",
                                    children: "Expenses"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 510,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-lg font-semibold",
                                    children: loading ? "…" : money(sums.totalExpenses)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 511,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 509,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border rounded-2xl p-4 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500",
                                    children: "Net profit"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 517,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `mt-1 text-lg font-semibold ${!loading && sums.netProfit < 0 ? "text-red-600" : ""}`,
                                    children: loading ? "…" : money(sums.netProfit)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 518,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-[11px] text-gray-500 leading-4",
                                    children: "Gross profit − Expenses"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 525,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 516,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/track-money/page.tsx",
                    lineNumber: 478,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-4 border rounded-2xl bg-white p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold",
                                    children: "Wallet balances"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 532,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-600",
                                    children: "Default wallets shown (even if your enum doesn’t include them yet)."
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 533,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 531,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 grid grid-cols-2 lg:grid-cols-5 gap-3",
                            children: METHODS.map((m)=>{
                                const bal = sums.wallet[m] ?? 0;
                                const neg = bal < -0.0001;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-2xl p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500",
                                            children: m
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/track-money/page.tsx",
                                            lineNumber: 545,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `mt-1 text-lg font-semibold ${neg ? "text-red-600" : ""}`,
                                            children: loading ? "…" : money(bal)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/track-money/page.tsx",
                                            lineNumber: 546,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-[11px] text-gray-500 leading-4",
                                            children: [
                                                "In: ",
                                                loading ? "…" : money(sums.inflowBy[m] ?? 0),
                                                " • Out:",
                                                " ",
                                                loading ? "…" : money(sums.outflowBy[m] ?? 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/track-money/page.tsx",
                                            lineNumber: 549,
                                            columnNumber: 19
                                        }, this),
                                        neg ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-[11px] text-red-600",
                                            children: "Negative balance"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/track-money/page.tsx",
                                            lineNumber: 553,
                                            columnNumber: 26
                                        }, this) : null
                                    ]
                                }, m, true, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 544,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 539,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/track-money/page.tsx",
                    lineNumber: 530,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-4 border rounded-2xl bg-white p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold",
                                    children: "Recent wallet statement"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 563,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-600",
                                    children: [
                                        "Showing ",
                                        loading ? "…" : Math.min(statement.length, 100),
                                        " rows"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 564,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 562,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 space-y-2",
                            children: (loading ? Array.from({
                                length: 8
                            }) : statement.slice(0, 100)).map((r, idx)=>{
                                if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-10 bg-gray-100 rounded-xl"
                                }, idx, false, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 572,
                                    columnNumber: 37
                                }, this);
                                const isIn = r.in_amount > 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-sm border rounded-xl px-3 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold",
                                                    children: [
                                                        r.type,
                                                        " • ",
                                                        r.method
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                                    lineNumber: 581,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-600 truncate",
                                                    children: [
                                                        String(r.when),
                                                        " • ",
                                                        r.ref
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/track-money/page.tsx",
                                            lineNumber: 580,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `font-semibold ${isIn ? "text-green-700" : "text-red-600"}`,
                                            children: isIn ? `+${money(r.in_amount)}` : `-${money(r.out_amount)}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/track-money/page.tsx",
                                            lineNumber: 588,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, `${r.type}-${idx}`, true, {
                                    fileName: "[project]/app/admin/track-money/page.tsx",
                                    lineNumber: 576,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/admin/track-money/page.tsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/track-money/page.tsx",
                    lineNumber: 561,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/track-money/page.tsx",
            lineNumber: 416,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/track-money/page.tsx",
        lineNumber: 415,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_537e7b39._.js.map