import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaYes — Discover • Meet • Play • Join • Create • Enjoy",
  description: "SaYes est la plateforme universelle d'activités sociales.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full">
      <body className="h-full antialiased" style={{ background: "var(--sy-bg)", color: "var(--sy-text)", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
