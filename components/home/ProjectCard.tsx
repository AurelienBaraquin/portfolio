"use client";

import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);

  // Parallaxe subtil sur la vidéo (optionnel mais très classe)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const yProgress = useTransform(scrollYProgress, [0, 1], [100, -50]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // Déclenche un peu avant
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "flex flex-col gap-8 md:gap-16 items-center mb-24 md:mb-40",
        // C'est ici que l'inversion se fait :
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* --- BLOC TEXTE --- */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        {/* Numéro décoratif */}
        <div className="text-primary/20 text-6xl font-bold font-mono">
           0{index + 1}.
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className={cn("flex flex-wrap gap-2 justify-center", isEven ? "md:justify-start" : "md:justify-end")}>
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Boutons Liens */}
        <div className={cn("flex items-center gap-4 pt-4 justify-center", isEven ? "md:justify-start" : "md:justify-end")}>
          {project.github && (
            <Link 
              href={project.github} 
              target="_blank"
              className="p-2 rounded-full border bg-background hover:bg-muted transition-colors"
            >
              <Github size={20} />
            </Link>
          )}
          {project.link && (
            <Link 
              href={project.link} 
              target="_blank"
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Voir le site <ExternalLink size={16} />
            </Link>
          )}
        </div>
      </div>

      {/* --- BLOC VIDÉO / IMAGE --- */}
      <div className="flex-1 w-full">
        {/* Container avec effet de profondeur (Glass + Glow) */}
        <motion.div 
            style={{ y: yProgress }} // Application du parallaxe
            className="relative rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl overflow-hidden group"
        >
            {/* Glow effect derrière la vidéo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative rounded-lg overflow-hidden aspect-video bg-muted/50">
               {/* Astuce : Le muted est OBLIGATOIRE pour l'autoplay sur Chrome/Safari.
                  playsInline est OBLIGATOIRE pour l'autoplay sur iPhone.
               */}
               <video
                 src={project.videoUrl}
                 autoPlay
                 loop
                 muted
                 playsInline
                 className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
               />
            </div>
        </motion.div>
      </div>

    </motion.div>
  );
}