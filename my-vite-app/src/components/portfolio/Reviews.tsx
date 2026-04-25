import { reviews } from "@/data/reviews";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Quote, Star } from "lucide-react";

export function Reviews() {
  return (
    <Section
      id="reviews"
      eyebrow="Reviews"
      title="What people I've worked with say."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name + r.company} delay={i * 0.05}>
            <article className="group relative h-full rounded-2xl border border-border bg-card p-6 shadow-card transition hover:border-primary/40 hover:-translate-y-1">
              <div className="absolute -top-3 -left-3 grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-glow">
                <Quote size={16} />
              </div>

              {typeof r.rating === "number" && (
                <div className="flex gap-0.5 mb-3 text-primary">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className={
                        idx < (r.rating ?? 0)
                          ? "fill-current"
                          : "opacity-30"
                      }
                    />
                  ))}
                </div>
              )}

              <p className="text-sm leading-relaxed text-muted-foreground">
                "{r.quote}"
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 font-mono-display text-sm font-semibold text-primary">
                  {r.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {r.role} · {r.company}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}