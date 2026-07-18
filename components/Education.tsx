"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
        />

        <div className="relative border-l border-glass-border pl-8">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="glass absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full">
                <GraduationCap className="h-4 w-4 text-accent-purple" />
              </span>

              <GlassCard tilt glow="sky" className="p-6 sm:p-7">
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-display text-lg font-semibold text-text-light sm:text-xl">
                    {item.degree}
                  </h3>
                  <span className="font-mono text-xs text-accent-sky">{item.period}</span>
                </div>
                <p className="mb-1 text-sm font-medium text-text-muted">{item.institution}</p>
                <p className="mb-4 text-sm text-text-light">{item.detail}</p>

                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
                  <BookOpen className="h-4 w-4 text-accent-sky" /> Relevant Coursework
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-glass-border bg-white/5 px-3 py-1 text-xs text-text-light"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
