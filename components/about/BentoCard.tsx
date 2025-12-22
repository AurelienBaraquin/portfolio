"use client";
import { cn } from "@/lib/utils";
import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

export function BentoCard({ children, className }: BentoCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 shadow-sm transition-all duration-300",
        // On garde un border subtil de base
        className
      )}
    >
      {/* SPOTLIGHT EFFECT :
         C'est un div en absolute qui contient un dégradé radial.
         Il suit la souris (position.x, position.y).
      */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      
      {/* Bordure lumineuse qui suit la souris */}
       <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--primary), 0.4), transparent 40%)`,
          // Note: Pour que ça marche parfaitement avec tes couleurs HSL, on triche un peu avec du blanc/primary
           border: "1px solid rgba(255,255,255,0.2)"
        }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}