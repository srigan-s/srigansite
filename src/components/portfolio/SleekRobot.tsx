'use client';

type SleekRobotPose = {
  eyeX?: number;
  eyeY?: number;
  rotateX?: number;
  rotateY?: number;
};

type SleekRobotProps = {
  className?: string;
  pose?: SleekRobotPose;
  variant?: 'intro' | 'nav' | 'reward' | 'side';
};

const eyeDots = Array.from({ length: 6 });

export function SleekRobot({ className = '', pose = {}, variant = 'side' }: SleekRobotProps) {
  const { eyeX = 0, eyeY = 0, rotateX = 0, rotateY = 0 } = pose;
  const eyeTravel = variant === 'nav' ? 0.32 : 0.42;

  return (
    <div aria-hidden="true" className={`sleek-robot sleek-robot-${variant} ${className}`.trim()}>
      <span className="sleek-robot-ground-shadow" />

      <div
        className="sleek-robot-head-axis"
        style={{
          transform: `translateX(-50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        <div className="sleek-robot-head">
          <div className="sleek-robot-visor">
            <span className="sleek-robot-visor-shine" />
            <span
              className="sleek-robot-eye-bank"
              style={{
                transform: `translate3d(calc(-50% + ${eyeX * eyeTravel}px), ${eyeY * eyeTravel}px, 0)`,
              }}
            >
              {[0, 1].map((eye) => (
                <span className="sleek-robot-eye-grid" key={eye}>
                  {eyeDots.map((_, dot) => (
                    <i key={dot} />
                  ))}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>

      <span className="sleek-robot-neck" />
      <span className="sleek-robot-collar" />

      <div className="sleek-robot-torso">
        <span className="sleek-robot-chest-sheen" />
        <span className="sleek-robot-chest-seam" />
        <span className="sleek-robot-chest-led" />
      </div>

      <span className="sleek-robot-shoulder sleek-robot-shoulder-left" />
      <span className="sleek-robot-shoulder sleek-robot-shoulder-right" />

      <div className="sleek-robot-arm sleek-robot-arm-left">
        <span className="sleek-robot-upper-arm" />
        <span className="sleek-robot-elbow" />
        <span className="sleek-robot-forearm" />
        <span className="sleek-robot-hand" />
      </div>
      <div className="sleek-robot-arm sleek-robot-arm-right">
        <span className="sleek-robot-upper-arm" />
        <span className="sleek-robot-elbow" />
        <span className="sleek-robot-forearm" />
        <span className="sleek-robot-hand" />
      </div>

      <div className="sleek-robot-pelvis">
        <span />
      </div>
      <div className="sleek-robot-leg sleek-robot-leg-left">
        <span className="sleek-robot-knee" />
        <span className="sleek-robot-shin" />
        <span className="sleek-robot-foot" />
      </div>
      <div className="sleek-robot-leg sleek-robot-leg-right">
        <span className="sleek-robot-knee" />
        <span className="sleek-robot-shin" />
        <span className="sleek-robot-foot" />
      </div>
    </div>
  );
}
