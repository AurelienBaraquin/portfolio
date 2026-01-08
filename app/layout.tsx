import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Une police propre
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ContactProvider } from "@/context/ContactContext";
import { ContactModal } from "@/components/layout/ContactModal";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Aurélien Baraquin | Développeur Fullstack & Logiciel",
    template: "%s | Aurélien Baraquin",
  },
  description: "Portfolio de Aurélien Baraquin, développeur passionné fullstack et polyvalent.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={cn("bg-background text-foreground antialiased", font.className)}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <SmoothScroll>
            <ContactProvider>

              {children}
              <ContactModal />

            </ContactProvider>
          </SmoothScroll>

        </ThemeProvider>
      </body>
    </html>
  );
}