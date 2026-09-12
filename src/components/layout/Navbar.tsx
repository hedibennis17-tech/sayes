"use client";
import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/activities", label: "Activités" },
  { href: "/city",       label: "Ville" },
  { href: "/map",        label: "Carte" },
  { href: "/people",     label: "Personnes" },
  { href: "/games",      label: "Jeux" },
  { href: "/tournaments",label: "Tournois" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b" style={{ background: "rgba(13,15,20,0.95)", backdropFilter: "blur(12px)", borderColor: "var(--sy-border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-black" style={{ color: "var(--sy-primary)" }}>SaYes</span>
          <span className="hidden sm:block text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ background: "var(--sy-surface-2)", color: "var(--sy-text-muted)" }}>
            Montréal 🇨🇦
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors hover:text-white"
              style={{ color: "var(--sy-text-muted)" }}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link href="/auth" className="hidden sm:block text-sm font-medium" style={{ color: "var(--sy-text-muted)" }}>
            Connexion
          </Link>
          <Link href="/auth?mode=signup" className="sy-btn-primary text-sm">
            Rejoindre
          </Link>
          <button className="md:hidden ml-2 p-2" onClick={() => setOpen(!open)} style={{ color: "var(--sy-text-muted)" }}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t px-4 pb-4 pt-2 flex flex-col gap-1" style={{ borderColor: "var(--sy-border)" }}>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} className="px-3 py-2 rounded-lg text-sm font-medium"
              style={{ color: "var(--sy-text-muted)" }} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
