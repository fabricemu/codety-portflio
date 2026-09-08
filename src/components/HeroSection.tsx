import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Layers } from 'lucide-react';

interface HeroSectionProps {
  onExploreArchitecture: () => void;
  onViewProjects: () => void;
  onContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreArchitecture,
  onViewProjects,
  onContact,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Availability & Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Freelance & Contract Engineering</span>
            <span className="text-indigo-400/50">|</span>
            <span className="text-zinc-300 hidden sm:inline">Full-Stack & AI Systems</span>
          </motion.div>

          {/* Simba-Inspired Bold Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            Build with certainty. <br />
            <span className="simba-gradient-text">
              Own where software, data & AI run.
            </span>
          </motion.h1>

          {/* Subtitle & Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal"
          >
            Freelance Full-Stack Software Developer experienced in building scalable web applications, REST APIs, and database-driven systems. Translating requirements and Figma designs into production-ready architecture with <strong className="text-white font-semibold">Python, FastAPI, Java, Spring Boot, Next.js, PostgreSQL, Docker</strong>, and <strong className="text-white font-semibold">AI/NLP</strong> pipelines.
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={onExploreArchitecture}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-600/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-indigo-200" />
              <span>Interactive Architecture Console</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>

            <button
              onClick={onViewProjects}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 font-medium text-sm sm:text-base border border-zinc-700/60 transition-all duration-200 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Featured Case Studies</span>
            </button>

            <button
              onClick={onContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-white/5 text-zinc-300 hover:text-white font-medium text-sm sm:text-base border border-transparent hover:border-zinc-700 transition-all duration-200 cursor-pointer"
            >
              <span>Get in Touch</span>
            </button>
          </motion.div>

        </div>

        {/* Simba-Style Metrics Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl shadow-2xl">
            
            <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1">
                <span>5+</span>
                <span className="text-indigo-400 text-xl font-bold">Years</span>
              </div>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">Software Engineering</span>
              <span className="text-[11px] text-zinc-500 mt-0.5 hidden sm:block">Full Lifecycle Delivery</span>
            </div>

            <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl hover:bg-white/[0.02] transition-colors border-l border-zinc-800/50 sm:border-l">
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1">
                <span>99.9%</span>
              </div>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">Production Reliability</span>
              <span className="text-[11px] text-zinc-500 mt-0.5 hidden sm:block">ACID & Uptime Architecture</span>
            </div>

            <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl hover:bg-white/[0.02] transition-colors border-l border-zinc-800/50 sm:border-l">
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1">
                <span>20k+</span>
              </div>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">Users Coordinated</span>
              <span className="text-[11px] text-zinc-500 mt-0.5 hidden sm:block">High-Concurrency Scale</span>
            </div>

            <div className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl hover:bg-white/[0.02] transition-colors border-l border-zinc-800/50 sm:border-l">
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1">
                <span>100%</span>
              </div>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">Automated CI/CD</span>
              <span className="text-[11px] text-zinc-500 mt-0.5 hidden sm:block">Docker, Actions & Tests</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
