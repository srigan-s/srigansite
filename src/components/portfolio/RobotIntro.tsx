'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const terminalLines = [
  { text: '$ npm run server', delay: 0.2, accent: true },
  { text: '> srigan-portfolio@0.0.0 server', delay: 0.88 },
  { text: '> next dev --turbo', delay: 1.18 },
  { text: 'ready - local portfolio online', delay: 1.58, accent: true },
  { text: 'compiled robotics / controls / software', delay: 1.92 },
];

export function RobotIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 3300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[100] flex items-center justify-center"
          exit={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          style={{ background: 'var(--bg)' }}
        >
          <motion.div
            className="terminal-intro panel relative w-[min(34rem,calc(100vw-2rem))] overflow-hidden p-4"
            exit={{ scale: 0.96, y: -12 }}
            initial={{ scale: 0.96, y: 18 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="terminal-scanline"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 2.2, ease: 'linear', repeat: Infinity }}
            />
            <motion.div
              className="intro-robot-ghost"
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 0.26, y: 0, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
            >
              <span className="intro-robot-antenna" />
              <span className="intro-robot-dot" />
              <div className="intro-robot-head">
                <span className="intro-robot-eye" />
                <span className="intro-robot-eye" />
                <span className="intro-robot-mouth" />
              </div>
            </motion.div>
            <div className="mb-4 flex items-center justify-between border-b pb-3 hairline">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--accent)' }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--line-strong)' }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--text-faint)' }} />
              </div>
              <p className="text-[11px] uppercase muted-copy">portfolio boot</p>
            </div>
            <div className="space-y-2 text-sm md:text-base">
              {terminalLines.map((line) => (
                <motion.p
                  className={line.accent ? 'terminal-line terminal-line-accent' : 'terminal-line muted-copy'}
                  initial={{ opacity: 0, y: 8, clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)' }}
                  key={line.text}
                  transition={{ delay: line.delay, duration: 0.38, ease: 'easeOut' }}
                >
                  {line.text}
                </motion.p>
              ))}
            </div>
            <motion.div
              className="mt-5 h-1 overflow-hidden rounded-sm"
              style={{ background: 'var(--bg-muted)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.15, duration: 0.2 }}
            >
              <motion.div
                className="h-full rounded-sm"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                style={{ background: 'var(--accent)', transformOrigin: 'left' }}
                transition={{ delay: 1.2, duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
            <motion.div
              className="mt-4 flex items-center gap-2 text-xs muted-copy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.25, duration: 0.3 }}
            >
              <span className="terminal-cursor" />
              listening on localhost:3000
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
