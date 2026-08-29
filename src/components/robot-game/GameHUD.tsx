'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Crosshair, LogOut, RotateCcw, Trophy } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FINAL_ROBOT_GAME_HITS } from './gameConfig';
import { useRobotGame } from './RobotGameProvider';

export function GameHUD() {
  const pathname = usePathname();
  const {
    exitGame,
    hits,
    isComplete,
    isGameMode,
    nextMilestone,
    remainingToNext,
    resetProgress,
  } = useRobotGame();

  const progress = Math.min(100, (hits / FINAL_ROBOT_GAME_HITS) * 100);

  return (
    <AnimatePresence>
      {isGameMode ? (
        <motion.aside
          aria-label="Robot game status"
          className="game-hud panel fixed bottom-3 right-3 z-[70] w-[min(22rem,calc(100vw-1.5rem))] p-3 md:bottom-5 md:right-5 md:p-4"
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 12 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Crosshair className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                <p className="eyebrow">Robot Game</p>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <motion.strong
                  className="text-2xl font-semibold"
                  key={hits}
                  initial={{ color: 'var(--accent)', scale: 1.2 }}
                  animate={{ color: 'var(--text)', scale: 1 }}
                  transition={{ duration: 0.24 }}
                >
                  {hits}
                </motion.strong>
                <span className="text-xs uppercase muted-copy">robots hit</span>
              </div>
            </div>

            <div className="text-right">
              {isComplete ? (
                <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: 'var(--accent)' }}>
                  <Trophy className="h-4 w-4" />
                  100% UNLOCKED
                </div>
              ) : (
                <>
                  <p className="text-[10px] font-semibold uppercase muted-copy">Next: {nextMilestone?.label}</p>
                  <p className="mt-1 text-xs font-semibold">
                    {remainingToNext} more {remainingToNext === 1 ? 'hit' : 'hits'}
                  </p>
                </>
              )}
            </div>
          </div>

          <div
            aria-label={`${Math.round(progress)}% game progress`}
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={Math.round(progress)}
            className="mt-3 h-1.5 overflow-hidden rounded-full"
            role="progressbar"
            style={{ background: 'var(--line)' }}
          >
            <motion.div
              className="h-full rounded-full"
              animate={{ width: `${progress}%` }}
              style={{ background: 'var(--accent)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>

          {pathname !== '/' ? (
            <Link className="link-button mt-3 min-h-11 w-full" href="/#home">
              <Bot className="h-4 w-4" />
              Return to Robot Targets
            </Link>
          ) : null}

          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              aria-label="Exit robot game"
              className="accent-button min-h-11"
              data-cursor="hover"
              onClick={exitGame}
              type="button"
            >
              <LogOut className="h-4 w-4" />
              Exit Game
            </button>
            <button
              aria-label="Reset robot game progress"
              className="link-button min-h-11"
              data-cursor="hover"
              onClick={resetProgress}
              type="button"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
          </div>
          <p className="mt-2 text-center text-[10px] uppercase muted-copy">Tap robots · Esc exits</p>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
