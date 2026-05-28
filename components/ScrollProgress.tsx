'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-[1000] origin-left h-1 bg-gradient-to-r from-[#ffd700] via-[#d4a200] to-[#ff8c00] shadow-[0_0_30px_rgba(212,168,83,0.25)]"
    />
  );
}
