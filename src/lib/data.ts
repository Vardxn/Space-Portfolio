/** Canonical origin — apex 307-redirects here, so www is the real home. */
export const SITE_URL = "https://vardxn.vercel.app";

export const PROFILE = {
  name: "Vardan Pal",
  firstName: "Vardan",
  role: "Software Engineer | Backend · Cloud · AI",
  status: "Software Engineer · Backend · Cloud · AI",
  taglines: [
    "build cloud-native backend systems.",
    "architect production-grade AI agents.",
    "design secure RAG and vector search pipelines.",
    "optimize database and API performance.",
    "automate infrastructure with CI/CD.",
  ],
  bio: "I am a Software Engineer studying Information Technology at NIT Srinagar, specializing in Backend, Cloud, and AI. I build scalable REST APIs, secure cloud-native systems, and production-ready AI agents using Python, TypeScript, FastAPI, and Node.js.",
  about: {
    lead: "I work across the backend and cloud to build fast, scalable, and secure architectures.",
    p2: "I have experience working with Node.js, FastAPI, PostgreSQL, MongoDB, Docker, and AWS, shipping security-first Corrective RAG systems, autonomous PR reviewers, and AI-driven routing engines.",
    p3: "I focus on building production-ready architectures—optimizing queries, enforcing strict security guardrails against prompt-injections, and deploying via automated CI/CD pipelines.",
    credentials: [
      "B.Tech, IT — NIT Srinagar (2022–2026)",
      "AWS Certified Cloud Practitioner",
      "AWS AI Practitioner (AIF-C01) Prep Course",
      "JPMorgan Chase & Co. SWE Simulation",
      "Anthropic Claude Course Certificates",
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
    range: "Nov 2024 — Feb 2025",
    location: "Noida, India",
    blurb:
      "Optimized MongoDB queries, refactored RESTful APIs, and containerized Node.js environments.",
    points: [
      "Optimized MongoDB compound indexes across 12 microservices, reducing p95 query latency from 800ms to 240ms.",
      "Refactored RESTful APIs using modular Node.js/Express.js; boosted Jest test coverage from 40% to 75%.",
      "Containerized Node.js environments via Docker Compose, reducing developer onboarding from 2 days to 30 mins.",
      "Implemented GitHub Actions CI/CD pipelines supporting code reviews, agile releases, and production deploys.",
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
  { num: "01", name: "Backend", items: "Node.js · Express.js · FastAPI · REST APIs" },
  { num: "02", name: "Databases", items: "PostgreSQL · pgvector · MongoDB · Redis · Prisma" },
  { num: "03", name: "Cloud & DevOps", items: "AWS · Docker · GitHub Actions · CI/CD · MCP" },
  { num: "04", name: "AI & LLM", items: "LangGraph · RAG · Vector Search · Prompt Eng" },
  { num: "05", name: "Security", items: "Prompt Injection Def · PII Detection · Sandboxing" },
  { num: "06", name: "Languages", items: "Python · TypeScript · JavaScript · SQL · C++" },
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
    id: "docguard",
    title: "DocGuard",
    meta: "June 2026 – July 2026 · Security-First Corrective RAG Agent",
    tagline: "Corrective RAG with LangGraph, pgvector, and Claude",
    description:
      "Developed a Corrective RAG agent using LangGraph for semantic retrieval, query rewriting, and grounded generation with Claude relevance grading. Engineered security layers against prompt injection, PII, and secret leaks; deployed via FastAPI/MCP with Redis caching and Langfuse observability.",
    tags: ["Python", "LangGraph", "FastAPI", "pgvector", "Claude", "MCP", "Docker"],
    colorA: "#f43f5e",
    colorB: "#fb923c",
    link: "https://github.com/Vardxn/docguard",
    linkLabel: "View on GitHub",
    featured: true,
  },
  {
    id: "devagent-x",
    title: "DevAgent-X",
    meta: "Feb 2026 – Apr 2026 · Autonomous PR Reviewer & Sandbox",
    tagline: "Claude 3.5 code reviews with Docker sandbox",
    description:
      "Built an automated PR review pipeline integrating Express.js webhooks and Claude 3.5 Sonnet for real-time code analysis and feedback loops. Secured untrusted code execution within isolated Docker sandboxes, implementing strict guardrails against prompt injection and secret leakage risks.",
    tags: ["Node.js", "TypeScript", "Express.js", "Claude 3.5", "Docker", "Webhooks"],
    colorA: "#7c3aed",
    colorB: "#f0abfc",
    link: "https://github.com/Vardxn/DevAgent-X",
    linkLabel: "View on GitHub",
    featured: true,
  },
  {
    id: "logipulse",
    title: "LogiPulse",
    meta: "Jan 2026 – May 2026 · AI-Driven Supply Chain Routing",
    tagline: "Live routing with Dijkstra/A* and RAG",
    description:
      "Designed Dijkstra/A* routing algorithms for 500+ node paths, integrating live weather and fuel APIs for dynamic supply chain route planning. Created a GPT-4o OCR and RAG pipeline for structured manifest extraction, leveraging PostgreSQL and MongoDB for efficient workload separation.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "MongoDB", "GPT-4o", "Prisma"],
    colorA: "#0069ff",
    colorB: "#4cc9f0",
    link: "https://github.com/Vardxn/LogiPulse",
    linkLabel: "View on GitHub",
    featured: true,
  },
];

export const ARCHIVE_URL = "https://github.com/vardxn";
