'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  label: string;
  className?: string;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  duration = 2000,
  label,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [value, setValue] = useState(0);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const totalFrames = Math.max(1, Math.round(duration / 16));
    const animate = () => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setFlash(true);
        window.setTimeout(() => setFlash(false), 300);
      }
    };
    requestAnimationFrame(animate);
  }, [duration, inView, target]);

  return (
    <motion.div
      ref={ref}
      className={`rounded-[28px] border border-white/10 bg-[#111111] p-5 shadow-soft ${className}`}
      animate={{ scale: flash ? 1.02 : 1 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
    >
      <p className="font-label text-[clamp(2rem,7vw,3.4rem)] font-semibold text-[#F5C842]">
        {value}
        {suffix}
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[var(--text-muted)]">{label}</p>
    </motion.div>
  );
}
