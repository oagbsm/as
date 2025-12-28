"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProfilePage() {
  const { lang } = useLanguage();

  const isSo = lang === "so";

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    area: "",
    address: "",
    deliveryNotes: "",
    preferredLanguage: lang,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: hook to API later
    console.log("Profile saved", form);
    alert(isSo ? "Xogta waa la kaydiyay (muuqaal tijaabo ah)." : "Profile saved (demo only).");
  }

  return (
    <main className="max-w-md mx-auto px-4 py-4 bg-white min-h-screen text-[#0B3C6E]">
      {/* TITLE */}
      <h1 className="text-xl font-bold mb-1">
        {isSo ? "Koontadayda" : "My Profile"}
      </h1>
      <p className="text-xs text-gray-500 mb-4">
        {isSo
          ? "Maamul xogtaada, ciwaanka keenista iyo doorbidyada dalabka."
          : "Manage your details, delivery address and order preferences."}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 pb-24">
        {/* CONTACT INFORMATION */}
        <section className="bg-white rounded-2xl border border-[#E5EEF4] p-4 space-y-3 shadow-sm">
          <h2 className="text-sm font-semibold mb-1">
            {isSo ? "Macluumaadka Xiriirka" : "Contact Information"}
          </h2>

          <div className="space-y-1">
            <label className="text-xs text-gray-600" htmlFor="fullName">
              {isSo ? "Magaca buuxa" : "Full name"}
            </label>
            <input
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E5EEF4] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0B6EA9]"
              placeholder={isSo ? "Magacaaga oo buuxa" : "Your full name"}
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-600" htmlFor="phone">
              {isSo ? "Lambarka taleefanka" : "Phone number"}
            </label>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E5EEF4] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0B6EA9]"
              placeholder={isSo ? "e.g. 062xxxxxxx" : "e.g. 062xxxxxxx"}
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-600" htmlFor="email">
              {isSo ? "Email (ikhtiyaari)" : "Email (optional)"}
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E5EEF4] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0B6EA9]"
              placeholder={isSo ? "Email-kaaga haddii aad rabto" : "Your email if you wish"}
            />
          </div>
        </section>

        {/* DELIVERY INFORMATION */}
        <section className="bg-white rounded-2xl border border-[#E5EEF4] p-4 space-y-3 shadow-sm">
          <h2 className="text-sm font-semibold mb-1">
            {isSo ? "Macluumaadka Keenista" : "Delivery Information"}
          </h2>

          <div className="space-y-1">
            <label className="text-xs text-gray-600" htmlFor="city">
              {isSo ? "Magaalo" : "City"}
            </label>
            <input
              id="city"
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E5EEF4] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0B6EA9]"
              placeholder={isSo ? "e.g. Beledweyne" : "e.g. Beledweyne"}
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-600" htmlFor="area">
              {isSo ? "Xaafad / Aag" : "Area / District"}
            </label>
            <input
              id="area"
              name="area"
              value={form.area}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E5EEF4] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0B6EA9]"
              placeholder={isSo ? "Xaafad ama agagaar" : "Neighbourhood or nearby area"}
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-600" htmlFor="address">
              {isSo ? "Cinwaanka faahfaahsan" : "Full delivery address"}
            </label>
            <textarea
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E5EEF4] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0B6EA9] min-h-[70px]"
              placeholder={
                isSo
                  ? "Guri, jid, meel u dhow (tusaale: agagaarka isbitaalka, albaabka caddaan iwm.)"
                  : "House, street, nearby landmark (e.g. near hospital, white gate, etc.)"
              }
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-gray-600" htmlFor="deliveryNotes">
              {isSo ? "Tilmaamo keenis (ikhtiyaari)" : "Delivery notes (optional)"}
            </label>
            <textarea
              id="deliveryNotes"
              name="deliveryNotes"
              value={form.deliveryNotes}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E5EEF4] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0B6EA9] min-h-[60px]"
              placeholder={
                isSo
                  ? "Tusaale: wac ka hor, albaabka midabka ah, taagan hoosta geedka iwm."
                  : "Example: call before arrival, coloured gate, shop downstairs, etc."
              }
            />
          </div>
        </section>

        {/* PREFERENCES */}
        <section className="bg-white rounded-2xl border border-[#E5EEF4] p-4 space-y-3 shadow-sm">
          <h2 className="text-sm font-semibold mb-1">
            {isSo ? "Doorbidyada Koontada" : "Account Preferences"}
          </h2>

          <div className="space-y-1">
            <label className="text-xs text-gray-600" htmlFor="preferredLanguage">
              {isSo ? "Luuqadda aad doorbideyso" : "Preferred language"}
            </label>
            <select
              id="preferredLanguage"
              name="preferredLanguage"
              value={form.preferredLanguage}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E5EEF4] px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#0B6EA9]"
            >
              <option value="so">{isSo ? "Af-Soomaali" : "Somali"}</option>
              <option value="en">{isSo ? "Ingiriis" : "English"}</option>
            </select>
            <p className="text-[10px] text-gray-500 mt-1">
              {isSo
                ? "Luuqaddan waxaa loo adeegsan karaa fariimaha mustaqbalka iyo xasuusinta."
                : "This language may be used for future messages and reminders."}
            </p>
          </div>
        </section>

        {/* SAVE BUTTON */}
        <button
          type="submit"
          className="w-full rounded-full bg-[#0B6EA9] text-white py-2.5 text-sm font-semibold shadow-sm"
        >
          {isSo ? "Kaydi isbeddelada" : "Save changes"}
        </button>
      </form>
    </main>
  );
}