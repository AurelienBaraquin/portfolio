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
    description: "Plateforme Interactive IA : Intégration de LLMs (Gemini API) et gestion de base de données vectorielle pour une expérience utilisateur dynamique et persistante.",
    tags: ["Vite", "React", "TypeScript", "Gemini API", "Turso DB", "SQLite", "Docker", "Nginx"],
    videoUrl: "/videos/pixel_quest.mp4",
    videoPoster: "/images/pixel_quest_poster.png",
    link: "https://aurelienb.com/pixel-quest",
    github: "https://github.com/AurelienBaraquin/pixel_quest",
  },
  {
    id: 3,
    title: "Emulateur de NES en Rust",
    description: "Ingénierie de Haute Performance : Développement d'un système complexe en Rust. Maîtrise critique de la gestion mémoire, des cycles CPU et de l'optimisation bas-niveau.",
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
    description: "R&D Produit & Système Embarqué : Conception d'une architecture logicielle événementielle optimisant la consommation d'énergie sur hardware contraint.",
    tags: ["Python", "Rust", "Raspberry Pi", "E-Ink", "Embedded", "Hardware"],
    videoUrl: "/videos/crabink.mp4",
    videoPoster: "/images/crabink_poster.png",
  },
  // Ajoute d'autres projets ici...
];