"use client";

import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);

  // --- 1. PARALLAXE VIDÉO (Retour à la version subtile) ---
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"], // Commence quand le haut de la section entre, finit quand elle sort
  });
  
  // La vidéo descend doucement pendant le scroll (Effet de profondeur)
  const yProgress = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1]); // Fade in rapide

  // --- 2. CONFIGURATION CASCADE (Stagger) ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, // Délai de 0.2s entre chaque ligne (plus marqué)
        delayChildren: 0.1 
      }
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 30 }, // Départ plus bas pour que la remontée soit visible
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-8 md:gap-16 items-center mb-24 md:mb-40",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* --- BLOC TEXTE --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }} // Déclenche un peu avant le centre
        className="flex-1 space-y-6 text-center md:text-left"
      >
        
        {/* Numéro */}
        <motion.div variants={childVariants} className="text-primary/20 text-6xl font-bold font-mono">
           0{index + 1}.
        </motion.div>
        
        {/* Titre */}
        <motion.h3 variants={childVariants} className="text-3xl md:text-4xl font-bold tracking-tight">
          {project.title}
        </motion.h3>
        
        {/* Description */}
        <motion.p variants={childVariants} className="text-muted-foreground text-lg leading-relaxed">
          {project.description}
        </motion.p>

        {/* Tags */}
        <motion.div variants={childVariants} className={cn("flex flex-wrap gap-2 justify-center", isEven ? "md:justify-start" : "md:justify-end")}>
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 border border-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Boutons (Taille réduite) */}
        <motion.div variants={childVariants} className={cn("flex items-center gap-4 pt-4 justify-center", isEven ? "md:justify-start" : "md:justify-end")}>
          {project.github && (
            <Link 
              href={project.github} 
              target="_blank"
              className="p-3 rounded-full border border-border/50 bg-background hover:bg-muted transition-colors"
            >
              <Github size={20} />
            </Link>
          )}
          
          {project.link && (
            <Link href={project.link} target="_blank">
                <MagneticButton className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:shadow-primary/20 transition-all">
                    Voir le projet 
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </MagneticButton>
            </Link>
          )}
        </motion.div>
      </motion.div>

      {/* --- BLOC VIDÉO (Retour à la version simple + Parallaxe) --- */}
      <div className="flex-1 w-full">
        <motion.div 
            style={{ y: yProgress, opacity: opacityProgress }}
            className="relative rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl overflow-hidden group"
        >
            {/* Glow effect subtil */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-700"></div>
            
            <div className="relative rounded-lg overflow-hidden aspect-video bg-muted/50">
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

    </div>
  );
}