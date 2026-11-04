import React from 'react';
import {
  Code2,
  FileCode,
  Braces,
  FileJson,
  Atom,
  Smartphone,
  Coffee,
  TerminalSquare,
  Database,
  Network,
  Router,
  GitBranch,
  Github,
  CheckCircle2,
} from 'lucide-react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  // Mapping icons to skill names
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'html':
        return <Code2 className="w-5 h-5 text-orange-400" />;
      case 'css':
        return <FileCode className="w-5 h-5 text-blue-400" />;
      case 'javascript':
        return <Braces className="w-5 h-5 text-yellow-400" />;
      case 'typescript':
        return <FileJson className="w-5 h-5 text-blue-500" />;
      case 'react':
        return <Atom className="w-5 h-5 text-cyan-400" />;
      case 'react native':
        return <Smartphone className="w-5 h-5 text-cyan-300" />;
      case 'java':
        return <Coffee className="w-5 h-5 text-red-400" />;
      case 'python':
        return <TerminalSquare className="w-5 h-5 text-emerald-400" />;
      case 'sql':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'redes de computadores':
        return <Network className="w-5 h-5 text-indigo-400" />;
      case 'cisco packet tracer':
        return <Router className="w-5 h-5 text-teal-400" />;
      case 'git':
        return <GitBranch className="w-5 h-5 text-orange-500" />;
      case 'github':
        return <Github className="w-5 h-5 text-slate-200" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="relative group p-4 rounded-sm bg-[#101827]/70 dark:bg-[#101827]/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/50 light:hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-950/30 overflow-hidden">
      {/* Top Corner Technical Accent */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-400/30 group-hover:border-cyan-400 transition-colors" />

      {/* Background Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative flex items-start gap-3.5">
        {/* Icon Container */}
        <div className="p-2.5 rounded-sm bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 group-hover:border-cyan-500/50 transition-colors shadow-sm">
          {getIcon(skill.name)}
        </div>

        {/* Text info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-heading font-semibold text-sm sm:text-base text-slate-100 dark:text-slate-100 light:text-slate-900 truncate group-hover:text-cyan-300 light:group-hover:text-blue-600 transition-colors">
              {skill.name}
            </h4>
            <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-500 light:text-slate-400">
              SYS.OK
            </span>
          </div>
          {skill.description && (
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-2 leading-relaxed">
              {skill.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
