'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import CountdownTimer from '../../components/CountdownTimer';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import Navbar from '../../components/Navbar';
import ScrollProgress from '../../components/ScrollProgress';

const outcomes = [
  'Sensory analysis: aroma, acidity, body, and flavor',
  'Coffee grading and scoring techniques',
  'Defect identification',
  'Flavor profiling and classification',
  'Global cupping protocols',
  'Coffee origin and processing methods',
  'How buyers evaluate coffee',
];

const opportunities = [
  'Work with exporters and coffee companies',
  'Become a professional cupper',
  'Add value to your coffee business',
  'Work with international buyers',
  'Build authority in the coffee industry',
];

const testimonials = [
  'I now understand coffee quality at a professional level.',
  'This training changed how I see coffee business.',
  'I gained real skills used in export markets.',
];

const cuppingLinks = [
  { labelEn: 'Home', labelAm: 'መነሻ', href: '#home' },
  { labelEn: 'Value', labelAm: 'ዋጋ', href: '#value' },
  { labelEn: 'Skills', labelAm: 'ክህሎቶች', href: '#skills' },
  { labelEn: 'Pricing', labelAm: 'ዋጋ', href: '#pricing' },
  { labelEn: 'Contact', labelAm: 'አድራሻ', href: '#contact' },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: 'easeOut' },
};

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="font-label text-sm font-bold uppercase tracking-[0.28em] text-[#B8860B]">{eyebrow}</p>
      <h2 className="mt-4 font-heading text-[clamp(2.4rem,6vw,4.6rem)] uppercase leading-[0.92] text-slate-950">
        {title}
      </h2>
      {body && <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">{body}</p>}
    </div>
  );
}

function CuppingVisual() {
  const markers = [
    { label: 'Aroma', className: 'left-[18%] top-[34%]' },
    { label: 'Acidity', className: 'left-[48%] top-[47%]' },
    { label: 'Body', className: 'left-[72%] top-[31%]' },
  ];

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-white/70 bg-[#f8fbff] p-3 shadow-glow sm:min-h-[520px] sm:rounded-[40px] sm:p-4">
      <img
        src="/cupping-hero-real-cups.png"
        alt="Professional coffee cupping table with real cups, spoons, coffee samples, and flavor wheel"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,251,255,0.06),rgba(7,24,38,0.2)),radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.38),transparent_32%)]" />
      <div className="relative flex h-full flex-col justify-between gap-6">
        <div className="flex items-center justify-between gap-4">
          <img src="/tesbinn-logo.png" alt="TESBINN" className="h-14 w-auto" />
          <span className="rounded-full bg-[#0B2A42]/92 px-4 py-2 font-label text-xs font-bold uppercase tracking-[0.24em] text-white shadow-soft backdrop-blur-md">
            Specialty Lab
          </span>
        </div>

        {markers.map((marker, index) => (
          <motion.div
            key={marker.label}
            className={`absolute ${marker.className} hidden sm:block`}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.2, delay: index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="absolute -left-1 -top-1 h-4 w-4 rounded-full bg-[#F7D76D] shadow-[0_0_0_7px_rgba(247,215,109,0.2)]" />
            <span className="ml-5 rounded-full bg-white/92 px-3 py-2 font-label text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B2A42] shadow-[0_12px_28px_rgba(15,23,42,0.16)] backdrop-blur-md">
              {marker.label}
            </span>
          </motion.div>
        ))}

        <motion.div
          className="pointer-events-none absolute left-[12%] top-[51%] hidden h-2 w-[34%] origin-left rounded-full bg-gradient-to-r from-[#c8ced7] via-white to-[#8d99a8] shadow-[0_14px_24px_rgba(15,23,42,0.22)] sm:block"
          animate={{ x: ['0%', '25%', '8%', '38%', '0%'], y: [0, -10, 8, -8, 0], rotate: [-9, -14, -4, -12, -9] }}
          transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="absolute -right-5 -top-4 h-10 w-12 rounded-full border border-slate-300 bg-gradient-to-br from-white to-[#c8ced7]" />
        </motion.div>

        <div className="pointer-events-none absolute inset-x-10 top-[22%] flex justify-around">
          {[0, 1, 2, 3].map((item) => (
            <motion.span
              key={item}
              className="h-16 w-1 rounded-full bg-white/45 blur-[1px]"
              animate={{ y: [18, -16, -42], opacity: [0, 0.7, 0] }}
              transition={{ duration: 2.6, delay: item * 0.35, repeat: Infinity, ease: 'easeOut' }}
            />
          ))}
        </div>

        <div className="grid gap-3 rounded-2xl bg-[#0B2A42] p-4 text-white sm:grid-cols-3">
          {['Aroma', 'Score', 'Grade'].map((item, index) => (
            <div key={item}>
              <p className="font-label text-[11px] uppercase tracking-[0.24em] text-[#F7D76D]">{item}</p>
              <motion.p
                className="mt-1 text-sm text-white/80"
                animate={{ opacity: [0.58, 1, 0.58] }}
                transition={{ duration: 2.4, delay: index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
              >
                Professional evaluation
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CoffeeCuppingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5fbff] text-slate-950">
      <ScrollProgress />
      <Navbar
        theme="light"
        lang="en"
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={setMobileMenuOpen}
        onToggleTheme={() => undefined}
        onToggleLang={() => undefined}
        links={cuppingLinks}
        homeHref="/cupping#home"
        ctaHref="https://wa.me/251909636575"
        helpHref="https://wa.me/251909636575"
        showThemeToggle={false}
        showLangToggle={false}
      />

      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#f5fbff] via-[#e8f4ff] to-[#daeaf8] px-3 pb-16 pt-20 sm:px-6 md:px-8 lg:pb-28 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),transparent_24%),radial-gradient(circle_at_10%_30%,_rgba(141,188,255,0.18),transparent_20%)]" />
        <div className="absolute left-1/2 top-16 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#d4ebff]/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-4 py-2 font-label text-xs font-bold uppercase tracking-[0.26em] text-slate-800 shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#C8960C]" />
              Coffee Cupping Training
            </div>
            <div>
              <p className="font-label text-sm font-bold uppercase tracking-[0.28em] text-[#1F6F43]">
                Premium skill • Global opportunity
              </p>
              <h1 className="mt-4 max-w-4xl font-heading text-[clamp(3rem,9vw,6.4rem)] uppercase leading-[0.9] text-slate-950">
                Master the Art of Coffee Tasting
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Become a certified coffee expert. Learn professional coffee cupping, sensory analysis, and quality grading to unlock high-value opportunities in the global coffee industry.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="#pricing" className="flex min-h-[60px] items-center justify-center rounded-full bg-[#C8960C] px-8 text-base font-bold uppercase tracking-[0.18em] text-[#0A0A0A] shadow-[0_24px_48px_rgba(200,150,12,0.24)]">
                Register Now
              </a>
              <a href="https://wa.me/251909636575" className="flex min-h-[60px] items-center justify-center rounded-full bg-[#0B2A42] px-8 text-base font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_42px_rgba(11,42,66,0.24)]">
                Chat on WhatsApp
              </a>
            </div>
            <p className="rounded-2xl border border-[#C8960C]/30 bg-[#FFF7D7] px-4 py-3 text-sm font-bold text-[#6B4A00]">
              Limited seats: next professional batch starting soon.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.08 }}>
            <CuppingVisual />
          </motion.div>
        </div>
      </section>

      <motion.section {...fadeUp} className="bg-white px-4 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why this matters"
            title="Ethiopia Produces Coffee, But Experts Capture the Value"
            body="Coffee is a multi-billion dollar global industry. Buyers pay premium prices for quality, and only trained professionals can evaluate, grade, and defend that value."
          />
          <div className="grid gap-4 md:grid-cols-4">
            {['Premium quality earns premium prices', 'Cuppers are needed locally and globally', 'Quality grading shapes export value', 'If you understand quality, you control value'].map((item) => (
              <div key={item} className="rounded-[24px] border border-slate-200 bg-[#f8fbff] p-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)]">
                <p className="text-lg font-semibold leading-7 text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="bg-[#0B2A42] px-4 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="font-label text-sm font-bold uppercase tracking-[0.28em] text-[#F7D76D]">What is coffee cupping?</p>
            <h2 className="mt-4 font-heading text-[clamp(2.4rem,6vw,4.8rem)] uppercase leading-[0.92]">More Than Tasting. It Is a Professional Skill.</h2>
            <p className="mt-5 text-lg leading-8 text-white/80">
              Coffee cupping is the language of the global coffee trade. Exporters, buyers, and quality professionals use it to evaluate quality, identify flavor profiles, grade coffee for export markets, and determine pricing.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Evaluate coffee quality', 'Identify flavor profiles', 'Grade coffee for export', 'Determine pricing'].map((item) => (
              <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.06] p-6">
                <p className="text-xl font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="skills" {...fadeUp} className="px-4 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="What you will master" title="Professional Skills You Will Gain" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item) => (
              <div key={item} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)]">
                <span className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-[#EAF6F0] text-[#1F6F43]">✓</span>
                <p className="text-lg font-semibold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="bg-white px-4 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader eyebrow="Practical experience" title="Hands-On, Professional Training" body="You do not just taste. You analyze like a professional through guided sessions and expert demonstrations." />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Real coffee samples', 'Guided cupping sessions', 'Flavor comparison exercises', 'Expert-led demonstrations'].map((item) => (
              <div key={item} className="rounded-[24px] bg-[#0B2A42] p-6 text-white shadow-soft">
                <p className="text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="px-4 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Income and career opportunity" title="Where This Skill Can Take You" body="This is a high-level specialty skill with premium value in coffee companies, export markets, and buyer-facing roles." />
          <div className="grid gap-4 md:grid-cols-5">
            {opportunities.map((item) => (
              <div key={item} className="rounded-[24px] border border-slate-200 bg-white p-5 text-center shadow-[0_18px_42px_rgba(15,23,42,0.06)]">
                <p className="font-semibold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="pricing" {...fadeUp} className="bg-[#0B2A42] px-4 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-label text-sm font-bold uppercase tracking-[0.28em] text-[#F7D76D]">Pricing</p>
            <h2 className="mt-4 font-heading text-[clamp(2.6rem,6vw,5rem)] uppercase leading-[0.9]">Invest in a High-Value Skill</h2>
            <p className="mt-6 text-4xl font-bold text-[#F7D76D]">9,900 ETB – 35,000 ETB</p>
            <p className="mt-4 text-white/75">Includes full practical training, coffee samples, certification, and professional guidance.</p>
          </div>
          <div className="rounded-[28px] bg-white p-5 text-slate-950 shadow-glow">
            <p className="mb-4 text-center font-label text-xs font-bold uppercase tracking-[0.22em] text-[#C8960C]">Next intake closing soon</p>
            <CountdownTimer />
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="bg-white px-4 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Testimonials" title="What Our Participants Say" />
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((quote) => (
              <div key={quote} className="rounded-[24px] border border-slate-200 bg-[#f8fbff] p-7 shadow-[0_18px_42px_rgba(15,23,42,0.06)]">
                <p className="text-lg font-semibold leading-8">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="px-4 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-[32px] bg-[#FFF7D7] p-8 text-center shadow-[0_18px_42px_rgba(15,23,42,0.08)] md:p-12">
          <p className="font-label text-sm font-bold uppercase tracking-[0.28em] text-[#8A6100]">Limited seats</p>
          <h2 className="mt-4 font-heading text-[clamp(2.5rem,7vw,5rem)] uppercase leading-[0.9] text-slate-950">Become a Coffee Expert Today</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Small groups, high-demand course, and professional-level instruction. Do not miss your chance to upgrade your expertise.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a href="#pricing" className="flex min-h-[58px] items-center justify-center rounded-full bg-[#C8960C] px-8 font-bold uppercase tracking-[0.18em] text-[#0A0A0A]">Register Now</a>
            <a href="https://wa.me/251909636575" className="flex min-h-[58px] items-center justify-center rounded-full bg-[#0B2A42] px-8 font-bold uppercase tracking-[0.18em] text-white">Talk to Our Team</a>
          </div>
        </div>
      </motion.section>

      <footer id="contact" className="bg-[#06111f] px-4 py-12 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <img src="/tesbinn-logo.png" alt="TESBINN Logo" className="h-14 w-auto" />
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">Coffee cupping training for expert skill, export-level knowledge, and authority in coffee.</p>
          </div>
          <div className="space-y-2 text-sm text-white/75">
            <p>Addis Ababa</p>
            <p>+251 909 636 575</p>
            <p>training@tesbinn.com</p>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </main>
  );
}
