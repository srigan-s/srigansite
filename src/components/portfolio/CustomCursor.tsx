'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 620, damping: 38 });
  const springY = useSpring(cursorY, { stiffness: 620, damping: 38 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    if (!finePointer.matches) return;

    const moveCursor = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setIsVisible(true);
    };

    const updateHoverState = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      setIsHovering(Boolean(target?.closest('a, button, [data-cursor="hover"]')));
    };

    const hideCursor = () => setIsVisible(false);
    const showCursor = () => setIsVisible(true);

    window.addEventListener('pointermove', moveCursor);
    window.addEventListener('pointerover', updateHoverState);
    window.addEventListener('pointerout', updateHoverState);
    document.documentElement.addEventListener('mouseleave', hideCursor);
    document.documentElement.addEventListener('mouseenter', showCursor);

    return () => {
      window.removeEventListener('pointermove', moveCursor);
      window.removeEventListener('pointerover', updateHoverState);
      window.removeEventListener('pointerout', updateHoverState);
      document.documentElement.removeEventListener('mouseleave', hideCursor);
      document.documentElement.removeEventListener('mouseenter', showCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-6 w-6 rounded-full border md:block"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        borderColor: 'var(--accent)',
        backgroundColor: isHovering ? 'color-mix(in srgb, var(--accent) 18%, transparent)' : 'transparent',
        opacity: isVisible ? 1 : 0,
        scale: isHovering ? 1.85 : 1,
      }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      <span
        className="absolute left-1/2 top-1/2 block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: 'var(--accent)' }}
      />
    </motion.div>
  );
}
