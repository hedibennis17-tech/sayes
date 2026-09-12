"use client";
const USERS = [
  { id:1, name:"Alex Martin",     av:"👨", bio:"Soccer · Hockey · Tennis",       city:"Montréal", lvl:12, badges:["⚽","🏒","🏅"], online:true  },
  { id:2, name:"Sarah Tremblay",  av:"👩", bio:"Yoga · Randonnée · Café",        city:"Laval",    lvl:8,  badges:["🧘","🥾","☕"], online:false },
  { id:3, name:"Jean-Philippe",   av:"🧑", bio:"Jeux vidéo · Poker · Quiz",      city:"Montréal", lvl:15, badges:["🎮","🃏","🧩"], online:true  },
  { id:4, name:"Aicha Benali",    av:"👩", bio:"Danse · Cinéma · Restaurant",    city:"Montréal", lvl:6,  badges:["💃","🎬","🍽️"], online:true  },
  { id:5, name:"Marco Rossi",     av:"👨", bio:"Basketball · Natation · Vélo",   city:"Laval",    lvl:20, badges:["🏀","🏊","🚴"], online:false },
  { id:6, name:"Fatima Zahra",    av:"👩", bio:"Tennis · Volleyball · Gym",      city:"Longueuil",lvl:9,  badges:["🎾","🏐","🏋️"], online:true  },
];
export default function PeoplePage() {
  return (
    <main style={{ background:"var(--sy-bg)", minHeight:"100vh" }}>
      <div className="sy-container py-10">
        <h1 className="sy-section-title">👥 Moteur People</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {USERS.map(u => (
            <div key={u.id} className="sy-card p-5">
              <div className="flex items-start gap-3 mb-4">
                <div className="text-4xl w-12 h-12 rounded-xl flex items-center justify-center" style={{background:"var(--sy-surface-2)"}}>{u.av}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold" style={{color:"var(--sy-text)"}}>{u.name}</h3>
                    {u.online && <span className="w-2 h-2 rounded-full" style={{background:"var(--sy-green)"}} />}
                  </div>
                  <p className="text-xs" style={{color:"var(--sy-text-muted)"}}>📍 {u.city}</p>
                  <p className="text-xs mt-0.5" style={{color:"var(--sy-text-muted)"}}>{u.bio}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-1">{u.badges.map(b=><span key={b} className="text-lg">{b}</span>)}</div>
                <span className="text-xs font-bold" style={{color:"var(--sy-yellow)"}}>Niv. {u.lvl}</span>
              </div>
              <button className="sy-btn-primary w-full mt-3 text-sm">Contacter</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
