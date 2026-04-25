import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/profile";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const yReverse = useTransform(scrollY, [0, 600], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <motion.div
        style={{ y }}
        className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        style={{ y: yReverse }}
        className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />

      <motion.div style={{ opacity }} className="relative mx-auto max-w-6xl px-6 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs font-mono-display text-muted-foreground"
        >
          <Sparkles size={12} className="text-primary animate-pulse" />
          <span>Available for ML & AI roles</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
        >
          <span className="block text-foreground">Hi, I'm {profile.name.split(" ")[0]}</span>
          <span className="block text-gradient">{profile.title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground"
        >
          {profile.tagline} I design end-to-end ML systems — from EDA to production MLOps pipelines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/60 transition"
          >
            Get in touch
          </a>
          <div className="flex items-center gap-2 ml-2">
            {[
              { icon: GithubIcon, href: profile.github, label: "GitHub" },
              { icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/60 transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono-display text-muted-foreground"
        >
          <span>scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ArrowDown size={16} className="text-primary" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}