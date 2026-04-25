import { experience } from "@/data/profile";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.company + job.role} delay={i * 0.05}>
              <div
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 grid h-3 w-3 place-items-center rounded-full bg-primary shadow-glow animate-pulse-glow" />
                <div className="pl-12 md:pl-0 md:pr-10 md:text-right">
                  <div className="font-mono-display text-xs text-primary">{job.period}</div>
                  <div className="text-sm text-muted-foreground">{job.location}</div>
                </div>
                <div className="pl-12 md:pl-10 mt-2 md:mt-0 rounded-2xl border border-border bg-card p-6 shadow-card hover:border-primary/40 transition">
                  <div className="flex items-center gap-2 text-primary">
                    <Briefcase size={16} />
                    <span className="font-semibold">{job.role}</span>
                  </div>
                  <div className="text-lg font-bold mt-1">{job.company}</div>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}