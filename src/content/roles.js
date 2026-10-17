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
      "Shipped Tesla's Database-as-a-Service platform, which now runs the company's entire on-prem fleet of 10,000+ databases and VMs, cutting provisioning from a multi-day process to under 10 minutes and saving hundreds of engineering hours per quarter.",
      "Built and shipped DPCP's production AI operations agent, exposed as an MCP server with 18 read-only tools. It correlates errors across distributed trace spans and has cut incident response time by over 90% for the 100+ engineers who use it daily.",
      "Automated in-place database upgrades and rolling restarts across every database engine with Temporal and Ansible, replacing a manual process prone to mismanaged upgrades. Replicas restart first with automatic writer failover.",
      "Automating configuration management across all database systems so config changes roll out quickly and reliably.",
      "Turned the platform's metadata catalog into a multi-tenant service with per-org isolation and row-level permission filtering.",
      "Built a unified debugging UI that merges activity logs, Temporal history, and Splunk into a single request timeline for on-call triage.",
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
