"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

export function BentoCard({ children, className }: BentoCardProps) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20",
      className
    )}>
      {children}
    </div>
  );
}