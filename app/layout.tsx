import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/resume";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://nidhyashree.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — Full Stack & AI Developer`,
  description: profile.summary,
  keywords: [
    "Nidhya Shree",
    "Full Stack Developer",
    "Python Developer",
    "MERN Stack",
    "AI/ML",
    "Portfolio",
    "KGiSL Institute of Technology",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Full Stack & AI Developer`,
    description: profile.summary,
    url: siteUrl,
    siteName: profile.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Full Stack & AI Developer`,
    description: profile.summary,
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="relative bg-bg-primary font-body text-text-light antialiased">
        <LoadingScreen />
        <AnimatedBackground />
        <div className="noise-overlay" />
        <ScrollProgressBar />
        <CursorGlow />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
