"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Repeat } from "lucide-react";
import { cn } from "@/lib/utils";

const HOBBIES = [
  {
    id: "calisthenics",
    name: "Calisthenie",
    emoji: "💪",
    video: "/videos/calisthenics.mp4", // Mets ta vidéo ici
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: "jumpstyle",
    name: "Jumpstyle",
    emoji: "👟",
    video: "/videos/jumpstyle.mp4", // Mets ta vidéo ici
    color: "from-blue-500/20 to-purple-500/20"
  }
];

export function HobbiesCard() {
  const [index, setIndex] = useState(0);
  const hobby = HOBBIES[index];

  const nextHobby = () => {
    setIndex((prev) => (prev + 1) % HOBBIES.length);
  };

  return (
    <div className="relative w-full h-full min-h-[200px] flex flex-col justify-end p-0 overflow-hidden group">
      
      {/* FOND VIDÉO AVEC TRANSITION */}
      <AnimatePresence mode="popLayout">
        <motion.div
            key={hobby.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
        >
            {/* Overlay sombre pour lire le texte */}
            <div className={cn("absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10")} />
            
            {/* Vidéo */}
            <video
                src={hobby.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            />
        </motion.div>
      </AnimatePresence>

      {/* CONTENU TEXTE (Z-Index élevé) */}
      <div className="relative z-20 p-6 w-full flex items-end justify-between">
          <div>
            <p className="text-xs font-medium text-white/70 mb-1 uppercase tracking-wider">
                Hobbies & Passions
            </p>
            <motion.h3 
                key={hobby.name} // Clé pour relancer l'anim texte
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-2xl font-bold text-white flex items-center gap-2"
            >
                {hobby.name} <span className="text-lg">{hobby.emoji}</span>
            </motion.h3>
          </div>

          {/* BOUTON SWITCH */}
          <button
            onClick={nextHobby}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95 group-hover:rotate-180 duration-500"
            aria-label="Changer de hobby"
          >
            <Repeat size={20} />
          </button>
      </div>
    </div>
  );
}