import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Clock, MapPin, Github, Linkedin, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "fabriceumunezero@gmail.com";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App',
    message: ''
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Build with certainty. <br />
            <span className="simba-gradient-text">Let&apos;s talk about your next project.</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Have a project scope, backend architecture challenge, REST API, or Figma design ready to be engineered? Reach out directly or fill in the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Availability (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-3xl bg-zinc-950/80 border border-zinc-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Inquiries</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Email</div>
                    <div className="text-sm font-medium text-white flex items-center gap-2 mt-0.5">
                      <span>{email}</span>
                      <button
                        onClick={handleCopy}
                        className="text-xs text-zinc-400 hover:text-white transition cursor-pointer"
                        title="Copy email"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Response Time</div>
                    <div className="text-sm font-medium text-white mt-0.5">Within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Availability</div>
                    <div className="text-sm font-medium text-white mt-0.5">Remote (Global) & On-demand</div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800/80">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  Social & Code Profiles:
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <a
                    href="https://github.com/fabricemu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Callout Card */}
            <div className="p-6 rounded-3xl bg-indigo-950/30 border border-indigo-500/30 text-indigo-200">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Current Status
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Accepting select freelance contracts, MVP builds, API design, and AI translation consulting projects.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/90 border border-zinc-800 shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Smith"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700/80 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700/80 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Project Domain / Requirement
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700/80 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Full-Stack Web App">Full-Stack Web App (Next.js + FastAPI/Spring Boot)</option>
                      <option value="REST API & Microservice">High-Performance REST API & Auth (FastAPI/Postgres)</option>
                      <option value="AI & Machine Translation">AI & NLP Pipeline (NLLB-200 / Language Detection)</option>
                      <option value="Figma to Code">Figma Design-to-Code Implementation</option>
                      <option value="DevOps & Docker CI/CD">DevOps, Containerization & CI/CD</option>
                      <option value="Other Consultation">Other Software Architecture Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your technical requirements, goals, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700/80 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank you! Message Sent.</h3>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
                    I have received your inquiry and will review your requirements. I will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
