import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { technicalSkills } from '../data/skillsData';
import { 
  Server, Layout, Database, Terminal, Palette, Cpu, Globe, Workflow, 
  Search, CheckCircle, Sparkles 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-4 h-4" />,
  Layout: <Layout className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Terminal: <Terminal className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />,
  Cpu: <Cpu className="w-4 h-4" />,
  Globe: <Globe className="w-4 h-4" />,
  Workflow: <Workflow className="w-4 h-4" />,
};

export const SkillsMatrixSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = technicalSkills.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) => {
      const matchesSearch = 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tag.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategoryId === 'all' || activeCategoryId === cat.id;
      return matchesSearch && matchesCategory;
    });

    return {
      ...cat,
      skills: matchingSkills,
    };
  }).filter((cat) => cat.skills.length > 0);

  const totalMatchingSkills = filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section className="py-24 relative z-10 border-t border-zinc-800/60 bg-[#08080c]" id="skills-matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simba Style Header: Catalog / Resources */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Technical Capabilities Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
              Full-Stack & Engineering Catalog
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Every tool and methodology is grounded in production software delivery, resilient system architecture, and real-world results.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search skills, tools, frameworks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
              activeCategoryId === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
          >
            All Capabilities ({technicalSkills.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          
          {technicalSkills.map((category) => {
            const isSelected = activeCategoryId === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {iconMap[category.iconName]}
                <span>{category.title}</span>
                <span className="text-xs opacity-60">({category.skills.length})</span>
              </button>
            );
          })}
        </div>

        {/* Empty state */}
        {totalMatchingSkills === 0 && (
          <div className="text-center py-16 px-4 rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <p className="text-zinc-400 text-base mb-2">No skills found matching &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategoryId('all'); }}
              className="text-indigo-400 text-sm hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Categories & Skill Cards Grid */}
        <div className="space-y-14">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-700/60 text-indigo-400">
                    {iconMap[category.iconName]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-xs text-zinc-400">{category.tagline}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
                  {category.skills.length} competencies
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-indigo-500/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                          {skill.tag}
                        </span>
                        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          skill.level === 'Specialized' 
                            ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
                            : skill.level === 'Advanced'
                            ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
                            : 'bg-zinc-800 text-zinc-300'
                        }`}>
                          {skill.level}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white mb-2">{skill.name}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                        {skill.description}
                      </p>
                    </div>

                    {skill.highlight && (
                      <div className="pt-3 border-t border-zinc-800/60 flex items-center gap-1.5 text-[11px] text-zinc-400">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{skill.highlight}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
