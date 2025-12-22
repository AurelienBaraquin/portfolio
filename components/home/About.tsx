"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BentoCard } from "../about/BentoCard";
import { TechStack } from "../about/TechStack";
import { TimeLocation } from "../about/TimeLocation";
import { SpotifyCard } from "../about/SpotifyCard";
import { HobbiesCard } from "../about/HobbiesCard";
import { ConnectCard } from "../about/ConnectCard";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook Scroll : On track la progression du container dans la vue
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start end" = quand le haut du container touche le bas de l'écran
    // "end end" = quand le bas du container touche le bas de l'écran
    offset: ["start end", "center center"],
  });

  // TRANSFORMATIONS 3D
  // 1. Rotation : On part penché (20deg) et on finit plat (0deg)
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  // 2. Échelle : On part un peu petit (0.9) pour donner l'impression que c'est loin
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  // 3. Opacité : Fondu classique
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section 
        id="a-propos" 
        className="py-24 container px-6 mx-auto perspective-1000" // perspective-1000 est CRUCIAL
    >
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            À propos de moi
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-muted-foreground text-lg"
          >
              Au-delà du code, voici un aperçu de mon univers, de ma musique et de mes passions.
          </motion.p>
      </div>

      {/* --- LE CONTAINER 3D --- */}
      <motion.div
        ref={containerRef}
        style={{
            rotateX, // Applique la rotation liée au scroll
            scale,   // Applique l'échelle
            opacity, // Applique l'opacité
            transformStyle: "preserve-3d", // Important pour la 3D
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[250px]"
      >
          
          {/* ... (Tes BentoCards ne changent pas, copie-les ici comme avant) ... */}
          
          <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between gap-6">
               {/* ... Contenu BIO ... */}
               <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
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
                <div className="mt-auto pt-4 border-t border-border/50">
                   <TechStack />
                </div>
          </BentoCard>

          <BentoCard className="p-5">
              <SpotifyCard />
          </BentoCard>

          <BentoCard>
              <TimeLocation />
          </BentoCard>

          <BentoCard className="md:col-span-2 p-0 border-0 overflow-hidden">
              <HobbiesCard />
          </BentoCard>

          <div className="md:row-span-1 h-full">
              <ConnectCard />
          </div>

      </motion.div>
    </section>
  );
}