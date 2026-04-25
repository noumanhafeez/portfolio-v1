import {
  Code2,
  Database,
  Brain,
  Container,
  GitBranch,
  Cpu,
  Boxes,
  Workflow,
  Bot,
  LineChart,
  Globe,
  Server,
  Zap,
  Sparkles,
} from "lucide-react";

const items = [
  { label: "Python", Icon: Code2 },
  { label: "PyTorch", Icon: Brain },
  { label: "TensorFlow", Icon: Cpu },
  { label: "Scikit-learn", Icon: Sparkles },
  { label: "Pandas", Icon: LineChart },
  { label: "NumPy", Icon: Boxes },
  { label: "SQL", Icon: Database },
  { label: "Docker", Icon: Container },
  { label: "MLflow", Icon: Workflow },
  { label: "FastAPI", Icon: Zap },
  { label: "Flask", Icon: Server },
  { label: "GitHub Actions", Icon: GitBranch },
  { label: "LangChain", Icon: Bot },
  { label: "Hugging Face", Icon: Brain },
  { label: "React Native", Icon: Globe },
  { label: "TypeScript", Icon: Code2 },
];

export function SkillsMarquee() {
  // Duplicate for a seamless loop
  const loop = [...items, ...items];

  return (
    <section
      aria-label="Tech stack marquee"
      className="relative border-y border-border bg-card/30 py-8 overflow-hidden"
    >
      {/* edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {loop.map(({ label, Icon }, i) => (
          <div
            key={`${label}-${i}`}
            className="group flex items-center gap-2.5 rounded-full border border-border bg-card/80 px-5 py-2.5 shadow-card backdrop-blur transition hover:border-primary/60 hover:text-primary"
          >
            <Icon size={16} className="text-primary" />
            <span className="font-mono-display text-sm whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}