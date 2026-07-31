/** Canonical origin — apex 307-redirects here, so www is the real home. */
export const SITE_URL = "https://vardxn.vercel.app";

export const PROFILE = {
  name: "Vardan Pal",
  firstName: "Vardan",
  role: "Software Engineer | Cloud-Native & AI",
  status: "Software Engineer · Cloud-Native & AI",
  taglines: [
    "build end-to-end systems.",
    "architect cloud-native applications.",
    "integrate AI into real products.",
    "optimize database and API performance.",
    "automate what slows teams down.",
  ],
  bio: "I am a Cloud-Native & AI Software Engineer studying Information Technology at NIT Srinagar. I design and ship products end to end across web, backend, and cloud infrastructure, specializing in scalable architectures, AI integrations (Agentic AI, RAG, OCR), and performance optimization.",
  about: {
    lead: "I work across the entire stack to build fast, scalable, and maintainable systems.",
    p2: "I have experience working with Next.js, Node.js, FastAPI, Docker, and Kubernetes, shipping real-time routing engines, AI telemedicine platforms, and autonomous PR reviewer systems.",
    p3: "I focus on building production-ready architectures—optimizing queries, enforcing strict security guardrails, and deploying via CI/CD pipelines.",
    credentials: [
      "B.Tech, IT — NIT Srinagar (2022–2026)",
      "AWS Certified Cloud Practitioner",
      "AWS Certified AI Practitioner",
      "Anthropic Claude Certified",
    ],
  },
  email: "vardan2701@gmail.com",
  location: "Marathahalli, Bangalore",
  resume: "/Vardan_Pal_Resume.pdf",
  siteUrl: `${SITE_URL}/`,
  socials: {
    github: "https://github.com/vardxn",
    linkedin: "https://www.linkedin.com/in/vardxn",
    medium: "https://github.com/vardxn",
  },
};

export type Job = {
  company: string;
  title: string;
  range: string;
  location: string;
  blurb: string;
  points: string[];
};

export const EXPERIENCE: Job[] = [
  {
    company: "Noventiq (Umbrella Infotech)",
    title: "Software Engineering Intern – Cloud Native Applications",
    range: "Dec 2024 — Feb 2025",
    location: "Noida, India",
    blurb:
      "Optimized MongoDB queries, refactored RESTful APIs, and containerized Node.js environments.",
    points: [
      "Optimized MongoDB queries via compound indexes across 12 microservices, reducing p95 latency by 70%.",
      "Refactored RESTful APIs using modular Node.js/Express.js; boosted Jest test coverage from 40% to 75%.",
      "Containerized Node.js environments via Docker Compose, slashing developer onboarding from 2 days to 30 mins.",
      "Executed agile sprint planning, code reviews, and production deployments via GitHub Actions CI/CD.",
    ],
  },
];

export type Skill = {
  /** HUD module number, "01".."06" */
  num: string;
  name: string;
  items: string;
};

export const SKILLS: Skill[] = [
  { num: "01", name: "Frontend", items: "React.js · Next.js · TypeScript" },
  { num: "02", name: "Backend", items: "Node.js · Express.js · FastAPI · Webhooks" },
  { num: "03", name: "Databases", items: "PostgreSQL · MongoDB · Prisma ORM" },
  { num: "04", name: "Cloud & DevOps", items: "AWS · Docker · Kubernetes · CI/CD" },
  { num: "05", name: "AI & ML", items: "PyTorch · Claude 3.5 · Agentic AI · Prompt Eng" },
  { num: "06", name: "Languages", items: "TypeScript · Python · JavaScript" },
];

export type Project = {
  id: string;
  title: string;
  meta: string;
  tagline: string;
  description: string;
  tags: string[];
  /** Gradient endpoints used to generate the orbiting card artwork. */
  colorA: string;
  colorB: string;
  /** External link (GitHub / store). Null = no public link. */
  link: string | null;
  linkLabel?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "logipulse",
    title: "LogiPulse",
    meta: "2026 · AI-Driven Supply Chain Routing",
    tagline: "Live routing with Dijkstra/A* and RAG",
    description:
      "Built OOP-based real-time routing engine with Dijkstra/A*, optimizing paths via live weather and fuel APIs. Designed GPT-4o OCR pipeline leveraging RAG and prompt engineering, cutting manual data entry by 60%.",
    tags: ["Next.js", "PostgreSQL", "MongoDB", "GPT-4o", "Prisma", "Docker"],
    colorA: "#0069ff",
    colorB: "#4cc9f0",
    link: "https://github.com/vardxn/LogiPulse",
    linkLabel: "View on GitHub",
    featured: true,
  },
  {
    id: "devagent-x",
    title: "DevAgent-X",
    meta: "2026 · Autonomous PR Reviewer",
    tagline: "Claude 3.5 code reviews with Docker sandbox",
    description:
      "Engineered an Express.js pipeline using GitHub Webhooks to orchestrate automated Claude 3.5 PR code reviews. Architected isolated Docker sandboxes to securely execute and validate untrusted PR code.",
    tags: ["Node.js", "TypeScript", "Docker", "Claude 3.5", "Webhooks"],
    colorA: "#7c3aed",
    colorB: "#f0abfc",
    link: "https://github.com/vardxn/DevAgent-X",
    linkLabel: "View on GitHub",
    featured: true,
  },
  {
    id: "healthease",
    title: "HealthEase",
    meta: "2026 · AI-Powered Telemedicine Platform",
    tagline: "ML inference with FastAPI and Node.js",
    description:
      "Trained scikit-learn text classifier achieving an 85.4% F1-score. Architected Node.js API gateway routing to FastAPI ML microservices; processed 200+ req/min at p95 <200ms.",
    tags: ["Node.js", "FastAPI", "MongoDB", "PyTorch", "Socket.IO"],
    colorA: "#34a853",
    colorB: "#1da1f2",
    link: "https://github.com/vardxn/health-ease",
    linkLabel: "View on GitHub",
    featured: true,
  },
];

export const ARCHIVE_URL = "https://github.com/vardxn";
