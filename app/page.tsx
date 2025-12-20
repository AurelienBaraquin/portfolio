import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Sections */}
      <Hero />
      
      {/* Placeholder pour la suite */}
      <section id="projets" className="h-screen flex items-center justify-center bg-muted/20">
        <h2 className="text-3xl font-bold opacity-20">Section Projets (Bientôt)</h2>
      </section>

    </main>
  );
}