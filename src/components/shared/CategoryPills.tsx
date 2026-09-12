"use client";
import { CATEGORY_META } from "@/data/activityTemplates";

interface Props {
  selected: string | null;
  onSelect: (cat: string | null) => void;
}

export default function CategoryPills({ selected, onSelect }: Props) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onSelect(null)}
        className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-all"
        style={{
          background: selected === null ? "var(--sy-primary)" : "var(--sy-surface)",
          color: selected === null ? "#fff" : "var(--sy-text-muted)",
          borderColor: selected === null ? "var(--sy-primary)" : "var(--sy-border)",
        }}
      >
        Tout
      </button>
      {Object.entries(CATEGORY_META).map(([key, meta]) => (
        <button
          key={key}
          onClick={() => onSelect(key === selected ? null : key)}
          className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all"
          style={{
            background: selected === key ? meta.color + "22" : "var(--sy-surface)",
            color: selected === key ? meta.color : "var(--sy-text-muted)",
            borderColor: selected === key ? meta.color : "var(--sy-border)",
          }}
        >
          <span>{meta.emoji}</span>
          <span>{meta.label}</span>
        </button>
      ))}
    </div>
  );
}
