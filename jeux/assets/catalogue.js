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
    slug: "course-de-pirogues",
    title: "Course de pirogues",
    emoji: "🛶",
    tagline: "Pagaie dans le lagon de Mayotte.",
    description:
      "Course de pirogues à balancier dans le lagon. Pagaie en rythme (gauche, droite), passe entre les bouées, évite les coraux et les tortues, et attrape la vague parfaite pour un turbo.",
    path: "games/course-de-pirogues/index.html",
    cover: "images/course-de-pirogues.png",
    orientation: "paysage",
    accent: "#2fd3e0",
    tags: ["Mayotte", "Course", "Rythme"],
    difficulty: 3,
    duration: "30 s à 1 min 30 par course",
    content: "4 courses",
    touch: true,
    added: "2026-10-26",
    controls: [
      ["← →", "pagayer en alternant"],
      ["← ← ←", "tourner à gauche (même côté)"],
      ["Échap", "pause"],
      ["M", "couper le son"],
    ],
    progress() {
      const s = readJSON("pirogues-v1");
      if (!s || !s.best) return null;
      const wins = Object.values(s.best).filter((r) => r === 1).length;
      return { value: wins, max: 4, label: `${wins} / 4 courses gagnées` };
    },
  },
  {
    slug: "belesset",
    title: "Belesset",
    emoji: "🪨",
    tagline: "Lance, ramasse, attrape !",
    description:
      "Inspiré du belesset, jeu traditionnel mahorais proche des osselets : lance le caillou en l'air, ramasse les cailloux au sol et rattrape-le avant qu'il ne tombe. 7 cailloux, 7 étapes.",
    path: "games/belesset/index.html",
    cover: "images/belesset.png",
    orientation: "paysage",
    accent: "#e58a4f",
    tags: ["Mayotte", "Adresse", "Tradition"],
    difficulty: 3,
    duration: "1 à 2 min par étape",
    content: "7 étapes",
    touch: true,
    added: "2026-10-26",
    controls: [
      ["Espace", "lancer / attraper"],
      ["Clic", "ramasser un caillou"],
      ["← →", "choisir un caillou au clavier"],
      ["Échap", "pause"],
    ],
    progress() {
      const s = readJSON("belesset-v1");
      if (!s || !s.stages) return null;
      const stars = Object.values(s.stages).reduce((n, l) => n + (l.stars || 0), 0);
      return { value: stars, max: 21, label: `${stars} / 21 étoiles` };
    },
  },
  {
    slug: "lachi",
    title: "Lachi",
    emoji: "🥥",
    tagline: "La balle en feuilles de coco.",
    description:
      "Inspiré du lachi, jeu traditionnel mahorais : lance la balle tressée en feuilles de coco pour toucher tes adversaires, et esquive leurs tirs. 8 niveaux, jusqu'à 3 balles en même temps !",
    path: "games/lachi/index.html",
    cover: "images/lachi.png",
    orientation: "paysage",
    accent: "#9bd15a",
    tags: ["Mayotte", "Action", "Tradition"],
    difficulty: 3,
    duration: "1 à 2 min par niveau",
    content: "8 niveaux",
    touch: true,
    added: "2026-10-26",
    controls: [
      ["ZQSD / ↑↓←→", "se déplacer"],
      ["Clic", "viser et lancer"],
      ["Espace", "lancer vers le plus proche / attraper"],
      ["Échap", "pause"],
    ],
    progress() {
      const s = readJSON("lachi-v1");
      if (!s || !s.levels) return null;
      const stars = Object.values(s.levels).reduce((n, l) => n + (l.stars || 0), 0);
      return { value: stars, max: 24, label: `${stars} / 24 étoiles` };
    },
  },
  {
    slug: "course-de-pneus",
    title: "Course de pneus",
    emoji: "🛞",
    tagline: "Pousse ton pneu jusqu'à la ligne !",
    description:
      "Inspiré de la course de pneus, jeu d'enfants à Mayotte : fais rouler ton vieux pneu avec un bâton, pousse au bon moment et saute par-dessus les trous, les poules et les chèvres.",
    path: "games/course-de-pneus/index.html",
    cover: "images/course-de-pneus.png",
    orientation: "paysage",
    accent: "#ffb347",
    tags: ["Mayotte", "Course", "Rythme"],
    difficulty: 2,
    duration: "20 à 40 s par course",
    content: "4 courses",
    touch: true,
    added: "2026-10-26",
    controls: [
      ["Espace", "pousser le pneu (en rythme)"],
      ["↑", "sauter"],
      ["Échap", "pause"],
      ["M", "couper le son"],
    ],
    progress() {
      const s = readJSON("pneus-v1");
      if (!s || !s.best) return null;
      const wins = Object.values(s.best).filter((r) => r === 1).length;
      return { value: wins, max: 4, label: `${wins} / 4 courses gagnées` };
    },
  },
  {
    slug: "mgourou",
    title: "Mgourou",
    emoji: "🪢",
    tagline: "Le tir à la corde en rythme.",
    description:
      "Inspiré du mgourou, le tir à la corde pratiqué à Mayotte : tire au bon rythme pour faire passer le drapeau de ton côté. 6 équipes à battre, ou à deux sur le même écran.",
    path: "games/mgourou/index.html",
    cover: "images/mgourou.png",
    orientation: "paysage",
    accent: "#ff9f5a",
    tags: ["Mayotte", "Rythme", "À deux"],
    difficulty: 2,
    duration: "1 à 2 min par match",
    content: "6 niveaux",
    touch: true,
    added: "2026-10-26",
    controls: [
      ["Espace / A", "tirer (joueur 1)"],
      ["L", "tirer (joueur 2)"],
      ["Échap", "pause"],
      ["M", "couper le son"],
    ],
    progress() {
      const s = readJSON("mgourou-v1");
      if (!s || !s.levels) return null;
      const stars = Object.values(s.levels).reduce((n, l) => n + (l.stars || 0), 0);
      return { value: stars, max: 18, label: `${stars} / 18 étoiles` };
    },
  },
  {
    slug: "mraha",
    title: "M'raha",
    emoji: "🌰",
    tagline: "Le jeu de graines de Mayotte.",
    description:
      "Le jeu traditionnel de Mayotte, sur un plateau en bois de 4 rangées de 8 trous. Sème tes graines, prends celles d'en face et bloque ton adversaire. Contre l'ordinateur (3 niveaux) ou à deux sur le même écran.",
    path: "games/mraha/index.html",
    cover: "images/mraha.png",
    orientation: "paysage",
    accent: "#e0a96a",
    tags: ["Mayotte", "Réflexion", "Tradition"],
    difficulty: 3,
    duration: "5 à 10 min par partie",
    content: "3 niveaux",
    touch: true,
    added: "2026-10-26",
    controls: [
      ["Clic", "choisir un trou (2 graines ou plus)"],
      ["Clic", "pendant le semis : accélérer"],
      ["?", "afficher les règles"],
      ["M", "couper le son"],
    ],
    progress() {
      const s = readJSON("mraha-v1");
      if (!s || !s.wins) return null;
      return { value: Math.min(s.wins, 10), max: 10, label: `${s.wins} victoire${s.wins > 1 ? "s" : ""} contre l'ordinateur` };
    },
  },
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
