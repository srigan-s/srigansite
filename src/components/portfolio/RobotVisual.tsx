'use client';

import { motion } from 'framer-motion';

const antennaDots = ['left', 'center', 'right'];

export function RobotVisual() {
  return (
    <motion.div
      aria-label="Minimal futuristic robot illustration"
      className="relative mx-auto flex h-[25rem] w-full max-w-[23rem] items-center justify-center md:h-[32rem]"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      role="img"
    >
      <motion.div
        className="absolute h-[18rem] w-[18rem] rounded-full border md:h-[23rem] md:w-[23rem]"
        animate={{ rotate: 360 }}
        style={{ borderColor: 'var(--line)' }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      />
      <motion.div
        className="absolute h-[14rem] w-[14rem] rounded-full border md:h-[18rem] md:w-[18rem]"
        animate={{ rotate: -360 }}
        style={{ borderColor: 'var(--line)' }}
        transition={{ duration: 36, ease: 'linear', repeat: Infinity }}
      />

      <motion.div
        className="relative w-[15rem] md:w-[18rem]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6.5, ease: 'easeInOut', repeat: Infinity }}
      >
        <div className="mx-auto h-8 w-px" style={{ background: 'var(--line-strong)' }} />
        <div className="mx-auto mb-3 flex w-24 justify-between">
          {antennaDots.map((dot) => (
            <span
              className="block h-2 w-2 rounded-full"
              key={dot}
              style={{ background: dot === 'center' ? 'var(--accent)' : 'var(--line-strong)' }}
            />
          ))}
        </div>

        <div
          className="panel relative mx-auto aspect-[1.18] w-full overflow-hidden p-4"
          style={{ background: 'color-mix(in srgb, var(--bg-elevated) 90%, var(--accent-soft))' }}
        >
          <div className="absolute inset-x-6 top-6 h-px" style={{ background: 'var(--line)' }} />
          <div className="mt-10 grid grid-cols-2 gap-4">
            <motion.div
              className="h-12 rounded-md border md:h-14"
              animate={{ opacity: [0.78, 1, 0.78] }}
              style={{ borderColor: 'var(--line-strong)', background: 'var(--bg-muted)' }}
              transition={{ duration: 3.8, ease: 'easeInOut', repeat: Infinity }}
            />
            <motion.div
              className="h-12 rounded-md border md:h-14"
              animate={{ opacity: [1, 0.72, 1] }}
              style={{ borderColor: 'var(--line-strong)', background: 'var(--bg-muted)' }}
              transition={{ duration: 4.2, ease: 'easeInOut', repeat: Infinity }}
            />
          </div>
          <div
            className="mx-auto mt-7 h-2 w-24 rounded-sm"
            style={{ background: 'var(--accent)' }}
          />
          <div className="mx-auto mt-5 grid w-28 grid-cols-5 gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                className="h-1 rounded-sm"
                key={index}
                style={{
                  background: index === 2 ? 'var(--accent)' : 'var(--line-strong)',
                }}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-3 grid w-[13rem] grid-cols-[1fr_4rem_1fr] items-start gap-3 md:w-[16rem]">
          <div className="h-20 rounded-md border" style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)' }} />
          <div className="h-28 rounded-md border" style={{ borderColor: 'var(--line-strong)', background: 'var(--bg-elevated)' }} />
          <div className="h-20 rounded-md border" style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)' }} />
        </div>

        <div className="mx-auto mt-3 flex w-[10rem] justify-between">
          <div className="h-14 w-10 rounded-md border" style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)' }} />
          <div className="h-14 w-10 rounded-md border" style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)' }} />
        </div>
      </motion.div>
    </motion.div>
  );
}
