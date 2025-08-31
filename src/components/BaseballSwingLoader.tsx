import React, { useEffect, useState } from "react";

const BaseballSwingLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<
    "swing" | "hit" | "explosion" | "whiteout" | "complete"
  >("swing");

  useEffect(() => {
    const hitTimer = setTimeout(() => setPhase("hit"), 1000); // Faster swing
    const explosionTimer = setTimeout(() => setPhase("explosion"), 1300); // Quicker explosion after hit
    const whiteoutTimer = setTimeout(() => setPhase("whiteout"), 1900); // Fade out baseball
    const completeTimer = setTimeout(() => {
      setPhase("complete");
      setTimeout(onComplete, 500);
    }, 2500); // Total animation slightly faster

    return () => {
      clearTimeout(hitTimer);
      clearTimeout(explosionTimer);
      clearTimeout(whiteoutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 flex items-center justify-center transition-opacity duration-500 ${
        phase === "complete" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 animate-pulse-background" />

        {/* Bat */}
        <div
          className={`absolute origin-bottom transition-all duration-700 ease-out ${
            phase === "swing"
              ? "rotate-[-60deg] translate-x-[-20vw] translate-y-[10vh] scale-150" // Larger, more pronounced swing start
              : "rotate-[90deg] translate-x-[25vw] translate-y-[-15vh] scale-150" // Larger, more pronounced swing end
          }`}
        >
          <div className="w-8 h-80 bg-gradient-to-t from-amber-800 to-amber-600 rounded-full shadow-xl relative">
            <div className="absolute bottom-0 w-10 h-20 bg-amber-900 rounded-full -translate-x-1.5"></div>
          </div>
        </div>

        {/* Baseball */}
        <div
          className={`absolute transition-all ease-out ${
            phase === "swing"
              ? "translate-x-[-10vw] scale-125 duration-500" // Larger baseball
              : phase === "hit"
              ? "translate-x-[20vw] translate-y-[-10vh] scale-110 duration-200"
              : phase === "explosion"
              ? "scale-[20] opacity-0 blur-md duration-600" // Larger blur, faster fade out
              : phase === "whiteout"
              ? "scale-[1] opacity-0 duration-200"
              : "opacity-0"
          }`}
        >
          <div
            className={`w-14 h-14 rounded-full shadow-2xl relative bg-white`} // Larger baseball
          >
            {phase !== "whiteout" && (
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 32 32">
                <path
                  d="M8 12 Q16 8 24 12 Q16 16 8 12"
                  stroke="#dc2626"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M8 20 Q16 16 24 20 Q16 24 8 20"
                  stroke="#dc2626"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Explosion burst */}
        {phase === "explosion" && (
          <>
            {/* Ripple waves */}
            <div className="absolute inset-0 flex items-center justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border-8 border-green-300 opacity-60 animate-[ripple_1.8s_ease-out_forwards]" // More ripples, thicker border, longer animation
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    width: `${50 + i * 20}px`, // Gradually larger ripples
                    height: `${50 + i * 20}px`,
                  }}
                />
              ))}
            </div>

            {/* Explosion particles */}
            <div className="absolute inset-0 flex items-center justify-center">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-yellow-300 rounded-full opacity-90 animate-[burst_1.2s_ease-out_forwards]" // More particles, slightly larger, faster animation
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${i * (360 / 50)}deg) translate(0, -350px)`, // Further particle spread
                  }}
                />
              ))}
            </div>
             {/* Expanding color burst behind particles */}
            <div className="absolute w-40 h-40 bg-orange-400 rounded-full opacity-70 animate-[expandAndFade_0.8s_ease-out_forwards]" />
          </>
        )}

        {/* Text (before hit) */}
        {(phase === "swing" || phase === "hit") && ( // Keep text visible a bit longer
          <div className="absolute bottom-1/4 text-center">
            <div className="text-8xl font-extrabold text-white mb-6 animate-text-pop-in"> {/* Larger, more dynamic text */}
              Batter Up!
            </div>
            <div className="text-2xl text-green-200 animate-pulse-strong"> {/* Larger, stronger pulse */}
              Swinging for the fences...
            </div>
          </div>
        )}
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes burst {
          to { transform: rotate(var(--angle)) translate(0, -800px); opacity: 0; } /* Particles fly further */
        }
        @keyframes ripple {
          from { transform: scale(0.1); opacity: 0.8; }
          to { transform: scale(5); opacity: 0; } /* Ripples expand much wider */
        }
        @keyframes expandAndFade {
          0% { transform: scale(0); opacity: 0.7; }
          100% { transform: scale(5); opacity: 0; } /* New: Color burst for explosion */
        }
        @keyframes pulse-background {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes text-pop-in {
          0% { transform: scale(0.5) translateY(50px); opacity: 0; }
          50% { transform: scale(1.2) translateY(-10px); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes pulse-strong {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-pulse-background {
            background-size: 200% 200%;
            animation: pulse-background 10s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default BaseballSwingLoader;