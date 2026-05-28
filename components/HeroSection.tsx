'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

const stats = [
  { icon: '☕', labelEn: 'Barista Ready', labelAm: 'ባሪስታ ዝግጁ', valueEn: 'Fast-track skill', valueAm: 'ፈጣን የክህሎት መንገድ' },
  { icon: '🚀', labelEn: 'Business Growth', labelAm: 'የንግድ እድገት', valueEn: 'Startup-ready systems', valueAm: 'ለስታርትአፕ ዝግጁ ስርዓቶች' },
  { icon: '🌍', labelEn: 'Export Access', labelAm: 'ወደ ውጭ ማውጣት', valueEn: 'Global coffee routes', valueAm: 'ዓለም አቀፍ የቡና መንገዶች' },
];

export default function HeroSection({ theme, lang }: { theme: 'dark' | 'light'; lang: 'en' | 'am' }) {
  const isDark = theme === 'dark';
  const sectionClass = isDark
    ? 'bg-gradient-to-br from-[#081528] via-[#091a2e] to-[#06111f] text-white'
    : 'bg-gradient-to-br from-[#f5fbff] via-[#e8f4ff] to-[#daeaf8] text-slate-900';
  const pillClass = isDark
    ? 'border-white/10 bg-white/5 text-white'
    : 'border-slate-300/70 bg-white/80 text-slate-900';
  const cardClass = isDark
    ? 'border-white/10 bg-[#0c1523]/90 text-white'
    : 'border-slate-200 bg-white/90 text-slate-950';
  const mutedClass = isDark ? 'text-slate-200' : 'text-slate-600';
  const accentClass = isDark ? 'text-[#F7D76D]' : 'text-[#C8960C]';
  return (
    <section id="home" className={`relative overflow-hidden px-3 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24 ${sectionClass}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),transparent_24%),radial-gradient(circle_at_10%_30%,_rgba(141,188,255,0.18),transparent_20%)]" />
      <div className="absolute left-1/2 top-16 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#d4ebff]/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.35em] shadow-[0_12px_50px_rgba(15,23,42,0.08)] ${pillClass}`}>
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#F5C842]" />
            {lang === 'en' ? '☕️ 2. BARISTA TRAINING' : '☕️ 2. ባሪስታ ስልጠና'}
          </div>

          <div className="space-y-5">
            <h1 className={`max-w-4xl text-[clamp(2.25rem,9vw,5.2rem)] font-heading uppercase leading-[0.95] tracking-[-0.04em] ${isDark ? 'text-white' : 'text-slate-950'}`}>
              {lang === 'en' ? 'HOW TO START A CAREER IN THE COFFEE INDUSTRY' : 'በቡና ኢንዱስትሪ የስራ መነሻ እንዴት መጀመር እንደሚቻል'}
              <span className={`block ${accentClass}`}>{lang === 'en' ? 'WORKSHOP TITLE' : 'የስልጠና ርዕስ'}</span>
            </h1>
            <p className={`max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 lg:text-xl ${mutedClass}`}>
              {lang === 'en'
                ? 'Workshop Title: “How to Start a Career in the Coffee Industry” — a practical barista training experience covering career paths, café business opportunities, coffee culture growth, and a live espresso demo.'
                : 'የስልጠና ርዕስ: “በቡና ኢንዱስትሪ የስራ መነሻ እንዴት መጀመር እንደሚቻል” — የባሪስታ ስልጠና ተግባራዊ ልምድ የስራ መንገዶችን፣ የካፌ የንግድ እድሎችን፣ የቡና ባህል እድገትን እና የቀጥታ ኤስፕሬሶ ማሳያን ያካትታል።'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              href="tel:+251911000000"
              className="flex min-h-[60px] items-center justify-center gap-3 rounded-full bg-[#F5C842] px-8 text-base font-bold uppercase tracking-[0.18em] text-[#0B0B0B] shadow-[0_24px_48px_rgba(245,200,66,0.24)]"
            >
              📞 {lang === 'en' ? 'Call Now' : 'አሁን ይደውሉ'}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/251911000000"
              className="flex min-h-[60px] items-center justify-center gap-3 rounded-full bg-[#0d4d8f] px-8 text-base font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_42px_rgba(13,77,143,0.24)]"
            >
              💬 {lang === 'en' ? 'WhatsApp Us' : 'በWhatsApp ይጻፉ'}
            </motion.a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {stats.map((item) => (
              <div key={item.labelEn} className={`rounded-[28px] border p-5 shadow-soft sm:p-6 ${cardClass}`}>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#F7D76D]/15 text-2xl text-[#F7D76D] shadow-[0_18px_35px_rgba(247,215,109,0.18)]">
                  {item.icon}
                </div>
                <p className="text-base font-semibold">{lang === 'en' ? item.labelEn : item.labelAm}</p>
                <p className={`mt-2 text-sm leading-6 ${mutedClass}`}>{lang === 'en' ? item.valueEn : item.valueAm}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: 'easeOut' }}
          className="relative w-full"
        >
          <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_top,_rgba(255,214,117,0.12),transparent_40%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/70 p-3 shadow-glow sm:rounded-[40px] sm:p-4">
            <div className="absolute -right-12 top-8 h-24 w-24 rounded-full bg-[#F7D76D]/15 blur-3xl" />
            <div className="absolute left-8 top-14 h-16 w-16 rounded-full bg-[#69c778]/15 blur-3xl" />
            <HeroScene />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
