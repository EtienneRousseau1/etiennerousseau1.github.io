// Work history, reverse-chronological. Dates and metrics are sourced from the
// resume in public/resume.pdf — keep the two in sync.
export const roles = [
  {
    company: "Tesla",
    title: "Software Engineer",
    location: "Fremont, CA",
    period: "July 2026 — Present",
    current: true,
    bullets: [
      "Building Tesla's Database-as-a-Service platform, which provisions and manages 10,000+ on-prem databases and virtual machines.",
      "Working across PostgreSQL, MongoDB, and Redis fleets to turn multi-day provisioning requests into self-service operations.",
    ],
  },
  {
    company: "Tesla",
    title: "Software Engineer Intern",
    location: "Fremont, CA",
    period: "December 2024 — June 2026",
    bullets: [
      "Collaborated on the Database-as-a-Service platform that streamlined provisioning for 10,000+ on-prem databases and VMs, projected to save hundreds of engineering hours per quarter.",
      "Launched a Go cluster identification service that cut primary/secondary detection latency by 98.6%.",
      "Architected a FastAPI and MongoDB metadata service with 50+ hierarchical schemas modeling infrastructure resources, enabling dynamic provisioning and orchestration across distributed systems.",
      "Surfaced real-time metrics and failure status for 3,000+ databases through a topology management tool, and enforced service access controls with a custom upstream validation model.",
    ],
  },
  {
    company: "HashiCorp",
    title: "Software Engineer Intern, Cloud Services",
    location: "San Francisco, CA",
    period: "June 2024 — September 2024",
    bullets: [
      "Refactored an open-source diagnostics tool into a production-grade Go library used across HashiCorp products, with extensible output formats that made reports usable by support teams.",
      "Reduced diagnostics report latency by 27% by pruning redundant data from the core processing pipeline.",
      "Built a telemetry-driven metrics system tracking product usage, supporting 99.9% platform reliability.",
      "Authored an RFC and aligned several engineering teams on requirements to ship the library.",
    ],
  },
  {
    company: "Codelab",
    title: "Developer",
    location: "Davis, CA",
    period: "September 2023 — May 2024",
    bullets: [
      "Led a cross-functional team of seven building a dashboard of aggregate and resilience scores, drawing metrics from five APIs across a Next.js, MongoDB, and Express stack.",
      "Built a full-stack FastAPI, Next.js, and MySQL application giving investors access to company funding and industry data.",
      "Added Google authentication with role-differentiated access levels.",
    ],
  },
  {
    company: "Pampa Technologies",
    title: "Software Engineer Intern",
    location: "Fremont, CA",
    period: "June 2023 — September 2023",
    bullets: [
      "Delivered a real-time monitoring platform in Python and React streaming PLC telemetry from 30+ automated guided vehicles.",
      "Built a manifest management application in C# and Angular letting users view, edit, and print records.",
      "Implemented server-side rendering and custom pagination to process and display 1,500+ manifest datasets.",
    ],
  },
];
