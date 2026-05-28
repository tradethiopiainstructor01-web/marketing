'use client';

export default function Footer({ theme, lang }: { theme: 'dark' | 'light'; lang: 'en' | 'am' }) {
  return (
    <footer className="border-t border-white/10 bg-[#081627] px-4 py-14 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-heading text-3xl tracking-[0.18em] text-[#C8960C]">TESBINN</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-muted)]">
            Next-level coffee career training for baristas, exporters, and founders focused on real business growth.
          </p>
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
