import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Layers, ShieldCheck, Terminal } from 'lucide-react';
import { Project } from '../types';
import { Button } from './Button';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  // Fallback blueprint visual generator based on project id
  const renderFallbackBlueprint = () => {
    switch (project.id) {
      case 'integramente':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#0c1829] to-[#080d18] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-avionics-grid opacity-25" />
            <div className="w-12 h-12 rounded-full bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mb-3 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="font-heading font-bold text-lg text-slate-100 tracking-wide">
              INTEGRAMENTE
            </span>
            <span className="font-mono text-xs text-cyan-400 mt-1 uppercase tracking-wider">
              Acessibilidade TEA // React Native
            </span>
            <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-slate-400 border border-slate-800 px-2 py-1 rounded bg-slate-900/60">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>PROJETO ACADÊMICO</span>
            </div>
          </div>
        );
      case 'coffeebreak':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#151a24] to-[#080d18] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-avionics-grid opacity-25" />
            <div className="w-12 h-12 rounded-full bg-amber-950/60 border border-amber-400/40 flex items-center justify-center text-amber-400 mb-3 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              <Layers className="w-6 h-6" />
            </div>
            <span className="font-heading font-bold text-lg text-slate-100 tracking-wide">
              COFFEEBREAK®
            </span>
            <span className="font-mono text-xs text-amber-400 mt-1 uppercase tracking-wider">
              Produtividade // Pomodoro & Indução
            </span>
            <span className="text-[11px] text-slate-400 italic mt-2">
              "A cafeteira que prepara foco, não café."
            </span>
          </div>
        );
      case 'front-certo':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#0c1829] to-[#080d18] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-avionics-grid opacity-25" />
            <div className="w-12 h-12 rounded-full bg-blue-950/70 border border-blue-400/40 flex items-center justify-center text-blue-400 mb-3 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <Terminal className="w-6 h-6" />
            </div>
            <span className="font-heading font-bold text-lg text-slate-100 tracking-wide">
              FRONT-CERTO
            </span>
            <span className="font-mono text-xs text-blue-400 mt-1 uppercase tracking-wider">
              Mural Digital // Turma 3C
            </span>
          </div>
        );
      case 'datasmart':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#0c1b24] to-[#080d18] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-avionics-grid opacity-25" />
            <div className="w-12 h-12 rounded-full bg-teal-950/70 border border-teal-400/40 flex items-center justify-center text-teal-400 mb-3 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="font-heading font-bold text-lg text-slate-100 tracking-wide">
              DATASMART
            </span>
            <span className="font-mono text-xs text-teal-400 mt-1 uppercase tracking-wider">
              VLANs // Tabela MAC // Packet Tracer
            </span>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-slate-900 flex items-center justify-center">
            <span className="font-mono text-xs text-slate-400">BLUEPRINT_RENDER // SYS.OK</span>
          </div>
        );
    }
  };

  return (
    <div className="relative group flex flex-col rounded-sm bg-[#101827]/85 dark:bg-[#101827]/85 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/50 light:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/40 overflow-hidden">
      {/* Top Cockpit HUD corners */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors z-20 pointer-events-none" />

      {/* Cover Image Container */}
      <div className="relative w-full h-52 sm:h-56 bg-slate-950 overflow-hidden border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
        {!imageError ? (
          <img
            src={project.image}
            alt={project.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          renderFallbackBlueprint()
        )}

        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#080D18]/90 border border-cyan-500/30 text-cyan-300 font-mono text-[10px] uppercase tracking-wider backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {project.badge}
          </span>
        </div>

        {/* Project ID Tag */}
        <div className="absolute top-3 right-3 z-10">
          <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded-sm bg-black/60 text-slate-400 border border-slate-700 backdrop-blur-sm">
            {project.status}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Category */}
          <div className="font-mono text-xs text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-medium tracking-wide">
            {project.category}
          </div>

          {/* Project Name */}
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-100 dark:text-slate-100 light:text-slate-900 mt-1 group-hover:text-cyan-300 light:group-hover:text-blue-600 transition-colors">
            {project.name}
          </h3>

          {/* Quote if present */}
          {project.quote && (
            <p className="mt-2 text-xs italic text-cyan-300/80 dark:text-cyan-300/80 light:text-blue-700 bg-cyan-950/20 dark:bg-cyan-950/20 light:bg-blue-50 border-l-2 border-cyan-400 px-2.5 py-1 rounded-r-sm">
              "{project.quote}"
            </p>
          )}

          {/* Description */}
          <p className="mt-3 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-2">
                Destaques do projeto:
              </span>
              <ul className="space-y-1">
                {project.highlights.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    <span className="text-cyan-400 font-mono mt-0.5">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Tech Tags & CTA Actions */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-0.5 rounded-sm bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons: Only real links allowed! */}
          <div className="flex flex-wrap items-center gap-2.5">
            {project.liveUrl && (
              <Button
                asLink
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                iconPosition="right"
              >
                Ver projeto
              </Button>
            )}

            {project.githubUrl && (
              <Button
                asLink
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                icon={<Github className="w-3.5 h-3.5" />}
              >
                Código fonte
              </Button>
            )}

            {/* If no public link exists */}
            {!project.liveUrl && !project.githubUrl && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 font-mono text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                <span>Documentação interna / acadêmica</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
