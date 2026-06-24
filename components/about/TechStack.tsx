"use client";
import { 
  Code2, Database, Layout, Server, Globe, Cpu, Terminal, Layers, 
  Bug,
  GitBranch,
  Brain,
  Smartphone,
  Box,
  Zap,
  Bot,
  Workflow,
  Wrench
} from "lucide-react";
import { cn } from "@/lib/utils";

const webTechs = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code2 },
  { name: "Vite", icon: Zap },
  { name: "Tailwind CSS", icon: Layout },
  { name: "Three.js", icon: Box },
  { name: "Framer Motion", icon: Layout },
  { name: "Responsive Design", icon: Smartphone },
];

const softwareTechs = [
  { name: "C / C++", icon: Cpu },
  { name: "Rust", icon: Cpu },
  { name: "SQL", icon: Database },
  { name: "Qt5", icon: Wrench },
  { name: "Docker", icon: Server },
  { name: "Nginx", icon: Globe },
  { name: "CI/CD / Actions", icon: GitBranch },
  { name: "Linux / Bash", icon: Terminal },
  { name: "Valgrind / GDB", icon: Bug },
];

const aiTechs = [
  { name: "LangChain", icon: Brain },
  { name: "n8n", icon: Workflow },
  { name: "Agents IA", icon: Bot },
  { name: "LLMs / RAG", icon: Brain },
];

export function TechStack() {
  return (
    <div className="flex flex-col h-full justify-center space-y-8 overflow-hidden py-4">
      
      {/* BANDE 1 : WEB (Vers la Gauche) */}
      <div className="space-y-2">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">Web & Frontend</h3>
        <div className="relative flex w-full overflow-hidden mask-gradient">
          <div className="flex animate-marquee gap-4 min-w-full">
            {[...webTechs, ...webTechs, ...webTechs].map((tech, i) => (
              <Item key={`web-${i}`} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      </div>

      {/* BANDE 2 : SOFTWARE (Vers la Droite) */}
      <div className="space-y-2">
         <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1 text-right mr-1">Systems & Infrastructure</h3>
         <div className="relative flex w-full overflow-hidden mask-gradient">
            {/* 👇 Utilisation de animate-marquee-reverse */}
            <div className="flex animate-marquee-reverse gap-4 min-w-full">
              {[...softwareTechs, ...softwareTechs, ...softwareTechs].map((tech, i) => (
                <Item key={`soft-${i}`} name={tech.name} icon={tech.icon} />
              ))}
          </div>
        </div>
      </div>

      {/* BANDE 3 : AI (Vers la Gauche) */}
      <div className="space-y-2">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">IA & Automatisation</h3>
        <div className="relative flex w-full overflow-hidden mask-gradient">
          <div className="flex animate-marquee gap-4 min-w-full">
            {[...aiTechs, ...aiTechs, ...aiTechs].map((tech, i) => (
              <Item key={`ai-${i}`} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

// Petit composant interne pour éviter la répétition
function Item({ name, icon: Icon }: { name: string; icon: any }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-secondary text-secondary-foreground whitespace-nowrap">
      <Icon size={14} className="text-primary" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}