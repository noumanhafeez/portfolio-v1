import { skills } from "@/data/profile";
import { Section } from "./Section";
import { StaggerContainer, StaggerItem } from "./Reveal";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I build with."
      description="The stack I rely on across AI & ML research, data engineering and production deployment."
    >
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group) => (
          <StaggerItem
            key={group.category}
            className="rounded-2xl border border-border bg-card p-6 shadow-card hover:border-primary/50 hover:shadow-elevated transition-all"
          >
            <h3 className="font-mono-display text-xs uppercase tracking-widest text-primary">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-foreground hover:border-primary/60 hover:text-primary transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
