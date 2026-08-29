'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { RobotTarget } from '@/components/robot-game/RobotTarget';

type RobotPose = {
  rotateX: number;
  rotateY: number;
  eyeX: number;
  eyeY: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function NavRobot({ targetId = 'navigation-robot' }: { targetId?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const robotRef = useRef<HTMLDivElement | null>(null);
  const bounceTimer = useRef<number | null>(null);
  const [isBouncing, setIsBouncing] = useState(false);
  const [pose, setPose] = useState<RobotPose>({
    rotateX: 0,
    rotateY: 0,
    eyeX: 0,
    eyeY: 0,
  });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const updatePose = (event: PointerEvent) => {
      const robot = robotRef.current;
      if (!robot) return;

      const rect = robot.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;

      setPose({
        rotateX: clamp(-dy / 30, -12, 12),
        rotateY: clamp(dx / 28, -16, 16),
        eyeX: clamp(dx / 62, -4.5, 4.5),
        eyeY: clamp(dy / 70, -3, 3),
      });
    };

    window.addEventListener('pointermove', updatePose, { passive: true });
    return () => window.removeEventListener('pointermove', updatePose);
  }, [shouldReduceMotion]);

  const triggerBounce = () => {
    setIsBouncing(false);

    window.requestAnimationFrame(() => {
      setIsBouncing(true);

      if (bounceTimer.current) {
        window.clearTimeout(bounceTimer.current);
      }

      bounceTimer.current = window.setTimeout(() => setIsBouncing(false), 560);
    });
  };

  useEffect(() => {
    return () => {
      if (bounceTimer.current) {
        window.clearTimeout(bounceTimer.current);
      }
    };
  }, []);

  return (
    <RobotTarget className="shrink-0" label="Hit the navigation robot" targetId={targetId}>
      <div
        aria-label="Mouse-tracking robot"
        className={`nav-robot relative block h-10 w-10 md:h-16 md:w-16${isBouncing ? ' nav-robot-bounce' : ''}`}
        data-cursor="hover"
        onPointerDown={triggerBounce}
        ref={robotRef}
        role="img"
        style={{ perspective: '420px' }}
      >
      <span
        className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full md:h-3 md:w-3"
        style={{ background: 'var(--accent)', animation: 'robot-blink 1.8s ease-in-out infinite' }}
      />
      <span
        className="absolute left-1/2 top-1.5 h-3 w-px -translate-x-1/2 md:top-2 md:h-4"
        style={{ background: 'var(--line-strong)' }}
      />
      <div
        className="absolute left-1/2 top-4 h-5 w-8 -translate-x-1/2 rounded-md border p-1 md:top-5 md:h-8 md:w-11 md:p-1.5"
        style={{
          borderColor: 'var(--line)',
          background: 'var(--bg-elevated)',
          transform: `translateX(-50%) rotateX(${pose.rotateX}deg) rotateY(${pose.rotateY}deg)`,
          transition: 'transform 100ms ease-out',
        }}
      >
        <div className="grid grid-cols-2 gap-1 md:gap-1.5">
          {[0, 1].map((eye) => (
            <span
              className="h-2.5 overflow-hidden rounded-[3px] border md:h-4"
              key={eye}
              style={{
                background: 'var(--bg-muted)',
                borderColor: 'color-mix(in srgb, var(--accent) 34%, var(--line))',
                boxShadow: 'inset 0 0 10px color-mix(in srgb, var(--accent) 16%, transparent)',
              }}
            >
              <span
                className="block h-1.5 w-1.5 rounded-full md:h-2.5 md:w-2.5"
                style={{
                  background: 'var(--accent)',
                  boxShadow: '0 0 10px var(--accent)',
                  transform: `translate(${pose.eyeX + 3}px, ${pose.eyeY + 3}px)`,
                  transition: 'transform 80ms ease-out',
                }}
              />
            </span>
          ))}
        </div>
        <span className="mx-auto mt-1 block h-0.5 w-4 rounded-sm md:mt-1.5 md:w-5" style={{ background: 'var(--accent)' }} />
      </div>
      <div
        className="absolute bottom-0 left-1/2 h-3.5 w-6 -translate-x-1/2 rounded-md border md:h-5 md:w-8"
        style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)', animation: 'robot-bob 3s ease-in-out infinite' }}
      />
      <span className="absolute bottom-1 left-1.5 h-4 w-1.5 rounded-sm border md:left-2 md:h-6 md:w-2" style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)', animation: 'robot-wave-left 2.4s ease-in-out infinite' }} />
      <span className="absolute bottom-1 right-1.5 h-4 w-1.5 rounded-sm border md:right-2 md:h-6 md:w-2" style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)', animation: 'robot-wave-right 2.4s ease-in-out infinite' }} />
      </div>
    </RobotTarget>
  );
}
