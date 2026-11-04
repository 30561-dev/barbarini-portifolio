import React from 'react';

interface SectionTitleProps {
  sysId: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  sysId,
  title,
  subtitle,
  align = 'center',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      {/* Telemetry Indicator */}
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-sm border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 font-mono text-xs uppercase tracking-widest ${
          isCenter ? 'mx-auto' : ''
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>SYS.{sysId} // TELEMETRY</span>
      </div>

      {/* Main Title */}
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors">
        {title}
      </h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl font-sans mx-auto transition-colors">
          {subtitle}
        </p>
      )}

      {/* Decorative Technical Line */}
      <div className={`mt-4 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
        <div className="w-1.5 h-1.5 rotate-45 border border-cyan-400 bg-cyan-950" />
        <div className="h-px w-24 bg-cyan-500/40" />
        <div className="h-px w-8 bg-gradient-to-r from-cyan-500/40 to-transparent" />
      </div>
    </div>
  );
};
