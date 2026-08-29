'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { RobotTarget } from '@/components/robot-game/RobotTarget';
import { useRobotGame } from '@/components/robot-game/RobotGameProvider';

type RobotPose = {
  rotateX: number;
  rotateY: number;
  eyeX: number;
  eyeY: number;
  trackY: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function TrackingRobot() {
  const { isGameMode } = useRobotGame();
  const shouldReduceMotion = useReducedMotion();
  const robotRef = useRef<HTMLDivElement | null>(null);
  const [pose, setPose] = useState<RobotPose>({
    rotateX: 0,
    rotateY: 0,
    eyeX: 0,
    eyeY: 0,
    trackY: 0,
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
        rotateX: clamp(-dy / 34, -14, 14),
        rotateY: clamp(dx / 32, -18, 18),
        eyeX: clamp(dx / 48, -13, 13),
        eyeY: clamp(dy / 58, -8, 8),
        trackY: clamp((event.clientY / window.innerHeight - 0.5) * 150, -70, 70),
      });
    };

    window.addEventListener('pointermove', updatePose, { passive: true });
    return () => window.removeEventListener('pointermove', updatePose);
  }, [shouldReduceMotion]);

  return (
    <div
      aria-hidden={!isGameMode}
      className={`robot-playfield pointer-events-none fixed inset-x-0 top-24 z-40 h-72 ${
        isGameMode ? 'robot-playfield-game block' : 'hidden lg:block'
      }`}
    >
      <div className="robot-swapper robot-swapper-left" ref={robotRef} style={{ perspective: '500px' }}>
        <RobotTarget
          className="h-full w-full"
          label="Hit the left tracking robot"
          targetId="tracking-robot-left"
        >
          <RobotFigure pose={pose} trackMultiplier={1} />
        </RobotTarget>
      </div>
      <div className="robot-swapper robot-swapper-right" style={{ perspective: '500px' }}>
        <RobotTarget
          className="h-full w-full"
          label="Hit the right tracking robot"
          targetId="tracking-robot-right"
        >
          <RobotFigure
            pose={{
              rotateX: pose.rotateX * 0.75,
              rotateY: pose.rotateY * -0.75,
              eyeX: pose.eyeX * -0.75,
              eyeY: pose.eyeY * 0.75,
              trackY: pose.trackY,
            }}
            trackMultiplier={1}
          />
        </RobotTarget>
      </div>
    </div>
  );
}

function RobotFigure({ pose, trackMultiplier }: { pose: RobotPose; trackMultiplier: number }) {
  return (
    <div className="robot-figure-shell" style={{ transform: `translateY(${pose.trackY * trackMultiplier}px)` }}>
      <div className="robot-figure relative h-72 w-52">
      <div
        className="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2"
        style={{ background: 'var(--line-strong)', animation: 'robot-bob 3.4s ease-in-out infinite' }}
      />
      <div
        className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full"
        style={{ background: 'var(--accent)', animation: 'robot-blink 1.8s ease-in-out infinite' }}
      />
      <div
        className="panel absolute left-1/2 top-10 h-32 w-40 -translate-x-1/2 p-4"
        style={{
          transform: `translateX(-50%) rotateX(${pose.rotateX}deg) rotateY(${pose.rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 120ms ease-out',
          animation: 'robot-bob 3.4s ease-in-out infinite',
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          {[0, 1].map((eye) => (
            <div
              className="h-16 overflow-hidden rounded-md border"
              key={eye}
              style={{
                borderColor: 'color-mix(in srgb, var(--accent) 42%, var(--line))',
                background: 'var(--bg-muted)',
                boxShadow: 'inset 0 0 20px color-mix(in srgb, var(--accent) 16%, transparent)',
              }}
            >
              <span
                className="block h-8 w-8 rounded-full"
                style={{
                  background: 'var(--accent)',
                  boxShadow: '0 0 18px var(--accent), 0 0 34px color-mix(in srgb, var(--accent) 45%, transparent)',
                  transform: `translate(${pose.eyeX + 20}px, ${pose.eyeY + 16}px)`,
                  transition: 'transform 80ms ease-out',
                }}
              />
            </div>
          ))}
        </div>
        <div className="mx-auto mt-6 h-2 w-16 rounded-sm" style={{ background: 'var(--accent)' }} />
      </div>

      <div
        className="robot-arm robot-arm-left absolute left-4 top-[10.8rem] h-24 w-7 rounded-md border"
        style={{
          borderColor: 'var(--line)',
          background: 'var(--bg-muted)',
          transformOrigin: 'top center',
        }}
      />
      <div
        className="robot-arm robot-arm-right absolute right-4 top-[10.8rem] h-24 w-7 rounded-md border"
        style={{
          borderColor: 'var(--line)',
          background: 'var(--bg-muted)',
          transformOrigin: 'top center',
        }}
      />
      <div
        className="absolute left-1/2 top-[10.8rem] h-24 w-24 -translate-x-1/2 rounded-md border p-3"
        style={{
          borderColor: 'var(--line)',
          background: 'var(--bg-muted)',
          transform: `translateX(-50%) rotateY(${pose.rotateY * 0.25}deg)`,
          transition: 'transform 120ms ease-out',
          animation: 'robot-bob 3.4s ease-in-out infinite 90ms',
        }}
      >
        <div className="h-1.5 w-full rounded-sm" style={{ background: 'var(--line-strong)' }} />
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {[0, 1, 2, 3, 4, 5].map((light) => (
            <span
              className="h-1.5 rounded-sm"
              key={light}
              style={{
                background: light % 2 === 0 ? 'var(--accent)' : 'var(--line-strong)',
                opacity: light % 2 === 0 ? 0.9 : 0.55,
              }}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-[4.6rem] h-14 w-7 rounded-md border" style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)', animation: 'robot-step-left 2.9s ease-in-out infinite' }} />
      <div className="absolute bottom-0 right-[4.6rem] h-14 w-7 rounded-md border" style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)', animation: 'robot-step-right 2.9s ease-in-out infinite' }} />
      </div>
    </div>
  );
}
