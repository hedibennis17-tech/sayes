export default function MapPage() {
  return (
    <main style={{background:"var(--sy-bg)",minHeight:"100vh"}}>
      <div className="sy-container py-10">
        <h1 className="sy-section-title">🗺️ Moteur City Map</h1>
        <div className="sy-card p-8 text-center" style={{minHeight:"500px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <span className="text-6xl block mb-6">🗺️</span>
          <h2 className="text-2xl font-bold mb-3" style={{color:"var(--sy-text)"}}>Carte Interactive — Montréal</h2>
          <p className="mb-8 max-w-md" style={{color:"var(--sy-text-muted)"}}>
            La carte interactive affichera toutes les activités, personnes, restaurants, bars, tournois et lieux en temps réel autour de toi.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {["🟢 Activités","🔵 Personnes","🟠 Restaurants","🔴 Bars","🟣 Clubs","⚽ Terrains","🏆 Tournois"].map(l=>(
              <span key={l} className="sy-badge text-sm">{l}</span>
            ))}
          </div>
          <p className="text-sm" style={{color:"var(--sy-text-muted)"}}>Google Maps API — intégration en Étape 2</p>
        </div>
      </div>
    </main>
  );
}
