import React, { useEffect, useState } from 'react';

const BaseballSwingLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [animationPhase, setAnimationPhase] = useState<'swing' | 'impact' | 'complete'>('swing');

  useEffect(() => {
    // Swing phase lasts 1.5 seconds
    const swingTimer = setTimeout(() => {
      setAnimationPhase('impact');
    }, 1500);

    // Impact phase lasts 0.5 seconds
    const impactTimer = setTimeout(() => {
      setAnimationPhase('complete');
      // Call onComplete after a brief delay to allow fade out
      setTimeout(onComplete, 300);
    }, 2000);

    return () => {
      clearTimeout(swingTimer);
      clearTimeout(impactTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 flex items-center justify-center transition-opacity duration-300 ${
      animationPhase === 'complete' ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 border-2 border-green-400 rotate-45 rounded-lg transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-green-300 rotate-45 rounded-lg transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Main Animation Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Baseball Bat */}
        <div className={`absolute transition-all duration-1500 ease-out ${
          animationPhase === 'swing' 
            ? 'transform rotate-[-45deg] translate-x-[-100px] translate-y-[50px]' 
            : 'transform rotate-[45deg] translate-x-[100px] translate-y-[-50px]'
        }`}>
          <div className="w-2 h-32 bg-gradient-to-t from-amber-800 to-amber-600 rounded-full shadow-lg origin-bottom">
            {/* Bat Handle */}
            <div className="absolute bottom-0 w-3 h-8 bg-amber-900 rounded-full transform -translate-x-0.5"></div>
            {/* Bat Grip */}
            <div className="absolute bottom-2 w-2 h-6 bg-black/30 rounded-full"></div>
          </div>
        </div>

        {/* Baseball */}
        <div className={`absolute transition-all duration-500 ${
          animationPhase === 'swing' 
            ? 'transform translate-x-[-50px] translate-y-[0px] scale-100' 
            : animationPhase === 'impact'
            ? 'transform translate-x-[200px] translate-y-[-100px] scale-75'
            : 'transform translate-x-[400px] translate-y-[-200px] scale-50 opacity-0'
        }`}>
          <div className="relative">
            <div className="w-8 h-8 bg-white rounded-full shadow-lg">
              {/* Baseball stitching */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 32 32">
                <path 
                  d="M8 12 Q16 8 24 12 Q16 16 8 12" 
                  stroke="#dc2626" 
                  strokeWidth="1" 
                  fill="none"
                />
                <path 
                  d="M8 20 Q16 16 24 20 Q16 24 8 20" 
                  stroke="#dc2626" 
                  strokeWidth="1" 
                  fill="none"
                />
              </svg>
            </div>
            
            {/* Impact Effect */}
            {animationPhase === 'impact' && (
              <div className="absolute inset-0 animate-ping">
                <div className="w-8 h-8 bg-yellow-400/50 rounded-full"></div>
              </div>
            )}
          </div>
        </div>

        {/* Impact Burst Effect */}
        {animationPhase === 'impact' && (
          <div className="absolute">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-8 bg-gradient-to-t from-yellow-400 to-transparent animate-pulse"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-20px)`,
                  transformOrigin: 'bottom center'
                }}
              />
            ))}
          </div>
        )}

        {/* Loading Text */}
        <div className="absolute bottom-1/4 text-center">
          <div className={`text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-500 ${
            animationPhase === 'swing' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="text-green-400">⚾</span> Welcome
          </div>
          
          <div className={`text-lg text-green-200 transition-all duration-500 delay-300 ${
            animationPhase === 'swing' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Stepping up to the plate...
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Particle Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-green-400 rounded-full transition-all duration-2000 ${
                animationPhase !== 'swing' ? 'animate-ping' : ''
              }`}
              style={{
                left: `${20 + (i * 5)}%`,
                top: `${30 + (i * 3)}%`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaseballSwingLoader;