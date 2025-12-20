"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Détection du scroll pour l'effet Glass
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50); // Devient actif après 50px de descente
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        // Lenis gère le smooth scroll natif via les ancres, 
        // mais on peut forcer le coup si besoin.
        element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-border h-16" // Mode Scrolled (Petit, flou, bordure)
          : "bg-transparent h-24" // Mode Top (Grand, transparent)
      )}
    >
      <div className="container mx-auto h-full px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="font-bold text-xl tracking-tighter">
            <span className="text-primary">Portfolio</span>.dev
        </div>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          {["Projets", "A propos", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* TOGGLE THEME (Simple et efficace) */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Changer le thème"
        >
            {/* Astuce CSS pour switcher les icones sans JS complexe */}
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
      </div>
    </header>
  );
}