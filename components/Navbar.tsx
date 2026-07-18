"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/data/resume";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className={cn(
            "glass flex items-center justify-between rounded-2xl px-5 py-3 transition-shadow duration-300",
            scrolled && "shadow-glow"
          )}
        >
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-wide text-text-light"
          >
            <span className="gradient-text">{profile.initials}</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-sm text-text-muted transition-colors hover:text-text-light",
                    active === link.href && "text-text-light"
                  )}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-accent-purple to-accent-sky"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href={profile.resumeFile}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-sky px-4 py-2 text-sm font-medium text-text-light shadow-glow transition-transform hover:scale-105"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-text-light lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.25 }}
              className="glass mt-2 overflow-hidden rounded-2xl lg:hidden"
            >
              <ul className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm text-text-muted transition-colors hover:bg-white/5 hover:text-text-light",
                        active === link.href && "text-text-light"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={profile.resumeFile}
                    download
                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-sky px-4 py-2 text-sm font-medium text-text-light"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
