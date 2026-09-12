"use client";
import { useState, useMemo } from "react";
import { ACTIVITY_TEMPLATES, CATEGORY_META } from "@/data/activityTemplates";
import ActivityCard from "@/components/activities/ActivityCard";

const MOCK = ACTIVITY_TEMPLATES.map((t, i) => ({
  id: `act-${i}`,
  emoji: t.emoji,
  title: `${t.name} — ${["Vieux-Montréal","Plateau","Downtown","Laval","Mile-End","Rosemont","Westmount","Verdun"][i % 8]}`,
  category: t.category,
  location: ["Parc La Fontaine","Centre Vidéotron","Stade Saputo","CEPSUM","Carrefour Laval","Palais des congrès"][i % 6],
  date: ["Dim 15 sept · 10h","Sam 14 sept · 18h","Sam 14 sept · 14h","Lun 16 sept · 19h30","Ven 13 sept · 20h","Mar 17 sept · 8h"][i % 6],
  current: (i * 3 + 1) % (t.defaultMax > 20 ? 15 : t.defaultMax),
  max: t.defaultMax > 30 ? 20 : t.defaultMax,
  price: i % 3 === 0 ? 0 : (i % 4) * 5,
  currency: "CAD",
  level: ["ANY","BEGINNER","INTERMEDIATE","ADVANCED","ANY","BEGINNER"][i % 6],
}));

export default function ActivitiesPage() {
  const [cat, setCat] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("recent");

  const filtered = useMemo(() =>
    MOCK.filter(a =>
      (!cat || a.category === cat) &&
      (!search || a.title.toLowerCase().includes(search.toLowerCase()))
    ), [cat, search]);

  return (
    <main style={{ background: "var(--sy-bg)", minHeight: "100vh" }}>
      <div className="sy-container py-10">
        <h1 className="sy-section-title">Activités à Montréal</h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input className="sy-input flex-1" placeholder="🔍 Chercher..." value={search} onChange={e => setSearch(e.target.value)} />
          <select className="sy-input sm:w-40" value={sort} onChange={e => setSort(e.target.value)}
            style={{ background: "var(--sy-surface-2)" }}>
            <option value="recent">Plus récents</option>
            <option value="popular">Populaires</option>
            <option value="free">Gratuits</option>
          </select>
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
          {[["null", "🌐 Tout", "#5b7fff"], ...Object.entries(CATEGORY_META).map(([k,m]) => [k, `${m.emoji} ${m.label}`, m.color])].map(([key, label, color]) => (
            <button key={key} onClick={() => setCat(key === "null" ? null : (key === cat ? null : key))}
              className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap"
              style={{
                background: (key === "null" ? cat === null : cat === key) ? color + "33" : "var(--sy-surface)",
                color: (key === "null" ? cat === null : cat === key) ? color : "var(--sy-text-muted)",
                borderColor: (key === "null" ? cat === null : cat === key) ? color : "var(--sy-border)",
              }}>
              {label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-sm mb-6" style={{ color: "var(--sy-text-muted)" }}>
          {filtered.length} activité{filtered.length > 1 ? "s" : ""} trouvée{filtered.length > 1 ? "s" : ""}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map(a => <ActivityCard key={a.id} a={a} />)}
        </div>
      </div>
    </main>
  );
}
