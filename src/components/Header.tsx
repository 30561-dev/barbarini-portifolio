import React, { useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Início', code: '01' },
    { id: 'about', label: 'Sobre', code: '02' },
    { id: 'skills', label: 'Habilidades', code: '03' },
    { id: 'projects', label: 'Projetos', code: '04' },
    { id: 'experience', label: 'Trajetória', code: '05' },
    { id: 'terminal', label: 'Terminal', code: '06' },
    { id: 'contact', label: 'Contato', code: '07' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080D18]/85 dark:bg-[#080D18]/85 light:bg-white/85 backdrop-blur-md border-b border-cyan-500/20 dark:border-cyan-500/20 light:border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Callsign */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 border border-cyan-300/40 group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 text-white animate-spin-slow" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base tracking-wide text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-400 light:group-hover:text-blue-600 transition-colors">
              EDSON BARBARINI
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-cyan-400 dark:text-cyan-400 light:text-blue-600">
              DEV // AZUL SESMT
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 rounded-sm ${
                  isActive
                    ? 'text-cyan-300 dark:text-cyan-300 light:text-blue-600 font-semibold bg-cyan-950/40 dark:bg-cyan-950/40 light:bg-blue-50 border border-cyan-500/40'
                    : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-100 dark:hover:text-slate-100 light:hover:text-slate-900 hover:bg-slate-800/40'
                }`}
              >
                <span className="text-[9px] opacity-60 mr-1">.{item.code}</span>
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Telemetry status & Theme toggle & Mobile menu button */}
        <div className="flex items-center gap-3">
          {/* Status pill (desktop) */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-sm bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-cyan-500/20 text-xs font-mono text-cyan-400 dark:text-cyan-400 light:text-blue-600">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-semibold">VCP: ONLINE</span>
          </div>

          <ThemeToggle />

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-sm border border-cyan-500/30 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080D18]/98 dark:bg-[#080D18]/98 light:bg-white/98 border-b border-cyan-500/30 backdrop-blur-xl px-4 py-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-3 py-1 mb-2 font-mono text-[10px] uppercase text-cyan-400 tracking-widest border-b border-slate-800 pb-2">
            COORDENADAS DE NAVEGAÇÃO
          </div>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm font-mono text-sm tracking-wider transition-colors ${
                  isActive
                    ? 'text-cyan-300 dark:text-cyan-300 light:text-blue-600 font-bold bg-cyan-950/40 dark:bg-cyan-950/40 light:bg-blue-50 border-l-2 border-cyan-400'
                    : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800/40'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-slate-500 font-mono">SYS.{item.code}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
