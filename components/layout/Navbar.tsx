"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { useContact } from "@/context/ContactContext";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const { openContact } = useContact();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-border h-16" 
          : "bg-transparent h-24" 
      )}
    >
      <div className="container mx-auto h-full px-6 flex items-center justify-between relative">
        
        {/* LOGO (z-index pour rester cliquable au dessus du menu si besoin) */}
        <div className="font-bold text-xl tracking-tighter z-10">
            <span className="text-primary">Portfolio</span>.dev
        </div>

        {/* NAVIGATION DESKTOP 
            Correction Centrage : On utilise absolute + translate pour un centrage mathématique parfait 
        */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {["Projets", "A propos"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={openContact}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* TOGGLE THEME */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          // 👇 Correction Lune : AJOUT DE "relative" et "z-10"
          className="relative z-10 p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Changer le thème"
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            {/* La lune est absolue, elle va maintenant se caler sur le bouton "relative" */}
            <Moon className="absolute top-2 right-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
      </div>
    </header>
  );
}