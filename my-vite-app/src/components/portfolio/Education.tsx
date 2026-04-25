import { education } from "@/data/profile";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background.">
      <div className="space-y-5">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.05}>
            <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6 shadow-card hover:border-primary/40 transition">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <GraduationCap size={20} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold">{e.school}</h3>
                  <span className="font-mono-display text-xs text-primary">{e.period}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">{e.degree}</div>
                {e.detail && <p className="mt-2 text-sm text-muted-foreground">{e.detail}</p>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}