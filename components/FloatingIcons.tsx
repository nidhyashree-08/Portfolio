"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Hexagon,
  Leaf,
  Braces,
  Github,
  Database,
  Terminal,
  FileCode2,
} from "lucide-react";
import { techIcons } from "@/data/resume";

const iconMap: Record<string, React.ElementType> = {
  React: Atom,
  Node: Hexagon,
  MongoDB: Leaf,
  Express: Braces,
  Python: Terminal,
  JavaScript: FileCode2,
  GitHub: Github,
  MySQL: Database,
};

// Positions around the hero profile ring, tuned per icon so nothing overlaps.
const positions = [
  { top: "-6%", left: "48%" },
  { top: "12%", left: "88%" },
  { top: "45%", left: "97%" },
  { top: "78%", left: "86%" },
  { top: "94%", left: "48%" },
  { top: "78%", left: "8%" },
  { top: "45%", left: "-4%" },
  { top: "12%", left: "6%" },
];

export default function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {techIcons.map((name, i) => {
        const Icon = iconMap[name] ?? Terminal;
        const pos = positions[i % positions.length];
        return (
          <motion.div
            key={name}
            className="glass absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl shadow-glass-inset sm:h-14 sm:w-14"
            style={{ top: pos.top, left: pos.left }}
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            aria-hidden
          >
            <Icon className="h-5 w-5 text-accent-sky sm:h-6 sm:w-6" strokeWidth={1.75} />
          </motion.div>
        );
      })}
    </div>
  );
}
