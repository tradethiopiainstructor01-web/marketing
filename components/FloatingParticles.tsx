'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  life: number;
};

const colors = ['rgba(255,215,0,0.86)', 'rgba(255,107,53,0.78)', 'rgba(212,162,0,0.82)'];

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const cx = canvas.offsetWidth / 2;
      const cy = canvas.offsetHeight / 2;
      particlesRef.current = Array.from({ length: 95 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 95 + Math.random() * 0.35;
        const speed = 0.35 + Math.random() * 1.4;
        return {
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.2 + Math.random() * 3.2,
          color: colors[index % colors.length],
          life: 0.35 + Math.random() * 0.65,
        };
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.006;
        particle.life -= 0.0025;
        if (particle.life <= 0 || particle.x < -20 || particle.x > canvas.offsetWidth + 20 || particle.y < -20 || particle.y > canvas.offsetHeight + 20) {
          particle.x = canvas.offsetWidth / 2;
          particle.y = canvas.offsetHeight / 2;
          particle.life = 0.45 + Math.random() * 0.65;
        }
        ctx.globalAlpha = Math.max(0, particle.life);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      frameRef.current = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);
    frameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
