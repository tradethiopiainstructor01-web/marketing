import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        syne: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 70px rgba(200, 150, 12, 0.16)',
        soft: '0 20px 42px rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
