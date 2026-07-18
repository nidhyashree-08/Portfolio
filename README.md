# Nidhya Shree M — Portfolio

A premium glassmorphism portfolio built with Next.js 15 (App Router), React 19, TypeScript,
Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        Root layout: fonts, metadata, global chrome
  page.tsx           Composes all sections
  globals.css        Glass utilities, grid/noise backgrounds, scrollbar
  sitemap.ts          SEO sitemap
  robots.ts           SEO robots config
components/
  Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx, Projects.tsx,
  Experience.tsx, Education.tsx, Achievements.tsx, Contact.tsx, Footer.tsx
  GlassCard.tsx, SectionHeading.tsx, FloatingIcons.tsx
  AnimatedBackground.tsx, CursorGlow.tsx, ScrollProgressBar.tsx, LoadingScreen.tsx
data/
  resume.ts           Single source of truth for all content — edit this file
                       to update text, skills, projects, experience, etc.
public/
  Nidhyashree_Resume.pdf   Downloadable resume (swap in an updated version anytime)
```

## Editing content

Everything text-based — name, roles, summary, skills, projects, experience,
education, achievements — lives in `data/resume.ts`. Update that file and the
whole site updates automatically; no need to touch component code.

## Notes

- **Contact form**: currently a UI-only stub (see the comment in `components/Contact.tsx`).
  Wire it to a real email service — an API route calling Resend/SendGrid, or a
  form backend like Formspree — before going live.
- **Projects**: only the two projects present on the resume are included
  (Job Portal Application, Speech to Emoji Converter). Add more entries to the
  `projects` array in `data/resume.ts` — the section will lay them out automatically.
- **Deploying**: this is a standard Next.js app — deploys cleanly to Vercel
  (`vercel deploy`) or any Node hosting that supports Next.js 15.
