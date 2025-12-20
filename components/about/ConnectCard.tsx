"use client";

import { useState } from "react";
import { Mail, Briefcase, Check, Copy } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";

export function ConnectCard() {
  const [copied, setCopied] = useState(false);
  const email = "ton.email@gmail.com"; // 👈 Mets ton vrai email ici

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 1. Copie dans le presse-papier
    navigator.clipboard.writeText(email);
    setCopied(true);

    // 2. Calcul de la position pour les confettis
    // On essaie de faire partir les confettis de l'endroit où on a cliqué
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y }, // Les confettis partent du bouton
      colors: ['#10b981', '#3b82f6', '#F43F5E'], // Vert, Bleu, Rouge
      disableForReducedMotion: true
    });

    // 3. Reset après 2 secondes
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full gap-4">
       
       {/* --- BOUTON MALT (Reste un lien externe) --- */}
       <Link 
         href="https://www.malt.fr/profile/tonprofil" 
         target="_blank"
         className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-[#FF5C57]/10 border border-[#FF5C57]/20 hover:bg-[#FF5C57]/20 transition-all group"
       >
          <div className="p-2 rounded-full bg-[#FF5C57] text-white shrink-0">
             <Briefcase size={18} />
          </div>
          <div className="overflow-hidden">
             <p className="text-xs font-medium text-[#FF5C57]">Freelance</p>
             <p className="font-bold text-foreground text-sm truncate group-hover:translate-x-1 transition-transform">
                Disponible sur Malt
             </p>
          </div>
       </Link>

       {/* --- BOUTON EMAIL (Devient interactif) --- */}
       <button 
         onClick={handleCopy}
         className={cn(
            "flex-1 flex items-center gap-4 p-4 rounded-2xl border transition-all group text-left w-full",
            copied 
                ? "bg-green-500/10 border-green-500/50" 
                : "bg-primary/5 border-primary/10 hover:bg-primary/10"
         )}
       >
          <div className={cn(
            "p-2 rounded-full transition-colors shrink-0",
            copied ? "bg-green-500 text-white" : "bg-primary text-primary-foreground"
          )}>
             {/* L'icône change : Mail -> Check */}
             {copied ? <Check size={18} /> : <Mail size={18} />}
          </div>
          
          <div className="overflow-hidden">
             <p className={cn(
                "text-xs font-medium transition-colors",
                copied ? "text-green-600" : "text-primary"
             )}>
                {copied ? "Presse-papier" : "Contact"}
             </p>
             <p className="font-bold text-foreground text-sm truncate group-hover:translate-x-1 transition-transform">
                {copied ? "Email copié ! ✅" : "Copier mon email"}
             </p>
          </div>
       </button>
    </div>
  );
}