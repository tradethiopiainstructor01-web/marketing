'use client';

import { ReactNode, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SwipeCarouselProps {
  items: ReactNode[];
  className?: string;
  showDots?: boolean;
}

export default function SwipeCarousel({ items, className = '', showDots = true }: SwipeCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) < 50) return;
    setActiveIndex((current) => {
      if (delta > 0) {
        return Math.min(items.length - 1, current + 1);
      }
      return Math.max(0, current - 1);
    });
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className="hide-scrollbar overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-full flex-shrink-0"
              animate={{ scale: index === activeIndex ? 1 : 0.96, opacity: index === activeIndex ? 1 : 0.7 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {showDots && (
        <div className="mt-5 flex items-center justify-center gap-3">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-3 rounded-full transition-all ${
                index === activeIndex ? 'w-10 bg-[#C8960C]' : 'w-3 bg-[var(--text-muted)]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
