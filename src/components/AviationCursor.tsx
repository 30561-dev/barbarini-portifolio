import React, { useEffect, useState, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  angle: number;
  alpha: number;
  id: number;
}

export const AviationCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const lastPos = useRef({ x: -100, y: -100 });
  const currentAngle = useRef(0);
  const targetAngle = useRef(0);
  const trailRef = useRef<TrailPoint[]>([]);
  const pointCounter = useRef(0);
  const animFrameId = useRef<number>(0);

  useEffect(() => {
    // Only activate on pointer devices (desktop mouse)
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    if (!isPointerFine) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 3) {
        // Calculate banking angle in direction of flight
        targetAngle.current = Math.atan2(dy, dx) + Math.PI / 2;

        // Faint vapor contrail particles (wings)
        if (!prefersReducedMotion && trailRef.current.length < 18) {
          trailRef.current.push({
            x: e.clientX,
            y: e.clientY,
            angle: targetAngle.current,
            alpha: 0.55,
            id: pointCounter.current++,
          });
        }

        lastPos.current = { x: e.clientX, y: e.clientY };
      }

      mousePos.current = { x: e.clientX, y: e.clientY };

      // Check target hover elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInputField = !!target.closest('input, textarea, [contenteditable="true"]');
        setIsInputActive(isInputField);

        const clickable = target.closest('button, a, [role="button"], .cursor-pointer');
        setIsHovering(!!clickable);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    // Animation Render Loop
    let lastRenderTime = performance.now();

    const render = (time: number) => {
      const dt = (time - lastRenderTime) / 1000;
      lastRenderTime = time;

      // Smooth banking angle turning
      let diff = targetAngle.current - currentAngle.current;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;
      currentAngle.current += diff * 0.18;

      // Move airplane to cursor position
      if (cursorRef.current) {
        const x = mousePos.current.x;
        const y = mousePos.current.y;
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${currentAngle.current}rad)`;
      }

      // Draw ephemeral twin vapor contrails
      const ctx = canvasRef.current?.getContext('2d');
      if (ctx && canvasRef.current) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        for (let i = trailRef.current.length - 1; i >= 0; i--) {
          const p = trailRef.current[i];
          p.alpha -= dt * 1.6; // Evaporates in ~0.5s

          if (p.alpha <= 0) {
            trailRef.current.splice(i, 1);
            continue;
          }

          const wingSpan = 9;
          const leftWingX = p.x + Math.cos(p.angle - Math.PI) * wingSpan;
          const leftWingY = p.y + Math.sin(p.angle - Math.PI) * wingSpan;
          const rightWingX = p.x + Math.cos(p.angle) * wingSpan;
          const rightWingY = p.y + Math.sin(p.angle) * wingSpan;

          ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha * 0.45})`;
          ctx.beginPath();
          ctx.arc(leftWingX, leftWingY, 1.2, 0, Math.PI * 2);
          ctx.arc(rightWingX, rightWingY, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (!isVisible || isInputActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
      {/* Vapor Contrail Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Jet Aircraft Cursor */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 -ml-3.5 -mt-3.5 w-7 h-7 pointer-events-none will-change-transform flex items-center justify-center"
      >
        {/* Precision Cockpit Center Point */}
        <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#22d3ee] pointer-events-none z-10" />

        {/* Minimalist Jet Vector Graphic */}
        <svg
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-7 h-7 transition-transform duration-150 ${
            isClicking
              ? 'scale-75'
              : isHovering
              ? 'scale-125'
              : 'scale-100'
          }`}
        >
          {/* Jet Airframe */}
          <path
            d="M14 2L17.5 10L25 15L17.5 16.5L15 25L14 22L13 25L10.5 16.5L3 15L10.5 10L14 2Z"
            fill="#080D18"
            fillOpacity="0.8"
            stroke="#22D3EE"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />

          {/* Fuselage Spine Highlight */}
          <line x1="14" y1="5" x2="14" y2="19" stroke="#38BDF8" strokeWidth="1" strokeLinecap="round" />

          {/* Left Wing Navigation Light (Red) */}
          <circle cx="3.8" cy="15" r="1.1" fill="#EF4444" />

          {/* Right Wing Navigation Light (Green) */}
          <circle cx="24.2" cy="15" r="1.1" fill="#22C55E" />

          {/* Engine Afterburner Glow */}
          <circle cx="14" cy="22" r="1" fill="#22D3EE" opacity={isClicking ? 1 : 0.6} />
        </svg>

        {/* Tactical Lock Reticle on Clickable Element Hover */}
        {isHovering && (
          <div className="absolute -inset-2 rounded-full border border-cyan-400/50 animate-ping-slow pointer-events-none" />
        )}
      </div>
    </div>
  );
};
