'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';
import { useRobotGame } from './RobotGameProvider';

export function UnlockNotification() {
  const { notification } = useRobotGame();

  return (
    <div aria-live="polite" aria-atomic="true" className="pointer-events-none fixed inset-x-0 top-24 z-[80] flex justify-center px-4">
      <AnimatePresence mode="wait">
        {notification ? (
          <motion.div
            className="panel flex max-w-md items-start gap-3 p-4"
            initial={{ opacity: 0, scale: 0.94, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            key={notification.id}
            role="status"
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md border hairline">
              <Bot className="h-5 w-5" style={{ color: 'var(--accent)' }} />
              <Sparkles className="absolute -right-1 -top-1 h-3.5 w-3.5" style={{ color: 'var(--accent)' }} />
            </span>
            <div>
              <p className="text-sm font-semibold">{notification.title}</p>
              <p className="mt-1 text-xs leading-5 muted-copy">{notification.message}</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
