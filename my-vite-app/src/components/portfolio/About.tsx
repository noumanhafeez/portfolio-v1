import { profile } from "@/data/profile";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Brain, Cpu, Database, Rocket } from "lucide-react";

const stats = [
  { icon: Brain, label: "ML / DL Models", value: "10+" },
  { icon: Database, label: "Datasets Engineered", value: "20+" },
  { icon: Rocket, label: "Production Pipelines", value: "3+" },
  { icon: Cpu, label: "Years in Tech", value: "3+" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="ML, with engineering rigor.">
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <Reveal className="md:col-span-3">
          <p className="text-lg leading-relaxed text-muted-foreground">{profile.about}</p>
          <p className="mt-4 text-muted-foreground">
            I'm passionate about applying ML and data-driven approaches to real-world problems and
            continuously improving in <span className="text-primary">AI</span>,{" "}
            <span className="text-primary">ML</span>, and{" "}
            <span className="text-primary">MLOps</span>.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-2 grid grid-cols-2 gap-4">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-2xl border border-border bg-card p-5 shadow-card hover:border-primary/50 hover:-translate-y-1 transition-all"
            >
              <Icon className="text-primary" size={20} />
              <div className="mt-3 text-2xl font-bold">{value}</div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}