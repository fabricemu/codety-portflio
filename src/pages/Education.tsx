import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, CheckCircle2 } from 'lucide-react';
import { CallToActionSection } from '../components/CallToActionSection';

const educationList = [
  {
    title: "Bachelor's Degree in Computer Science",
    institution: "University of Rwanda",
    period: "2019 - 2024",
    degreeLevel: "Higher Education",
    summary: "Comprehensive academic foundation in software engineering, database modeling, algorithmic analysis, computer systems, and distributed architecture.",
    coreCompetencies: [
      "Advanced Data Structures & Algorithms",
      "Relational Database Systems & SQL",
      "Software Architecture & Design Patterns",
      "Web Technologies, APIs & Distributed Computing"
    ]
  },
  {
    title: "Advanced Level in Computer Science",
    institution: "GS Bumba",
    period: "2016 - 2018",
    degreeLevel: "Secondary Education",
    summary: "Completed upper secondary school with specialized concentration in computer systems, networking fundamentals, and foundational software logic.",
    coreCompetencies: [
      "Computer Systems & Architecture",
      "Networking & Protocol Basics",
      "Foundational Programming Logic"
    ]
  },
  {
    title: "Ordinary Level Education",
    institution: "St. Alphonse Mubuga",
    period: "2013 - 2015",
    degreeLevel: "Secondary Foundation",
    summary: "Completed secondary foundation with distinctions in general sciences, mathematics, and analytical reasoning.",
    coreCompetencies: [
      "Mathematics & Quantitative Analysis",
      "Natural Sciences Foundation",
      "Analytical Problem Solving"
    ]
  }
];

export default function Education() {
  return (
    <div className="pt-28 pb-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            Academic Foundation
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Education & Continuous Training
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Rigorous foundations in computer science, software engineering principles, and ongoing practical engineering mastery.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8 mb-20">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-7 sm:p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800 hover:border-indigo-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 w-fit">
                  {edu.degreeLevel}
                </span>
                <span className="text-xs font-mono text-zinc-500">{edu.period}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {edu.title}
              </h2>
              <div className="text-sm font-medium text-zinc-300 mb-4 flex items-center gap-2">
                <School className="w-4 h-4 text-zinc-500" />
                <span>{edu.institution}</span>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {edu.summary}
              </p>

              <div className="pt-4 border-t border-zinc-800/80">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5">
                  Core Subjects & Competencies:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {edu.coreCompetencies.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      <CallToActionSection />
    </div>
  );
}
