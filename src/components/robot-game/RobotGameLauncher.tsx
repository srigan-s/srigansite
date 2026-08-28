'use client';

import { Crosshair } from 'lucide-react';
import { useRobotGame } from './RobotGameProvider';

export function RobotGameLauncher() {
  const { hits, isGameMode, startGame } = useRobotGame();
  if (isGameMode) return null;

  return (
    <button
      aria-label={hits > 0 ? `Resume robot game with ${hits} hits` : 'Play robot game'}
      className="link-button"
      data-cursor="hover"
      onClick={startGame}
      type="button"
    >
      <Crosshair className="h-4 w-4" />
      {hits > 0 ? 'Resume Robot Game' : 'Play Robot Game'}
    </button>
  );
}
