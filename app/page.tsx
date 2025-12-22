import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { About } from "@/components/home/About";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Section Projets */}
      <div className="bg-muted/30 relative">
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-background to-transparent" />
          <Projects />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      {/* Section À Propos */}
      <About />
      
      {/* Footer Final */}
      <Footer />
    </main>
  );
}