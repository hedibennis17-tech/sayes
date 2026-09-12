export default function TournamentsPage() {
  const TOURNAMENTS = [
    { emoji:"⚽", title:"Tournoi Soccer 5v5", sport:"Soccer",     teams:"8/12", date:"28 sept",  status:"INSCRIPTION", prize:"Trophée + 500pts" },
    { emoji:"🏒", title:"Ligue Hockey Hiver", sport:"Hockey",     teams:"6/10", date:"15 oct",   status:"INSCRIPTION", prize:"Coupe + 300pts"  },
    { emoji:"🎾", title:"Open Tennis MTL",    sport:"Tennis",     teams:"16/32",date:"5 oct",    status:"INSCRIPTION", prize:"Médaille + 200pts"},
    { emoji:"🎮", title:"Tournoi FIFA 2025",  sport:"FIFA",       teams:"8/16", date:"20 sept",  status:"COMPLET",     prize:"250 CAD"         },
    { emoji:"🃏", title:"Tournoi Poker",      sport:"Poker",      teams:"10/20",date:"22 sept",  status:"INSCRIPTION", prize:"500pts"          },
    { emoji:"♟️", title:"Tournoi Échecs",     sport:"Échecs",     teams:"8/16", date:"12 oct",   status:"INSCRIPTION", prize:"Trophée + 150pts"},
  ];
  const STATUS_COLOR: Record<string,string> = { INSCRIPTION:"var(--sy-green)", COMPLET:"var(--sy-accent)", EN_COURS:"var(--sy-yellow)" };
  return (
    <main style={{background:"var(--sy-bg)",minHeight:"100vh"}}>
      <div className="sy-container py-10">
        <h1 className="sy-section-title">🏆 Moteur Tournament</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOURNAMENTS.map(t => (
            <div key={t.title} className="sy-card p-5">
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{t.emoji}</span>
                <span className="sy-badge text-xs" style={{color:STATUS_COLOR[t.status]}}>{t.status}</span>
              </div>
              <h3 className="font-bold mb-1" style={{color:"var(--sy-text)"}}>{t.title}</h3>
              <div className="grid grid-cols-2 gap-2 text-xs mb-4" style={{color:"var(--sy-text-muted)"}}>
                <span>🏅 {t.sport}</span>
                <span>📅 {t.date}</span>
                <span>👥 {t.teams} équipes</span>
                <span>🎁 {t.prize}</span>
              </div>
              <button className="sy-btn-primary w-full text-sm" disabled={t.status==="COMPLET"}
                style={{opacity:t.status==="COMPLET"?0.5:1}}>
                {t.status==="COMPLET" ? "Complet" : "S'inscrire"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
