import React from 'react';
import { GraduationCap, Briefcase, Cpu, Lightbulb, Compass } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';

export const About: React.FC = () => {
  const indicators = [
    {
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      title: 'Formação técnica em andamento',
      desc: '3º ano do Ensino Médio integrado ao Técnico em Informática no Instituto Educacional Raphael Di Santo.',
      badge: 'EDU.3C',
    },
    {
      icon: <Briefcase className="w-5 h-5 text-blue-400" />,
      title: 'Experiência como Jovem Aprendiz',
      desc: 'Atuação na Azul Linhas Aéreas (Aeroporto de Viracopos) no setor SESMT, participando de rotinas e projetos.',
      badge: 'VCP.AZUL',
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: 'Desenvolvimento de projetos',
      desc: 'Criação de soluções práticas em front-end, aplicações mobile e redes de computadores.',
      badge: 'DEV.BUILD',
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
      title: 'Interesse em inovação e sistemas',
      desc: 'Busca constante por aprendizado de novas tecnologias, resolução de problemas e arquitetura de software.',
      badge: 'SYS.INNOV',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          sysId="02"
          title="Além do código."
          subtitle="Conheça minha trajetória como estudante técnico e jovem profissional na aviação."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Narrative Bio */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed font-sans">
            <div className="p-6 sm:p-8 rounded-sm bg-[#101827]/70 dark:bg-[#101827]/70 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hud-corner shadow-xl">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-cyan-400">
                <Compass className="w-4 h-4" />
                <span>FLIGHT_PLAN // PROFILE_OVERVIEW</span>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Sou estudante do 3º ano do Ensino Médio integrado ao Técnico em Informática. Minha jornada na tecnologia envolve programação, desenvolvimento de aplicações, redes e resolução de problemas.
                </p>
                <p>
                  Atualmente, também atuo como Jovem Aprendiz na Azul Linhas Aéreas, no Aeroporto de Viracopos, no setor SESMT, com participação na área de projetos.
                </p>
                <p>
                  Essa experiência me permite desenvolver organização, responsabilidade, trabalho em equipe e visão de processos dentro de um dos ecossistemas mais dinâmicos do país.
                </p>
                <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium">
                  Busco constantemente aprender novas tecnologias e transformar conhecimentos em projetos práticos com impacto positivo.
                </p>
              </div>

              {/* Bottom Quote / Mission */}
              <div className="mt-6 pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between text-xs font-mono text-cyan-300/80">
                <span>OBJETIVO: EVOLUIR // CRIAR // INOVAR</span>
                <span className="text-slate-500">SYS.VERIFIED</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Pillar Indicators */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {indicators.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-sm bg-[#101827]/60 dark:bg-[#101827]/60 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-sm bg-slate-900 dark:bg-slate-900 light:bg-slate-100 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-200 group-hover:border-cyan-500/50 transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded-sm bg-slate-900/80 text-cyan-400 border border-slate-800">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-sm sm:text-base text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
