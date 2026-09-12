"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ACTIVITY_TEMPLATES, CATEGORY_META } from "@/data/activityTemplates";
import ActivityCard from "@/components/activities/ActivityCard";
import StatsBar from "@/components/shared/StatsBar";
import EngineCard from "@/components/shared/EngineCard";

// ── Mock activity feed ────────────────────────────────────────
const MOCK_ACTIVITIES = ACTIVITY_TEMPLATES.slice(0, 12).map((t, i) => ({
  id: `act-${i}`,
  emoji: t.emoji,
  title: `${t.name} — ${["Vieux-Montréal","Plateau","Downtown","Laval","Mile-End","Rosemont"][i % 6]}`,
  category: t.category,
  location: ["Parc La Fontaine","Centre Vidéotron","Stade Saputo","Complexe Claude-Robillard","CEPSUM","Carrefour Laval"][i % 6],
  date: ["Dim 15 sept · 10h","Sam 14 sept · 18h","Sam 14 sept · 14h","Lun 16 sept · 19h30","Ven 13 sept · 20h","Mar 17 sept · 8h"][i % 6],
  current: [3, 8, 12, 5, 2, 18, 6, 10, 1, 20, 4, 9][i],
  max: t.defaultMax > 30 ? 20 : t.defaultMax,
  price: [0, 0, 10, 0, 15, 0, 5, 0, 20, 0, 0, 8][i],
  currency: "CAD",
  level: ["ANY","BEGINNER","ANY","INTERMEDIATE","ANY","BEGINNER","ADVANCED","ANY","ANY","INTERMEDIATE","ANY","BEGINNER"][i],
}));

const ENGINES = [
  { emoji: "🟦", title: "City",          desc: "Pays → Province → Ville → Quartier",        color: "#5b7fff" },
  { emoji: "🟢", title: "Activities",    desc: "Moteur universel — tout type d'activité",    color: "#2bde98" },
  { emoji: "🏆", title: "Tournament",    desc: "Tournois, équipes, matchs, classements",     color: "#ffcc00" },
  { emoji: "🗺️", title: "City Map",     desc: "Carte interactive de ta ville",              color: "#ff8c42" },
  { emoji: "🍽️", title: "Places",       desc: "Restaurants, bars, terrains, clubs",         color: "#ff5f7e" },
  { emoji: "🎮", title: "Games",         desc: "Chasse au trésor, quiz, défis urbains",      color: "#b47fff" },
  { emoji: "👥", title: "People",        desc: "Profils, amis, groupes, dating",             color: "#5b7fff" },
  { emoji: "🤖", title: "IA",            desc: "Crée une activité en une phrase",            color: "#2bde98" },
  { emoji: "💰", title: "Business",      desc: "Pros, billets, réservations, promo",         color: "#ff8c42" },
  { emoji: "🏅", title: "Points",        desc: "Niveaux, badges, récompenses",               color: "#ffcc00" },
  { emoji: "💬", title: "Chat",          desc: "Messages directs et salles d'activité",      color: "#5b7fff" },
  { emoji: "🔔", title: "Notifications", desc: "Alertes temps réel",                         color: "#ff5f7e" },
];

export default function HomePage() {
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() =>
    MOCK_ACTIVITIES.filter(a =>
      (!selectedCat || a.category === selectedCat) &&
      (!search || a.title.toLowerCase().includes(search.toLowerCase()))
    ), [selectedCat, search]);

  return (
    <main style={{ background: "var(--sy-bg)", minHeight: "100vh" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Gradient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ background: "var(--sy-primary)" }} />
          <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full opacity-8 blur-3xl"
            style={{ background: "var(--sy-accent)" }} />
        </div>

        <div className="sy-container py-24 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: "var(--sy-surface-2)", border: "1px solid var(--sy-border)", color: "var(--sy-primary)" }}>
            <span>✨</span>
            <span>Discover · Meet · Play · Join · Create · Enjoy</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight" style={{ color: "var(--sy-text)" }}>
            Tout se passe<br />
            <span style={{ color: "var(--sy-accent)" }}>près de toi.</span>
          </h1>

          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "var(--sy-text-muted)" }}>
            Sports, jeux, sorties, rencontres, tournois — une seule plateforme pour
            toutes les activités de ta ville. Montréal, Canada et partout dans le monde.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <Link href="/activities" className="sy-btn-primary text-base px-8 py-3">
              🔍 Découvrir les activités
            </Link>
            <Link href="/activities/create" className="sy-btn-ghost text-base px-8 py-3">
              ➕ Créer une activité
            </Link>
          </div>

          {/* Stats */}
          <div className="max-w-2xl mx-auto">
            <StatsBar />
          </div>
        </div>
      </section>

      {/* ── ACTIVITY FEED ─────────────────────────────────────── */}
      <section className="sy-container py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="sy-section-title mb-0">Activités à Montréal</h2>
          <Link href="/activities" className="text-sm" style={{ color: "var(--sy-primary)" }}>
            Tout voir →
          </Link>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            className="sy-input"
            placeholder="🔍 Chercher une activité..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
          <button
            onClick={() => setSelectedCat(null)}
            className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-all"
            style={{
              background: selectedCat === null ? "var(--sy-primary)" : "var(--sy-surface)",
              color: selectedCat === null ? "#fff" : "var(--sy-text-muted)",
              borderColor: selectedCat === null ? "var(--sy-primary)" : "var(--sy-border)",
            }}
          >
            🌐 Tout
          </button>
          {Object.entries(CATEGORY_META).map(([key, meta]) => (
            <button
              key={key}
              onClick={() => setSelectedCat(key === selectedCat ? null : key)}
              className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all"
              style={{
                background: selectedCat === key ? meta.color + "22" : "var(--sy-surface)",
                color: selectedCat === key ? meta.color : "var(--sy-text-muted)",
                borderColor: selectedCat === key ? meta.color : "var(--sy-border)",
              }}
            >
              <span>{meta.emoji}</span>
              <span className="hidden sm:inline">{meta.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20" style={{ color: "var(--sy-text-muted)" }}>
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg">Aucune activité trouvée</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(a => <ActivityCard key={a.id} a={a} />)}
          </div>
        )}
      </section>

      {/* ── ACTIVITY TEMPLATES ───────────────────────────────── */}
      <section className="sy-container py-16 border-t" style={{ borderColor: "var(--sy-border)" }}>
        <h2 className="sy-section-title text-center">40+ types d&apos;activités</h2>
        <p className="text-center mb-10" style={{ color: "var(--sy-text-muted)" }}>
          Le moteur universel — n&apos;importe quelle activité réelle peut être créée sans modifier le cœur de l&apos;app.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {ACTIVITY_TEMPLATES.map(tpl => (
            <div key={tpl.slug}
              className="sy-card p-3 flex flex-col items-center gap-2 cursor-pointer hover:border-blue-500 transition-all text-center">
              <span className="text-2xl">{tpl.emoji}</span>
              <span className="text-xs font-medium" style={{ color: "var(--sy-text)" }}>{tpl.name}</span>
              <span className="sy-badge" style={{ fontSize: "0.6rem" }}>{tpl.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 12 ENGINES ───────────────────────────────────────── */}
      <section className="sy-container py-16 border-t" style={{ borderColor: "var(--sy-border)" }}>
        <h2 className="sy-section-title text-center">12 moteurs. Une plateforme.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {ENGINES.map(e => <EngineCard key={e.title} {...e} />)}
        </div>
      </section>

      {/* ── CITIES ───────────────────────────────────────────── */}
      <section className="sy-container py-16 border-t" style={{ borderColor: "var(--sy-border)" }}>
        <h2 className="sy-section-title text-center">Architecture internationale</h2>
        <p className="text-center mb-10" style={{ color: "var(--sy-text-muted)" }}>
          Pensé dès le départ pour Montréal/Canada — extensible à n&apos;importe quelle ville du monde.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { name: "Montréal", flag: "🇨🇦", active: true },
            { name: "Laval",    flag: "🇨🇦", active: true },
            { name: "Toronto",  flag: "🇨🇦", active: false },
            { name: "Vancouver",flag: "🇨🇦", active: false },
            { name: "Paris",    flag: "🇫🇷", active: false },
            { name: "Tunis",    flag: "🇹🇳", active: false },
          ].map(c => (
            <div key={c.name}
              className="sy-card px-5 py-3 flex items-center gap-2"
              style={{ opacity: c.active ? 1 : 0.5, background: c.active ? "#2bde9822" : "transparent" }}>
              <span className="text-xl">{c.flag}</span>
              <span className="font-medium text-sm" style={{ color: "var(--sy-text)" }}>{c.name}</span>
              {c.active && (
                <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: "#2bde9822", color: "var(--sy-green)" }}>
                  Actif
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="sy-container py-24 text-center">
        <div className="sy-card p-12 max-w-2xl mx-auto">
          <p className="text-5xl mb-6">🚀</p>
          <h2 className="text-3xl font-black mb-4" style={{ color: "var(--sy-text)" }}>
            Prêt à rejoindre la communauté ?
          </h2>
          <p className="mb-8" style={{ color: "var(--sy-text-muted)" }}>
            Rejoins des milliers de personnes qui découvrent, jouent et se rencontrent chaque jour à Montréal.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/auth?mode=signup" className="sy-btn-primary text-base px-8 py-3">
              Créer mon compte
            </Link>
            <Link href="/activities" className="sy-btn-ghost text-base px-8 py-3">
              Explorer sans compte
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t py-8" style={{ borderColor: "var(--sy-border)" }}>
        <div className="sy-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black" style={{ color: "var(--sy-primary)" }}>SaYes</span>
          <p className="text-sm" style={{ color: "var(--sy-text-muted)" }}>
            Discover · Meet · Play · Join · Create · Enjoy
          </p>
          <p className="text-sm" style={{ color: "var(--sy-text-muted)" }}>© 2025 SaYes — Montréal, Canada</p>
        </div>
      </footer>
    </main>
  );
}
