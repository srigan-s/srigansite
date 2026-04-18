'use client';

import { useEffect } from 'react';

export function GridHoverBackground() {
  useEffect(() => {
    const updateGridGlow = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--grid-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--grid-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', updateGridGlow, { passive: true });
    return () => window.removeEventListener('pointermove', updateGridGlow);
  }, []);

  return <div aria-hidden="true" className="grid-hover-background" />;
}
