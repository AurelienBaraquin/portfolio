export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[]; // ex: ["Next.js", "Framer"]
  videoUrl: string; // Chemin vers la vidéo dans public/
  link?: string; // Lien vers le site live
  github?: string; // Lien vers le code
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SaaS Notes App",
    description: "Une application complète de gestion de notes et tâches avec authentification, base de données et temps réel via WebSockets.",
    tags: ["Next.js 15", "Prisma", "Pusher", "Shadcn UI"],
    videoUrl: "/videos/demo-saas.mp4", // On mettra une vraie vidéo plus tard
    link: "https://monsaas.com",
    github: "https://github.com/tonuser/saas-notes",
  },
  {
    id: 2,
    title: "Portfolio 2024",
    description: "Le site sur lequel vous naviguez. Conçu pour la performance et l'expérience visuelle avec des animations fluides.",
    tags: ["React", "Framer Motion", "Lenis Scroll"],
    videoUrl: "/videos/demo-portfolio.mp4",
    link: "#",
  },
  // Ajoute d'autres projets ici...
];