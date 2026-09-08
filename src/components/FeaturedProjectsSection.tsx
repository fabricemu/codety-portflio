import React from 'react';
import { motion } from 'framer-motion';
import { projects, ProjectItem } from '../data/projects';
import { ExternalLink, Github, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const FeaturedProjectsSection: React.FC = () => {
  return (
    <section className="py-24 relative z-10 border-t border-zinc-800/60 bg-[#09090e]" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simba Style Heading: "Great builders build with certainty" */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Engineering Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Great builders build with certainty
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Real-world systems, nationwide platforms, and neural translation pipelines engineered with measurable impact, high uptime, and modern architecture.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project: ProjectItem, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              <div className="p-7 sm:p-8">
                
                {/* Metric Strip (Simba case study badge style) */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-baseline gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">
                    <span className="text-xl sm:text-2xl font-black text-white">{project.metric}</span>
                    <span className="text-xs font-medium text-indigo-300">{project.metricLabel}</span>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed mb-4">
                  {project.tagline}
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Architectural Highlights */}
                <div className="space-y-2 mb-6 pt-4 border-t border-zinc-800/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Key Engineering Highlights:
                  </div>
                  {project.architecturalHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action footer */}
              <div className="px-7 sm:px-8 py-4 bg-zinc-950/60 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors ml-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live System</span>
                    </a>
                  )}
                </div>

                <a
                  href={project.demo || project.github || "#contact"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
                >
                  <span>Explore outcome</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
