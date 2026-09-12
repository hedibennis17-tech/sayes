// ============================================================
// SAYES — ACTIVITY TEMPLATES CATALOG
// Universal Activity Engine — 40+ activity types
// ============================================================

export interface ActivityTemplate {
  slug: string;
  name: string;
  nameEn: string;
  emoji: string;
  category: string;
  subcategory?: string;
  defaultDurationMin: number;
  defaultMin: number;
  defaultMax: number;
  supportsTeams: boolean;
  supportsTournament: boolean;
  tags: string[];
}

export const ACTIVITY_TEMPLATES: ActivityTemplate[] = [
  // ── SPORTS ─────────────────────────────────────────────────
  { slug: "soccer", name: "Soccer", nameEn: "Soccer", emoji: "⚽", category: "SPORT", subcategory: "COLLECTIF", defaultDurationMin: 90, defaultMin: 10, defaultMax: 22, supportsTeams: true, supportsTournament: true, tags: ["extérieur","balle","equipe"] },
  { slug: "hockey", name: "Hockey", nameEn: "Hockey", emoji: "🏒", category: "SPORT", subcategory: "COLLECTIF", defaultDurationMin: 60, defaultMin: 10, defaultMax: 20, supportsTeams: true, supportsTournament: true, tags: ["glace","patinoire","equipe"] },
  { slug: "basketball", name: "Basketball", nameEn: "Basketball", emoji: "🏀", category: "SPORT", subcategory: "COLLECTIF", defaultDurationMin: 60, defaultMin: 6, defaultMax: 12, supportsTeams: true, supportsTournament: true, tags: ["intérieur","balle","equipe"] },
  { slug: "tennis", name: "Tennis", nameEn: "Tennis", emoji: "🎾", category: "SPORT", subcategory: "RAQUETTE", defaultDurationMin: 90, defaultMin: 2, defaultMax: 4, supportsTeams: false, supportsTournament: true, tags: ["raquette","court"] },
  { slug: "badminton", name: "Badminton", nameEn: "Badminton", emoji: "🏸", category: "SPORT", subcategory: "RAQUETTE", defaultDurationMin: 60, defaultMin: 2, defaultMax: 4, supportsTeams: false, supportsTournament: true, tags: ["raquette","gymnase"] },
  { slug: "volleyball", name: "Volleyball", nameEn: "Volleyball", emoji: "🏐", category: "SPORT", subcategory: "COLLECTIF", defaultDurationMin: 60, defaultMin: 8, defaultMax: 14, supportsTeams: true, supportsTournament: true, tags: ["plage","sable","equipe"] },
  { slug: "golf", name: "Golf", nameEn: "Golf", emoji: "⛳", category: "SPORT", subcategory: "INDIVIDUEL", defaultDurationMin: 240, defaultMin: 2, defaultMax: 4, supportsTeams: false, supportsTournament: true, tags: ["club","parcours","gazon"] },
  { slug: "ski", name: "Ski", nameEn: "Ski", emoji: "🎿", category: "SPORT", subcategory: "HIVER", defaultDurationMin: 300, defaultMin: 2, defaultMax: 20, supportsTeams: false, supportsTournament: false, tags: ["montagne","neige","hiver"] },
  { slug: "snowboard", name: "Snowboard", nameEn: "Snowboard", emoji: "🏂", category: "SPORT", subcategory: "HIVER", defaultDurationMin: 300, defaultMin: 2, defaultMax: 15, supportsTeams: false, supportsTournament: false, tags: ["montagne","neige","hiver"] },
  { slug: "skating", name: "Patinage", nameEn: "Skating", emoji: "⛸️", category: "SPORT", subcategory: "HIVER", defaultDurationMin: 90, defaultMin: 2, defaultMax: 30, supportsTeams: false, supportsTournament: false, tags: ["patinoire","glace","hiver"] },
  { slug: "swimming", name: "Natation", nameEn: "Swimming", emoji: "🏊", category: "SPORT", subcategory: "AQUATIQUE", defaultDurationMin: 60, defaultMin: 2, defaultMax: 20, supportsTeams: false, supportsTournament: true, tags: ["piscine","eau","cardio"] },
  { slug: "cycling", name: "Vélo", nameEn: "Cycling", emoji: "🚴", category: "SPORT", subcategory: "ENDURANCE", defaultDurationMin: 120, defaultMin: 2, defaultMax: 30, supportsTeams: false, supportsTournament: false, tags: ["route","montagne","cardio"] },
  { slug: "running", name: "Course", nameEn: "Running", emoji: "🏃", category: "SPORT", subcategory: "ENDURANCE", defaultDurationMin: 60, defaultMin: 2, defaultMax: 50, supportsTeams: false, supportsTournament: true, tags: ["parc","sentier","cardio"] },
  { slug: "hiking", name: "Randonnée", nameEn: "Hiking", emoji: "🥾", category: "NATURE", subcategory: "PLEIN_AIR", defaultDurationMin: 180, defaultMin: 2, defaultMax: 20, supportsTeams: false, supportsTournament: false, tags: ["sentier","nature","montagne"] },
  { slug: "yoga", name: "Yoga", nameEn: "Yoga", emoji: "🧘", category: "SPORT", subcategory: "BIENETRE", defaultDurationMin: 60, defaultMin: 2, defaultMax: 20, supportsTeams: false, supportsTournament: false, tags: ["méditation","stretching","bien-être"] },
  { slug: "boxing", name: "Boxe", nameEn: "Boxing", emoji: "🥊", category: "SPORT", subcategory: "COMBAT", defaultDurationMin: 60, defaultMin: 2, defaultMax: 16, supportsTeams: false, supportsTournament: true, tags: ["ring","combat","cardio"] },
  { slug: "martial-arts", name: "Arts Martiaux", nameEn: "Martial Arts", emoji: "🥋", category: "SPORT", subcategory: "COMBAT", defaultDurationMin: 90, defaultMin: 4, defaultMax: 20, supportsTeams: false, supportsTournament: true, tags: ["dojo","combat","discipline"] },
  
  // ── GAMES ──────────────────────────────────────────────────
  { slug: "treasure-hunt", name: "Chasse au Trésor", nameEn: "Treasure Hunt", emoji: "🗺️", category: "GAME", subcategory: "URBAIN", defaultDurationMin: 120, defaultMin: 4, defaultMax: 30, supportsTeams: true, supportsTournament: false, tags: ["ville","indices","aventure"] },
  { slug: "photo-hunt", name: "Chasse Photo", nameEn: "Photo Hunt", emoji: "📸", category: "GAME", subcategory: "URBAIN", defaultDurationMin: 90, defaultMin: 4, defaultMax: 30, supportsTeams: true, supportsTournament: false, tags: ["photo","ville","créatif"] },
  { slug: "urban-quiz", name: "Quiz Urbain", nameEn: "Urban Quiz", emoji: "🧩", category: "GAME", subcategory: "URBAIN", defaultDurationMin: 60, defaultMin: 4, defaultMax: 40, supportsTeams: true, supportsTournament: true, tags: ["questions","culture","ville"] },
  { slug: "escape-game", name: "Escape Game", nameEn: "Escape Room", emoji: "🔐", category: "GAME", subcategory: "INDOOR", defaultDurationMin: 60, defaultMin: 4, defaultMax: 10, supportsTeams: true, supportsTournament: false, tags: ["enigmes","indoor","réflexion"] },
  { slug: "board-games", name: "Jeux de Société", nameEn: "Board Games", emoji: "🎲", category: "GAME", subcategory: "INDOOR", defaultDurationMin: 120, defaultMin: 3, defaultMax: 8, supportsTeams: false, supportsTournament: false, tags: ["table","dés","stratégie"] },
  { slug: "poker", name: "Poker", nameEn: "Poker", emoji: "🃏", category: "GAME", subcategory: "CARDS", defaultDurationMin: 180, defaultMin: 4, defaultMax: 10, supportsTeams: false, supportsTournament: true, tags: ["cartes","bluff","stratégie"] },
  { slug: "chess", name: "Échecs", nameEn: "Chess", emoji: "♟️", category: "GAME", subcategory: "STRATEGY", defaultDurationMin: 60, defaultMin: 2, defaultMax: 2, supportsTeams: false, supportsTournament: true, tags: ["réflexion","stratégie","classique"] },
  { slug: "bowling", name: "Bowling", nameEn: "Bowling", emoji: "🎳", category: "GAME", subcategory: "INDOOR", defaultDurationMin: 90, defaultMin: 2, defaultMax: 8, supportsTeams: true, supportsTournament: true, tags: ["quilles","loisir","indoor"] },
  { slug: "videogames", name: "Jeux Vidéo", nameEn: "Video Games", emoji: "🎮", category: "GAME", subcategory: "DIGITAL", defaultDurationMin: 180, defaultMin: 2, defaultMax: 50, supportsTeams: true, supportsTournament: true, tags: ["console","PC","en-ligne"] },
  
  // ── SOCIAL ─────────────────────────────────────────────────
  { slug: "dating", name: "Rencontre", nameEn: "Dating", emoji: "❤️", category: "SOCIAL", subcategory: "DATING", defaultDurationMin: 60, defaultMin: 2, defaultMax: 2, supportsTeams: false, supportsTournament: false, tags: ["romantique","café","duo"] },
  { slug: "friendship", name: "Amitié", nameEn: "Friendship", emoji: "👫", category: "SOCIAL", subcategory: "AMITIE", defaultDurationMin: 120, defaultMin: 2, defaultMax: 20, supportsTeams: false, supportsTournament: false, tags: ["rencontre","social","amis"] },
  { slug: "networking", name: "Networking", nameEn: "Networking", emoji: "💼", category: "BUSINESS", subcategory: "PRO", defaultDurationMin: 120, defaultMin: 10, defaultMax: 100, supportsTeams: false, supportsTournament: false, tags: ["professionnel","contacts","carrière"] },
  { slug: "language-exchange", name: "Échange Linguistique", nameEn: "Language Exchange", emoji: "🗣️", category: "LEARNING", subcategory: "LANGUES", defaultDurationMin: 90, defaultMin: 2, defaultMax: 20, supportsTeams: false, supportsTournament: false, tags: ["langue","culture","apprentissage"] },
  { slug: "party", name: "Fête", nameEn: "Party", emoji: "🎉", category: "SOCIAL", subcategory: "FETE", defaultDurationMin: 240, defaultMin: 10, defaultMax: 200, supportsTeams: false, supportsTournament: false, tags: ["musique","dance","célébration"] },
  
  // ── FOOD & DRINK ───────────────────────────────────────────
  { slug: "restaurant", name: "Sortie Restaurant", nameEn: "Restaurant Outing", emoji: "🍽️", category: "FOOD_DRINK", subcategory: "RESTAURANT", defaultDurationMin: 120, defaultMin: 2, defaultMax: 20, supportsTeams: false, supportsTournament: false, tags: ["gastronomie","repas","table"] },
  { slug: "bar", name: "Soirée Bar", nameEn: "Bar Night", emoji: "🍺", category: "FOOD_DRINK", subcategory: "BAR", defaultDurationMin: 180, defaultMin: 2, defaultMax: 30, supportsTeams: false, supportsTournament: false, tags: ["cocktail","ambiance","nuit"] },
  { slug: "cafe", name: "Café", nameEn: "Coffee", emoji: "☕", category: "FOOD_DRINK", subcategory: "CAFE", defaultDurationMin: 60, defaultMin: 2, defaultMax: 10, supportsTeams: false, supportsTournament: false, tags: ["café","détente","discussion"] },
  
  // ── CULTURE ────────────────────────────────────────────────
  { slug: "cinema", name: "Cinéma", nameEn: "Cinema", emoji: "🎬", category: "CULTURE", subcategory: "ARTS", defaultDurationMin: 150, defaultMin: 2, defaultMax: 20, supportsTeams: false, supportsTournament: false, tags: ["film","salle","popcorn"] },
  { slug: "karaoke", name: "Karaoké", nameEn: "Karaoke", emoji: "🎤", category: "CULTURE", subcategory: "MUSIQUE", defaultDurationMin: 180, defaultMin: 4, defaultMax: 30, supportsTeams: false, supportsTournament: false, tags: ["chant","micro","ambiance"] },
  { slug: "concert", name: "Concert / Spectacle", nameEn: "Concert", emoji: "🎵", category: "CULTURE", subcategory: "MUSIQUE", defaultDurationMin: 180, defaultMin: 2, defaultMax: 1000, supportsTeams: false, supportsTournament: false, tags: ["musique","live","scène"] },
  { slug: "dance", name: "Danse", nameEn: "Dancing", emoji: "💃", category: "CULTURE", subcategory: "DANSE", defaultDurationMin: 120, defaultMin: 2, defaultMax: 30, supportsTeams: false, supportsTournament: false, tags: ["salsa","bachata","swing"] },
  { slug: "theater", name: "Théâtre", nameEn: "Theater", emoji: "🎭", category: "CULTURE", subcategory: "ARTS", defaultDurationMin: 150, defaultMin: 2, defaultMax: 20, supportsTeams: false, supportsTournament: false, tags: ["scène","jeu","arts"] },
  { slug: "art", name: "Art & Création", nameEn: "Art & Creation", emoji: "🎨", category: "CULTURE", subcategory: "ARTS", defaultDurationMin: 120, defaultMin: 2, defaultMax: 20, supportsTeams: false, supportsTournament: false, tags: ["peinture","dessin","créativité"] },
  
  // ── TRAVEL ─────────────────────────────────────────────────
  { slug: "travel", name: "Voyage", nameEn: "Travel", emoji: "✈️", category: "TRAVEL", subcategory: "VOYAGE", defaultDurationMin: 1440, defaultMin: 2, defaultMax: 20, supportsTeams: false, supportsTournament: false, tags: ["international","découverte","aventure"] },
  { slug: "day-trip", name: "Excursion", nameEn: "Day Trip", emoji: "🚗", category: "TRAVEL", subcategory: "EXCURSION", defaultDurationMin: 480, defaultMin: 2, defaultMax: 15, supportsTeams: false, supportsTournament: false, tags: ["voiture","nature","journée"] },
];

export const CATEGORY_META: Record<string, { label: string; emoji: string; color: string }> = {
  SPORT:      { label: "Sports",          emoji: "⚽", color: "#2bde98" },
  GAME:       { label: "Jeux",            emoji: "🎮", color: "#5b7fff" },
  SOCIAL:     { label: "Social",          emoji: "👥", color: "#ff5f7e" },
  FOOD_DRINK: { label: "Manger & Boire",  emoji: "🍽️", color: "#ff8c42" },
  CULTURE:    { label: "Culture",         emoji: "🎭", color: "#b47fff" },
  NATURE:     { label: "Nature",          emoji: "🌲", color: "#4ad66d" },
  LEARNING:   { label: "Apprentissage",   emoji: "🧠", color: "#ffcc00" },
  BUSINESS:   { label: "Business",        emoji: "💼", color: "#7fb3ff" },
  TRAVEL:     { label: "Voyages",         emoji: "✈️", color: "#ff9f43" },
};
