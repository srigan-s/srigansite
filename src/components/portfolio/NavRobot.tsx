'use client';

import { motion } from 'framer-motion';
import { SleekRobot } from './SleekRobot';

export function NavRobot() {
  return (
    <motion.span
      aria-hidden="true"
      className="nav-robot-home"
      initial={{ opacity: 0, scale: 0.35, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <SleekRobot variant="nav" />
    </motion.span>
  );
}
