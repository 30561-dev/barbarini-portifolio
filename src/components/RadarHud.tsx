import React, { useState } from 'react';
import { User, Compass, Radio, Target, Activity } from 'lucide-react';

interface RadarHudProps {
  profileSrc?: string;
}

export const RadarHud: React.FC<RadarHudProps> = ({ profileSrc = './images/profile.jpg' }) => {
  const [imageError, setImageError] = useState(false);
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);

  const targets = [
    {
      id: 'tgt-vcp',
      name: 'VCP_SESMT',
      alt: 'FL020',
      spd: '250KT',
      top: '18%',
      right: '22%',
      color: 'cyan',
    },
    {
      id: 'tgt-dev',
      name: 'REACT_APP',
      alt: 'FL340',
      spd: '460KT',
      bottom: '22%',
      left: '16%',
      color: 'blue',
    },
    {
      id: 'tgt-net',
      name: 'NET_VLAN',
      alt: 'FL180',
      spd: '310KT',
      top: '65%',
      right: '18%',
      color: 'emerald',
    },
  ];

  return (
    <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-[420px] md:h-[420px] mx-auto flex items-center justify-center select-none group">
      {/* Outer Cyan Volumetric Radar Glow */}
      <div className="absolute inset-0 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none group-hover:bg-cyan-500/25 transition-all duration-700" />

      {/* Outermost Compass Bearing Ring (Rotating clockwise) */}
      <div className="absolute inset-0 rounded-full border border-cyan-500/20 pointer-events-none">
        {/* Cardinal Markers */}
        <span className="absolute top-1 left-1/2 -translate-x-1/2 font-mono text-[9px] text-cyan-400 font-bold tracking-widest bg-[#080D18] px-1">
          000° [N]
        </span>
        <span className="absolute right-1 top-1/2 -translate-y-1/2 font-mono text-[9px] text-cyan-400 font-bold tracking-widest bg-[#080D18] px-1">
          090° [E]
        </span>
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[9px] text-cyan-400 font-bold tracking-widest bg-[#080D18] px-1">
          180° [S]
        </span>
        <span className="absolute left-1 top-1/2 -translate-y-1/2 font-mono text-[9px] text-cyan-400 font-bold tracking-widest bg-[#080D18] px-1">
          270° [W]
        </span>
      </div>

      {/* Degree Ring Notches */}
      <div className="absolute inset-5 rounded-full border border-dashed border-cyan-500/25 pointer-events-none" />

      {/* Secondary Counter-rotating Telemetry Ring */}
      <div className="absolute inset-10 rounded-full border border-blue-500/20 pointer-events-none" />

      {/* Inner Distance Range Ring */}
      <div className="absolute inset-20 rounded-full border border-cyan-400/30 pointer-events-none" />

      {/* Crosshairs & Tactical Reticles */}
      <div className="absolute inset-x-4 top-1/2 h-px bg-cyan-500/25 pointer-events-none" />
      <div className="absolute inset-y-4 left-1/2 w-px bg-cyan-500/25 pointer-events-none" />

      {/* Angular 45-degree Grid Crosshairs */}
      <div className="absolute w-full h-px bg-cyan-500/15 rotate-45 pointer-events-none" />
      <div className="absolute w-full h-px bg-cyan-500/15 -rotate-45 pointer-events-none" />

      {/* Primary Sweeping Radar Vector with Phosphor Tail */}
      <div
        className="absolute inset-5 rounded-full pointer-events-none animate-radar-sweep"
        style={{
          background:
            'conic-gradient(from 0deg at 50% 50%, rgba(34, 211, 238, 0.35) 0deg, rgba(59, 130, 246, 0.15) 30deg, rgba(34, 211, 238, 0) 70deg, transparent 70deg)',
        }}
      />

      {/* Interactive Radar Blip Targets */}
      {targets.map((tgt) => (
        <div
          key={tgt.id}
          style={{
            top: tgt.top,
            right: tgt.right,
            bottom: tgt.bottom,
            left: tgt.left,
          }}
          onClick={() => setSelectedTarget(selectedTarget === tgt.id ? null : tgt.id)}
          className="absolute z-30 cursor-pointer group/blip"
        >
          {/* Pulsing Target Dot */}
          <div className="relative flex items-center justify-center">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                tgt.color === 'cyan'
                  ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]'
                  : tgt.color === 'blue'
                  ? 'bg-blue-400 shadow-[0_0_10px_#3b82f6]'
                  : 'bg-emerald-400 shadow-[0_0_10px_#10b981]'
              } animate-pulse`}
            />
            <span
              className={`absolute w-6 h-6 rounded-full border ${
                tgt.color === 'cyan'
                  ? 'border-cyan-400'
                  : tgt.color === 'blue'
                  ? 'border-blue-400'
                  : 'border-emerald-400'
              } opacity-60 animate-ping-slow pointer-events-none`}
            />
          </div>

          {/* Target Telemetry Label */}
          <div className="absolute left-4 -top-2 flex flex-col font-mono text-[9px] bg-[#080D18]/90 border border-cyan-500/40 px-2 py-0.5 rounded-sm backdrop-blur-md whitespace-nowrap shadow-md pointer-events-none">
            <div className="text-cyan-300 font-bold flex items-center gap-1">
              <span>✈ {tgt.name}</span>
            </div>
            <div className="text-slate-400 text-[8px]">
              {tgt.alt} // {tgt.spd}
            </div>
          </div>
        </div>
      ))}

      {/* Center Profile / Core Flight Unit */}
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-br from-cyan-400/50 via-blue-600/30 to-cyan-500/20 border-2 border-cyan-400/60 shadow-2xl shadow-cyan-950/80 z-20 overflow-hidden group-hover:scale-105 transition-transform duration-500">
        {/* HUD Targeting Reticle Brackets */}
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 pointer-events-none" />
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-300 pointer-events-none z-30" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-300 pointer-events-none z-30" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-300 pointer-events-none z-30" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-300 pointer-events-none z-30" />

        {!imageError ? (
          <img
            src={profileSrc}
            alt="Edson Fernando Piacente Barbarini"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-[center_20%] rounded-full brightness-105 contrast-105 transition-all duration-500 scale-100 group-hover:scale-105"
          />
        ) : (
          /* High-Tech Aviation Core Avatar */
          <div className="w-full h-full rounded-full bg-[#0c1524] flex flex-col items-center justify-center text-center p-3 relative overflow-hidden">
            <div className="absolute inset-0 bg-avionics-grid opacity-35" />
            <div className="w-14 h-14 rounded-full bg-cyan-950/80 border border-cyan-400/60 flex items-center justify-center text-cyan-300 mb-1.5 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              <User className="w-7 h-7" />
            </div>
            <div className="font-heading font-bold text-xs text-slate-100 tracking-wider">
              EDSON BARBARINI
            </div>
            <div className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest mt-0.5">
              DEV // AZUL SESMT
            </div>
          </div>
        )}
      </div>

      {/* Orbital Telemetry Badges */}
      <div className="absolute -top-4 sm:-top-3 px-3.5 py-1 bg-[#101827]/95 border border-cyan-400/50 rounded-sm shadow-xl backdrop-blur-md z-30 flex items-center gap-2">
        <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span className="font-mono text-[10px] text-cyan-300 font-semibold tracking-wider">
          RADAR: 40NM // VCP_TOWER
        </span>
      </div>

      <div className="absolute -bottom-4 sm:-bottom-3 px-3.5 py-1 bg-[#101827]/95 border border-blue-400/50 rounded-sm shadow-xl backdrop-blur-md z-30 flex items-center gap-2">
        <Compass className="w-3.5 h-3.5 text-blue-400 animate-spin-slow" />
        <span className="font-mono text-[10px] text-blue-300 font-semibold tracking-wider">
          HDG 184° // FL030 // ACTIVE
        </span>
      </div>

      <div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-1 bg-[#101827]/90 border border-slate-700/80 px-2 py-1.5 rounded-sm backdrop-blur-md z-30">
        <Target className="w-3.5 h-3.5 text-emerald-400" />
        <span className="font-mono text-[8px] text-emerald-300 uppercase">SYS.LOCK</span>
      </div>

      <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-1 bg-[#101827]/90 border border-slate-700/80 px-2 py-1.5 rounded-sm backdrop-blur-md z-30">
        <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span className="font-mono text-[8px] text-cyan-300 uppercase">PULSE: OK</span>
      </div>
    </div>
  );
};
