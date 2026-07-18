"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { highlights, quickFacts, stats, profile } from "@/data/resume";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(v) {
        setDisplay(Math.round(v * 10) / 10);
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-3xl font-bold text-text-light sm:text-4xl">
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Building things, one project at a time"
          description="A snapshot of who I am, what I care about, and where I'm headed."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <GlassCard className="h-full p-6 sm:p-8">
              <p className="mb-6 text-text-muted">{profile.summary}</p>
              <ul className="space-y-4">
                {highlights.map((h, i) => (
                  <motion.li
                    key={h}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 text-sm text-text-light sm:text-base"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-sky" />
                    {h}
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <GlassCard className="grid h-full grid-cols-2 gap-4 p-6 sm:p-8" glow="sky">
              {quickFacts.map((f) => (
                <div key={f.label} className="flex flex-col gap-1">
                  <span className="font-display text-lg font-semibold text-accent-sky sm:text-xl">
                    {f.value}
                  </span>
                  <span className="text-xs uppercase tracking-wide text-text-muted">
                    {f.label}
                  </span>
                </div>
              ))}
            </GlassCard>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard tilt className="flex flex-col items-center gap-1 p-5 text-center">
                <Counter value={s.value} suffix={s.suffix} />
                <span className="text-xs text-text-muted sm:text-sm">{s.label}</span>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
