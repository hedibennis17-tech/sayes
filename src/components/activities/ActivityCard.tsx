"use client";

export interface ActivityCardData {
  id: string;
  emoji: string;
  title: string;
  category: string;
  location: string;
  date: string;
  current: number;
  max: number;
  price: number;
  currency: string;
  level: string;
  coverImage?: string;
}

const LEVEL_COLOR: Record<string, string> = {
  ANY:          "var(--sy-text-muted)",
  BEGINNER:     "var(--sy-green)",
  INTERMEDIATE: "var(--sy-yellow)",
  ADVANCED:     "var(--sy-orange)",
  PRO:          "var(--sy-accent)",
};

export default function ActivityCard({ a }: { a: ActivityCardData }) {
  const pct = Math.round((a.current / a.max) * 100);
  const isFull = a.current >= a.max;

  return (
    <div className="sy-card overflow-hidden cursor-pointer hover:border-blue-500 transition-all hover:-translate-y-0.5"
      style={{ borderColor: "var(--sy-border)" }}>
      {/* Top */}
      <div className="p-4 flex items-start justify-between gap-2">
        <span className="text-3xl">{a.emoji}</span>
        <span className="sy-badge text-xs" style={{ color: LEVEL_COLOR[a.level] ?? "var(--sy-text-muted)" }}>
          {a.level === "ANY" ? "Tous niveaux" : a.level}
        </span>
      </div>
      {/* Body */}
      <div className="px-4 pb-4">
        <h3 className="font-bold text-sm mb-1 leading-snug" style={{ color: "var(--sy-text)" }}>{a.title}</h3>
        <p className="text-xs mb-3" style={{ color: "var(--sy-text-muted)" }}>📍 {a.location}</p>
        <p className="text-xs mb-3" style={{ color: "var(--sy-text-muted)" }}>📅 {a.date}</p>

        {/* Participants bar */}
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs mb-1" style={{ color: "var(--sy-text-muted)" }}>
            <span>{a.current}/{a.max} participants</span>
            <span style={{ color: isFull ? "var(--sy-accent)" : "var(--sy-green)" }}>
              {isFull ? "Complet" : `${a.max - a.current} places`}
            </span>
          </div>
          <div className="h-1.5 rounded-full" style={{ background: "var(--sy-surface-2)" }}>
            <div className="h-full rounded-full transition-all"
              style={{ width: `${pct}%`, background: isFull ? "var(--sy-accent)" : "var(--sy-green)" }} />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold" style={{ color: "var(--sy-primary)" }}>
            {a.price === 0 ? "Gratuit" : `${a.price} ${a.currency}`}
          </span>
          <button className="sy-btn-primary text-xs px-3 py-1.5" disabled={isFull}
            style={{ opacity: isFull ? 0.5 : 1 }}>
            {isFull ? "Liste d'attente" : "Rejoindre"}
          </button>
        </div>
      </div>
    </div>
  );
}
