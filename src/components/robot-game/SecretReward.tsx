'use client';

import { Bot, Check, Trophy } from 'lucide-react';
import { RobotVisual } from '@/components/portfolio/RobotVisual';
import { FINAL_ROBOT_GAME_HITS } from './gameConfig';
import { useRobotGame } from './RobotGameProvider';
import { UnlockableSection } from './UnlockableSection';

export function SecretReward() {
  const { hits, isGameMode } = useRobotGame();
  const isUnlocked = hits >= FINAL_ROBOT_GAME_HITS;

  if (!isGameMode && !isUnlocked) return null;

  return (
    <UnlockableSection milestoneId="secret">
      <section className="section-shell" id="robot-achievement">
        <div className="content-shell">
          <div className="panel overflow-hidden p-5 md:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" style={{ color: 'var(--accent)' }} />
                  <p className="eyebrow">Secret achievement</p>
                </div>
                <h2 className="section-title mt-4">Website 100% unlocked.</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 muted-copy md:text-base">
                  You found every robot override and unlocked the full portfolio. Consider this your
                  certified proof of excellent target acquisition and unusually thorough browsing.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="quiet-panel inline-flex items-center gap-2 px-3 py-2 text-xs">
                    <Check className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                    {FINAL_ROBOT_GAME_HITS}/{FINAL_ROBOT_GAME_HITS} robot hits
                  </span>
                  <span className="quiet-panel inline-flex items-center gap-2 px-3 py-2 text-xs">
                    <Bot className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                    All systems online
                  </span>
                </div>
              </div>
              <div className="max-h-[24rem] overflow-hidden">
                <RobotVisual />
              </div>
            </div>
          </div>
        </div>
      </section>
    </UnlockableSection>
  );
}
