import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowRight, Github, Linkedin, Sparkles } from 'lucide-react';

export const CallToActionSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const email = "fabriceumunezero@gmail.com"; // User email from profile / portfolio

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative z-10 overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* High-Impact Closing Card (Simba Jet-Black to Deep-Violet Gradient) */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 border border-indigo-500/30 shadow-2xl bg-gradient-to-br from-[#0c0d18] via-[#15122b] to-[#0a0a10]">
          
          {/* Ambient Glow in Card */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-400/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
              Let&apos;s Build Together
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Build with certainty. <br />
              <span className="simba-gradient-text">
                Start your next project today.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-10 max-w-2xl font-normal">
              Whether you need high-throughput REST APIs, a robust Next.js/React web interface from Figma, containerized Docker deployments, or custom AI/NLP integrations—I bring production-proven certainty to every step of your development lifecycle.
            </p>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-600/30 transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email Inquiry</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 text-sm sm:text-base font-medium border border-zinc-700/60 transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Trust and Social Links */}
            <div className="pt-8 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Typical response time: <strong>Within 24 hours</strong></span>
              </div>

              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/fabricemu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
