'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Bot, LockKeyhole } from 'lucide-react';
import type { ReactNode } from 'react';
import { getMilestone, type RobotGameMilestoneId } from './gameConfig';
import { useRobotGame } from './RobotGameProvider';

export function UnlockableSection({
  children,
  milestoneId,
}: {
  children: ReactNode;
  milestoneId: RobotGameMilestoneId;
}) {
  const { hits, isGameMode } = useRobotGame();
  const milestone = getMilestone(milestoneId);
  const isLocked = isGameMode && hits < milestone.hits;
  const remainingHits = Math.max(0, milestone.hits - hits);

  return (
    <motion.div
      className={`unlockable-section relative ${isLocked ? 'unlockable-section-locked' : ''}`}
      data-unlock-section={milestone.id}
      layout
      transition={{ layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
    >
      <div aria-hidden={isLocked || undefined} className="unlockable-section-content" inert={isLocked || undefined}>
        {children}
      </div>

      <AnimatePresence>
        {isLocked ? (
          <motion.div
            aria-label={`${milestone.label} locked. Hit ${remainingHits} more ${remainingHits === 1 ? 'robot' : 'robots'} to unlock.`}
            className="unlockable-section-overlay absolute inset-0 z-20 flex items-center justify-center px-5 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            role="region"
            transition={{ duration: 0.3 }}
          >
            <div className="panel max-w-md p-5 text-center md:p-6">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border hairline">
                <LockKeyhole className="h-5 w-5" style={{ color: 'var(--accent)' }} />
              </span>
              <p className="eyebrow mt-5">Robot lock · {milestone.hits} hits</p>
              <h2 className="mt-2 text-xl font-semibold">{milestone.label} is encrypted</h2>
              <p className="mt-3 text-sm leading-6 muted-copy">
                Hit {remainingHits} more {remainingHits === 1 ? 'robot' : 'robots'} to unlock this section.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs muted-copy">
                <Bot className="h-4 w-4" />
                Exit game mode anytime to browse normally.
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
