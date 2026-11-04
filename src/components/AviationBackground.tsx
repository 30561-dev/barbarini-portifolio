import React, { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

interface Waypoint {
  name: string;
  x: number;
  y: number;
  code: string;
}

interface Aircraft {
  id: string;
  callsign: string;
  type: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  speed: number;
  heading: number;
  altitude: number; // e.g. 340 -> FL340
  groundSpeed: number; // knots
  trail: { x: number; y: number }[];
  strobeTimer: number;
  routeIndex: number;
}

export const AviationBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initAirspace();
    };

    window.addEventListener('resize', handleResize);

    // Waypoints across the airspace (scaled relative to screen)
    let waypoints: Waypoint[] = [];

    // Radar sweeps
    let radarAngle = 0;
    const radarCenter = { x: width * 0.85, y: height * 0.35 };

    // Airspace Aircraft fleet
    let aircraftList: Aircraft[] = [];

    const initAirspace = () => {
      radarCenter.x = width > 1024 ? width * 0.85 : width * 0.5;
      radarCenter.y = width > 1024 ? height * 0.35 : height * 0.25;

      waypoints = [
        { name: 'VCP / SBKP', code: 'VCP', x: width * 0.5, y: height * 0.45 },
        { name: 'SESMT_OPS', code: 'SESMT', x: width * 0.22, y: height * 0.28 },
        { name: 'DEV_ALPHA', code: 'ALPHA', x: width * 0.78, y: height * 0.22 },
        { name: 'KAPEX', code: 'KPX', x: width * 0.15, y: height * 0.72 },
        { name: 'VORTAC_BR', code: 'VTC', x: width * 0.82, y: height * 0.68 },
        { name: 'ORBIT_3C', code: 'ORB3C', x: width * 0.48, y: height * 0.85 },
      ];

      const callsignPool = [
        { cs: 'AZU4218', type: 'E195-E2', alt: 320, spd: 440 },
        { cs: 'AZU1984', type: 'A320neo', alt: 280, spd: 410 },
        { cs: 'AZU2024', type: 'A330-900', alt: 390, spd: 480 },
        { cs: 'BARBARINI-01', type: 'SYS-OPS', alt: 120, spd: 320 },
        { cs: 'AZU5102', type: 'ATR 72-600', alt: 180, spd: 290 },
      ];

      aircraftList = callsignPool.map((item, idx) => {
        const startWp = waypoints[idx % waypoints.length];
        const nextWp = waypoints[(idx + 2) % waypoints.length];
        const angle = Math.atan2(nextWp.y - startWp.y, nextWp.x - startWp.x);

        return {
          id: `ac-${idx}`,
          callsign: item.cs,
          type: item.type,
          x: startWp.x + (Math.random() - 0.5) * 120,
          y: startWp.y + (Math.random() - 0.5) * 120,
          targetX: nextWp.x,
          targetY: nextWp.y,
          speed: 0.45 + Math.random() * 0.35,
          heading: angle,
          altitude: item.alt,
          groundSpeed: item.spd,
          trail: [],
          strobeTimer: Math.random() * 60,
          routeIndex: (idx + 1) % waypoints.length,
        };
      });
    };

    initAirspace();

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Main animation loop
    let lastTime = performance.now();
    let scanlineY = 0;

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Primary styling based on theme
      const cyanLine = isDark ? 'rgba(34, 211, 238, ' : 'rgba(14, 165, 233, ';
      const blueLine = isDark ? 'rgba(59, 130, 246, ' : 'rgba(37, 99, 235, ';
      const textCol = isDark ? '#22d3ee' : '#0284c7';
      const secondaryText = isDark ? '#94a3b8' : '#475569';

      // 1. Draw Airways & Sector Boundaries (Flight Corridors)
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.strokeStyle = `${cyanLine}0.12)`;

      for (let i = 0; i < waypoints.length; i++) {
        for (let j = i + 1; j < waypoints.length; j++) {
          if ((i + j) % 2 === 0 || i === 0) {
            ctx.beginPath();
            ctx.moveTo(waypoints[i].x, waypoints[i].y);
            ctx.lineTo(waypoints[j].x, waypoints[j].y);
            ctx.stroke();

            // Distance / Track label halfway
            const mx = (waypoints[i].x + waypoints[j].x) / 2;
            const my = (waypoints[i].y + waypoints[j].y) / 2;
            ctx.font = '8px "DM Mono", monospace';
            ctx.fillStyle = `${cyanLine}0.25)`;
            ctx.fillText(`AWY-${(i + 1) * 10 + j}`, mx + 4, my - 4);
          }
        }
      }
      ctx.setLineDash([]);

      // 2. Draw Waypoints / Navigation Fixes
      waypoints.forEach((wp) => {
        // Outer pulsing ring
        ctx.strokeStyle = `${cyanLine}0.25)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(wp.x, wp.y, 8, 0, Math.PI * 2);
        ctx.stroke();

        // Inner diamond waypoint fix
        ctx.fillStyle = `${cyanLine}0.4)`;
        ctx.beginPath();
        ctx.moveTo(wp.x, wp.y - 4);
        ctx.lineTo(wp.x + 4, wp.y);
        ctx.lineTo(wp.x, wp.y + 4);
        ctx.lineTo(wp.x - 4, wp.y);
        ctx.closePath();
        ctx.fill();

        // Label
        ctx.font = '9px "DM Mono", monospace';
        ctx.fillStyle = `${cyanLine}0.6)`;
        ctx.fillText(`▲ ${wp.code}`, wp.x + 10, wp.y + 3);
      });

      // 3. Radar Sweep Line & Beam (from Radar Station)
      if (!prefersReducedMotion) {
        radarAngle += dt * 0.6; // Sweep speed
        if (radarAngle > Math.PI * 2) radarAngle -= Math.PI * 2;
      }

      const radarRadius = Math.max(width, height) * 0.7;

      // Draw subtle concentric radar distance rings
      ctx.lineWidth = 1;
      [radarRadius * 0.25, radarRadius * 0.5, radarRadius * 0.75].forEach((r, idx) => {
        ctx.setLineDash([3, 8]);
        ctx.strokeStyle = `${cyanLine}0.08)`;
        ctx.beginPath();
        ctx.arc(radarCenter.x, radarCenter.y, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.font = '8px "DM Mono", monospace';
        ctx.fillStyle = `${cyanLine}0.2)`;
        ctx.fillText(`${(idx + 1) * 25} NM`, radarCenter.x + r + 3, radarCenter.y - 3);
      });

      // Radar Sweep Cone
      if (!prefersReducedMotion) {
        ctx.save();
        ctx.translate(radarCenter.x, radarCenter.y);
        const gradient = ctx.createRadialGradient(0, 0, 10, 0, 0, radarRadius);
        gradient.addColorStop(0, `${cyanLine}0.06)`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radarRadius, radarAngle - 0.45, radarAngle);
        ctx.closePath();
        ctx.fill();

        // Leading Sweep Vector
        ctx.strokeStyle = `${cyanLine}0.35)`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(radarAngle) * radarRadius, Math.sin(radarAngle) * radarRadius);
        ctx.stroke();
        ctx.restore();
      }

      // 4. Update and Render Aircraft Targets & Telemetry Tags
      aircraftList.forEach((ac) => {
        if (!prefersReducedMotion) {
          // Steering towards target waypoint
          const dx = ac.targetX - ac.x;
          const dy = ac.targetY - ac.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 40) {
            // Pick next waypoint
            ac.routeIndex = (ac.routeIndex + 1) % waypoints.length;
            const nextWp = waypoints[ac.routeIndex];
            ac.targetX = nextWp.x + (Math.random() - 0.5) * 60;
            ac.targetY = nextWp.y + (Math.random() - 0.5) * 60;
          }

          const targetHeading = Math.atan2(dy, dx);
          // Smooth heading turn
          let diff = targetHeading - ac.heading;
          while (diff < -Math.PI) diff += Math.PI * 2;
          while (diff > Math.PI) diff -= Math.PI * 2;
          ac.heading += diff * 0.03;

          // Move
          ac.x += Math.cos(ac.heading) * ac.speed;
          ac.y += Math.sin(ac.heading) * ac.speed;

          // Wrap edges
          if (ac.x < -100) ac.x = width + 50;
          if (ac.x > width + 100) ac.x = -50;
          if (ac.y < -100) ac.y = height + 50;
          if (ac.y > height + 100) ac.y = -50;

          // Store trail history
          if (Math.random() < 0.25) {
            ac.trail.push({ x: ac.x, y: ac.y });
            if (ac.trail.length > 8) ac.trail.shift();
          }

          // Strobe timer
          ac.strobeTimer += dt * 4;
        }

        // Draw dotted flight trail
        if (ac.trail.length > 1) {
          ctx.strokeStyle = `${cyanLine}0.15)`;
          ctx.lineWidth = 1;
          ctx.setLineDash([2, 4]);
          ctx.beginPath();
          ctx.moveTo(ac.trail[0].x, ac.trail[0].y);
          for (let k = 1; k < ac.trail.length; k++) {
            ctx.lineTo(ac.trail[k].x, ac.trail[k].y);
          }
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Draw Aircraft Body (Realistic Jet Silhouette / Vector)
        ctx.save();
        ctx.translate(ac.x, ac.y);
        ctx.rotate(ac.heading);

        // Airplane icon
        ctx.fillStyle = textCol;
        ctx.strokeStyle = `${cyanLine}0.9)`;
        ctx.lineWidth = 1.2;

        ctx.beginPath();
        // Nose
        ctx.moveTo(12, 0);
        // Right wing root & tip
        ctx.lineTo(2, 3);
        ctx.lineTo(-2, 14);
        ctx.lineTo(-4, 14);
        ctx.lineTo(-2, 3);
        // Fuselage back
        ctx.lineTo(-10, 2);
        // Right horizontal stabilizer
        ctx.lineTo(-14, 6);
        ctx.lineTo(-15, 6);
        ctx.lineTo(-14, 1);
        // Tail cone
        ctx.lineTo(-16, 0);
        // Left horizontal stabilizer
        ctx.lineTo(-14, -1);
        ctx.lineTo(-15, -6);
        ctx.lineTo(-14, -6);
        // Fuselage left
        ctx.lineTo(-10, -2);
        // Left wing
        ctx.lineTo(-2, -3);
        ctx.lineTo(-4, -14);
        ctx.lineTo(-2, -14);
        ctx.lineTo(2, -3);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Strobe lights (Red port, Green starboard, White tail strobe)
        const isStrobeFlash = Math.sin(ac.strobeTimer) > 0.85;

        if (isStrobeFlash) {
          // Left wingtip: Red
          ctx.fillStyle = 'rgba(239, 68, 68, 0.95)';
          ctx.beginPath();
          ctx.arc(-3, -14, 2.5, 0, Math.PI * 2);
          ctx.fill();

          // Right wingtip: Green
          ctx.fillStyle = 'rgba(34, 197, 94, 0.95)';
          ctx.beginPath();
          ctx.arc(-3, 14, 2.5, 0, Math.PI * 2);
          ctx.fill();

          // Tail beacon: White flash
          ctx.fillStyle = 'rgba(255, 255, 255, 1)';
          ctx.beginPath();
          ctx.arc(-16, 0, 2.8, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        // Target Tag / Transponder Leader Line
        ctx.strokeStyle = `${cyanLine}0.35)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(ac.x, ac.y);
        ctx.lineTo(ac.x + 18, ac.y - 18);
        ctx.lineTo(ac.x + 75, ac.y - 18);
        ctx.stroke();

        // Flight Data Tag (Callsign, FL, Speed)
        ctx.font = 'bold 9px "DM Mono", monospace';
        ctx.fillStyle = textCol;
        ctx.fillText(ac.callsign, ac.x + 22, ac.y - 23);

        ctx.font = '8px "DM Mono", monospace';
        ctx.fillStyle = secondaryText;
        ctx.fillText(`FL${ac.altitude} ${ac.groundSpeed}KT`, ac.x + 22, ac.y - 11);
      });

      // 5. Avionics HUD Lateral Altitude & Speed Ladders (Subtle Outer Tapes)
      if (width > 768) {
        // Speed Tape (Left screen edge)
        ctx.strokeStyle = `${blueLine}0.15)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(28, height * 0.3);
        ctx.lineTo(28, height * 0.7);
        ctx.stroke();

        for (let spd = 200; spd <= 350; spd += 25) {
          const yPos = height * 0.3 + ((spd - 200) / 150) * (height * 0.4);
          ctx.beginPath();
          ctx.moveTo(22, yPos);
          ctx.lineTo(28, yPos);
          ctx.stroke();

          ctx.font = '8px "DM Mono", monospace';
          ctx.fillStyle = `${blueLine}0.35)`;
          ctx.fillText(`${spd}`, 6, yPos + 3);
        }

        // Altitude Tape (Right screen edge)
        ctx.beginPath();
        ctx.moveTo(width - 28, height * 0.3);
        ctx.lineTo(width - 28, height * 0.7);
        ctx.stroke();

        for (let alt = 10; alt <= 40; alt += 5) {
          const yPos = height * 0.7 - ((alt - 10) / 30) * (height * 0.4);
          ctx.beginPath();
          ctx.moveTo(width - 28, yPos);
          ctx.lineTo(width - 22, yPos);
          ctx.stroke();

          ctx.font = '8px "DM Mono", monospace';
          ctx.fillStyle = `${blueLine}0.35)`;
          ctx.fillText(`FL0${alt}`, width - 20, yPos + 3);
        }
      }

      // 6. Subtle Television/Radar Scanline Sweep
      if (!prefersReducedMotion) {
        scanlineY += dt * 80;
        if (scanlineY > height) scanlineY = 0;

        ctx.strokeStyle = `${cyanLine}0.08)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, scanlineY);
        ctx.lineTo(width, scanlineY);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block opacity-75 dark:opacity-85" />

      {/* High-tech Vignette Border */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080D18] via-transparent to-[#080D18]/80 dark:from-[#080D18] dark:to-[#080D18]/80 light:from-slate-100/80 light:to-transparent pointer-events-none" />
    </div>
  );
};
