'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function RobotIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 2600);
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
            className="relative flex flex-col items-center"
            exit={{ scale: 0.96, y: -12 }}
            initial={{ scale: 0.92, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="absolute -inset-14 rounded-full border"
              animate={{ rotate: 360, opacity: [0.25, 0.7, 0.25] }}
              style={{ borderColor: 'var(--line)' }}
              transition={{ duration: 2.4, ease: 'linear', repeat: Infinity }}
            />
            <motion.div
              className="h-10 w-px"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              style={{ background: 'var(--line-strong)', transformOrigin: 'bottom' }}
              transition={{ delay: 0.2, duration: 0.35 }}
            />
            <motion.div
              className="h-4 w-4 rounded-full"
              animate={{ opacity: [0.4, 1, 0.4] }}
              style={{ background: 'var(--accent)' }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            <motion.div
              className="panel mt-3 h-28 w-36 p-4"
              initial={{ clipPath: 'inset(50% 50% 50% 50%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ delay: 0.35, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[0, 1].map((eye) => (
                  <motion.div
                    className="h-10 rounded-md border"
                    key={eye}
                    style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)' }}
                    animate={{ boxShadow: ['0 0 0 transparent', '0 0 18px var(--accent)', '0 0 0 transparent'] }}
                    transition={{ delay: 0.85 + eye * 0.1, duration: 0.9, repeat: Infinity }}
                  >
                    <span
                      className="mx-auto mt-3 block h-3 w-3 rounded-full"
                      style={{ background: 'var(--accent)' }}
                    />
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mx-auto mt-5 h-2 w-16 rounded-sm"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                style={{ background: 'var(--accent)', transformOrigin: 'left' }}
                transition={{ delay: 1.1, duration: 0.35 }}
              />
            </motion.div>
            <motion.div
              className="mt-3 h-16 w-24 rounded-md border p-3"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)' }}
              transition={{ delay: 0.72, duration: 0.38 }}
            >
              <div className="grid grid-cols-4 gap-1.5">
                {Array.from({ length: 8 }).map((_, index) => (
                  <motion.span
                    className="h-1.5 rounded-sm"
                    key={index}
                    style={{ background: index % 3 === 0 ? 'var(--accent)' : 'var(--line-strong)' }}
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{ delay: index * 0.08, duration: 0.9, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>
            <motion.p
              className="mt-6 text-xs font-semibold uppercase"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: 'var(--text-soft)' }}
              transition={{ delay: 1.2, duration: 0.35 }}
            >
              Srigan systems online
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
