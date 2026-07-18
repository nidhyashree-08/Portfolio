"use client";

// Fixed, full-viewport background: animated gradient blobs + grid pattern.
// Sits behind all content (z-0), purely decorative.
export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-bg-primary">
      {/* Base grid */}
      <div className="grid-bg absolute inset-0" />

      {/* Secondary vertical gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/40 to-bg-primary" />

      {/* Floating blobs */}
      <div className="absolute -left-40 top-0 h-[32rem] w-[32rem] animate-blob rounded-full bg-accent-purple/25 blur-[110px]" />
      <div
        className="absolute right-[-10rem] top-1/4 h-[28rem] w-[28rem] animate-blob rounded-full bg-accent-sky/20 blur-[110px]"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] animate-blob rounded-full bg-accent-royal/30 blur-[110px]"
        style={{ animationDelay: "8s" }}
      />
    </div>
  );
}
