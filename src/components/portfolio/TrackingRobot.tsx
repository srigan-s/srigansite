'use client';

import { useEffect, useRef, useState } from 'react';

type RobotPose = {
  rotateX: number;
  rotateY: number;
  eyeX: number;
  eyeY: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function TrackingRobot() {
  const robotRef = useRef<HTMLDivElement | null>(null);
  const [pose, setPose] = useState<RobotPose>({
    rotateX: 0,
    rotateY: 0,
    eyeX: 0,
    eyeY: 0,
  });

  useEffect(() => {
    const updatePose = (event: PointerEvent) => {
      const robot = robotRef.current;
      if (!robot) return;

      const rect = robot.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;

      setPose({
        rotateX: clamp(-dy / 36, -12, 12),
        rotateY: clamp(dx / 34, -16, 16),
        eyeX: clamp(dx / 70, -5, 5),
        eyeY: clamp(dy / 90, -3, 3),
      });
    };

    window.addEventListener('pointermove', updatePose, { passive: true });
    return () => window.removeEventListener('pointermove', updatePose);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-5 top-24 z-40 hidden h-44 w-32 md:block"
      ref={robotRef}
      style={{ perspective: '500px' }}
    >
      <div
        className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2"
        style={{ background: 'var(--line-strong)', animation: 'robot-bob 3.4s ease-in-out infinite' }}
      />
      <div
        className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full"
        style={{ background: 'var(--accent)', animation: 'robot-blink 1.8s ease-in-out infinite' }}
      />
      <div
        className="panel absolute left-1/2 top-7 h-20 w-24 -translate-x-1/2 p-3"
        style={{
          transform: `translateX(-50%) rotateX(${pose.rotateX}deg) rotateY(${pose.rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 120ms ease-out',
          animation: 'robot-bob 3.4s ease-in-out infinite',
        }}
      >
        <div className="grid grid-cols-2 gap-3">
          {[0, 1].map((eye) => (
            <div
              className="h-8 rounded-md border"
              key={eye}
              style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)' }}
            >
              <span
                className="block h-2.5 w-2.5 rounded-full"
                style={{
                  background: 'var(--accent)',
                  transform: `translate(${pose.eyeX + 8}px, ${pose.eyeY + 10}px)`,
                  transition: 'transform 80ms ease-out',
                }}
              />
            </div>
          ))}
        </div>
        <div className="mx-auto mt-4 h-1.5 w-10 rounded-sm" style={{ background: 'var(--accent)' }} />
      </div>

      <div
        className="absolute left-1 top-[6.6rem] h-16 w-5 rounded-md border"
        style={{
          borderColor: 'var(--line)',
          background: 'var(--bg-muted)',
          transformOrigin: 'top center',
          animation: 'robot-wave-left 2.7s ease-in-out infinite',
        }}
      />
      <div
        className="absolute right-1 top-[6.6rem] h-16 w-5 rounded-md border"
        style={{
          borderColor: 'var(--line)',
          background: 'var(--bg-muted)',
          transformOrigin: 'top center',
          animation: 'robot-wave-right 2.7s ease-in-out infinite',
        }}
      />
      <div
        className="absolute left-1/2 top-[6.7rem] h-16 w-16 -translate-x-1/2 rounded-md border p-2"
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
      <div className="absolute bottom-0 left-[2.65rem] h-10 w-5 rounded-md border" style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)', animation: 'robot-step-left 2.9s ease-in-out infinite' }} />
      <div className="absolute bottom-0 right-[2.65rem] h-10 w-5 rounded-md border" style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)', animation: 'robot-step-right 2.9s ease-in-out infinite' }} />
    </div>
  );
}
