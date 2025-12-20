"use client";

import { useState, useRef } from "react";
import { Play, Pause, Music } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function SpotifyCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Exemple d'URL MP3 (Libre de droit pour la démo). 
  // Remplace par ton fichier dans public/music/mon-son.mp3
  const previewUrl = "/music/Bohnes.mp3"; 

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col justify-between h-full relative group">
      {/* Élément Audio invisible */}
      <audio 
        ref={audioRef} 
        src={previewUrl} 
        onEnded={() => setIsPlaying(false)} 
        loop 
      />

      <div className="flex items-start justify-between z-10">
        <span className="p-2 rounded-full bg-[#1DB954]/20 text-[#1DB954]">
           <Music size={20} />
        </span>
        
        {/* VISUALISEUR AUDIO (S'active quand ça joue) */}
        <div className="flex items-end gap-1 h-6">
          {[1, 2, 3, 4].map((bar) => (
            <div
              key={bar}
              className={cn(
                "w-1 bg-[#1DB954] rounded-t-sm transition-all duration-300",
                isPlaying ? "animate-audio-bar" : "h-1"
              )}
              style={{ 
                animationDelay: `${bar * 0.1}s`,
                height: isPlaying ? '100%' : '4px' 
              }}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3 z-10 mt-4">
        <div className="flex items-center gap-3">
            {/* Pochette Album (Tu peux mettre une image dans public) */}
            <div className="relative w-12 h-12 rounded-md overflow-hidden bg-muted shadow-lg shrink-0">
               {/* Si tu as une image : <Image src="/cover.jpg" fill alt="Cover" /> */}
               <Image src="/images/Bohnes.jpg" fill alt="Cover" />
            </div>
            
            <div className="overflow-hidden">
                <h4 className="font-bold text-sm truncate">Raging on a Sunday 🎵</h4>
                <p className="text-xs text-muted-foreground truncate">Bohnes</p>
            </div>
        </div>

        {/* Barre de progression décorative */}
        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div className={cn(
                "h-full bg-[#1DB954] transition-all duration-[30s] ease-linear",
                isPlaying ? "w-full" : "w-0"
            )} />
        </div>

        {/* Bouton Play */}
        <button 
            onClick={togglePlay}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-full bg-[#1DB954] text-black font-bold text-xs hover:scale-105 transition-transform active:scale-95"
        >
            {isPlaying ? (
                <> <Pause size={14} fill="currentColor" /> PAUSE </>
            ) : (
                <> <Play size={14} fill="currentColor" /> ÉCOUTER </>
            )}
        </button>
      </div>

      {/* Fond décoratif (Glow vert) */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#1DB954]/10 blur-[50px] rounded-full pointer-events-none" />
    </div>
  );
}