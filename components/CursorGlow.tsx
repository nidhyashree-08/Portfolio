"use client";

import { useEffect, useRef } from "react";

// Soft radial spotlight that follows the pointer, desktop only.
// Uses a ref + direct style mutation instead of state to avoid re-renders on every mousemove.
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[500px] w-[500px] rounded-full opacity-[0.06] blur-[100px] will-change-transform md:block"
      style={{
        background: "radial-gradient(circle, #38BDF8 0%, #7C3AED 60%, transparent 80%)",
      }}
    />
  );
}
