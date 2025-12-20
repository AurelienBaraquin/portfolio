"use client";

import { motion } from "framer-motion";
import { BentoCard } from "../about/BentoCard";
import { TechStack } from "../about/TechStack";
import { TimeLocation } from "../about/TimeLocation";
import { SpotifyCard } from "../about/SpotifyCard";
import { HobbiesCard } from "../about/HobbiesCard";
import { ConnectCard } from "../about/ConnectCard";
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
                Au-delà du code, voici un aperçu de mon univers, de ma musique et de mes passions.
            </p>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[250px]">
            
            {/* 1. BIO (2x2) : Coin Haut Gauche */}
            <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                         {/* Photo à mettre dans public/me.jpg */}
                        <div className="w-full h-full bg-muted flex items-center justify-center text-xs">Photo</div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Ton Prénom</h3>
                        <p className="text-primary font-medium">Créateur Digital & Dev</p>
                    </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                    Développeur passionné, je combine rigueur technique et sensibilité artistique.
                    Pour moi, un site web doit être comme une chorégraphie de Jumpstyle : 
                    précis, rythmé et impactant.
                    <br/><br/>
                    Spécialisé en <strong>React, Next.js et Motion</strong>, je transforme des idées complexes en interfaces fluides.
                </p>
                {/* Tech Stack en bas de la bio */}
                <div className="mt-auto pt-4 border-t border-border/50">
                   <TechStack />
                </div>
            </BentoCard>

            {/* 2. SPOTIFY (1x1) : Haut Droite */}
            <BentoCard className="p-5">
                <SpotifyCard />
            </BentoCard>

            {/* 3. TIME (1x1) : Milieu Droite */}
            <BentoCard>
                <TimeLocation />
            </BentoCard>

            {/* 4. HOBBIES (2x1) : Bas Gauche (Largeur double) */}
            <BentoCard className="md:col-span-2 p-0 border-0 overflow-hidden">
                <HobbiesCard />
            </BentoCard>

            {/* 5. CONTACT (1x1) : Bas Droite */}
            <div className="md:row-span-1 h-full">
                {/* Pas de BentoCard ici car ConnectCard a déjà ses propres bordures */}
                <ConnectCard />
            </div>

        </div>
      </motion.div>
    </section>
  );
}