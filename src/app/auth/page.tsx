"use client";
import { useState } from "react";
import Link from "next/link";
export default function AuthPage() {
  const [mode, setMode] = useState<"login"|"signup">("login");
  return (
    <main style={{background:"var(--sy-bg)",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div className="sy-card p-8 w-full max-w-md mx-4">
        <div className="text-center mb-8">
          <span className="text-4xl font-black" style={{color:"var(--sy-primary)"}}>SaYes</span>
          <p className="text-sm mt-2" style={{color:"var(--sy-text-muted)"}}>Discover · Meet · Play · Join</p>
        </div>
        <div className="flex rounded-xl overflow-hidden mb-6" style={{background:"var(--sy-surface-2)"}}>
          {(["login","signup"] as const).map(m=>(
            <button key={m} onClick={()=>setMode(m)} className="flex-1 py-2.5 text-sm font-medium transition-all"
              style={{background:mode===m?"var(--sy-primary)":"transparent",color:mode===m?"#fff":"var(--sy-text-muted)"}}>
              {m==="login"?"Connexion":"Créer un compte"}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {mode==="signup" && <input className="sy-input" placeholder="Nom complet" />}
          <input className="sy-input" placeholder="Email" type="email" />
          <input className="sy-input" placeholder="Mot de passe" type="password" />
          {mode==="signup" && <input className="sy-input" placeholder="Confirmer le mot de passe" type="password" />}
          <button className="sy-btn-primary w-full py-3 mt-2">
            {mode==="login"?"Se connecter":"Créer mon compte"}
          </button>
        </div>
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px" style={{background:"var(--sy-border)"}} />
          <span className="text-xs" style={{color:"var(--sy-text-muted)"}}>ou continuer avec</span>
          <div className="flex-1 h-px" style={{background:"var(--sy-border)"}} />
        </div>
        <button className="sy-btn-ghost w-full py-3">🔵 Google</button>
        <p className="text-center text-xs mt-6" style={{color:"var(--sy-text-muted)"}}>
          <Link href="/" style={{color:"var(--sy-primary)"}}>← Retour à l&apos;accueil</Link>
        </p>
      </div>
    </main>
  );
}
