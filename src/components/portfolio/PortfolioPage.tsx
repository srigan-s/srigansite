'use client';

import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AsciiRobotLanding } from './AsciiRobotLanding';
import { ExperienceSection } from './ExperienceSection';
import { Footer } from './Footer';
import { GridHoverBackground } from './GridHoverBackground';
import { Header } from './Header';
import { Hero } from './Hero';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';

export function PortfolioPage() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = revealed ? '' : 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [revealed]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="page-shell" id="home">
        <GridHoverBackground />
        <AnimatePresence>
          {!revealed ? <AsciiRobotLanding onComplete={() => setRevealed(true)} /> : null}
        </AnimatePresence>
        <AnimatePresence>
          {revealed ? (
            <motion.div
              className="portfolio-site"
              initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.985 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 2.1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              <Header />
              <main>
                <Hero />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
              </main>
              <Footer />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
