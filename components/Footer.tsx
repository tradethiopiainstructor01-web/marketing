'use client';

export default function Footer({ theme, lang }: { theme: 'dark' | 'light'; lang: 'en' | 'am' }) {
  return (
    <footer className="border-t border-white/10 bg-[#081627] px-4 py-14 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <div className="flex items-center gap-4">
            <img src="/tesbinn-logo.png" alt="TESBINN Logo" className="h-14 w-auto drop-shadow-md" />
            <p className="font-heading text-3xl tracking-[0.18em] text-[#C8960C]">TESBINN</p>
          </div>
          <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
            Next-level coffee career training for baristas, exporters, and founders focused on real business growth.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/80">
            <p>Bole Medhanialem, Helzer Tower, 8th Floor, Addis Ababa, Ethiopia</p>
            <p>Email: training@tesbinn.com</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <a href="#home" className="text-sm uppercase tracking-[0.25em] text-white/70 hover:text-white">
            Home
          </a>
          <a href="#learn" className="text-sm uppercase tracking-[0.25em] text-white/70 hover:text-white">
            Learn
          </a>
          <a href="#testimonials" className="text-sm uppercase tracking-[0.25em] text-white/70 hover:text-white">
            Reviews
          </a>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
        © 2026 TESBINN Coffee Career Training. All rights reserved.
      </div>
    </footer>
  );
}
