"use client";

import { ACTIVITY_TEMPLATES } from "@/lib/activityTemplates";

const CATEGORIES = [
  { label: "Sports", emoji: "⚽", value: "SPORT" },
  { label: "Jeux", emoji: "🎮", value: "GAME" },
  { label: "Social", emoji: "👥", value: "SOCIAL" },
  { label: "Manger", emoji: "🍽️", value: "FOOD_DRINK" },
  { label: "Culture", emoji: "🎭", value: "CULTURE" },
  { label: "Nature", emoji: "🌲", value: "NATURE" },
  { label: "Apprentissage", emoji: "🧠", value: "LEARNING" },
  { label: "Business", emoji: "💼", value: "BUSINESS" },
  { label: "Voyages", emoji: "✈️", value: "TRAVEL" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--sy-bg)" }}>
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "var(--sy-border)" }}>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black" style={{ color: "var(--sy-primary)" }}>
            SaYes
          </span>
          <span className="text-xs font-medium" style={{ color: "var(--sy-text-muted)" }}>
            Montréal
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm" style={{ color: "var(--sy-text-muted)" }}>
            Connexion
          </button>
          <button className="sy-btn-primary text-sm">
            Rejoindre
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center px-6 py-20">
        <p className="text-sm font-medium mb-4" style={{ color: "var(--sy-primary)" }}>
          Discover • Meet • Play • Join • Create • Enjoy
        </p>
        <h1 className="text-5xl font-black mb-4" style={{ color: "var(--sy-text)" }}>
          Tout se passe<br />
          <span style={{ color: "var(--sy-accent)" }}>près de toi.</span>
        </h1>
        <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--sy-text-muted)" }}>
          Sports, jeux, sorties, rencontres, tournois — une seule app pour
          toutes les activités de ta ville.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="sy-btn-primary text-base px-8 py-3">
            Découvrir les activités
          </button>
          <button className="text-base px-8 py-3 rounded-xl border"
            style={{ borderColor: "var(--sy-border)", color: "var(--sy-text-muted)" }}>
            Créer une activité
          </button>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="px-6 mb-10">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              className="flex-shrink-0 flex flex-col items-center gap-1 px-4 py-3 rounded-xl border transition-colors"
              style={{ borderColor: "var(--sy-border)", background: "var(--sy-surface)" }}
            >
              <span className="text-2xl">{cat.emoji}</span>
              <span className="text-xs font-medium" style={{ color: "var(--sy-text-muted)" }}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ACTIVITY TEMPLATES GRID */}
      <section className="px-6 mb-16">
        <h2 className="text-xl font-bold mb-6" style={{ color: "var(--sy-text)" }}>
          Toutes les activités
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {ACTIVITY_TEMPLATES.map((tpl) => (
            <div
              key={tpl.slug}
              className="sy-card p-4 flex flex-col items-center gap-2 cursor-pointer hover:border-blue-500 transition-colors"
            >
              <span className="text-3xl">{tpl.emoji}</span>
              <span className="text-sm font-medium text-center" style={{ color: "var(--sy-text)" }}>
                {tpl.name}
              </span>
              <span className="sy-badge">{tpl.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ENGINES OVERVIEW */}
      <section className="px-6 py-16 border-t" style={{ borderColor: "var(--sy-border)" }}>
        <h2 className="text-3xl font-black text-center mb-12" style={{ color: "var(--sy-text)" }}>
          12 moteurs. Une plateforme.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { emoji: "🟦", title: "City", desc: "Pays → Province → Ville → Quartier" },
            { emoji: "🟢", title: "Activities", desc: "Moteur universel — tout type d'activité" },
            { emoji: "🏆", title: "Tournament", desc: "Tournois, équipes, matchs, classements" },
            { emoji: "🗺️", title: "City Map", desc: "Carte interactive de ta ville" },
            { emoji: "🍽️", title: "Places", desc: "Restaurants, bars, terrains, clubs" },
            { emoji: "🎮", title: "Games", desc: "Chasse au trésor, quiz, défis urbains" },
            { emoji: "👥", title: "People", desc: "Profils, amis, groupes, dating" },
            { emoji: "🤖", title: "IA", desc: "Crée une activité en une phrase" },
            { emoji: "💰", title: "Business", desc: "Pros, billets, réservations, promo" },
            { emoji: "🏅", title: "Points", desc: "Niveaux, badges, récompenses" },
            { emoji: "💬", title: "Chat", desc: "Messages directs et salles d'activité" },
            { emoji: "🔔", title: "Notifications", desc: "Alertes temps réel" },
          ].map((e) => (
            <div key={e.title} className="sy-card p-5 flex items-start gap-4">
              <span className="text-2xl">{e.emoji}</span>
              <div>
                <div className="font-bold mb-1" style={{ color: "var(--sy-text)" }}>
                  {e.title}
                </div>
                <div className="text-sm" style={{ color: "var(--sy-text-muted)" }}>
                  {e.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t text-sm" style={{ borderColor: "var(--sy-border)", color: "var(--sy-text-muted)" }}>
        © 2025 SaYes — Montréal, Canada
      </footer>
    </main>
  );
}
