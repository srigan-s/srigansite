import React, { useEffect, useState } from 'react';

const AnimatedBaseballs = () => {
  const [baseballs, setBaseballs] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newBaseballs = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 20
    }));
    setBaseballs(newBaseballs);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {baseballs.map((ball) => (
        <div
          key={ball.id}
          className="absolute text-green-400/10 text-4xl animate-pulse"
          style={{
            left: `${ball.x}%`,
            top: `${ball.y}%`,
            animationDelay: `${ball.delay}s`,
            animationDuration: '8s'
          }}
        >
          ⚾
        </div>
      ))}
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-emerald-400/20 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-green-300/30 rounded-full animate-ping" style={{ animationDelay: '6s' }}></div>
    </div>
  );
};

export default AnimatedBaseballs;