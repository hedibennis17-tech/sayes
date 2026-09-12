"use client";
import { CITIES } from "@/data/cities";
export default function CityPage() {
  return (
    <main style={{ background: "var(--sy-bg)", minHeight: "100vh" }}>
      <div className="sy-container py-10">
        <h1 className="sy-section-title">🟦 Moteur City</h1>
        <p className="mb-8" style={{ color: "var(--sy-text-muted)" }}>
          SaYes couvre le Canada et s&apos;étend à l&apos;international. Chaque ville possède ses quartiers, lieux, activités et communautés.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CITIES.map(c => (
            <div key={c.id} className="sy-card p-6" style={{ opacity: c.active ? 1 : 0.6 }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{c.flag}</span>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: "var(--sy-text)" }}>{c.name}</h3>
                  <p className="text-sm" style={{ color: "var(--sy-text-muted)" }}>{c.province}, {c.country}</p>
                </div>
                {c.active && <span className="ml-auto sy-badge" style={{ color: "var(--sy-green)" }}>Actif</span>}
              </div>
              <div className="flex flex-wrap gap-1">
                {c.districts.slice(0, 5).map(d => <span key={d} className="sy-badge">{d}</span>)}
                {c.districts.length > 5 && <span className="sy-badge">+{c.districts.length - 5}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
