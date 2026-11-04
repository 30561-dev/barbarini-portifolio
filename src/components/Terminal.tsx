import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, RotateCcw } from 'lucide-react';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { personalLinks, contactConfig } from '../data/links';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      command: 'sys --status',
      output: (
        <div className="space-y-1 text-slate-300">
          <div className="text-cyan-400 font-bold">
            [AVIONICS OS v3.8.0 - EDSON BARBARINI TERMINAL]
          </div>
          <div>ESTADO: ONLINE // LOCAL: AEROPORTO DE VIRACOPOS (VCP)</div>
          <div>ATUAÇÃO: SESMT / PROJETOS // FORMAÇÃO: TÉCNICO EM INFORMÁTICA</div>
          <div className="text-slate-400 text-xs mt-1">
            Digite <span className="text-cyan-300 font-semibold">'help'</span> para visualizar os comandos disponíveis.
          </div>
        </div>
      ),
    },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    // Add to navigation history
    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryPointer(-1);

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 py-1 text-xs sm:text-sm">
            <div className="text-cyan-300 font-semibold">Comandos disponíveis:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-2 text-slate-300">
              <div>
                <span className="text-cyan-400 font-bold">help</span> — Lista todos os comandos do sistema
              </div>
              <div>
                <span className="text-cyan-400 font-bold">about</span> — Breve apresentação sobre Edson
              </div>
              <div>
                <span className="text-cyan-400 font-bold">skills</span> — Tecnologias e habilidades técnicas
              </div>
              <div>
                <span className="text-cyan-400 font-bold">projects</span> — Projetos e soluções desenvolvidas
              </div>
              <div>
                <span className="text-cyan-400 font-bold">contact</span> — Canais de comunicação e redes
              </div>
              <div>
                <span className="text-cyan-400 font-bold">azul</span> — Informações da atuação na Azul
              </div>
              <div>
                <span className="text-cyan-400 font-bold">status</span> — Telemetria e coordenadas operacionais
              </div>
              <div>
                <span className="text-cyan-400 font-bold">clear</span> — Limpa o histórico da tela
              </div>
            </div>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="space-y-1 text-slate-200 text-xs sm:text-sm">
            <p className="text-cyan-300 font-semibold">
              Edson Fernando Piacente Barbarini
            </p>
            <p>
              Estudante do 3º ano do Técnico em Informática no Instituto Educacional Raphael Di Santo, desenvolvedor em formação e Jovem Aprendiz na Azul Linhas Aéreas (Aeroporto de Viracopos).
            </p>
            <p className="text-slate-400 text-xs">
              Foco em programação, interfaces modernas, sistemas e aprendizagem contínua.
            </p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 py-1 text-xs sm:text-sm">
            <div className="text-cyan-300 font-semibold">Tecnologias & Habilidades:</div>
            <div className="space-y-1 pl-2 text-slate-300">
              <div>
                <span className="text-blue-400 font-mono font-medium">Front-end:</span>{' '}
                {skillsData.filter((s) => s.category === 'frontend').map((s) => s.name).join(', ')}
              </div>
              <div>
                <span className="text-cyan-400 font-mono font-medium">Mobile:</span>{' '}
                {skillsData.filter((s) => s.category === 'mobile').map((s) => s.name).join(', ')}
              </div>
              <div>
                <span className="text-emerald-400 font-mono font-medium">Back-end & Dados:</span>{' '}
                {skillsData.filter((s) => s.category === 'backend').map((s) => s.name).join(', ')}
              </div>
              <div>
                <span className="text-indigo-400 font-mono font-medium">Infraestrutura:</span>{' '}
                {skillsData.filter((s) => s.category === 'infra').map((s) => s.name).join(', ')}
              </div>
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-1 py-1 text-xs sm:text-sm">
            <div className="text-cyan-300 font-semibold">
              Projetos disponíveis: {projectsData.map((p) => p.name).join(', ')}.
            </div>
            <div className="mt-2 space-y-1.5 pl-2">
              {projectsData.map((p) => (
                <div key={p.id} className="text-slate-300">
                  <span className="text-cyan-400 font-bold">› {p.name}</span>{' '}
                  <span className="text-xs text-slate-400">[{p.badge}]</span> — {p.description.slice(0, 85)}...
                </div>
              ))}
            </div>
            <div className="text-slate-400 text-xs pt-1">
              Dica: Navegue até a seção de Projetos para visualizar os links reais e detalhes completos.
            </div>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 py-1 text-xs sm:text-sm text-slate-200">
            <div className="text-cyan-300 font-semibold">Meios de contato e perfis:</div>
            <div className="pl-2 space-y-1">
              {personalLinks.map((link) => (
                <div key={link.id} className="flex items-center gap-2">
                  <span className="text-cyan-400 font-mono w-24">{link.name}:</span>
                  <span className="text-slate-300">{link.usernameDisplay}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'azul':
        outputNode = (
          <div className="space-y-1 text-slate-200 text-xs sm:text-sm">
            <div className="text-blue-400 font-semibold">Atuação na Azul Linhas Aéreas:</div>
            <div>Jovem Aprendiz — Setor SESMT (Saúde e Segurança do Trabalho).</div>
            <div>Local: Aeroporto Internacional de Viracopos (VCP), Campinas - SP.</div>
            <div className="text-slate-400 text-xs">
              Atividades voltadas a organização de processos, apoio a projetos e rotinas do setor.
            </div>
          </div>
        );
        break;

      case 'status':
        outputNode = (
          <div className="space-y-1 font-mono text-xs sm:text-sm text-cyan-300">
            <div>[SYS_DIAGNOSTICS]</div>
            <div>SYSTEM STATUS: ONLINE</div>
            <div>LOCATION: {contactConfig.location}</div>
            <div>COORDINATES: {contactConfig.coordinates}</div>
            <div>FOCUS: DEVELOPMENT & TECHNOLOGY</div>
            <div>CURRENT STATUS: LEARNING & BUILDING</div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = <div className="text-slate-200">guest@avionics-terminal</div>;
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputNode = (
          <div className="text-rose-400 text-xs sm:text-sm">
            Comando não reconhecido: <span className="font-bold">'{trimmed}'</span>. Digite <span className="text-cyan-300 underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> para lista de comandos.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}-${Math.random()}`,
        command: trimmed,
        output: outputNode,
      },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyPointer === -1 ? cmdHistory.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextIdx);
      setInputVal(cmdHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer === -1) return;
      const nextIdx = historyPointer + 1;
      if (nextIdx >= cmdHistory.length) {
        setHistoryPointer(-1);
        setInputVal('');
      } else {
        setHistoryPointer(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-sm overflow-hidden border border-cyan-500/30 bg-[#080D18] shadow-2xl shadow-cyan-950/60 font-mono text-xs sm:text-sm select-text">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#101827] border-b border-cyan-500/20 select-none">
        <div className="flex items-center gap-2">
          {/* Mac/Linux Decor Window Dots */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 hover:bg-rose-400 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 hover:bg-amber-400 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 hover:bg-emerald-400 transition-colors" />
          </div>

          <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-xs">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-200">EDSON_TERMINAL</span>
            <span className="text-slate-500 hidden sm:inline">— bash // avionics-node-01</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setHistory([]);
            }}
            type="button"
            className="p-1 rounded text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
            title="Limpar tela (clear)"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1 font-mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ONLINE</span>
          </div>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div
        ref={terminalBodyRef}
        onClick={() => inputRef.current?.focus()}
        className="p-4 sm:p-6 min-h-[300px] max-h-[440px] overflow-y-auto space-y-4 radar-grid cursor-text"
      >
        {history.map((item) => (
          <div key={item.id} className="space-y-1.5">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-cyan-400 font-bold">edson@avionics:~$</span>
              <span className="text-slate-100 font-semibold">{item.command}</span>
            </div>
            <div className="pl-4 border-l border-cyan-500/20">{item.output}</div>
          </div>
        ))}

        {/* Active Command Line Input */}
        <div className="flex items-center gap-2 pt-2">
          <span className="text-cyan-400 font-bold shrink-0">edson@avionics:~$</span>
          <div className="relative flex-1 flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite um comando (ex: help, about, skills, projects)..."
              className="w-full bg-transparent text-slate-100 focus:outline-none placeholder:text-slate-600 font-mono text-xs sm:text-sm caret-transparent"
              autoCapitalize="off"
              autoComplete="off"
              spellCheck="false"
            />
            <span className="terminal-cursor pointer-events-none" />
          </div>
          <button
            onClick={() => handleCommand(inputVal)}
            className="text-cyan-400 hover:text-cyan-200 p-1 sm:hidden"
            aria-label="Executar comando"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Footer Quick Chips */}
      <div className="px-4 py-2 bg-[#0c1322] border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 select-none">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-slate-500">Atalhos:</span>
          {['help', 'about', 'skills', 'projects', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded-sm bg-slate-900 border border-slate-700/80 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-2 text-[10px] text-slate-500">
          <span>[↑][↓] Histórico</span>
          <span>[ENTER] Executar</span>
        </div>
      </div>
    </div>
  );
};
