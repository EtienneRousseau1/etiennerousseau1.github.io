export const projects = [
  {
    name: "FindMyLab",
    period: "January 2026 — Present",
    tags: ["Next.js", "Bun", "Postgres", "Docker"],
    blurb:
      "A platform helping 40,000+ UC Davis students find and reach out to research labs.",
    bullets: [
      "Built the platform in Next.js and Postgres so students can explore 200+ research labs in one place.",
      "Wrote a web scraper that collects, normalizes, and maintains lab metadata from university sources.",
      "Runs a Bun backend that persists lab metadata and per-user state across the platform.",
      "Added an LLM assistant that drafts personalized outreach messages to lab coordinators, tied to saved lab selections.",
    ],
  },
  {
    name: "LocalFlair",
    period: "April 2024 — June 2024",
    tags: ["React", "Go", "Postgres", "Docker"],
    blurb:
      "A marketplace connecting local artisans with buyers looking for handcrafted goods.",
    bullets: [
      "Built a full-stack marketplace with React TypeScript on the front end and Go handling server-side operations.",
      "Implemented artisan product listings, carts, and user-managed accounts.",
      "Integrated PostgreSQL for persistence and Google OAuth 2.0 for authentication.",
      "Containerized and deployed the application with Docker.",
    ],
  },
  {
    name: "Drink Dispenser",
    period: "April 2024 — May 2024",
    tags: ["React", "Tailwind", "Arduino"],
    blurb:
      "A web-controlled machine that mixes and pours a drink from a browser.",
    bullets: [
      "Designed a React and Tailwind interface for custom drink creation using image recognition and percentage-based selection.",
      "Connected the front end to an Arduino over WiFi, driving a four-pump, one-valve liquid dispenser.",
      "Enabled real-time pouring from the web application into a physical container.",
      "Led the build, dividing work across the team.",
    ],
  },
  {
    name: "Daily MOOd",
    period: "January 2023 — May 2023",
    tags: ["React Native", "Express", "MongoDB"],
    blurb:
      "A mental health and anxiety management app built for UC Davis students.",
    bullets: [
      "Guided a team of developers and designers from concept through release.",
      "Built the app with React Native, an Express backend, and MongoDB.",
      "Added mood tracking and uplifting daily messages to support student well-being.",
    ],
  },
  {
    name: "The Storyboard Initiative",
    period: "April 2022 — June 2022",
    tags: ["JavaScript"],
    link: "https://tsbini.com/",
    blurb:
      "A site teaching high school students about business and financial literacy.",
    bullets: [
      "Built the site in JavaScript to make financial literacy approachable for high schoolers.",
    ],
  },
];
