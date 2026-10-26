// ============================================================
//  CATALOGUE DE L'ARCADE DJI DJAM CYBER
//
//  Pour ajouter un jeu :
//   1. Mets le jeu dans un dossier  jeux/games/<nom-du-jeu>/index.html
//   2. Mets une image (capture d'écran) dans  jeux/images/<nom-du-jeu>.png
//   3. Copie un bloc { ... } ci-dessous dans ARCADE_GAMES et adapte-le.
//  Le jeu le plus récent doit être placé EN PREMIER dans la liste.
// ============================================================

window.ARCADE_GAMES = [
  {
    slug: "course-de-tortues",
    title: "La course la plus lente",
    emoji: "🐢",
    tagline: "Le dernier arrivé a gagné.",
    description:
      "Un championnat de tortues où il faut arriver en dernier. Interdit de s'arrêter, et plus tu vas lentement, plus ta tortue vacille : trouve la vitesse la plus lente possible sans te retourner sur ta carapace.",
    path: "games/course-de-tortues/index.html",
    cover: "images/course-de-tortues.png",
    orientation: "paysage",          // "paysage" ou "portrait"
    accent: "#4cd97b",
    tags: ["Équilibre", "Course", "Absurde"],
    difficulty: 3,                   // de 1 à 5
    duration: "1 à 2 min par course",
    content: "4 courses",
    touch: true,
    added: "2026-10-26",
    controls: [
      ["Espace", "avancer (maintenir)"],
      ["← →", "garder l'équilibre"],
      ["Échap", "pause"],
      ["M", "couper le son"],
    ],
    // Lit la progression enregistrée par le jeu dans le navigateur
    progress() {
      const s = readJSON("tortues-v1");
      if (!s || !s.best) return null;
      const wins = Object.values(s.best).filter((r) => r === 1).length;
      return { value: wins, max: 4, label: `${wins} / 4 courses gagnées` };
    },
  },
  {
    slug: "perds-si-tu-peux",
    title: "Perds si tu peux !",
    emoji: "🔥",
    tagline: "Le jeu où perdre est un exploit.",
    description:
      "Ton but : tomber dans la lave. Mais des filets, un ange gardien, des ventilateurs et des bumpers font tout pour te sauver. Faufile-toi dans les trous qui bougent et perds le plus vite possible.",
    path: "games/perds-si-tu-peux/index.html",
    cover: "images/perds-si-tu-peux.png",
    orientation: "portrait",
    accent: "#ff5a6e",
    tags: ["Réflexes", "Adresse", "Absurde"],
    difficulty: 3,
    duration: "10 à 30 s par niveau",
    content: "6 niveaux",
    touch: true,
    added: "2026-10-26",
    controls: [
      ["← →", "se déplacer"],
      ["↓", "plonger plus vite"],
      ["Échap", "pause"],
      ["R", "recommencer"],
      ["M", "couper le son"],
    ],
    progress() {
      const s = readJSON("perds-v3");
      if (!s || !s.levels) return null;
      const stars = Object.values(s.levels).reduce((n, l) => n + (l.stars || 0), 0);
      return { value: stars, max: 18, label: `${stars} / 18 étoiles` };
    },
  },
];

// Jeux en préparation (affichés dans la rubrique « Bientôt »)
window.ARCADE_SOON = [
  { emoji: "🔴", title: "Le bouton interdit", tagline: "Surtout, ne clique pas. Le bouton, lui, insiste." },
  { emoji: "🐈", title: "Le chat qui ne dort pas", tagline: "Éteins, chuchote, tire les rideaux… il se réveille toujours." },
  { emoji: "🧱", title: "Casse-briques du lagon", tagline: "Un classique revisité, sous les tropiques." },
];

function readJSON(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null");
  } catch (e) {
    return null;
  }
}
