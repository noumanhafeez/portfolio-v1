import { certifications } from "@/data/certifications";
import { Section } from "./Section";
import { StaggerContainer, StaggerItem } from "./Reveal";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Continuous learning."
      description="Courses & credentials that have shaped my ML / AI foundation."
    >
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((c) => (
          <StaggerItem
            key={c.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-card hover:border-primary/50 hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Award size={18} />
              </div>
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="View certificate"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
            <h3 className="mt-4 font-bold leading-snug">{c.title}</h3>
            <div className="mt-1 text-sm text-muted-foreground">{c.issuer}</div>
            <div className="mt-1 font-mono-display text-xs text-primary">{c.date}</div>
            {c.skills && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-secondary/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}