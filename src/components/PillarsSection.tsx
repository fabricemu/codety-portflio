import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Database, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PillarsSectionProps {
  onSelectCategory?: (categoryId: string) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onSelectCategory }) => {
  const pillars = [
    {
      id: "backend",
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      badge: "Backend & Systems",
      title: "High-Performance Backend & APIs",
      description: "Production-ready async services, zero-trust token authentication, and enterprise-grade microservices built with Python, FastAPI, Java, and Spring Boot.",
      tags: ["FastAPI", "Spring Boot", "REST APIs", "JWT / RBAC", "Maven"],
      highlights: [
        "Sub-30ms async API response times",
        "Role-Based Access Control (RBAC) & OAuth2",
        "Auto-generated OpenAPI & Swagger specs"
      ]
    },
    {
      id: "frontend",
      icon: <Layout className="w-6 h-6 text-cyan-400" />,
      badge: "Frontend & UI/UX",
      title: "Responsive Frontend & Design-to-Code",
      description: "Translating Figma design tokens and complex wireframes into pixel-perfect, accessible, and fast Next.js and React web applications.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"],
      highlights: [
        "100% pixel-perfect Figma to React fidelity",
        "Server-Side Rendering & SEO optimization",
        "Adaptive mobile-first responsive design"
      ]
    },
    {
      id: "database",
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      badge: "Data & Cloud DevOps",
      title: "Database Systems & CI/CD Pipelines",
      description: "ACID-compliant relational architectures, automated schema migrations with Alembic, and containerized deployment with Docker and GitHub Actions.",
      tags: ["PostgreSQL", "SQLAlchemy", "Alembic", "Docker", "CI/CD"],
      highlights: [
        "Zero-downtime relational schema migrations",
        "Multi-stage Docker container builds",
        "Automated GitHub Actions verification pipelines"
      ]
    },
    {
      id: "ai_nlp",
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      badge: "AI & NLP Systems",
      title: "AI & Neural Machine Translation",
      description: "Practical AI integration focusing on Meta's NLLB-200 multilingual model, language detection, and low-latency transformer inference pipelines.",
      tags: ["NLLB-200", "Machine Translation", "Language Detection", "NLP", "AI APIs"],
      highlights: [
        "200+ language neural machine translation",
        "High-confidence automatic language identification",
        "Scalable AI API integrations into backend services"
      ]
    }
  ];

  return (
    <section className="py-24 relative z-10 border-t border-zinc-800/60 bg-[#09090d]/60" id="pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Simba style: "The Portfolio / A foundation for builders") */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            The Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            A foundation for data, software & AI builders
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Bridging scalable backend microservices, pixel-perfect frontend interfaces, robust database migrations, and modern AI pipelines into unified, production-ready applications.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl p-7 sm:p-8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-zinc-800/80 hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div>
                {/* Header of card */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-700/60 group-hover:border-indigo-500/50 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider px-2.5 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/40">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Capability Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-900/90 text-zinc-300 border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights list */}
                <ul className="space-y-2 mb-6 border-t border-zinc-800/80 pt-4">
                  {pillar.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectCategory?.(pillar.id)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  <span>Explore capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
