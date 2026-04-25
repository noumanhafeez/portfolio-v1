import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { SkillsMarquee } from "@/components/portfolio/SkillsMarquee";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Education } from "@/components/portfolio/Education";
import { Reviews } from "@/components/portfolio/Reviews";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nouman Hafeez — Machine Learning Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Nouman Hafeez — Machine Learning Engineer building production ML & MLOps pipelines, RAG systems and AI applications.",
      },
      { property: "og:title", content: "Nouman Hafeez — Machine Learning Engineer" },
      {
        property: "og:description",
        content:
          "ML & AI engineer specializing in deep learning, MLOps and data automation. View projects, experience and skills.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <SkillsMarquee />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Reviews />
      <Contact />
    </main>
  );
}
