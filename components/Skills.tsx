"use client";

import { motion } from "framer-motion";
import {
  Code2,
  LayoutTemplate,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { skillCategories } from "@/data/resume";

const icons: Record<string, LucideIcon> = {
  Code2,
  LayoutTemplate,
  Server,
  Database,
  BrainCircuit,
  Wrench,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-text-light">{name}</span>
        <span className="font-mono text-xs text-text-muted">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-accent-purple to-accent-sky"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          description="Grounded in full-stack fundamentals, extending into applied AI and data tooling."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, ci) => {
            const Icon = icons[cat.icon] ?? Code2;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (ci % 3) * 0.1 }}
              >
                <GlassCard tilt glow="purple" className="h-full p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="glass flex h-10 w-10 items-center justify-center rounded-xl">
                      <Icon className="h-5 w-5 text-accent-sky" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-text-light">
                      {cat.category}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {cat.skills.map((s, si) => (
                      <SkillBar key={s.name} name={s.name} level={s.level} delay={si * 0.08} />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
