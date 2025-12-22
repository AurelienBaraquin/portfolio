"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react"; // Ajoute les icones dont tu as besoin
import Link from "next/link";
import { MagneticButton } from "../ui/MagneticButton";
import { useContact } from "@/context/ContactContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { openContact } = useContact();

  return (
    <footer className="relative py-24 px-6 md:px-12 bg-background border-t border-border/40 overflow-hidden">
      
      {/* Fond décoratif (Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        
        {/* 1. GROS TITRE D'APPEL */}
        <div className="flex flex-col items-center text-center mb-20 space-y-8">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-black tracking-tighter"
            >
                Une idée en tête ?
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
            >
                Je suis disponible pour de nouveaux projets freelance.
            </motion.p>

            {/* 2. BOUTON MAGNÉTIQUE GÉANT */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <div onClick={openContact} className="cursor-pointer inline-block">
                    <MagneticButton className="group flex items-center gap-4 px-10 py-6 rounded-full bg-primary text-primary-foreground text-xl md:text-2xl font-bold shadow-2xl hover:shadow-primary/30 transition-all">
                        Me contacter
                        <ArrowUpRight size={32} className="transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
                    </MagneticButton>
                </div>
            </motion.div>
        </div>

        {/* 3. BAS DE PAGE (Liens & Copyright) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-border/40">
            
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
                &copy; {currentYear} Portfolio. Développé avec Next.js & Passion.
            </div>

            {/* Réseaux Sociaux */}
            <div className="flex items-center gap-6">
                {[
                    { name: "Malt", href: "https://www.malt.com/profile/aurelienbaraquin1", icon: null, text: "Malt" }, // Ou une icone perso
                    { name: "LinkedIn", href: "https://www.linkedin.com/in/aurelien-baraquin/", icon: Linkedin },
                    { name: "Github", href: "https://github.com/AurelienBaraquin", icon: Github },
                ].map((social) => (
                    <Link 
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-2"
                    >
                        {social.icon && <social.icon size={20} />}
                        {social.text && <span>{social.text}</span>}
                    </Link>
                ))}
            </div>
            
            {/* Petit détail luxe : Heure locale */}
            <div className="hidden md:block text-sm text-muted-foreground">
                Dublin, IE • Local time
            </div>
        </div>

      </div>
    </footer>
  );
}