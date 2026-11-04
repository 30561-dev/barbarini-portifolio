import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative p-2 rounded-sm border border-cyan-500/30 bg-slate-900/60 light:bg-slate-200/80 text-cyan-400 light:text-blue-600 hover:border-cyan-400 hover:bg-cyan-950/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 group"
      aria-label={isDark ? 'Ativar modo diurno (claro)' : 'Ativar modo noturno (escuro)'}
      title={isDark ? 'Modo de Voo Noturno (Ativo)' : 'Modo Diurno (Ativo)'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-cyan-300 transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>
      <span className="sr-only">Alternar tema</span>
    </button>
  );
};
