export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[]; // ex: ["Next.js", "Framer"]
  videoUrl: string; // Chemin vers la vidéo dans public/
  videoPoster?: string; // Chemin vers l'image poster de la vidéo
  link?: string; // Lien vers le site live
  github?: string; // Lien vers le code
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description: "Le site sur lequel vous naviguez. Conçu pour la performance et l'expérience visuelle avec des animations fluides.",
    tags: ["React", "Framer Motion", "Next.js", "TypeScript", "Tailwind CSS", "Docker", "Nginx"],
    videoUrl: "/videos/portfolio.mp4",
    videoPoster: "/images/portfolio_poster.png",
    link: "#",
    github: "https://github.com/AurelienBaraquin/portfolio",
  },
  {
    id: 2,
    title: "Pixel Quest",
    description: "Un jeu narratif type visual novel généré en temps réel avec l'IA pour les images et les dialogues. Les chemins déjà parcourus sont mémorisés en base de données pour optimiser l'expérience.",
    tags: ["Vite", "React", "TypeScript", "Gemini API", "Turso DB", "SQLite", "Docker", "Nginx"],
    videoUrl: "/videos/pixel_quest.mp4",
    videoPoster: "/images/pixel_quest_poster.png",
    link: "https://aurelienb.com/pixel-quest",
    github: "https://github.com/AurelienBaraquin/pixel_quest",
  },
  {
    id: 3,
    title: "Emulateur de NES en Rust",
    description: "Un projet personnel visant à créer un émulateur de console NES en utilisant le langage Rust pour une performance optimale.",
    tags: ["Rust", "Emulation", "NES", "SDL2", "WebAssembly", "CPU", "PPU"],
    videoUrl: "/videos/rust_nes.mp4",
    videoPoster: "/images/rust_nes_poster.png",
    github: "https://github.com/AurelienBaraquin/nes_rust_emulator",
  },
  {
    id: 4,
    title: "NESCARGOT - Moteur de jeu NES en C",
    description: "Un moteur de jeu développé en C et en Assembleur pour faciliter la création de jeux sur la console NES, avec des outils pour la gestion des sprites, de la musique et des entrées utilisateur.",
    tags: ["C", "ASM", "Game Engine", "NES", "Sprites", "Audio", "Input"],
    videoUrl: "/videos/nescargot.mp4",
    videoPoster: "/images/nescargot_poster.png",
    github: "https://github.com/AurelienBaraquin/NESCARGOT",
  },
  {
    id: 5,
    title: "CrabInk - Console E-Ink Portable",
    description: "Une console portable dédiée à la lecture de Visual Novels sur écran E-Ink. Le système repose sur une architecture logicielle événementielle en Python et intègre un moteur de jeu sur mesure (Machine Virtuelle à OpCodes) pour interpréter des scénarios complexes tout en optimisant la consommation d'énergie. La console est encore en développement et sera peut-être commercialisée à l'avenir.",
    tags: ["Python", "Rust", "Raspberry Pi", "E-Ink", "Embedded", "Hardware"],
    videoUrl: "/videos/crabink.mp4",
    videoPoster: "/images/crabink_poster.png",
  },
  // Ajoute d'autres projets ici...
];