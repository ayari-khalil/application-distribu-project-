
# 🎮 SkillExchange Frontend

Ce dépôt contient le **frontend Angular** de l'application **SkillExchange**, une plateforme de gamification des compétences permettant aux utilisateurs d’échanger des savoirs, de gagner des badges, de suivre leur progression et de consulter leur historique d’activités.

---

## 🚀 Démarrage

### Installation

```bash
npm install
```

### Lancer le serveur de développement

```bash
ng serve
```

> Le proxy est géré via `proxy.conf.json` pour rediriger les appels API vers le backend.

---

## 📁 Structure Principale des Composants

### 1. 🏆 **Gamification / Leaderboard**
- **Composant :** `leaderboard.component.ts`
- **Fonction :** Affiche les meilleurs utilisateurs selon leurs points et niveaux.
- **Données :**
  ```json
  [
    { "id": 3, "userId": 3, "points": 720, "level": 7 },
    { "id": 2, "userId": 2, "points": 420, "level": 4 },
    { "id": 1, "userId": 1, "points": 140, "level": 1 }
  ]
  ```
- **UI :** Utilisation de `mat-table` avec colonnes dynamiques.

---

### 2. 🥇 **Badges Utilisateur**
- **Composant :** `badge.component.ts`
- **Fonction :** Affiche la liste des badges gagnés par l’utilisateur.
- **Données dynamiques :** récupérées depuis l’API backend (`getBadges()`).
- **Exemple de données :**
  ```json
  [
    { "id": 1, "userId": 1, "title": "Niveau 1", "description": "Atteint le niveau 1", "dateAwarded": "2025-04-21T22:46:33.372156" }
  ]
  ```
- **Affichage avec icons statiques :** `emoji_events`, `school`, `swap_horiz`, etc.
- **Types personnalisés :** bronze, silver, gold

---

### 3. 📜 **Historique d'activités**
- **Composant :** `history.component.ts`
- **Fonction :** Affiche les événements passés liés à l’activité de l’utilisateur.
- **Design :** Interface élégante, moderne, **sans Tailwind CSS**, 100% en CSS pur.
- **UI inclut :**
  - Icône (Material Icon)
  - Titre
  - Description
  - Points (+/-)
  - Date

---

## 🎨 Stack et Technologies

- Angular 17+
- Angular Material
- TypeScript
- CSS pur (sans Tailwind)
- Responsive Design

---

## 📦 Build

```bash
ng build
```

Les fichiers finaux seront générés dans le dossier `dist/`.

---

## 🧠 Développé avec ❤️ par l’équipe SkillExchange

- Gamification intégrée (points, niveaux, badges)
- Affichage dynamique des données
- Expérience utilisateur soignée
