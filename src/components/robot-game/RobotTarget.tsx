'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useRobotGame } from './RobotGameProvider';

const sparkVectors = [
  [0, -34],
  [27, -20],
  [34, 7],
  [18, 30],
  [-18, 30],
  [-34, 7],
  [-27, -20],
] as const;

type RobotTargetProps = {
  children: ReactNode;
  className?: string;
  label: string;
  targetId: string;
};

export function RobotTarget({ children, className = '', label, targetId }: RobotTargetProps) {
  const { isGameMode, registerHit } = useRobotGame();
  const shouldReduceMotion = useReducedMotion();
  const [isRecovering, setIsRecovering] = useState(false);
  const recoveryTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (recoveryTimer.current) window.clearTimeout(recoveryTimer.current);
    };
  }, []);

  const hitRobot = () => {
    if (!isGameMode || isRecovering) return;

    setIsRecovering(true);
    registerHit(targetId);
    recoveryTimer.current = window.setTimeout(() => setIsRecovering(false), 620);
  };

  if (!isGameMode) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.button
      aria-label={label}
      className={`robot-target relative inline-flex min-h-11 min-w-11 appearance-none items-center justify-center border-0 bg-transparent p-0 ${className}`}
      data-cursor="target"
      disabled={isRecovering}
      onClick={hitRobot}
      type="button"
      animate={
        isRecovering
          ? shouldReduceMotion
            ? { opacity: 0.55 }
            : {
                opacity: [1, 0.4, 0.75, 1],
                rotate: [0, -5, 5, -3, 0],
                scale: [1, 0.9, 1.04, 0.98, 1],
                x: [0, -8, 7, -4, 0],
              }
          : { opacity: 1, rotate: 0, scale: 1, x: 0 }
      }
      transition={{ duration: shouldReduceMotion ? 0.12 : 0.5, ease: 'easeOut' }}
      whileFocus={{ outline: '2px solid var(--accent)', outlineOffset: '4px' }}
    >
      {children}
      <AnimatePresence>
        {isRecovering ? (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
            initial={{ opacity: 0.9, scale: 0.25 }}
            animate={{ opacity: 0, scale: shouldReduceMotion ? 0.8 : 1.75 }}
            exit={{ opacity: 0 }}
            style={{ borderColor: 'var(--accent)' }}
            transition={{ duration: shouldReduceMotion ? 0.12 : 0.42, ease: 'easeOut' }}
          />
        ) : null}
      </AnimatePresence>
      {!shouldReduceMotion && isRecovering ? (
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
          {sparkVectors.map(([x, y], index) => (
            <motion.span
              className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
              initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              animate={{ opacity: 0, scale: 0.35, x, y }}
              key={`${x}-${y}-${index}`}
              style={{ background: index % 2 === 0 ? 'var(--accent)' : 'var(--text)' }}
              transition={{ duration: 0.46, ease: 'easeOut' }}
            />
          ))}
        </span>
      ) : null}
    </motion.button>
  );
}
