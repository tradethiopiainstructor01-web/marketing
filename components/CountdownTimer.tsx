'use client';

import { useEffect, useMemo, useState } from 'react';

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const initialTime: TimeParts = {
  days: 14,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const getTimeParts = (target: number): TimeParts => {
  const diff = Math.max(0, target - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
};

const pad = (value: number) => value.toString().padStart(2, '0');

function FlipDigit({ digit }: { digit: string }) {
  const [display, setDisplay] = useState(digit);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (digit === display) return;
    setFlipping(true);
    const swap = window.setTimeout(() => setDisplay(digit), 250);
    const done = window.setTimeout(() => setFlipping(false), 520);
    return () => {
      window.clearTimeout(swap);
      window.clearTimeout(done);
    };
  }, [digit, display]);

  return (
    <span className={`flip-digit grid h-[clamp(3rem,14vw,4.8rem)] w-[clamp(2rem,9vw,3.2rem)] place-items-center rounded-2xl bg-[#1A1A2E] text-white shadow-[0_14px_28px_rgba(26,26,46,0.18)] ${flipping ? 'is-flipping' : ''}`}>
      <span className="flip-digit-inner font-label text-[clamp(1.7rem,8vw,3rem)] font-bold leading-none">{display}</span>
    </span>
  );
}

function TimeGroup({ label, value }: { label: string; value: number }) {
  const digits = pad(value).split('');

  return (
    <div className="grid gap-3 text-center">
      <div className="flex justify-center gap-2">
        {digits.map((digit, index) => (
          <FlipDigit key={`${label}-${index}`} digit={digit} />
        ))}
      </div>
      <p className="font-label text-xs font-bold uppercase text-[#D4A200]">{label}</p>
    </div>
  );
}

export default function CountdownTimer() {
  const target = useMemo(() => Date.now() + 14 * 24 * 60 * 60 * 1000, []);
  const [time, setTime] = useState<TimeParts>(initialTime);

  useEffect(() => {
    setTime(getTimeParts(target));
    const interval = window.setInterval(() => setTime(getTimeParts(target)), 1000);
    return () => window.clearInterval(interval);
  }, [target]);

  return (
    <div className="grid w-full gap-5 rounded-[28px] border border-[#FFE2A6] bg-white p-5 shadow-[0_18px_48px_rgba(212,162,0,0.16)] sm:grid-cols-4">
      <TimeGroup label="Days" value={time.days} />
      <TimeGroup label="Hours" value={time.hours} />
      <TimeGroup label="Minutes" value={time.minutes} />
      <TimeGroup label="Seconds" value={time.seconds} />
    </div>
  );
}
