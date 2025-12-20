"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti"; // On l'installera juste après

export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const email = "ton.email@gmail.com"; // Mets ton vrai email

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    // Petit feu d'artifice localisé sur le bouton
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.8 }, // Ajuster selon la position du clic idéalement, mais ça suffit
      colors: ['#3b82f6', '#10b981']
    });

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "group flex flex-col justify-center items-center w-full h-full rounded-3xl border transition-all duration-300",
        copied 
            ? "bg-green-500/10 border-green-500/50" 
            : "bg-card/50 hover:bg-card hover:border-primary/50"
      )}
    >
        <div className={cn(
            "p-4 rounded-full transition-all duration-300 mb-3",
            copied ? "bg-green-500 text-white" : "bg-primary/10 text-primary group-hover:scale-110"
        )}>
            {copied ? <Check size={24} /> : <Copy size={24} />}
        </div>
        
        <div className="text-center">
            <p className="text-sm text-muted-foreground font-medium mb-1">Me contacter</p>
            <p className={cn(
                "font-bold text-lg transition-colors",
                copied ? "text-green-500" : "text-foreground"
            )}>
                {copied ? "Email Copié !" : email}
            </p>
        </div>
    </button>
  );
}