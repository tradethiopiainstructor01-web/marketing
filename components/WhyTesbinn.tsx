'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { icon: '⭐', label: 'Experienced Mentors', value: 120 },
  { icon: '🛠', label: 'Practical Systems', value: 85 },
  { icon: '🌱', label: 'Hands-On Labs', value: 18 },
  { icon: '🧭', label: 'Career Paths', value: 9 },
  { icon: '🎓', label: 'Graduate Support', value: 100 },
];

export default function WhyTesbinn({ theme, lang }: { theme: 'dark' | 'light'; lang: 'en' | 'am' }) {
  return (
    <section id="why" className="relative overflow-hidden bg-[#091e38] px-4 py-16 md:px-8 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-[260px] bg-[radial-gradient(circle_at_top,_rgba(247,215,109,0.18),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="font-label text-sm uppercase tracking-[0.3em] text-[#C8960C]">Why TESBINN</p>
          <h2 className="mt-4 font-heading text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] text-white">
            Proven coffee career training for real income, real growth, and real export success.
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-5">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -6 }}
              className="rounded-[32px] border border-white/10 bg-[#133352] p-6 text-center shadow-soft"
            >
              <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD700]/15 text-3xl text-[#FFD700]">
                {item.icon}
              </div>
              <AnimatedCounter target={item.value} suffix="+" label={item.label} duration={1800} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
