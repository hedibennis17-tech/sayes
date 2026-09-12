export default function EngineCard({ emoji, title, desc, color }: {
  emoji: string; title: string; desc: string; color?: string;
}) {
  return (
    <div className="sy-card p-5 flex items-start gap-4 hover:border-blue-500 transition-all cursor-pointer">
      <div className="text-2xl w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: (color ?? "#5b7fff") + "22" }}>
        {emoji}
      </div>
      <div>
        <div className="font-bold mb-1" style={{ color: "var(--sy-text)" }}>{title}</div>
        <div className="text-sm" style={{ color: "var(--sy-text-muted)" }}>{desc}</div>
      </div>
    </div>
  );
}
