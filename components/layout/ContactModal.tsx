"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useContact } from "@/context/ContactContext";
import { Briefcase, Check, Copy, Github, Linkedin, Mail, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn, myemail } from "@/lib/utils";
import confetti from "canvas-confetti";

export function ContactModal() {
  const { isOpen, setIsOpen } = useContact();
  const [copied, setCopied] = useState(false);
  const email = myemail;

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
        particleCount: 40,
        spread: 60,
        origin: { x, y },
        colors: ['#10b981', '#3b82f6'],
        zIndex: 9999 // Important pour être au dessus de la modale
    });

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-border/50 bg-background/80 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Parlons de votre projet 🚀</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Choisissez la méthode qui vous convient le mieux.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
            
            {/* 1. BOUTON MALT (Premium) */}
            <Link 
                href="https://www.malt.fr/profile/tonprofil" 
                target="_blank"
                className="group relative overflow-hidden flex items-center gap-4 p-4 rounded-xl bg-[#FF5C57]/10 border border-[#FF5C57]/20 hover:bg-[#FF5C57]/20 transition-all"
            >
                <div className="p-3 rounded-full bg-[#FF5C57] text-white">
                    <Briefcase size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-foreground">Passer par Malt</h4>
                    <p className="text-xs text-[#FF5C57] font-medium">Sécurisé & Rapide pour les freelances</p>
                </div>
                <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5C57]">
                    ➜
                </div>
            </Link>

            {/* 2. BOUTON EMAIL (Interactif) */}
            <button
                onClick={handleCopy}
                className={cn(
                    "group flex items-center gap-4 p-4 rounded-xl border transition-all text-left",
                    copied ? "bg-green-500/10 border-green-500/50" : "bg-secondary/50 border-border hover:bg-secondary"
                )}
            >
                <div className={cn("p-3 rounded-full transition-colors", copied ? "bg-green-500 text-white" : "bg-primary/10 text-primary")}>
                    {copied ? <Check size={20} /> : <Mail size={20} />}
                </div>
                <div className="flex-1">
                    <h4 className={cn("font-bold", copied ? "text-green-600" : "text-foreground")}>
                        {copied ? "Email Copié !" : "Email Direct"}
                    </h4>
                    <p className="text-xs text-muted-foreground">{email}</p>
                </div>
                <div className="p-2 text-muted-foreground">
                    <Copy size={16} />
                </div>
            </button>

            {/* 3. DIVIDER */}
            <div className="relative py-2">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border"></span></div>
                <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Ou via les réseaux</span></div>
            </div>

            {/* 4. SOCIALS */}
            <div className="grid grid-cols-2 gap-3">
                <Link href="#" target="_blank" className="flex items-center justify-center gap-2 p-3 rounded-lg border hover:bg-muted transition-colors text-sm font-medium">
                    <Linkedin size={18} className="text-blue-600" /> LinkedIn
                </Link>
                <Link href="https://github.com/AurelienBaraquin" target="_blank" className="flex items-center justify-center gap-2 p-3 rounded-lg border hover:bg-muted transition-colors text-sm font-medium">
                    <Github size={18} /> Github
                </Link>
            </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}