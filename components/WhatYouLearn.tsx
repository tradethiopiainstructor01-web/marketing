'use client';

import dynamic from 'next/dynamic';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const CoffeeBeansBackground = dynamic(() => import('./CoffeeBeansBackground'), { ssr: false });

const skills = [
  { title: 'Coffee product sourcing', value: 96 },
  { title: 'Import/export compliance', value: 92 },
  { title: 'Supplier negotiation', value: 88 },
  { title: 'Logistics and shipping', value: 82 },
  { title: 'Coffee branding + sales', value: 90 },
  { title: 'Business launch strategy', value: 94 },
];

function Typewrite({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-70px' });
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const run = () => {
      frame += 1;
      const next = Math.min(text.length, Math.round((frame / 50) * text.length));
      setOutput(text.slice(0, next));
      if (next < text.length) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }, [inView, text]);

  return (
    <p ref={ref} className="max-w-2xl text-base leading-8 text-white/80">
      {output}
    </p>
  );
}

export default function WhatYouLearn({ theme, lang }: { theme: 'dark' | 'light'; lang: 'en' | 'am' }) {
  return (
    <section id="learn" className="relative overflow-hidden bg-[#0a223e] px-4 py-16 md:px-8 lg:py-24">
      <CoffeeBeansBackground />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="font-label text-sm uppercase tracking-[0.3em] text-[#C8960C]">What you'll master</p>
          <h2 className="mt-4 font-heading text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] text-white">
            The practical coffee skills that move your career forward.
          </h2>
          <Typewrite text="From sourcing and shipping to branding and launch strategy, every lesson is built for real coffee professionals aiming for international impact." />
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              whileHover={{ y: -4 }}
              className="rounded-[32px] border border-white/10 bg-[#133552] p-7 shadow-soft"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <span className="rounded-full bg-[#C8960C]/15 px-3 py-1 text-sm font-semibold text-[#C8960C]">{skill.value}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-[#C8960C] via-[#FFD700] to-[#E8650A]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
