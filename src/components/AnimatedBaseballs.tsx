import React from 'react';

const AnimatedBaseballs = () => {
  const baseballs = [
    { top: '8%', left: '6%', size: 'text-3xl', duration: '9s', delay: '0s' },
    { top: '18%', right: '10%', size: 'text-4xl', duration: '11s', delay: '1.2s' },
    { top: '34%', left: '12%', size: 'text-2xl', duration: '8s', delay: '0.8s' },
    { top: '48%', right: '8%', size: 'text-3xl', duration: '10s', delay: '2s' },
    { top: '62%', left: '4%', size: 'text-4xl', duration: '12s', delay: '0.4s' },
    { top: '78%', right: '14%', size: 'text-3xl', duration: '9.5s', delay: '1.7s' },
    { top: '84%', left: '18%', size: 'text-2xl', duration: '8.5s', delay: '2.5s' },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,212,106,0.08),transparent_60%)]" />

      {baseballs.map((ball, index) => (
        <div
          key={index}
          className={`absolute ${ball.size} text-white/10`}
          style={{
            top: ball.top,
            left: ball.left,
            right: ball.right,
            animation: `float-drift ${ball.duration} ease-in-out ${ball.delay} infinite`,
          }}
        >
          ⚾
        </div>
      ))}

      <div
        className="absolute left-[8%] top-[14%] h-64 w-64 rounded-full border border-white/8"
        style={{ animation: 'slow-spin 28s linear infinite' }}
      />
      <div
        className="absolute right-[6%] top-[28%] h-40 w-40 rounded-full border border-[color:var(--accent)]/20"
        style={{ animation: 'slow-spin 18s linear infinite reverse' }}
      />
      <div
        className="absolute bottom-[16%] left-[14%] h-32 w-32 rounded-full bg-[color:var(--accent)]/12 blur-3xl"
        style={{ animation: 'float-drift 10s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-[8%] right-[10%] h-44 w-44 rounded-full bg-white/8 blur-3xl"
        style={{ animation: 'float-drift 12s ease-in-out infinite' }}
      />
    </div>
  );
};

export default AnimatedBaseballs;
