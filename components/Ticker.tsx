'use client';

import { useRef, useState } from 'react';

const messages = [
  '☕ Espresso Mastery',
  '🎓 Career Abroad',
  '💼 Start Your Business',
  '⭐ 500+ Graduates',
  '🌍 Work Internationally',
  '📜 Certificate Included',
  '🔥 Enroll Now →',
];

export default function Ticker() {
  const [dragX, setDragX] = useState(0);
  const startX = useRef(0);

  return (
    <div className="sticky top-[72px] z-40 overflow-hidden border-y border-white/10 bg-[#C8960C] py-3 text-sm text-[#0A0A0A] shadow-soft">
      <div
        className="ticker-track min-w-[200%] whitespace-nowrap"
        onTouchStart={(event) => {
          startX.current = event.touches[0].clientX;
        }}
        onTouchMove={(event) => {
          const next = event.touches[0].clientX - startX.current;
          setDragX(next);
        }}
        onTouchEnd={() => setDragX(0)}
        style={{ transform: `translateX(${dragX}px)` }}
      >
        {[0, 1].map((cycle) => (
          <div key={cycle} className="inline-flex items-center gap-8 px-6">
            {messages.map((message) => (
              <span key={`${message}-${cycle}`} className="uppercase tracking-[0.22em]">
                {message}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
