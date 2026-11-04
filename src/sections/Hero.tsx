import React from 'react';
import { ArrowRight, Mail, Radio } from 'lucide-react';
import { RadarHud } from '../components/RadarHud';
import { Button } from '../components/Button';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] pt-12 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Aviation Coordinate Grid Ticks */}
      <div className="absolute top-20 left-4 font-mono text-[9px] text-cyan-500/40 hidden sm:block">
        LAT: 23°00'27"S // LON: 47°08'04"W // VCP_RADAR
      </div>
      <div className="absolute top-20 right-4 font-mono text-[9px] text-cyan-500/40 hidden sm:block">
        FREQ: 118.550 MHz // ELEV: 2170 FT // QNH: 1016
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Actions (col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Telemetry Tag */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-sm bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border border-cyan-500/30 text-cyan-300 dark:text-cyan-300 light:text-blue-600 font-mono text-xs uppercase tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping-slow" />
              <span className="font-bold">DEVELOPER IN PROGRESS</span>
              <span className="text-slate-500">//</span>
              <span className="text-slate-400">SESMT @ AZUL</span>
            </div>

            {/* Main Name & Headline */}
            <div className="space-y-2">
              <div className="font-mono text-xs sm:text-sm text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-medium tracking-widest uppercase">
                EDSON BARBARINI
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight leading-[1.1]">
                Transformando ideias em{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  soluções digitais.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 leading-snug">
              Estudante de Técnico em Informática, desenvolvedor em formação e Jovem Aprendiz na Azul Linhas Aéreas.
            </p>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl leading-relaxed">
              Explorando tecnologia, desenvolvendo projetos e transformando conhecimentos em soluções digitais.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                asLink
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Conheça meus projetos
              </Button>
              <Button
                asLink
                href="#contact"
                variant="secondary"
                size="lg"
                icon={<Mail className="w-4 h-4" />}
              >
                Entre em contato
              </Button>
            </div>

            {/* Aviation System Status Panel */}
            <div className="pt-6">
              <div className="p-4 rounded-sm bg-[#101827]/80 dark:bg-[#101827]/80 light:bg-slate-100/90 border border-cyan-500/20 backdrop-blur-md max-w-xl">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-cyan-500/10">
                  <div className="flex items-center gap-2">
                    <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-300 font-semibold">
                      OPERATIONAL TELEMETRY PANEL
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-sm">
                    ONLINE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">›</span>
                    <span className="text-slate-400">SYSTEM STATUS:</span>
                    <span className="text-emerald-400 font-semibold">ONLINE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">›</span>
                    <span className="text-slate-400">LOCATION:</span>
                    <span className="text-cyan-300">VIRACOPOS, BRAZIL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">›</span>
                    <span className="text-slate-400">FOCUS:</span>
                    <span className="text-slate-200">DEV & TECHNOLOGY</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">›</span>
                    <span className="text-slate-400">STATUS:</span>
                    <span className="text-cyan-300">LEARNING & BUILDING</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Radar HUD Visual (col-span-5) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <RadarHud profileSrc="./images/profile.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};
