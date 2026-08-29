'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionReveal({ children, className = '', id }: SectionRevealProps) {
  return (
    <motion.section
      className={className}
      id={id}
      initial={{ opacity: 0, y: 24 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.section>
  );
}
