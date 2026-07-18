// Single source of truth for all resume content.
// Edit this file to update the portfolio — every section reads from here.

export const profile = {
  name: "Nidhya Shree M",
  initials: "NS",
  roles: [
    "Full Stack Developer",
    "Python Developer",
    "AI/ML Enthusiast",
    "IT Aspirant",
  ],
  location: "Coimbatore, Tamil Nadu",
  phone: "+91 8925471508",
  email: "nidhyashree08@gmail.com",
  linkedin: "https://linkedin.com/nidhyashree",
  github: "https://github.com/nidhyashree",
  summary:
    "Final-year B.Tech Information Technology student building practical, full-stack and AI-driven projects. I like turning half-formed ideas into working software — from job portals to speech-driven emotion detection — and I'm looking for a stipend-based internship where I can learn fast, ship real features, and grow into a product-focused engineer.",
  resumeFile: "/Nidhyashree_Resume.pdf",
};

export const quickFacts = [
  { label: "CGPA", value: "8.2 / 10" },
  { label: "Arrears", value: "Nil (up to Sem V)" },
  { label: "Graduating", value: "May 2027" },
  { label: "Based in", value: "Coimbatore" },
];

export const stats = [
  { label: "Projects Built", value: 2, suffix: "+" },
  { label: "Languages Spoken", value: 3, suffix: "" },
  { label: "Months of Internship", value: 4, suffix: "" },
  { label: "CGPA", value: 8.2, suffix: "/10" },
];

export const highlights = [
  "Full-stack development across the MERN stack, from schema design to deployed UI.",
  "Applied AI/ML — sentiment analysis, speech recognition, and classic ML classifiers.",
  "Comfortable moving between Python data tooling and JavaScript-based web apps.",
  "Hands-on workshop and teaching experience explaining AI/ML concepts to peers.",
];

export type SkillCategory = {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    icon: "Code2",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 65 },
      { name: "C", level: 55 },
    ],
  },
  {
    category: "Frontend",
    icon: "LayoutTemplate",
    skills: [
      { name: "React.js", level: 82 },
      { name: "JavaScript", level: 80 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "Flask", level: 70 },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 78 },
      { name: "MySQL", level: 74 },
    ],
  },
  {
    category: "AI & Data",
    icon: "BrainCircuit",
    skills: [
      { name: "Scikit-learn", level: 72 },
      { name: "Sentiment Analysis", level: 75 },
      { name: "Speech Recognition", level: 70 },
      { name: "NumPy / Pandas", level: 76 },
      { name: "Power BI", level: 68 },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 88 },
      { name: "Jupyter Notebook", level: 76 },
      { name: "Microsoft Excel", level: 78 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  features: string[];
  techStack: string[];
  challenges: string;
  impact: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "job-portal",
    title: "Job Portal Application",
    tagline: "Full-stack MERN platform connecting job seekers and recruiters",
    overview:
      "A full-stack job portal built to handle the complete hiring loop — posting roles, searching for them, and tracking applications — with a clean, responsive interface and secure authentication end to end.",
    features: [
      "Job posting workflow for recruiters with structured listings",
      "Search and filter experience for job seekers",
      "Application tracking so candidates can follow their status",
      "Secure user authentication and session handling",
      "Fully responsive UI across devices",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    challenges:
      "Designing a data model flexible enough for both recruiter and candidate flows, while keeping the REST API and auth layer simple to reason about as features grew.",
    impact:
      "Delivered a working end-to-end hiring flow — from job creation to application — demonstrating full ownership of a MERN-stack product from schema to UI.",
    github: "https://github.com/nidhyashree",
  },
  {
    id: "speech-to-emoji",
    title: "Speech to Emoji Converter",
    tagline: "Real-time speech emotion detection mapped to expressive emoji",
    overview:
      "A real-time system that listens to speech, detects the underlying sentiment, and converts it into an appropriate emoji — combining speech recognition with a trained classical ML classifier.",
    features: [
      "Real-time speech capture and recognition",
      "Sentiment analysis pipeline on transcribed speech",
      "Naive Bayes classifier trained to map emotions to emoji sets",
      "Lightweight Flask backend serving a simple web interface",
    ],
    techStack: ["Python", "Flask", "Scikit-learn", "HTML", "CSS", "JavaScript"],
    challenges:
      "Getting reliable emotion labels from noisy, real-time speech-to-text output, and tuning the Naive Bayes model so emoji mappings actually matched perceived tone.",
    impact:
      "A working proof of concept for emotion-aware interfaces — showing applied ML skills beyond notebooks, wired into a real-time, user-facing tool.",
    github: "https://github.com/nidhyashree",
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Content Developer",
    org: "MGC — KGiSL Campus",
    period: "August 2025 – November 2025",
    points: [
      "Assisted in conducting AI/ML workshops for students, helping translate concepts into hands-on exercises.",
      "Gained practical experience applying AI/ML concepts in a collaborative, team-based setting.",
      "Supported content creation and delivery for workshop sessions.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  detail: string;
  coursework: string[];
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology, Information Technology",
    institution: "KGiSL Institute of Technology",
    period: "Expected Graduation: May 2027",
    detail: "CGPA: 8.2 / 10 · Nil arrears up to Semester V",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Machine Learning Fundamentals",
      "Web Technologies",
      "Operating Systems",
    ],
  },
];

export const achievements = [
  {
    title: "Nil Arrears Academic Record",
    description: "Maintained a clean academic record with nil arrears through Semester V, CGPA 8.2/10.",
    icon: "Award",
  },
  {
    title: "AI/ML Workshop Facilitation",
    description: "Co-conducted AI/ML workshops as a Content Developer at MGC, KGiSL Campus.",
    icon: "Sparkles",
  },
  {
    title: "Applied ML Project Delivery",
    description: "Independently built and trained a Naive Bayes sentiment classifier for a real-time application.",
    icon: "BrainCircuit",
  },
  {
    title: "Trilingual Communicator",
    description: "Fluent in Tamil, English, and Kannada — comfortable working across diverse teams.",
    icon: "Languages",
  },
];

export const softSkills = [
  "Communication Skills",
  "Problem Solving",
  "Adaptability",
  "Team Collaboration",
  "Quick Learning",
  "Time Management",
];

export const languagesKnown = ["Tamil", "English", "Kannada"];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const techIcons = [
  "React",
  "Node",
  "Python",
  "JavaScript",
  "MongoDB",
  "Express",
  "GitHub",
  "MySQL",
];
