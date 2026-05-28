'use client';

import { motion } from 'framer-motion';
import SwipeCarousel from './SwipeCarousel';

const cards = [
  {
    icon: '☕',
    title: 'Aspiring Baristas',
    description: 'Learn espresso, milk art, and menu craft used by premium coffee houses.',
  },
  {
    icon: '🌍',
    title: 'Career Shifters',
    description: 'Transition into hospitality, export, or café work with confidence.',
  },
  {
    icon: '🚀',
    title: 'Café Founders',
    description: 'Build scalable systems for coffee shops, roasteries, and online sales.',
  },
];

export default function WhoIsThisFor({ theme, lang }: { theme: 'dark' | 'light'; lang: 'en' | 'am' }) {
  return (
    <section id="who" className="relative overflow-hidden px-4 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="font-label text-sm uppercase tracking-[0.3em] text-[#C8960C]">Who should join</p>
          <h2 className="mt-4 font-heading text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] text-white">
            Students, founders, and exporters ready to level up their coffee journey.
          </h2>
        </div>

        <SwipeCarousel
          items={cards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 140, damping: 20 }}
              className="rounded-[32px] border border-white/10 bg-[#133653] p-8 shadow-soft"
            >
              <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F7D76D]/15 text-3xl text-[#F7D76D] shadow-[0_18px_55px_rgba(247,215,109,0.16)]">
                {card.icon}
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-white">{card.title}</h3>
              <p className="text-base leading-7 text-[var(--text-muted)]">{card.description}</p>
            </motion.div>
          ))}
          className="max-w-5xl"
          showDots
        />
      </div>
    </section>
  );
}
