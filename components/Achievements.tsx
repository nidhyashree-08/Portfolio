"use client";

import { motion } from "framer-motion";
import { Award, Sparkles, BrainCircuit, Languages, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { achievements, softSkills, languagesKnown } from "@/data/resume";

const icons: Record<string, LucideIcon> = {
  Award,
  Sparkles,
  BrainCircuit,
  Languages,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones along the way"
          description="Academic standing, applied learning, and the collaboration skills behind the code."
        />

        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => {
            const Icon = icons[a.icon] ?? Award;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              >
                <GlassCard tilt glow="purple" className="h-full p-6">
                  <div className="glass mb-4 flex h-11 w-11 items-center justify-center rounded-xl">
                    <Icon className="h-5 w-5 text-accent-sky" strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-2 font-display text-base font-semibold text-text-light">
                    {a.title}
                  </h3>
                  <p className="text-sm text-text-muted">{a.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="grid grid-cols-1 gap-8 p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <h3 className="mb-4 font-display text-base font-semibold text-text-light">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-glass-border bg-white/5 px-3 py-1.5 text-xs text-text-light"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-display text-base font-semibold text-text-light">
                Languages Known
              </h3>
              <div className="flex flex-wrap gap-2">
                {languagesKnown.map((l) => (
                  <span
                    key={l}
                    className="rounded-full bg-gradient-to-r from-accent-purple/30 to-accent-sky/30 px-3 py-1.5 text-xs text-text-light"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
