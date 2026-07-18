"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-14 flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="font-mono text-xs uppercase tracking-[0.35em] text-accent-sky">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold text-text-light sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base text-text-muted ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
      <div className="mt-2 h-[3px] w-16 rounded-full bg-gradient-to-r from-accent-purple to-accent-sky" />
    </motion.div>
  );
}
