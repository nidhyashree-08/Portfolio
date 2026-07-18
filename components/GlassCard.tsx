"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  glow?: "purple" | "sky" | "none";
  as?: "div" | "article";
};

// Shared glass surface used across the site.
// `tilt` enables a subtle 3D pointer-follow tilt (desktop only, disabled for reduced-motion).
export default function GlassCard({
  children,
  className,
  tilt = false,
  glow = "none",
  as = "div",
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(0)`,
    });
  }

  function handleMouseLeave() {
    setStyle({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" });
  }

  const Comp = as === "article" ? motion.article : motion.div;

  return (
    <Comp
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transition: "transform 0.25s ease-out" }}
      whileHover={{ y: -6 }}
      className={cn(
        "glass relative rounded-2xl transition-shadow duration-300",
        glow === "purple" && "hover:shadow-glow",
        glow === "sky" && "hover:shadow-glow-sky",
        className
      )}
    >
      {children}
    </Comp>
  );
}
