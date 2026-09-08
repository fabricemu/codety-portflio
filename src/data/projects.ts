export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  metric: string;
  metricLabel: string;
  description: string;
  architecturalHighlights: string[];
  techStack: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: "ryvcp",
    title: "Rwanda Youth Volunteers System",
    category: "Full-Stack Enterprise & RBAC",
    tagline: "Nationwide youth volunteer platform for task coordination, real-time tracking, and administrative governance.",
    metric: "1.7M+",
    metricLabel: "Active Volunteers Coordinated",
    description: "Architected a scalable public-sector volunteer coordination system handling high-concurrency member registrations, role-based hierarchy dispatch, real-time activity tracking, and automated regional reporting.",
    architecturalHighlights: [
      "Role-Based Access Control (RBAC) with granular admin, regional, and district permissions",
      "Relational schema modeling in PostgreSQL with optimized query indexes for analytics",
      "Responsive, accessible web portal designed from Figma wireframes to full production"
    ],
    techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "REST APIs", "Tailwind CSS", "Docker"],
    image: "/ryvcp.png",
    github: "https://github.com/fabricemu/",
    demo: "https://ryvcp.police.gov.rw/",
    featured: true
  },
  {
    id: "nllb-translation",
    title: "Neural Machine Translation & NLP Pipeline",
    category: "AI / NLP Engineering",
    tagline: "High-throughput multilingual neural machine translation engine leveraging Meta's NLLB-200.",
    metric: "200+",
    metricLabel: "Supported Languages & Dialects",
    description: "Built an asynchronous neural machine translation and automatic language detection service capable of low-latency cross-lingual translation across low-resource languages using PyTorch and FastAPI.",
    architecturalHighlights: [
      "FastText language identification layer with high-confidence routing",
      "NLLB-200 transformer inference optimization with sentence chunking and caching",
      "Asynchronous REST API endpoints containerized with Docker for seamless deployment"
    ],
    techStack: ["Python", "FastAPI", "NLLB-200", "PyTorch", "NLP", "Machine Translation", "Docker"],
    image: "/me.png",
    github: "https://github.com/fabricemu/",
    demo: "https://fabricemu.netlify.app",
    featured: true
  },
  {
    id: "scalable-fastapi-backend",
    title: "High-Performance REST API & Auth Engine",
    category: "Backend & Systems",
    tagline: "Production-ready backend architecture with JWT, SQLAlchemy ORM, and Alembic migrations.",
    metric: "99.9%",
    metricLabel: "Uptime & Schema Consistency",
    description: "Engineered a production-ready async API framework providing zero-trust authentication, token refresh rotation, relational database migrations, and auto-generated OpenAPI documentation.",
    architecturalHighlights: [
      "Zero-downtime database migrations with version-controlled Alembic scripts",
      "Async session pooling with SQLAlchemy and PostgreSQL for high concurrency",
      "Comprehensive test coverage with PyTest and automated GitHub Actions CI/CD"
    ],
    techStack: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "GitHub Actions", "Docker Compose"],
    image: "/icons/python.svg",
    github: "https://github.com/fabricemu/codety-portflio/",
    demo: "https://fabricemu.netlify.app",
    featured: true
  },
  {
    id: "modern-portfolio",
    title: "Enterprise Developer Portfolio Platform",
    category: "Frontend & Design-to-Code",
    tagline: "Interactive, Simba-inspired enterprise portfolio with interactive architecture console and dark aesthetic.",
    metric: "100%",
    metricLabel: "Responsive & Pixel-Fidelity",
    description: "Translated modern enterprise design patterns from insightsoftware Simba into an interactive React + Next-gen UI portfolio featuring real-time architecture simulations, Framer Motion transitions, and multi-category skills matrix.",
    architecturalHighlights: [
      "Floating glassmorphism navbar with live contract availability beacon",
      "Interactive System Architect Console illustrating real-time production topologies",
      "Comprehensive 8-category technical skills catalog with instant search & filter"
    ],
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Figma-to-Code"],
    image: "/me.png",
    github: "https://github.com/fabricemu/codety-portflio/",
    demo: "https://fabricemu.netlify.app",
    featured: true
  }
];
