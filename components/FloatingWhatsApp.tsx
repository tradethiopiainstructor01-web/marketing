'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [hover, setHover] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        type="button"
        aria-label="Chat with us"
        onClick={() => window.open('https://wa.me/251911000000', '_blank')}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_24px_50px_rgba(37,211,102,0.35)]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="absolute inset-0 rounded-full border border-[#25D366] opacity-50" />
        <span className="absolute inset-0 rounded-full border border-[#25D366] opacity-40 blur-sm" />
        <span className="relative text-2xl">📞</span>
      </motion.button>
      <div className="pointer-events-none absolute -right-1/2 top-1/2 hidden translate-y-[-50%] rounded-full bg-[#111111] px-3 py-2 text-sm text-white shadow-soft sm:block">
        Chat with us
      </div>
    </div>
  );
}
