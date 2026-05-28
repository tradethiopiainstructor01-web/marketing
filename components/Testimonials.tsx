'use client';

import { motion } from 'framer-motion';
import SwipeCarousel from './SwipeCarousel';

const testimonials = [
  {
    name: 'Mekdes T.',
    city: 'Addis Ababa',
    quote: 'I finally understood how to source products from China without guessing. The examples were practical and easy to follow.',
  },
  {
    name: 'Samuel G.',
    city: 'Hawassa',
    quote: 'The customs and shipping lessons helped me avoid expensive mistakes before placing my first serious order.',
  },
  {
    name: 'Tigist A.',
    city: 'Dire Dawa',
    quote: 'I joined for import training, but the export modules opened my eyes to Ethiopian products I can sell abroad.',
  },
];

export default function Testimonials({ theme, lang }: { theme: 'dark' | 'light'; lang: 'en' | 'am' }) {
  return (
    <section id="testimonials" className="relative overflow-hidden px-4 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="font-label text-sm uppercase tracking-[0.3em] text-[#C8960C]">Student feedback</p>
          <h2 className="mt-4 font-heading text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] text-white">
            Stories from learners who launched coffee careers and export businesses.
          </h2>
        </div>

        <SwipeCarousel
          items={testimonials.map((review) => (
            <motion.div
              key={review.name}
              whileHover={{ y: -5 }}
              className="rounded-[32px] border border-white/10 bg-[#13314a] p-8 shadow-soft"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#111111] text-2xl text-white">
                  <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,_rgba(200,150,12,0.3),transparent_70%)] blur-sm" />
                  <span className="relative">{review.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm uppercase tracking-[0.24em] text-[#C8960C]">{review.city}</p>
                </div>
              </div>
              <p className="text-base leading-8 text-[var(--text-muted)]">“{review.quote}”</p>
            </motion.div>
          ))}
          className="max-w-4xl"
          showDots
        />
      </div>
    </section>
  );
}
