'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { MotionConfig } from 'framer-motion';
import {
  FINAL_ROBOT_GAME_HITS,
  getUnlockedSectionIds,
  ROBOT_GAME_MILESTONES,
  ROBOT_GAME_PROGRESS_KEY,
  ROBOT_GAME_UNLOCKS_KEY,
  type RobotGameMilestone,
} from './gameConfig';

export type RobotGameNotification = {
  id: string;
  title: string;
  message: string;
};

type RobotGameContextValue = {
  hits: number;
  isGameMode: boolean;
  isComplete: boolean;
  nextMilestone: RobotGameMilestone | null;
  notification: RobotGameNotification | null;
  remainingToNext: number;
  unlockedSectionIds: string[];
  exitGame: () => void;
  registerHit: (targetId: string) => void;
  resetProgress: () => void;
  startGame: () => void;
};

const RobotGameContext = createContext<RobotGameContextValue | null>(null);

function readStoredProgress() {
  try {
    const rawHits = Number.parseInt(localStorage.getItem(ROBOT_GAME_PROGRESS_KEY) ?? '0', 10);
    const validHits = Number.isFinite(rawHits) && rawHits > 0 ? rawHits : 0;
    const rawSections = JSON.parse(localStorage.getItem(ROBOT_GAME_UNLOCKS_KEY) ?? '[]');
    const storedSections = Array.isArray(rawSections)
      ? rawSections.filter((section): section is string => typeof section === 'string')
      : [];
    const storedMilestoneHits = ROBOT_GAME_MILESTONES.reduce(
      (highestHits, milestone) =>
        storedSections.includes(milestone.id) ? Math.max(highestHits, milestone.hits) : highestHits,
      0,
    );

    return Math.max(validHits, storedMilestoneHits);
  } catch {
    return 0;
  }
}

export function RobotGameProvider({ children }: { children: ReactNode }) {
  const [hits, setHits] = useState(0);
  const hitsRef = useRef(0);
  const [isGameMode, setIsGameMode] = useState(false);
  const [hasLoadedProgress, setHasLoadedProgress] = useState(false);
  const [notification, setNotification] = useState<RobotGameNotification | null>(null);
  const notificationTimer = useRef<number | null>(null);

  const showNotification = useCallback((nextNotification: RobotGameNotification) => {
    setNotification(nextNotification);

    if (notificationTimer.current) {
      window.clearTimeout(notificationTimer.current);
    }

    notificationTimer.current = window.setTimeout(() => setNotification(null), 2800);
  }, []);

  useEffect(() => {
    const storedHits = readStoredProgress();
    hitsRef.current = storedHits;
    setHits(storedHits);
    setHasLoadedProgress(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedProgress) return;

    try {
      localStorage.setItem(ROBOT_GAME_PROGRESS_KEY, String(hits));
      localStorage.setItem(
        ROBOT_GAME_UNLOCKS_KEY,
        JSON.stringify(getUnlockedSectionIds(hits)),
      );
    } catch {
      // Storage may be unavailable in private browsing; gameplay still works in memory.
    }
  }, [hasLoadedProgress, hits]);

  useEffect(() => {
    document.documentElement.classList.toggle('robot-game-mode', isGameMode);
    return () => document.documentElement.classList.remove('robot-game-mode');
  }, [isGameMode]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsGameMode(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    return () => {
      if (notificationTimer.current) window.clearTimeout(notificationTimer.current);
    };
  }, []);

  const startGame = useCallback(() => {
    setIsGameMode(true);
    showNotification({
      id: `game-start-${Date.now()}`,
      title: hitsRef.current > 0 ? 'Progress restored' : 'Robot game online',
      message:
        hitsRef.current > 0
          ? `${hitsRef.current} hits restored. Keep targeting the robots.`
          : 'Hit the moving robots to unlock the portfolio.',
    });
  }, [showNotification]);

  const exitGame = useCallback(() => setIsGameMode(false), []);

  const registerHit = useCallback(
    (targetId: string) => {
      if (!isGameMode) return;

      const previousHits = hitsRef.current;
      const nextHits = previousHits + 1;
      hitsRef.current = nextHits;
      setHits(nextHits);

      const unlockedMilestone = ROBOT_GAME_MILESTONES.find(
        (milestone) => previousHits < milestone.hits && nextHits >= milestone.hits,
      );

      if (unlockedMilestone) {
        showNotification({
          id: `${targetId}-${unlockedMilestone.id}-${nextHits}`,
          title: `${unlockedMilestone.label} unlocked!`,
          message: unlockedMilestone.message,
        });
      }
    },
    [isGameMode, showNotification],
  );

  const resetProgress = useCallback(() => {
    hitsRef.current = 0;
    setHits(0);

    try {
      localStorage.setItem(ROBOT_GAME_PROGRESS_KEY, '0');
      localStorage.setItem(ROBOT_GAME_UNLOCKS_KEY, '[]');
    } catch {
      // Keep the in-memory reset when storage is unavailable.
    }

    showNotification({
      id: `game-reset-${Date.now()}`,
      title: 'Progress reset',
      message: 'All robot-game milestones are locked again.',
    });
  }, [showNotification]);

  const unlockedSectionIds = useMemo(() => getUnlockedSectionIds(hits), [hits]);
  const nextMilestone =
    ROBOT_GAME_MILESTONES.find((milestone) => hits < milestone.hits) ?? null;
  const remainingToNext = nextMilestone ? Math.max(0, nextMilestone.hits - hits) : 0;

  const value = useMemo<RobotGameContextValue>(
    () => ({
      hits,
      isGameMode,
      isComplete: hits >= FINAL_ROBOT_GAME_HITS,
      nextMilestone,
      notification,
      remainingToNext,
      unlockedSectionIds,
      exitGame,
      registerHit,
      resetProgress,
      startGame,
    }),
    [
      exitGame,
      hits,
      isGameMode,
      nextMilestone,
      notification,
      registerHit,
      remainingToNext,
      resetProgress,
      startGame,
      unlockedSectionIds,
    ],
  );

  return (
    <MotionConfig reducedMotion="user">
      <RobotGameContext.Provider value={value}>{children}</RobotGameContext.Provider>
    </MotionConfig>
  );
}

export function useRobotGame() {
  const context = useContext(RobotGameContext);
  if (!context) throw new Error('useRobotGame must be used inside RobotGameProvider');
  return context;
}
