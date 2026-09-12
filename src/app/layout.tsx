import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "SaYes — Discover • Meet • Play • Join • Create • Enjoy",
  description: "La plateforme mondiale de vie sociale, sports, jeux et activités locales. Montréal, Canada et partout dans le monde.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
