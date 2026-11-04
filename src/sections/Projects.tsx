import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { Button } from '../components/Button';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [expanded, setExpanded] = useState<boolean>(true);

  // Categories present in projects
  const categories = [
    { id: 'all', label: 'Todos os projetos' },
    { id: 'Educação & Acessibilidade', label: 'Educação' },
    { id: 'Design de Produto & Web', label: 'Produto' },
    { id: 'Desenvolvimento Web', label: 'Web' },
    { id: 'Infraestrutura de Redes', label: 'Redes' },
  ];

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  // If expanded is false, show initial 2; if true, show all
  const displayedProjects = expanded ? filteredProjects : filteredProjects.slice(0, 2);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          sysId="04"
          title="Projetos e Soluções"
          subtitle="Aplicações práticas, iniciativas acadêmicas e conceitos de produto desenvolvidos."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
              FILTRAR POR ESCOPO:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1 rounded-sm font-mono text-xs transition-colors ${
                  filter === cat.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 font-semibold'
                    : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-400 hover:text-slate-200 border border-slate-800 dark:border-slate-800 light:border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Ver todos os projetos Button / Toggle */}
        {filteredProjects.length > 2 && (
          <div className="mt-12 text-center">
            <Button
              variant="secondary"
              size="md"
              onClick={() => setExpanded(!expanded)}
              icon={
                expanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )
              }
              iconPosition="right"
            >
              {expanded ? 'Mostrar menos projetos' : 'Ver todos os projetos'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
