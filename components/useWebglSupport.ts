'use client';

import { useEffect, useState } from 'react';

export default function useWebglSupport() {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      setSupported(false);
      return;
    }

    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl') ||
        canvas.getContext('webgl2');
      setSupported(!!gl);
    } catch {
      setSupported(false);
    }
  }, []);

  return supported;
}
