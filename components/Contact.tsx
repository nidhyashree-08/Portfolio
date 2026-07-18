"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { profile } from "@/data/resume";

type Status = "idle" | "sending" | "sent";

const socials = [
  { icon: Github, label: "GitHub", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // NOTE: Wire this up to a real email service (e.g. an API route calling
    // Resend/SendGrid, or a form backend like Formspree) — this is a UI-only stub.
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  }

  return (
    <section id="contact" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to internships and full-stack / AI-focused roles. I usually reply within a day."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <GlassCard className="flex h-full flex-col gap-6 p-6 sm:p-8">
              <div>
                <p className="mb-1 text-xs uppercase tracking-wide text-text-muted">Email</p>
                <a href={`mailto:${profile.email}`} className="text-text-light hover:text-accent-sky">
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-wide text-text-muted">Phone</p>
                <a href={`tel:${profile.phone}`} className="text-text-light hover:text-accent-sky">
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-accent-sky" />
                <div>
                  <p className="mb-1 text-xs uppercase tracking-wide text-text-muted">Location</p>
                  <p className="text-text-light">{profile.location}</p>
                </div>
              </div>

              <div className="mt-auto flex gap-3 pt-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="glass flex h-11 w-11 items-center justify-center rounded-xl text-text-light transition-all hover:-translate-y-1 hover:text-accent-sky hover:shadow-glow-sky"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs uppercase tracking-wide text-text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="rounded-xl border border-glass-border bg-white/5 px-4 py-2.5 text-sm text-text-light outline-none transition-colors focus:border-accent-sky"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs uppercase tracking-wide text-text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="rounded-xl border border-glass-border bg-white/5 px-4 py-2.5 text-sm text-text-light outline-none transition-colors focus:border-accent-sky"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="subject" className="text-xs uppercase tracking-wide text-text-muted">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="rounded-xl border border-glass-border bg-white/5 px-4 py-2.5 text-sm text-text-light outline-none transition-colors focus:border-accent-sky"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-wide text-text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="resize-none rounded-xl border border-glass-border bg-white/5 px-4 py-2.5 text-sm text-text-light outline-none transition-colors focus:border-accent-sky"
                    placeholder="Tell me a bit about the opportunity or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-sky px-6 py-3 text-sm font-medium text-text-light shadow-glow transition-all hover:shadow-glow-sky disabled:opacity-70 sm:col-span-2"
                >
                  {status === "idle" && (
                    <>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Message Sent
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
