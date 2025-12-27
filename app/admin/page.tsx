import Link from "next/link";

const cards = [
  { href: "/admin/fast-sale", title: "Fast Sale", desc: "Quick sale / credit sale" },
  { href: "/admin/orders", title: "Orders", desc: "Orders, items & payments" },
  { href: "/admin/customers", title: "Customers", desc: "Customer list & credit balance" },
  { href: "/admin/suppliers", title: "Suppliers", desc: "Unpaid invoices & stock history" },
  { href: "/admin/inventory", title: "Inventory", desc: "Stock, batches & costs" },
  { href: "/admin/expenses", title: "Expenses", desc: "MATO, Liiban, Abdirazak" },
  { href: "/admin/wastage", title: "Wastage", desc: "Expired / damaged stock" },
  { href: "/admin/track-money", title: "Money", desc: "Track Money" },
  { href: "/admin/analytics", title: "Analytics", desc: "View statistics" },
  { href: "/admin/add-product", title: "Add Product", desc: "Create new products" },
  { href: "/admin/products", title: "Products", desc: "View & edit products" },
];

export default function AdminHome() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-xl font-semibold">Admin (POS)</h1>
        <p className="text-sm text-gray-600 mt-1">Monitor everything in one place.</p>

        <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="border rounded-2xl p-4 hover:bg-gray-50"
            >
              <div className="font-semibold">{c.title}</div>
              <div className="text-xs text-gray-600 mt-1">{c.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}