'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1700);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] grid place-items-center bg-[#09203b] text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="flex flex-col items-center gap-5 rounded-[32px] border border-white/10 bg-[#0d2044]/95 p-8 text-center shadow-soft"
          >
            <div className="font-heading text-5xl uppercase tracking-[0.3em] text-[#FFD700]">TESBINN</div>
            <motion.svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M31 74C31 84.4934 39.5066 93 50 93H74C84.4934 93 93 84.4934 93 74V60H31V74Z"
                stroke="#FFD700"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
              <motion.path
                d="M50 60V44C50 36.268 56.268 30 64 30H82C89.732 30 96 36.268 96 44V60"
                stroke="#FFD700"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.12 }}
              />
              <motion.circle
                cx="64"
                cy="64"
                r="12"
                fill="rgba(255,215,0,0.18)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              />
            </motion.svg>
            <p className="max-w-[320px] text-sm uppercase tracking-[0.2em] text-white/70">
              Coffee craft, career training, and global business skills for the next generation of baristas.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
