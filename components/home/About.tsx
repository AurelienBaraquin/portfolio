"use client";

import { motion } from "framer-motion";
import { BentoCard } from "../about/BentoCard";
import { TechStack } from "../about/TechStack";
import { TimeLocation } from "../about/TimeLocation";
import { CopyEmail } from "../about/CopyEmail";
import Image from "next/image";

export function About() {
  return (
    <section id="a-propos" className="py-24 container px-6 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">À propos de moi</h2>
            <p className="text-muted-foreground text-lg">
                Plus qu'un développeur, je suis un créateur d'expériences digitales. 
                J'aime quand c'est beau, rapide et bien codé.
            </p>
        </div>

        {/* LA BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[500px]">
            
            {/* 1. Bloc Bio (Grand carré à gauche) */}
            <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-center gap-6">
                <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                         {/* Mets ta photo dans public/me.jpg */}
                        <div className="w-full h-full bg-muted flex items-center justify-center text-xs">Photo</div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Ton Prénom</h3>
                        <p className="text-primary font-medium">Fullstack Developer</p>
                    </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                    Passionné par le développement web depuis 5 ans, je me spécialise dans l'écosystème React/Next.js. 
                    J'adore résoudre des problèmes complexes et créer des interfaces qui donnent le sourire aux utilisateurs.
                    Quand je ne code pas, je fais probablement de la veille techno ou je prépare mon prochain projet SaaS.
                </p>
                <TechStack />
            </BentoCard>

            {/* 2. Bloc Time & Location (Haut Droite) */}
            <BentoCard>
                <TimeLocation />
            </BentoCard>

            {/* 3. Bloc Email (Bas Droite) */}
            <div className="md:row-span-1 rounded-3xl overflow-hidden">
                <CopyEmail />
            </div>

        </div>
      </motion.div>
    </section>
  );
}