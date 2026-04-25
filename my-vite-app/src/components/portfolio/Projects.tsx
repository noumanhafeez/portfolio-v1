import { projects } from "@/data/projects";
import { Section } from "./Section";
import { StaggerContainer, StaggerItem } from "./Reveal";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work."
      description="A few production-grade ML systems and AI applications I've built end-to-end."
    >
      <StaggerContainer className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <StaggerItem
            key={p.title}
            className="group relative rounded-3xl border border-border bg-card p-7 shadow-card hover:border-primary/50 hover:shadow-elevated hover:-translate-y-1 transition-all overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition" />
            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <div className="flex gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition"
                    >
                      <GithubIcon width={14} height={14} />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/60 transition"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              {p.highlights && (
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono-display text-[11px] rounded-md border border-border bg-secondary/30 px-2 py-1 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}