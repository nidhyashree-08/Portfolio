import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050816",
          secondary: "#0B1026",
        },
        glass: {
          card: "rgba(255,255,255,0.08)",
          border: "rgba(255,255,255,0.12)",
        },
        accent: {
          purple: "#7C3AED",
          royal: "#132D73",
          sky: "#38BDF8",
        },
        text: {
          light: "#F8FAFC",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backdropBlur: {
        "2xl": "40px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.35)",
        "glow-sky": "0 0 40px rgba(56, 189, 248, 0.35)",
        "glass-inset": "inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      animation: {
        blob: "blob 18s infinite ease-in-out",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        "spin-reverse": "spin-reverse 18s linear infinite",
        gradient: "gradient 8s ease infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-25px, 25px) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
