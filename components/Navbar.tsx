'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';

const links = [
  { labelEn: 'Home', labelAm: 'መነሻ', href: '#home' },
  { labelEn: 'Training', labelAm: 'ስልጠና', href: '#learn' },
  { labelEn: 'Who', labelAm: 'ማን', href: '#who' },
  { labelEn: 'Why', labelAm: 'ለምን', href: '#why' },
  { labelEn: 'Reviews', labelAm: 'አስተያየቶች', href: '#testimonials' },
];

export default function Navbar({ theme, lang, onToggleTheme, onToggleLang }: { theme: 'dark' | 'light'; lang: 'en' | 'am'; onToggleTheme: () => void; onToggleLang: () => void; }) {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const isDark = theme === 'dark';
  const background = useTransform(scrollY, [0, 140], [isDark ? 'rgba(8, 10, 16, 0.06)' : 'rgba(248, 250, 252, 0.78)', isDark ? 'rgba(8, 10, 16, 0.96)' : 'rgba(248, 250, 252, 0.98)']);
  const blur = useTransform(scrollY, [0, 140], ['0px', '24px']);
  const shadow = useTransform(scrollY, [0, 140], [isDark ? '0 0px 0px rgba(0,0,0,0)' : '0 0px 0px rgba(15,23,42,0.04)', isDark ? '0 26px 90px rgba(0,0,0,0.28)' : '0 22px 70px rgba(15,23,42,0.12)']);

  const navTheme = isDark
    ? 'border-white/10 bg-[#081527]/95 text-white'
    : 'border-slate-200/80 bg-white/90 text-slate-900';

  const Toggle = ({ label, enabled, onClick }: { label: string; enabled: boolean; onClick: () => void; }) => (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`inline-flex items-center gap-3 rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${isDark ? 'border-white/10 bg-white/5 text-white' : 'border-slate-200 bg-white text-slate-900'}`}
    >
      <span>{label}</span>
      <span className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${enabled ? 'bg-[#F5C842]' : 'bg-slate-300'}`}>
        <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${enabled ? 'translate-x-5' : 'translate-x-1'}`} />
      </span>
    </button>
  );

  return (
    <motion.nav
      style={{ backdropFilter: blur, background: background, boxShadow: shadow }}
      className={`fixed inset-x-0 top-0 z-50 border-b ${navTheme} backdrop-blur-xl`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-4 md:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3 sm:gap-4">
          <img
            src="/tesbinn-logo.svg"
            alt="TESBINN Logo"
            className="h-12 w-auto sm:h-14 drop-shadow-md"
            style={{ maxWidth: 180 }}
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group text-sm font-medium uppercase tracking-[0.2em] transition ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
            >
              {lang === 'en' ? link.labelEn : link.labelAm}
              <span className="mt-1 block h-[1px] w-full scale-x-0 bg-[#F5C842] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Toggle label={lang === 'en' ? 'AM' : 'EN'} enabled={lang === 'am'} onClick={onToggleLang} />
          <Toggle label={theme === 'dark' ? 'Light' : 'Dark'} enabled={theme === 'dark'} onClick={onToggleTheme} />
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            href="https://wa.me/251911000000"
            className={`inline-flex min-h-[52px] items-center justify-center rounded-full border px-5 text-sm font-semibold uppercase tracking-[0.22em] backdrop-blur-xl ${theme === 'dark' ? 'border-white/10 bg-white/5 text-white' : 'border-slate-200 bg-white text-slate-900'}`}
          >
            {lang === 'en' ? 'Help' : 'እርዳታ'}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            href="https://wa.me/251911000000"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#C8960C] px-5 text-sm font-bold uppercase tracking-[0.22em] text-[#0A0A0A] shadow-[0_24px_50px_rgba(200,150,12,0.24)]"
          >
            {lang === 'en' ? 'Get Started' : 'ጀምር'}
          </motion.a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border shadow-sm lg:hidden ${theme === 'dark' ? 'border-white/10 bg-[#142b4b] text-white' : 'border-slate-200 bg-white text-slate-900'}`}
          aria-label="Toggle navigation"
        >
          <span className={`block h-0.5 w-6 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`} />
          <span className={`mt-1.5 block h-0.5 w-6 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`} />
          <span className={`mt-1.5 block h-0.5 w-6 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 160, damping: 22 }}
            className={`fixed inset-x-0 top-[72px] z-40 border-t backdrop-blur-2xl lg:hidden ${theme === 'dark' ? 'border-white/10 bg-[#0b1d34]/98 text-white' : 'border-slate-200 bg-white/95 text-slate-900'}`}
          >
            <div className="mx-auto max-w-3xl space-y-3 px-3 py-5 sm:px-4">
              <div className="flex flex-wrap items-center gap-3 rounded-3xl border border-white/10 bg-black/5 p-3 sm:gap-4">
                <Toggle label={lang === 'en' ? 'Language' : 'ቋንቋ'} enabled={lang === 'am'} onClick={onToggleLang} />
                <Toggle label={theme === 'dark' ? 'Bright' : 'Dark'} enabled={theme === 'dark'} onClick={onToggleTheme} />
              </div>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block rounded-3xl border px-4 py-4 text-lg font-semibold uppercase ${theme === 'dark' ? 'border-white/10 bg-[#11151f] text-white' : 'border-slate-200 bg-slate-50 text-slate-900'}`}
                  onClick={() => setOpen(false)}
                >
                  {lang === 'en' ? link.labelEn : link.labelAm}
                </a>
              ))}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/251911000000"
                className="block rounded-3xl bg-[#C8960C] px-4 py-4 text-center text-lg font-semibold uppercase text-[#0A0A0A]"
                onClick={() => setOpen(false)}
              >
                {lang === 'en' ? 'Get Started' : 'ጀምር'}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
