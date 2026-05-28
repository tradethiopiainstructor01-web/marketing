'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ScrollProgress from '../components/ScrollProgress';
import SplashScreen from '../components/SplashScreen';
import Testimonials from '../components/Testimonials';
import Ticker from '../components/Ticker';
import WhatYouLearn from '../components/WhatYouLearn';
import WhoIsThisFor from '../components/WhoIsThisFor';
import WhyTesbinn from '../components/WhyTesbinn';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { type: 'spring', stiffness: 90, damping: 20 },
};

export default function HomePage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [lang, setLang] = useState<'en' | 'am'>('en');

  const themeClasses = theme === 'dark'
    ? 'bg-gradient-to-b from-[#081528] via-[#06111f] to-[#050b14] text-white'
    : 'bg-gradient-to-b from-[#edf6ff] via-[#dbeaff] to-[#cfe4f6] text-slate-900';

  return (
    <main className={`relative min-h-screen overflow-x-visible ${themeClasses}`}>
      <SplashScreen />
      <ScrollProgress />
      <Navbar theme={theme} lang={lang} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} onToggleLang={() => setLang((l) => (l === 'en' ? 'am' : 'en'))} />
      <Ticker />
      <HeroSection theme={theme} lang={lang} />
      <motion.section {...fadeUp}>
        <WhoIsThisFor theme={theme} lang={lang} />
      </motion.section>
      <motion.section {...fadeUp}>
        <WhatYouLearn theme={theme} lang={lang} />
      </motion.section>
      <motion.section {...fadeUp}>
        <WhyTesbinn theme={theme} lang={lang} />
      </motion.section>
      <motion.section {...fadeUp}>
        <Testimonials theme={theme} lang={lang} />
      </motion.section>
      <Footer theme={theme} lang={lang} />
      <FloatingWhatsApp />
    </main>
  );
}
