import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { SkillCard } from '../components/SkillCard';
import { skillsData } from '../data/skills';
import { SkillCategory } from '../types';
import { Layout, Smartphone, Database, Network, Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | SkillCategory>('all');

  const categories = [
    { id: 'all', label: 'Todas as áreas', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'frontend', label: 'Front-end', icon: <Layout className="w-3.5 h-3.5" /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone className="w-3.5 h-3.5" /> },
    { id: 'backend', label: 'Back-end & Dados', icon: <Database className="w-3.5 h-3.5" /> },
    { id: 'infra', label: 'Infraestrutura', icon: <Network className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills =
    selectedFilter === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedFilter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#070b14]/85 dark:bg-[#070b14]/85 light:bg-slate-50/90 backdrop-blur-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          sysId="03"
          title="Tecnologias e Habilidades"
          subtitle="Conhecimentos técnicos adquiridos na formação técnica e em projetos práticos."
        />

        {/* Category Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id as 'all' | SkillCategory)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-all duration-200 select-none ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-md shadow-cyan-950/40 font-semibold'
                    : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-white text-slate-400 dark:text-slate-400 light:text-slate-600 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Transparent Note / Disclaimer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Habilidades técnicas em constante evolução prática e acadêmica.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
