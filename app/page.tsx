import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { About } from "@/components/home/About";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="bg-muted/30 relative">
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-background to-transparent" />
          <Projects />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      {/* 👇 Ajout de la section About */}
      <About />
      
      {/* Footer temporaire */}
      <footer className="py-10 text-center text-muted-foreground text-sm">
        &copy; 2024 Portfolio. Fait avec Next.js & Passion.
      </footer>
    </main>
  );
}