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
    <Section id="about" eyebrow="About" title="AI & ML with engineering rigor.">
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <Reveal className="md:col-span-3">
          <p className="text-lg leading-relaxed text-muted-foreground">{profile.about}</p>
          <p className="mt-4 text-muted-foreground">
            I enjoy solving real-world problems with AI and continuously improving my skills in
            machine learning, deep learning, and scalable AI systems. I stay focused on learning
            modern AI technologies and best practices in model optimization, system design, and
            deployment. My goal is to build impactful AI solutions that are not only accurate but
            also efficient, scalable, and production-ready in real-world environments.
          </p>

          <div className="mt-3 flex gap-2 flex-wrap">
            <span className="text-primary font-medium">AI Products, </span>
            <span className="text-primary font-medium">ML Pipelines, </span>
            <span className="text-primary font-medium">MLOps, </span>
            <span className="text-primary font-medium">Scalable Systems</span>
          </div>
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
