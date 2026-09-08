import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { architectureScenarios } from '../data/interactiveArchitectureData';
import { Terminal, Copy, Check, Sparkles, ShieldCheck } from 'lucide-react';

export const SystemConsoleSection: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(architectureScenarios[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  const activeScenario = architectureScenarios.find((s) => s.id === activeScenarioId) || architectureScenarios[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeScenario.codeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative z-10 border-t border-zinc-800/60 bg-[#07070b]" id="architecture-console">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simba style heading: "Ask Simba / Find the right fit for what you're building" */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Interactive Developer Studio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Find the right architecture for what you’re building
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Select a system challenge below to inspect how I architect, test, and deploy production-grade software across backend, frontend, database, DevOps, and AI.
          </p>
        </div>

        {/* Question / Scenario Chips (Simba: "Try these examples") */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
            Explore architectural blueprints:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {architectureScenarios.map((scenario) => {
              const isSelected = scenario.id === activeScenarioId;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setActiveScenarioId(scenario.id)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/50"
                      : "bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-white" : "bg-zinc-500"}`} />
                  <span>{scenario.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Scenario Console Window */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-zinc-950/90 border border-zinc-800/90 shadow-2xl overflow-hidden backdrop-blur-2xl"
          >
            {/* Console Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-zinc-800/80 bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-px bg-zinc-700/60 mx-1" />
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>architect://{activeScenario.id}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {activeScenario.badge}
                </span>
              </div>
            </div>

            {/* Console Body Grid */}
            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              
              {/* Left Column: Architectural Overview & Step Flow (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {activeScenario.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
                    {activeScenario.summary}
                  </p>

                  {/* Key Metrics Chips */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    {activeScenario.keyMetrics.map((metric, i) => (
                      <div key={i} className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80">
                        <div className="text-base sm:text-lg font-bold text-white mb-0.5">{metric.value}</div>
                        <div className="text-[11px] text-zinc-400 uppercase tracking-wider">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Flow Steps / Topology */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      Execution Topology & Data Flow:
                    </div>
                    {activeScenario.steps.map((step, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/70 hover:border-zinc-700/80 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-mono font-semibold text-indigo-400">{step.phase}</span>
                          <span className="text-xs font-mono text-zinc-500 bg-zinc-800/60 px-2 py-0.5 rounded">{step.tech}</span>
                        </div>
                        <h4 className="text-sm font-semibold text-white mb-1">{step.title}</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">{step.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Technologies Applied:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeScenario.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Code / Blueprint Preview (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="h-full rounded-2xl bg-zinc-900/90 border border-zinc-800 flex flex-col overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-950/60">
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                      {activeScenario.codeSnippet.filename}
                    </span>
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium transition cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-4 sm:p-5 flex-1 overflow-x-auto font-mono text-xs text-zinc-300 leading-relaxed bg-[#0c0d14]">
                    <pre>
                      <code>{activeScenario.codeSnippet.code}</code>
                    </pre>
                  </div>

                  <div className="p-4 border-t border-zinc-800/80 bg-zinc-950/40 text-xs text-zinc-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Production Tested & Type Checked
                    </span>
                    <span className="text-zinc-500 font-mono">100% Validated</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
