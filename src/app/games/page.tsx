export default function GamesPage() {
  const GAMES = [
    { emoji:"🗺️", title:"Chasse au Trésor",  desc:"10 indices cachés dans le Vieux-Montréal", difficulty:3, players:"4-20", duration:"2h", price:"Gratuit" },
    { emoji:"📸", title:"Chasse Photo",       desc:"Capture les coins secrets de la ville",    difficulty:2, players:"2-30", duration:"90m", price:"Gratuit" },
    { emoji:"🧩", title:"Quiz Urbain",        desc:"Culture générale + histoire de Montréal",  difficulty:2, players:"4-40", duration:"1h",  price:"5 CAD" },
    { emoji:"🔐", title:"Escape Game",        desc:"Résous les énigmes avant la fin du temps", difficulty:4, players:"4-8",  duration:"1h",  price:"20 CAD" },
    { emoji:"🎵", title:"Blind Test Musical", desc:"Retrouve l'artiste et l'année",           difficulty:3, players:"4-30", duration:"1h",  price:"Gratuit" },
    { emoji:"🏆", title:"Tournoi Poker",      desc:"Texas Hold'em — points seulement",        difficulty:4, players:"6-10", duration:"3h",  price:"Gratuit" },
  ];
  return (
    <main style={{background:"var(--sy-bg)",minHeight:"100vh"}}>
      <div className="sy-container py-10">
        <h1 className="sy-section-title">🎮 Moteur Games</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GAMES.map(g => (
            <div key={g.title} className="sy-card p-5">
              <span className="text-4xl block mb-3">{g.emoji}</span>
              <h3 className="font-bold mb-1" style={{color:"var(--sy-text)"}}>{g.title}</h3>
              <p className="text-sm mb-4" style={{color:"var(--sy-text-muted)"}}>{g.desc}</p>
              <div className="grid grid-cols-2 gap-2 text-xs mb-4" style={{color:"var(--sy-text-muted)"}}>
                <span>👥 {g.players}</span>
                <span>⏱ {g.duration}</span>
                <span>⭐ Niv. {g.difficulty}/5</span>
                <span>💰 {g.price}</span>
              </div>
              <button className="sy-btn-primary w-full text-sm">Jouer</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
