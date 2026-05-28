import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TESBINN | Coffee Career Training',
  description: 'TESBINN Coffee Career Training helps you master coffee skills, launch a career abroad, and start your business with professional guidance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-syne bg-gradient-to-b from-[#eaf6ff] via-[#d7ebff] to-[#cde4f4] text-slate-900">{children}</body>
    </html>
  );
}
