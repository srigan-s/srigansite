'use client';

import { useEffect, useRef, useState } from 'react';

type RobotPose = {
  rotateX: number;
  rotateY: number;
  eyeX: number;
  eyeY: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function NavRobot() {
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
        rotateX: clamp(-dy / 30, -12, 12),
        rotateY: clamp(dx / 28, -16, 16),
        eyeX: clamp(dx / 62, -4.5, 4.5),
        eyeY: clamp(dy / 70, -3, 3),
      });
    };

    window.addEventListener('pointermove', updatePose, { passive: true });
    return () => window.removeEventListener('pointermove', updatePose);
  }, []);

  return (
    <div
      aria-label="Mouse-tracking robot"
      className="relative hidden h-16 w-16 md:block"
      data-cursor="hover"
      ref={robotRef}
      role="img"
      style={{ perspective: '420px' }}
    >
      <span
        className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full"
        style={{ background: 'var(--accent)', animation: 'robot-blink 1.8s ease-in-out infinite' }}
      />
      <span
        className="absolute left-1/2 top-2 h-4 w-px -translate-x-1/2"
        style={{ background: 'var(--line-strong)' }}
      />
      <div
        className="absolute left-1/2 top-5 h-8 w-11 -translate-x-1/2 rounded-md border p-1.5"
        style={{
          borderColor: 'var(--line)',
          background: 'var(--bg-elevated)',
          transform: `translateX(-50%) rotateX(${pose.rotateX}deg) rotateY(${pose.rotateY}deg)`,
          transition: 'transform 100ms ease-out',
        }}
      >
        <div className="grid grid-cols-2 gap-1.5">
          {[0, 1].map((eye) => (
            <span
              className="h-4 overflow-hidden rounded-[3px] border"
              key={eye}
              style={{
                background: 'var(--bg-muted)',
                borderColor: 'color-mix(in srgb, var(--accent) 34%, var(--line))',
                boxShadow: 'inset 0 0 10px color-mix(in srgb, var(--accent) 16%, transparent)',
              }}
            >
              <span
                className="block h-2.5 w-2.5 rounded-full"
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
        <span className="mx-auto mt-1.5 block h-0.5 w-5 rounded-sm" style={{ background: 'var(--accent)' }} />
      </div>
      <div
        className="absolute bottom-0 left-1/2 h-5 w-8 -translate-x-1/2 rounded-md border"
        style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)', animation: 'robot-bob 3s ease-in-out infinite' }}
      />
      <span className="absolute bottom-1 left-2 h-6 w-2 rounded-sm border" style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)', animation: 'robot-wave-left 2.4s ease-in-out infinite' }} />
      <span className="absolute bottom-1 right-2 h-6 w-2 rounded-sm border" style={{ borderColor: 'var(--line)', background: 'var(--bg-muted)', animation: 'robot-wave-right 2.4s ease-in-out infinite' }} />
    </div>
  );
}
