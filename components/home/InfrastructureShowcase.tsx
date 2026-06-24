"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Server,
  Globe,
  Bot,
  Shield,
  Container,
  GitBranch,
  ArrowUpRight,
  Cpu,
  Bell,
  FolderCheck,
  Layout,
  Box,
  Network,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";

/* ────────────── Data ────────────── */

const services = [
  { name: "Portfolio", icon: Layout, color: "from-blue-500 to-blue-600", url: "https://aurelienb.com" },
  { name: "PixelQuest", icon: Cpu, color: "from-violet-500 to-violet-600", url: "https://aurelienb.com/pixel-quest" },
  { name: "Miku", icon: Sparkles, color: "from-cyan-400 to-cyan-500", url: "https://miku.aurelienb.com" },
  { name: "Manifeste", icon: FolderCheck, color: "from-amber-500 to-amber-600", url: "https://manifeste.aurelienb.com" },
  { name: "Vikunja", icon: Box, color: "from-emerald-500 to-emerald-600", url: "https://vikunja.aurelienb.com" },
  { name: "ntfy", icon: Bell, color: "from-rose-400 to-rose-500", url: "#" },
  { name: "Portainer", icon: Container, color: "from-sky-500 to-sky-600", url: "https://portainer.aurelienb.com" },
];

const features = [
  {
    icon: Bot,
    title: "IA Autonome",
    desc: "Hermes Agent — assistant IA multi-plateforme avec mémoire persistante, Kanban et subagents",
  },
  {
    icon: Container,
    title: "Docker Compose",
    desc: "7 services conteneurisés, images multi-stage, déploiement CI/CD automatisé",
  },
  {
    icon: Network,
    title: "Tailscale",
    desc: "Réseau privé mesh — accès SSH au téléphone, ntfy, communication inter-services",
  },
  {
    icon: Shield,
    title: "Self-hosted",
    desc: "Zéro dépendance cloud — notifications, task manager, tout tourne sur le VPS",
  },
];

/* ────────────── Sub-components ────────────── */

function ServiceNode({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
      className="group relative"
    >
      <Link href={service.url} target={service.url !== "#" ? "_blank" : undefined}>
        <div
          className={cn(
            "relative flex flex-col items-center gap-2 p-3 rounded-2xl",
            "bg-card/60 border border-border/50 backdrop-blur-sm",
            "hover:border-primary/30 transition-all duration-300",
            "hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
          )}
        >
          <div
            className={cn(
              "p-2.5 rounded-xl bg-gradient-to-br text-white shadow-md",
              service.color
            )}
          >
            <Icon size={18} />
          </div>
          <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            {service.name}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function FeatureBento({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 * index, duration: 0.5 }}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-5 transition-all duration-300 hover:border-primary/20"
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity: hover ? 1 : 0,
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex flex-col gap-3">
        <div className="p-2 rounded-xl bg-primary/10 w-fit">
          <Icon size={20} className="text-primary" />
        </div>
        <h4 className="font-semibold text-sm">{feature.title}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ────────────── Main Component ────────────── */

export function InfrastructureShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "1.2 1"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32">
      {/* ── Background glow ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-6">
            <Server size={14} />
            Projet Vedette
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              my-infra
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Mon infrastructure personnelle — un VPS auto-hébergé propulsant 7 services,
            une IA autonome et un réseau privé.
          </p>
        </motion.div>

        {/* ── Main card ── */}
        <motion.div
          style={{ y: bgY }}
          className="relative rounded-3xl border border-border/60 bg-card/30 backdrop-blur-sm overflow-hidden mb-12"
        >
          {/* Top gradient accent */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left — Text */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/20">
                      <Globe size={22} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Infrastructure-as-Code
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Un monorepo orchestrant l&apos;ensemble de mon écosystème numérique :
                    sites web, outils, notifications push, gestion de tâches et assistant
                    IA — le tout conteneurisé avec Docker, routé via Nginx et déployé
                    automatiquement via GitHub Actions.
                  </p>
                </div>

                {/* Architecture highlights */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "Docker Compose",
                    "Nginx",
                    "Next.js",
                    "Astro",
                    "Vite",
                    "Express",
                    "Three.js",
                    "Gemini API",
                    "SQLite",
                    "Tailscale",
                    "GitHub Actions",
                    "Hermes Agent",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/50 border border-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href="https://github.com/AurelienBaraquin/my-infra"
                    target="_blank"
                  >
                    <MagneticButton className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                      <GitBranch size={16} />
                      Voir sur GitHub
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </MagneticButton>
                  </Link>
                </div>
              </div>

              {/* Right — Service grid */}
              <div className="relative">
                {/* Connection lines (decorative) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-32 h-32 rounded-full border border-primary/10 animate-pulse" />
                  <div className="absolute w-48 h-48 rounded-full border border-primary/5" />
                </div>

                {/* Central node */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative z-10 flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/20 border border-primary/30"
                  >
                    <Server size={20} className="text-primary" />
                    <span className="font-bold text-sm">VPS Ubuntu</span>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                    </span>
                  </motion.div>
                </div>

                {/* Service nodes grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 relative z-10">
                  {services.map((service, i) => (
                    <ServiceNode key={service.name} service={service} index={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Feature bento grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <FeatureBento key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
