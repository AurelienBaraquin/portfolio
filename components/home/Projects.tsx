"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projets" className="py-20 md:py-32 container px-6 mx-auto">
      
      {/* Titre de Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Mes Réalisations
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Une sélection de mes projets récents, alliant technique complexe et design soigné.
        </p>
      </motion.div>

      {/* Liste des cartes */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
          />
        ))}
      </div>

    </section>
  );
}