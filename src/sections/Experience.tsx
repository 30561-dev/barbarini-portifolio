import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Plane, GraduationCap, MapPin, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TimelineItem } from '../types';

export const Experience: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      id: 'azul-exp',
      type: 'experience',
      title: 'Jovem Aprendiz',
      organization: 'Azul Linhas Aéreas',
      location: 'Aeroporto Internacional de Viracopos — Campinas, SP',
      sector: 'SESMT — Saúde e Segurança do Trabalho',
      scope: 'Participação nas atividades do setor e apoio em projetos',
      statusBadge: 'EM ANDAMENTO // ATUAL',
      description:
        'Minha experiência como Jovem Aprendiz na Azul Linhas Aéreas proporciona contato com o ambiente profissional, participação em atividades do setor SESMT e desenvolvimento de habilidades como organização, responsabilidade e trabalho em equipe.',
      highlights: [
        'Apoio em rotinas e documentação do setor SESMT',
        'Participação ativa em atividades e projetos internos',
        'Vivência corporativa no Aeroporto de Viracopos',
        'Desenvolvimento de visão de processos e conformidade',
      ],
    },
    {
      id: 'raphael-edu',
      type: 'education',
      title: 'Formação Técnica em Informática',
      organization: 'Instituto Educacional Raphael Di Santo',
      location: 'Campinas, SP',
      scope: '3º ano do Ensino Médio integrado ao Curso Técnico em Informática',
      statusBadge: 'EM FORMAÇÃO // 3º ANO',
      description:
        'Formação voltada ao desenvolvimento de conhecimentos em programação, desenvolvimento de sistemas, banco de dados, infraestrutura e tecnologia da informação.',
      highlights: [
        'Desenvolvimento de software e lógica de programação',
        'Redes de computadores e infraestrutura local (VLANs, topologia)',
        'Modelagem e consulta a bancos de dados relacionais',
        'Projetos interdisciplinares de acessibilidade e sistemas web',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#070b14]/85 dark:bg-[#070b14]/85 light:bg-slate-50/90 backdrop-blur-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          sysId="05"
          title="Experiência Profissional e Formação"
          subtitle="Registro de atividades operacionais, histórico de formação e atuação profissional."
        />

        {/* Timeline Operational Log Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical Aviation Timeline Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500/60 via-blue-500/40 to-cyan-500/10 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#080D18] border-2 border-cyan-400 items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] z-10">
                    {item.type === 'experience' ? (
                      <Plane className="w-4 h-4 text-cyan-400 rotate-45" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-blue-400" />
                    )}
                  </div>

                  {/* Card Block */}
                  <div className="w-full sm:w-1/2 sm:px-4">
                    <div className="relative p-6 sm:p-7 rounded-sm bg-[#101827]/85 dark:bg-[#101827]/85 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-cyan-500/50 light:hover:border-blue-500/50 transition-all duration-300 shadow-xl group">
                      {/* Top Corner Technical Accent */}
                      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />

                      {/* Header Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-[10px] uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          {item.statusBadge}
                        </span>
                        <span className="font-mono text-[10px] text-slate-500 uppercase">
                          LOG.{item.type === 'experience' ? 'EXP_01' : 'EDU_01'}
                        </span>
                      </div>

                      {/* Role & Organization */}
                      <h3 className="font-heading font-bold text-xl text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-cyan-300 light:group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2 mt-1 font-mono text-xs text-blue-400 dark:text-blue-400 light:text-blue-600 font-semibold">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{item.organization}</span>
                      </div>

                      {item.sector && (
                        <div className="flex items-center gap-2 mt-1 font-mono text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Setor: {item.sector}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2 mt-1 text-xs text-slate-400 dark:text-slate-400 light:text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.location}</span>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights && (
                        <div className="mt-4 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                          <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-2">
                            Competências & Atividades:
                          </span>
                          <ul className="space-y-1.5">
                            {item.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty spacer for opposite side in desktop */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
