import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-sm bg-[#101827]/90 dark:bg-[#101827]/90 light:bg-slate-100/90 text-cyan-400 border border-cyan-500/40 hover:border-cyan-300 hover:bg-cyan-950/40 hover:text-cyan-200 shadow-lg shadow-cyan-950/50 backdrop-blur-md transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-cyan-400"
      aria-label="Voltar ao início da página"
      title="Subir ao topo [ALT: FL000]"
    >
      <div className="relative flex flex-col items-center">
        <ChevronUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-1" />
        <span className="font-mono text-[9px] uppercase tracking-tighter opacity-80">TOP</span>
      </div>
    </button>
  );
};
