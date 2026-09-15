'use client';

import Script from 'next/script';
import { ArrowDown } from 'lucide-react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import { createElement, useEffect, useRef, useState, type PointerEvent } from 'react';
import { SleekRobot } from './SleekRobot';

const ROBOT_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode';
const SPLINE_VIEWER =
  'https://unpkg.com/@splinetool/viewer@1.12.59/build/spline-viewer.js';

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function AsciiRobotLanding() {
  const shouldReduceMotion = useReducedMotion();
  const [robotLoaded, setRobotLoaded] = useState(false);
  const splineHostRef = useRef<HTMLDivElement>(null);
  const robotX = useMotionValue(0);
  const robotY = useMotionValue(0);
  const robotRotateX = useMotionValue(0);
  const robotRotateY = useMotionValue(0);
  const smoothX = useSpring(robotX, { stiffness: 90, damping: 20 });
  const smoothY = useSpring(robotY, { stiffness: 90, damping: 20 });
  const smoothRotateX = useSpring(robotRotateX, { stiffness: 80, damping: 22 });
  const smoothRotateY = useSpring(robotRotateY, { stiffness: 80, damping: 22 });

  useEffect(() => {
    const viewer = splineHostRef.current?.querySelector('spline-viewer');
    if (!viewer) return;

    const showScene = () => setRobotLoaded(true);
    const showFallback = () => setRobotLoaded(false);

    viewer.addEventListener('load-complete', showScene);
    viewer.addEventListener('context-loss', showFallback);
    viewer.addEventListener('unload', showFallback);

    return () => {
      viewer.removeEventListener('load-complete', showScene);
      viewer.removeEventListener('context-loss', showFallback);
      viewer.removeEventListener('unload', showFallback);
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

  return (
    <section
      aria-label="Interactive portfolio introduction"
      className="ascii-landing"
      id="home"
      onPointerLeave={resetRobot}
      onPointerMove={trackPointer}
    >
      <div aria-hidden="true" className="ascii-landing-grid" />

      <div className="ascii-landing-topbar">
        <a className="ascii-landing-control" data-cursor="hover" href="#portfolio">
          <span>[≡]</span>
          <span>enter portfolio</span>
        </a>
        <div aria-label="System online" className="ascii-landing-status">
          <span />
          SYS.ONLINE // 2026
        </div>
      </div>

      <div className="ascii-landing-content">
        <motion.div
          aria-label="Interactive 3D humanoid robot"
          className="ascii-landing-robot-stage"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          role="img"
          style={{
            x: smoothX,
            y: smoothY,
            rotateX: smoothRotateX,
            rotateY: smoothRotateY,
            transformPerspective: 1000,
          }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            aria-hidden="true"
            className={`ascii-landing-robot-fallback${robotLoaded ? ' is-hidden' : ''}`}
          >
            <SleekRobot variant="reward" />
          </div>
          <div
            className={`ascii-landing-spline${robotLoaded ? ' is-loaded' : ''}`}
            ref={splineHostRef}
          >
            <Script
              src={SPLINE_VIEWER}
              strategy="afterInteractive"
              type="module"
            />
            {createElement('spline-viewer', {
              'aria-hidden': 'true',
              'events-target': 'global',
              loading: 'eager',
              url: ROBOT_SCENE,
            })}
          </div>
        </motion.div>
      </div>

      <span aria-hidden="true" className="ascii-corner ascii-corner-tl">╔═══</span>
      <span aria-hidden="true" className="ascii-corner ascii-corner-tr">═══╗</span>
      <span aria-hidden="true" className="ascii-corner ascii-corner-bl">╚═══</span>
      <span aria-hidden="true" className="ascii-corner ascii-corner-br">═══╝</span>

      <a className="ascii-landing-scroll" data-cursor="hover" href="#portfolio">
        <span>SCROLL TO PORTFOLIO</span>
        <ArrowDown aria-hidden="true" className="h-4 w-4" />
      </a>
    </section>
  );
}
