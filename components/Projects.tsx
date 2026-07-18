"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Layers, Sparkles, Target, ShieldAlert } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Two projects, built end to end — from data model to deployed interface."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.12 }}
            >
              <GlassCard tilt glow="purple" className="flex h-full flex-col p-6 sm:p-8">
                {/* Header banner */}
                <div className="relative mb-6 flex h-36 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-accent-purple/25 via-accent-royal/25 to-accent-sky/20">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <span className="relative font-display text-2xl font-semibold text-text-light sm:text-3xl">
                    {project.title}
                  </span>
                </div>

                <p className="mb-1 text-sm font-medium text-accent-sky">{project.tagline}</p>
                <p className="mb-5 text-sm text-text-muted sm:text-base">{project.overview}</p>

                {/* Tech chips */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-glass-border bg-white/5 px-3 py-1 text-xs text-text-light"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-5">
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
                    <Layers className="h-4 w-4 text-accent-sky" /> Features
                  </div>
                  <ul className="space-y-1.5 text-sm text-text-light">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-sky" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div className="mb-5">
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
                    <ShieldAlert className="h-4 w-4 text-accent-purple" /> Challenges
                  </div>
                  <p className="text-sm text-text-muted">{project.challenges}</p>
                </div>

                {/* Impact */}
                <div className="mb-6">
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
                    <Target className="h-4 w-4 text-accent-sky" /> Impact
                  </div>
                  <p className="text-sm text-text-muted">{project.impact}</p>
                </div>

                {/* Actions */}
                <div className="mt-auto flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-text-light transition-colors hover:bg-white/10"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-sky px-4 py-2.5 text-sm font-medium text-text-light shadow-glow transition-shadow hover:shadow-glow-sky"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Invitation to add more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-text-muted"
        >
          <Sparkles className="h-4 w-4 text-accent-sky" />
          More projects in progress — check back soon.
        </motion.div>
      </div>
    </section>
  );
}
