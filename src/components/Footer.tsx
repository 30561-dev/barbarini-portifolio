import React from 'react';
import { Compass, Github, Linkedin, Mail, Instagram, ArrowUp } from 'lucide-react';
import { personalLinks, contactConfig } from '../data/links';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'e-mail':
        return <Mail className="w-4 h-4" />;
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative bg-[#050810] dark:bg-[#050810] light:bg-slate-100 border-t border-cyan-500/20 dark:border-cyan-500/20 light:border-slate-300 pt-16 pb-12 transition-colors overflow-hidden">
      {/* Top Subtle Radar Sweep Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-300">
          {/* Col 1: Identity & Telemetry */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-sm bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-heading font-bold text-lg text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-wide">
                EDSON BARBARINI
              </span>
            </div>

            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-md leading-relaxed font-sans">
              Estudante de Técnico em Informática no Instituto Educacional Raphael Di Santo, desenvolvedor em formação e Jovem Aprendiz na Azul Linhas Aéreas (Aeroporto de Viracopos).
            </p>

            {/* Flight Telemetry Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 border border-cyan-500/30 text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-blue-700">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>COORDS: {contactConfig.coordinates} // VCP</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-bold">
              // SISTEMA
            </h4>
            <ul className="space-y-2 text-sm font-sans text-slate-400 dark:text-slate-400 light:text-slate-600">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  Sobre mim
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-300 transition-colors">
                  Habilidades & Tecnologias
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">
                  Projetos & Soluções
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-300 transition-colors">
                  Experiência & Formação
                </a>
              </li>
              <li>
                <a href="#terminal" className="hover:text-cyan-300 transition-colors">
                  Terminal Interativo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Comms */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-bold">
              // CANAIS
            </h4>
            <div className="flex flex-col space-y-2">
              {personalLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-cyan-300 transition-colors group"
                >
                  <span className="p-1 rounded bg-slate-900 dark:bg-slate-900 light:bg-slate-200 border border-slate-700/60 group-hover:border-cyan-400 transition-colors">
                    {getSocialIcon(link.name)}
                  </span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Edson Fernando Piacente Barbarini. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-cyan-400/80">SYSTEM: OPERATIONAL</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-cyan-300 transition-colors"
            >
              <span>Subir ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
