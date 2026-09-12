# SaYes — Discover · Meet · Play · Join · Create · Enjoy

> Plateforme mondiale de vie sociale, sports, jeux, sorties et activités locales.

## 🚀 Stack
- **Framework** : Next.js 15 (App Router) + TypeScript
- **Backend** : Firebase (Firestore + Auth + Storage)
- **Styling** : Tailwind CSS + Design System SaYes
- **Déploiement** : Vercel

## 🏗️ 12 Moteurs
| # | Moteur | Description |
|---|--------|-------------|
| 1 | 🟦 City | Pays → Province → Ville → Quartier |
| 2 | 🟢 Activities | Moteur universel — tout type d'activité |
| 3 | 🏆 Tournament | Tournois, équipes, matchs, classements |
| 4 | 🗺️ City Map | Carte interactive en temps réel |
| 5 | 🍽️ Places | Restaurants, bars, terrains, clubs |
| 6 | 🎮 Games | Chasse au trésor, quiz, défis urbains |
| 7 | 👥 People | Profils, amis, groupes, dating |
| 8 | 🤖 IA | Crée une activité en une phrase |
| 9 | 💰 Business | Pros, billets, réservations, promotions |
| 10 | 🏅 Points | Niveaux, badges, récompenses |
| 11 | 💬 Chat | Messages directs et salles d'activité |
| 12 | 🔔 Notifications | Alertes temps réel |

## 🎯 40+ Types d'activités
Sports · Jeux · Social · Gastronomie · Culture · Nature · Apprentissage · Business · Voyages

## 🗺️ Roadmap
- **Étape 1** ✅ Architecture + Design System + Moteurs fondamentaux
- **Étape 2** 🔜 City + Map + Places (Google Maps)
- **Étape 3** Firebase Auth + Profils + Groupes
- **Étape 4** Universal Activity Engine (CRUD complet)
- **Étape 5** Sports + Tournaments + Teams
- **Étape 6** Games + Chasse au Trésor
- **Étape 7** Chat + Notifications temps réel
- **Étape 8** Business + Restaurants + Bars
- **Étape 9** Points + Badges + Récompenses
- **Étape 10** IA + Paiements + Monétisation

## 🌍 Villes actives
- 🇨🇦 **Montréal** (actif)
- 🇨🇦 **Laval** (actif)
- 🇨🇦 Toronto · Vancouver (bientôt)
- 🇫🇷 Paris · 🇹🇳 Tunis (bientôt)

## 🛠️ Dev
```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## 📁 Structure
```
src/
├── app/          # Pages (App Router)
│   ├── activities/
│   ├── city/
│   ├── map/
│   ├── people/
│   ├── games/
│   ├── tournaments/
│   └── auth/
├── components/   # Composants réutilisables
│   ├── layout/   # Navbar, Footer
│   ├── activities/
│   └── shared/
├── data/         # Templates, villes, badges
├── lib/          # Services Firebase, hooks
└── types/        # TypeScript types
```

---
© 2025 SaYes — Montréal, Canada
