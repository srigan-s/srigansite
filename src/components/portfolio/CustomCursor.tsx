'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Crosshair } from 'lucide-react';
import { useRobotGame } from '@/components/robot-game/RobotGameProvider';

export function CustomCursor() {
  const { isGameMode } = useRobotGame();
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
      setIsHovering(
        Boolean(
          target?.closest(
            'a, button, article, .panel, .quiet-panel, [data-cursor="hover"], [data-cursor="target"]',
          ),
        ),
      );
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
      className={`custom-cursor pointer-events-none fixed left-0 top-0 z-[90] flex items-center justify-center ${
        isGameMode ? 'h-8 w-8' : 'h-4 w-4 rounded-[2px] border'
      }`}
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        borderColor: isGameMode ? 'transparent' : 'var(--accent)',
        backgroundColor:
          !isGameMode && isHovering
            ? 'color-mix(in srgb, var(--accent) 10%, transparent)'
            : 'transparent',
        filter: isGameMode ? 'drop-shadow(0 0 6px color-mix(in srgb, var(--accent) 75%, transparent))' : 'none',
        opacity: isVisible ? 1 : 0,
        scale: isGameMode ? (isHovering ? 1.08 : 1) : isHovering ? 1.85 : 1,
      }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      {isGameMode ? <Crosshair className="h-8 w-8" style={{ color: 'var(--accent)' }} /> : null}
    </motion.div>
  );
}
