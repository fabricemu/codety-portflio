export interface SkillItem {
  name: string;
  level: "Advanced" | "Proficient" | "Specialized";
  description: string;
  tag: string;
  highlight?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  tagline: string;
  skills: SkillItem[];
}

export const technicalSkills: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    iconName: "Server",
    tagline: "High-throughput APIs, microservices, and secure authentication",
    skills: [
      {
        name: "Python",
        level: "Advanced",
        description: "Idiomatic Python development for backend services, data processing, and AI integrations.",
        tag: "Core Language",
        highlight: "Production Services"
      },
      {
        name: "FastAPI",
        level: "Advanced",
        description: "High-performance async RESTful APIs with Pydantic validation and automatic OpenAPI specs.",
        tag: "Framework",
        highlight: "Async & High-Throughput"
      },
      {
        name: "Java",
        level: "Proficient",
        description: "Enterprise-grade object-oriented programming, concurrent systems, and backend logic.",
        tag: "Core Language",
        highlight: "Enterprise Scale"
      },
      {
        name: "Spring Boot",
        level: "Proficient",
        description: "Robust microservices, dependency injection, Spring Security, and enterprise integrations.",
        tag: "Framework",
        highlight: "Microservices"
      },
      {
        name: "Maven",
        level: "Proficient",
        description: "Project lifecycle management, dependency resolution, and automated builds for Java ecosystems.",
        tag: "Build Tool",
        highlight: "Build Automation"
      },
      {
        name: "REST APIs",
        level: "Advanced",
        description: "Clean resource-oriented API design, versioning, status codes, pagination, and documentation.",
        tag: "Architecture",
        highlight: "Clean Contracts"
      },
      {
        name: "Authentication & Authorization",
        level: "Advanced",
        description: "JWT, OAuth2, session handling, password hashing, and role-based access control (RBAC).",
        tag: "Security",
        highlight: "RBAC & Zero-Trust"
      }
    ]
  },
  {
    id: "frontend",
    title: "Frontend & Web UI",
    iconName: "Layout",
    tagline: "Modern, responsive, and performance-optimized web applications",
    skills: [
      {
        name: "Next.js",
        level: "Advanced",
        description: "SSR, SSG, Server Components, App Router, and SEO-optimized production web apps.",
        tag: "Framework",
        highlight: "Full-Stack React"
      },
      {
        name: "React",
        level: "Advanced",
        description: "Component-driven architecture, custom hooks, context state management, and modern patterns.",
        tag: "Library",
        highlight: "UI Architecture"
      },
      {
        name: "TypeScript",
        level: "Advanced",
        description: "Strict static typing, interfaces, generic types, and end-to-end type safety.",
        tag: "Language",
        highlight: "Type Safety"
      },
      {
        name: "JavaScript (ES6+)",
        level: "Advanced",
        description: "Deep knowledge of asynchronous JS, event loop, closures, DOM manipulation, and modern specs.",
        tag: "Language",
        highlight: "Modern ESNext"
      },
      {
        name: "HTML5 & CSS3",
        level: "Advanced",
        description: "Semantic markup, modern layout techniques (CSS Grid, Flexbox), and accessible web standards.",
        tag: "Core Web",
        highlight: "Accessibility"
      },
      {
        name: "Responsive Design",
        level: "Advanced",
        description: "Mobile-first layouts, adaptive UI components, fluid typography, and cross-browser consistency.",
        tag: "UI/UX",
        highlight: "Cross-Device"
      }
    ]
  },
  {
    id: "database",
    title: "Database Systems",
    iconName: "Database",
    tagline: "Relational modeling, high-performance querying, and schema migrations",
    skills: [
      {
        name: "PostgreSQL",
        level: "Advanced",
        description: "Relational database schema modeling, indexing, ACID transactions, complex joins, and tuning.",
        tag: "RDBMS",
        highlight: "ACID & Performance"
      },
      {
        name: "SQL",
        level: "Advanced",
        description: "Writing complex queries, aggregations, window functions, and query optimization.",
        tag: "Query Language",
        highlight: "Query Tuning"
      },
      {
        name: "SQLAlchemy",
        level: "Advanced",
        description: "Python ORM and Core query builder for robust database interactions and relationship mapping.",
        tag: "ORM",
        highlight: "Python ORM"
      },
      {
        name: "Alembic",
        level: "Advanced",
        description: "Automated database schema migration scripts, version branching, and zero-downtime upgrades.",
        tag: "Migrations",
        highlight: "Zero-Downtime"
      },
      {
        name: "Database Design & CRUD",
        level: "Advanced",
        description: "Data normalization, entity relationship modeling, constraints, and efficient CRUD operations.",
        tag: "Architecture",
        highlight: "Schema Architecture"
      }
    ]
  },
  {
    id: "devops",
    title: "DevOps & CI/CD",
    iconName: "Terminal",
    tagline: "Automated testing, containerized builds, and dependable continuous deployment",
    skills: [
      {
        name: "Docker",
        level: "Advanced",
        description: "Containerizing services with multi-stage builds, minimal images, and environment isolation.",
        tag: "Containerization",
        highlight: "Multi-Stage Builds"
      },
      {
        name: "Docker Compose",
        level: "Advanced",
        description: "Orchestrating multi-container local and staging stacks (APIs, Databases, Caches, Workers).",
        tag: "Orchestration",
        highlight: "Multi-Service Stacks"
      },
      {
        name: "GitHub Actions",
        level: "Proficient",
        description: "Writing automated CI/CD workflow pipelines for linting, testing, building, and publishing.",
        tag: "CI/CD",
        highlight: "Automated Workflows"
      },
      {
        name: "Git & GitHub",
        level: "Advanced",
        description: "Branching strategies, pull requests, semantic versioning, and code review governance.",
        tag: "VCS",
        highlight: "Version Governance"
      },
      {
        name: "Automated Builds & Testing",
        level: "Proficient",
        description: "Automated test suites (PyTest, JUnit), build verification, and deployment verification.",
        tag: "Quality",
        highlight: "Test Automation"
      }
    ]
  },
  {
    id: "design",
    title: "Design & UI Implementation",
    iconName: "Palette",
    tagline: "Translating Figma design tokens and wireframes into pixel-perfect reality",
    skills: [
      {
        name: "Figma",
        level: "Proficient",
        description: "Navigating designs, extracting typography tokens, color palettes, auto-layouts, and assets.",
        tag: "Design Tool",
        highlight: "Design Systems"
      },
      {
        name: "Design-to-Code",
        level: "Advanced",
        description: "Translating complex Figma mockups into pixel-perfect, clean, reusable React/Tailwind components.",
        tag: "Workflow",
        highlight: "Pixel-Perfect Fidelity"
      },
      {
        name: "UI Implementation",
        level: "Advanced",
        description: "Crafting micro-interactions, responsive states, dark/light modes, and intuitive ergonomics.",
        tag: "Frontend",
        highlight: "Micro-Interactions"
      },
      {
        name: "Responsive Web Design",
        level: "Advanced",
        description: "Seamless layouts across mobile, tablet, laptop, and ultra-wide monitor viewports.",
        tag: "Layout",
        highlight: "Mobile-First"
      }
    ]
  },
  {
    id: "ai_nlp",
    title: "AI & NLP Systems",
    iconName: "Cpu",
    tagline: "Machine translation, language intelligence, and LLM API integrations",
    skills: [
      {
        name: "NLLB-200",
        level: "Specialized",
        description: "No Language Left Behind model integration for high-quality multi-dialect machine translation.",
        tag: "Model Architecture",
        highlight: "200+ Languages"
      },
      {
        name: "Machine Translation",
        level: "Specialized",
        description: "Building neural translation pipelines, tokenization, beam search inference, and evaluation.",
        tag: "NLP Pipeline",
        highlight: "Neural Translation"
      },
      {
        name: "Language Detection",
        level: "Specialized",
        description: "Automatic language identification and routing for multilingual input streams.",
        tag: "Classification",
        highlight: "Fast Identification"
      },
      {
        name: "AI API Integration",
        level: "Advanced",
        description: "Connecting OpenAI, Gemini, Hugging Face endpoints into scalable backend workflows.",
        tag: "Integration",
        highlight: "Agentic Workflows"
      },
      {
        name: "Natural Language Processing",
        level: "Proficient",
        description: "Text normalization, embeddings, semantic parsing, and generative AI task handling.",
        tag: "NLP",
        highlight: "Semantic Processing"
      }
    ]
  },
  {
    id: "web_cms",
    title: "Web & CMS",
    iconName: "Globe",
    tagline: "Content management, rapid web solutions, and search optimization",
    skills: [
      {
        name: "WordPress",
        level: "Proficient",
        description: "Custom themes, plugins, REST API usage, and performance optimization for WordPress sites.",
        tag: "CMS",
        highlight: "Custom Themes & CMS"
      },
      {
        name: "PHP",
        level: "Proficient",
        description: "Server-side scripting, custom hook extensions, and backend data processing.",
        tag: "Language",
        highlight: "Backend Scripting"
      },
      {
        name: "jQuery",
        level: "Proficient",
        description: "DOM manipulation, legacy library maintenance, and lightweight event interactions.",
        tag: "Library",
        highlight: "Legacy & Lightweight"
      },
      {
        name: "SEO Optimization",
        level: "Advanced",
        description: "Technical SEO, metadata optimization, OpenGraph, sitemaps, robots.txt, and Core Web Vitals.",
        tag: "Optimization",
        highlight: "Core Web Vitals"
      }
    ]
  },
  {
    id: "development",
    title: "Architecture & Development",
    iconName: "Workflow",
    tagline: "End-to-end software lifecycle, system design, and agile execution",
    skills: [
      {
        name: "Software Architecture",
        level: "Advanced",
        description: "Designing modular, loosely-coupled architectures with clear separation of concerns.",
        tag: "System Design",
        highlight: "Clean Architecture"
      },
      {
        name: "API Design",
        level: "Advanced",
        description: "Designing consistent, developer-friendly interfaces with comprehensive documentation.",
        tag: "API Standard",
        highlight: "OpenAPI / Swagger"
      },
      {
        name: "Debugging & Troubleshooting",
        level: "Advanced",
        description: "Root-cause analysis, profiling memory/latency bottlenecks, and structured bug resolution.",
        tag: "Diagnostics",
        highlight: "Root Cause Resolution"
      },
      {
        name: "Testing & Quality Assurance",
        level: "Proficient",
        description: "Unit testing, integration testing, API contract tests, and test-driven development principles.",
        tag: "Testing",
        highlight: "Automated QA"
      },
      {
        name: "Agile & Product Delivery",
        level: "Advanced",
        description: "Sprint planning, milestone scoping, continuous feedback loops, and stakeholder alignment.",
        tag: "Process",
        highlight: "On-Time Delivery"
      }
    ]
  }
];
