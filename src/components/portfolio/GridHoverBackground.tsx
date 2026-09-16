'use client';

import { useEffect } from 'react';

export function CircuitBackground() {
  useEffect(() => {
    const updateCircuitGlow = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--circuit-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--circuit-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', updateCircuitGlow, { passive: true });
    return () => window.removeEventListener('pointermove', updateCircuitGlow);
  }, []);

  return <div aria-hidden="true" className="circuit-background" />;
}
