'use client';

import Script from 'next/script';
import { ArrowDown } from 'lucide-react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import { createElement, useState, type PointerEvent } from 'react';
import { profile } from '@/data/portfolio';
import { SleekRobot } from './SleekRobot';

const ROBOT_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode';
const SPLINE_VIEWER =
  'https://unpkg.com/@splinetool/viewer@1.12.59/build/spline-viewer.js';

const asciiName = [
  '███████╗██████╗ ██╗ ██████╗  █████╗ ███╗   ██╗',
  '██╔════╝██╔══██╗██║██╔════╝ ██╔══██╗████╗  ██║',
  '███████╗██████╔╝██║██║  ███╗███████║██╔██╗ ██║',
  '╚════██║██╔══██╗██║██║   ██║██╔══██║██║╚██╗██║',
  '███████║██║  ██║██║╚██████╔╝██║  ██║██║ ╚████║',
  '╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝',
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function AsciiRobotLanding() {
  const shouldReduceMotion = useReducedMotion();
  const [robotLoaded, setRobotLoaded] = useState(false);
  const robotX = useMotionValue(0);
  const robotY = useMotionValue(0);
  const robotRotateX = useMotionValue(0);
  const robotRotateY = useMotionValue(0);
  const smoothX = useSpring(robotX, { stiffness: 90, damping: 20 });
  const smoothY = useSpring(robotY, { stiffness: 90, damping: 20 });
  const smoothRotateX = useSpring(robotRotateX, { stiffness: 80, damping: 22 });
  const smoothRotateY = useSpring(robotRotateY, { stiffness: 80, damping: 22 });

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
      <div aria-hidden="true" className="ascii-landing-scanlines" />

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
          className="ascii-landing-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="ascii-landing-kicker">SYS://PORTFOLIO_INIT</p>
          <div className="ascii-name-window">
            <pre aria-hidden="true" className="ascii-name-art">
              {asciiName.join('\n')}
            </pre>
            <span aria-hidden="true" className="ascii-name-cursor">█</span>
          </div>

          <h1>{profile.name}</h1>
          <p className="ascii-landing-role">
            <span>&gt;</span> Electrical Engineering · Hardware / Controls / Robotics
          </p>
          <p className="ascii-landing-description">
            Building semiconductor process equipment, motion-control systems, and embedded
            software in Waterloo.
          </p>

          <div className="ascii-landing-readout" aria-label="Portfolio status">
            <span>
              <b>[LOCATION]</b> WATERLOO, ON
            </span>
            <span>
              <b>[FOCUS]</b> HARDWARE SYSTEMS
            </span>
            <span>
              <b>[STATUS]</b> AVAILABLE FOR COLLABORATION
            </span>
          </div>
        </motion.div>

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
          <div className={`ascii-landing-spline${robotLoaded ? ' is-loaded' : ''}`}>
            <Script
              onLoad={() => window.setTimeout(() => setRobotLoaded(true), 1600)}
              src={SPLINE_VIEWER}
              strategy="afterInteractive"
              type="module"
            />
            {createElement('spline-viewer', {
              'aria-hidden': 'true',
              url: ROBOT_SCENE,
            })}
          </div>
          <div aria-hidden="true" className="ascii-landing-robot-label">
            <span>UNIT // R4X</span>
            <span>POINTER TRACKING: ACTIVE</span>
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
