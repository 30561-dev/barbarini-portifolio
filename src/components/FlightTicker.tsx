import React from 'react';
import { Plane, Radio } from 'lucide-react';

export const FlightTicker: React.FC = () => {
  const telemetryItems = [
    { callsign: 'AZU4218', route: 'GRU ➔ VCP', alt: 'FL340', spd: '440KT', type: 'E195-E2' },
    { callsign: 'BARBARINI-01', route: 'CODE ➔ BUILD', alt: 'FL030', spd: '320KT', type: 'SYS-SESMT' },
    { callsign: 'AZU1984', route: 'VCP ➔ CNF', alt: 'FL280', spd: '410KT', type: 'A320neo' },
    { callsign: 'AZU2024', route: 'VCP ➔ LIS', alt: 'FL390', spd: '480KT', type: 'A330-900' },
    { callsign: 'AZU5102', route: 'RAO ➔ VCP', alt: 'FL180', spd: '290KT', type: 'ATR 72-600' },
    { callsign: 'RADAR-VCP', route: 'SESMT / VIRAC', alt: 'ELEV 2170FT', spd: 'QNH 1016', type: 'TOWER 118.55MHz' },
  ];

  // Repeat twice for infinite seamless scroll
  const duplicatedItems = [...telemetryItems, ...telemetryItems];

  return (
    <div className="w-full bg-[#050912]/90 dark:bg-[#050912]/90 light:bg-slate-200/90 border-b border-cyan-500/20 backdrop-blur-md overflow-hidden py-1.5 font-mono text-[11px] select-none z-30 relative">
      <div className="flex items-center">
        {/* Left Fixed Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-0.5 bg-cyan-950/80 border-r border-cyan-500/30 text-cyan-400 font-bold tracking-wider shrink-0 z-10">
          <Radio className="w-3 h-3 text-cyan-300 animate-pulse" />
          <span className="text-[10px]">ATC VCP LIVE:</span>
        </div>

        {/* Marquee ticker container */}
        <div className="flex items-center gap-8 whitespace-nowrap animate-ticker">
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 text-slate-300 dark:text-slate-300 light:text-slate-700"
            >
              <Plane className="w-3 h-3 text-cyan-400 -rotate-45" />
              <span className="text-cyan-300 font-bold">{item.callsign}</span>
              <span className="text-slate-400">[{item.type}]</span>
              <span className="text-blue-400 font-semibold">{item.route}</span>
              <span className="text-slate-500">{item.alt}</span>
              <span className="text-emerald-400">{item.spd}</span>
              <span className="text-slate-600">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
