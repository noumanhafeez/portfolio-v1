import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: Props) {
  return (
    <section id={id} className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-3 text-xs font-mono-display text-primary uppercase tracking-widest">
            <span className="h-px w-8 bg-primary" />
            {eyebrow}
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-gradient">{title}</span>
          </h2>
          {description && <p className="mt-4 max-w-2xl text-muted-foreground">{description}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}