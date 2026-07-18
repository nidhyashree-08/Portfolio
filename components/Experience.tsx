"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Hands-on time applying what I've learned in the classroom."
        />

        <div className="relative border-l border-glass-border pl-8">
          {experience.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="glass absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full">
                <Briefcase className="h-4 w-4 text-accent-sky" />
              </span>

              <GlassCard tilt className="p-6 sm:p-7">
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-display text-lg font-semibold text-text-light sm:text-xl">
                    {item.role}
                  </h3>
                  <span className="font-mono text-xs text-accent-sky">{item.period}</span>
                </div>
                <p className="mb-4 text-sm font-medium text-text-muted">{item.org}</p>
                <ul className="space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-text-light">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-purple" />
                      {p}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
