import { profile } from "@/data/profile";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    { icon: MapPin, label: "Location", value: profile.location },
    {
      icon: Globe,
      label: "Website",
      value: profile.website.replace("https://", ""),
      href: profile.website,
    },
    { icon: GithubIcon, label: "GitHub", value: "noumanhafeez", href: profile.github },
    { icon: LinkedinIcon, label: "LinkedIn", value: "nouman-hafeez", href: profile.linkedin },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something intelligent."
      description="Open to AI & ML Engineer / Data Scientist roles, freelance projects and AI collaborations."
    >
      <Reveal>
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-elevated bg-hero relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Have an <span className="text-gradient">AI idea</span>?
              </h3>
              <p className="mt-3 text-muted-foreground">
                I'm always happy to chat about ML, MLOps and data products. Drop me a line — I
                usually respond within a day.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
              >
                <Mail size={16} /> Send a message
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {items.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-card/80 backdrop-blur p-4 hover:border-primary/50 transition">
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-secondary/60 text-primary">
                      <Icon width={16} height={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono-display uppercase tracking-wider text-muted-foreground">
                        {label}
                      </div>
                      <div className="text-sm font-medium truncate">{value}</div>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} target="_blank" rel="noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
      <div className="mt-12 text-center text-xs font-mono-display text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. Built with React, TanStack Start & Framer
        Motion.
      </div>
    </Section>
  );
}
