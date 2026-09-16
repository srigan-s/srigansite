'use client';

import { Application } from '@splinetool/runtime';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { CircuitSignals } from './CircuitSignals';

const ROBOT_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode';
const landingFacts = [
  {
    label: 'CURRENTLY',
    value: 'Founding Hardware Intern',
    detail: 'MicroAlchemy · Semiconductor equipment',
    position: 'fact-one',
    image: '/microalchemy.png',
    imageAlt: 'MicroAlchemy logo',
  },
  {
    label: 'STUDYING',
    value: 'Electrical Engineering',
    detail: 'University of Waterloo',
    position: 'fact-two',
    image: '/waterloo.png',
    imageAlt: 'University of Waterloo logo',
  },
  {
    label: 'BUILDING',
    value: 'Controls · Embedded · Robotics',
    detail: 'Hardware and software as one system',
    position: 'fact-three',
    image: null,
    imageAlt: '',
  },
  {
    label: 'TOOLKIT',
    value: 'Python · C++ · PCB · CAD',
    detail: 'From prototypes to tested hardware',
    position: 'fact-four',
    image: null,
    imageAlt: '',
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const tapMessages = [
  'tap me to find out more',
  'I help build semiconductor equipment',
  'I study electrical engineering at Waterloo',
  'I build controls, embedded systems, and robots',
  'one more tap to enter Srigan\'s Space',
  'opening Srigan\'s Space...',
];

type AsciiRobotLandingProps = {
  onComplete: () => void;
};

export function AsciiRobotLanding({ onComplete }: AsciiRobotLandingProps) {
  const shouldReduceMotion = useReducedMotion();
  const [robotLoaded, setRobotLoaded] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const splineCanvasRef = useRef<HTMLCanvasElement>(null);
  const robotX = useMotionValue(0);
  const robotY = useMotionValue(0);
  const robotRotateX = useMotionValue(0);
  const robotRotateY = useMotionValue(0);
  const smoothX = useSpring(robotX, { stiffness: 90, damping: 20 });
  const smoothY = useSpring(robotY, { stiffness: 90, damping: 20 });
  const smoothRotateX = useSpring(robotRotateX, { stiffness: 80, damping: 22 });
  const smoothRotateY = useSpring(robotRotateY, { stiffness: 80, damping: 22 });

  useEffect(() => {
    const canvas = splineCanvasRef.current;
    if (!canvas) return;

    let active = true;
    const spline = new Application(canvas);
    const showFallback = () => setRobotLoaded(false);

    spline
      .load(ROBOT_SCENE)
      .then(() => {
        if (active) setRobotLoaded(true);
      })
      .catch(() => {
        if (active) setRobotLoaded(false);
      });

    canvas.addEventListener('webglcontextlost', showFallback);

    return () => {
      active = false;
      canvas.removeEventListener('webglcontextlost', showFallback);
      spline.dispose();
    };
  }, []);

  const trackPointer = (event: PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const normalizedX = clamp((event.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5);
    const normalizedY = clamp((event.clientY - rect.top) / rect.height - 0.5, -0.5, 0.5);

    robotX.set(normalizedX * 30);
    robotY.set(normalizedY * 20);
    robotRotateX.set(normalizedY * -7);
    robotRotateY.set(normalizedX * 10);
  };

  const resetRobot = () => {
    robotX.set(0);
    robotY.set(0);
    robotRotateX.set(0);
    robotRotateY.set(0);
  };

  const revealNext = () => {
    if (!robotLoaded || tapCount >= 5) return;

    const nextTap = tapCount + 1;
    setTapCount(nextTap);

    if (nextTap === 5) {
      window.setTimeout(onComplete, 1150);
    }
  };

  return (
    <motion.section
      aria-label="Interactive portfolio introduction"
      className="ascii-landing"
      exit={{ opacity: 0, filter: 'blur(14px)', scale: 1.025 }}
      id="intro"
      onPointerLeave={resetRobot}
      onPointerMove={trackPointer}
      transition={{ duration: 1.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div aria-hidden="true" className="ascii-landing-grid" />
      <CircuitSignals />

      <div className="ascii-landing-content">
        <motion.div
          aria-hidden="true"
          className="landing-name-backdrop"
          initial={{ opacity: 0, letterSpacing: '0.03em', scale: 0.96 }}
          animate={{ opacity: 1, letterSpacing: '-0.075em', scale: 1 }}
          transition={{ duration: 1.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          Srigan Sivagnanenthirarajah
        </motion.div>

        <motion.aside
          aria-live="polite"
          className="landing-greeting"
          initial={{ opacity: 0, scale: 0.82, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="landing-greeting-status">
            <i /> R4X // {tapCount === 5 ? 'ACCESS GRANTED' : 'DISCOVERY MODE'}
          </span>
          <AnimatePresence mode="wait">
            {tapCount === 0 ? (
              <motion.div
                className="landing-tap-invite"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                key="tap-invite"
                transition={{ duration: 0.5 }}
              >
                <span aria-hidden="true" className="landing-tap-radar">
                  <i />
                  <i />
                  <b>+</b>
                </span>
                <span className="landing-tap-copy">
                  <small>[ INTERACTIVE UNIT ]</small>
                  <strong>TAP TO FIND OUT MORE</strong>
                </span>
              </motion.div>
            ) : (
              <motion.p
                className="landing-discovery-message"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                key={tapCount}
                transition={{ duration: 0.34 }}
              >
                {tapMessages[tapCount]}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.aside>

        <div aria-label="A few things about Srigan" className="landing-facts">
          <AnimatePresence>
            {landingFacts.slice(0, Math.min(tapCount, landingFacts.length)).map((fact) => (
              <motion.article
                className={`landing-fact ${fact.position}`}
                initial={{ opacity: 0, scale: 0.62, y: 24, filter: 'blur(12px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              key={fact.label}
            >
                <div className="landing-fact-surface">
                  {fact.image ? (
                    <img alt={fact.imageAlt} className="landing-fact-logo" src={fact.image} />
                  ) : (
                    <span aria-hidden="true" className="landing-fact-node" />
                  )}
                  <div className="landing-fact-copy">
                    <span className="landing-fact-label">{fact.label}</span>
                    <p>{fact.value}</p>
                    <small>{fact.detail}</small>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className={`landing-robot-dock${tapCount === 5 ? ' is-docking' : ''}`}>
          <motion.button
            aria-label={`Tap the robot to discover more. ${tapCount} of 5 taps complete.`}
            className="ascii-landing-robot-stage"
            disabled={!robotLoaded || tapCount >= 5}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={revealNext}
            style={{
              x: smoothX,
              y: smoothY,
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              transformPerspective: 1000,
            }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            type="button"
          >
            <div className={`ascii-landing-spline${robotLoaded ? ' is-loaded' : ''}`}>
              <canvas aria-hidden="true" ref={splineCanvasRef} />
            </div>
          </motion.button>
        </div>
      </div>

      <span aria-hidden="true" className="ascii-corner ascii-corner-tl">╔═══</span>
      <span aria-hidden="true" className="ascii-corner ascii-corner-tr">═══╗</span>
      <span aria-hidden="true" className="ascii-corner ascii-corner-bl">╚═══</span>
      <span aria-hidden="true" className="ascii-corner ascii-corner-br">═══╝</span>

      <div aria-label={`${tapCount} of 5 taps completed`} className="landing-tap-progress">
        <span>{tapCount}/5</span>
        <div aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => (
            <i className={index < tapCount ? 'is-active' : ''} key={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
