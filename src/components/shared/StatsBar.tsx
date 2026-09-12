export default function StatsBar() {
  const stats = [
    { label: "Activités", value: "40+", emoji: "🎯" },
    { label: "Villes",    value: "6",   emoji: "🌍" },
    { label: "Moteurs",   value: "12",  emoji: "⚙️" },
    { label: "Utilisateurs", value: "∞", emoji: "👥" },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map(s => (
        <div key={s.label} className="sy-card p-4 text-center">
          <div className="text-2xl mb-1">{s.emoji}</div>
          <div className="text-2xl font-black" style={{ color: "var(--sy-primary)" }}>{s.value}</div>
          <div className="text-xs" style={{ color: "var(--sy-text-muted)" }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
