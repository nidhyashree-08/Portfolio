"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/resume";
import FloatingIcons from "@/components/FloatingIcons";

// Cycles through `profile.roles`, typing and deleting each one.
function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 40 : 70;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

// Small magnetic wrapper: button drifts toward the cursor within a radius.
function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pt-28 sm:px-6 lg:pt-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-4 inline-block font-mono text-sm tracking-wide text-accent-sky"
          >
            Hello, I&apos;m
          </motion.span>

          <h1 className="font-display text-4xl font-bold leading-tight text-text-light sm:text-5xl md:text-6xl">
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <div className="mt-4 h-9 font-mono text-lg text-text-muted sm:text-xl">
            <span>{typed}</span>
            <span className="animate-pulse text-accent-sky">|</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-sky px-6 py-3 text-sm font-medium text-text-light shadow-glow transition-shadow hover:shadow-glow-sky"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={profile.resumeFile}
                download
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-text-light transition-colors hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-glass-border px-6 py-3 text-sm font-medium text-text-muted transition-colors hover:border-accent-sky hover:text-text-light"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Right column: profile with glow rings + floating tech icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-1 mx-auto flex h-[260px] w-[260px] items-center justify-center sm:h-[340px] sm:w-[340px] lg:order-2 lg:h-[400px] lg:w-[400px]"
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-accent-purple/30" />
          <div className="absolute inset-6 animate-spin-reverse rounded-full border border-dashed border-accent-sky/30" />

          <div className="glass relative flex h-[68%] w-[68%] items-center justify-center rounded-full shadow-glow">
            <span className="font-display text-5xl font-bold text-text-light sm:text-6xl">
              {profile.initials}
            </span>
          </div>

          <FloatingIcons />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-muted sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-8 w-[1px] bg-gradient-to-b from-accent-sky to-transparent" />
      </motion.div>
    </section>
  );
}
