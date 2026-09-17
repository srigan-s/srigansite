'use client';

import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { AsciiRobotLanding } from './AsciiRobotLanding';
import { ExperienceSection } from './ExperienceSection';
import { Footer } from './Footer';
import { CircuitBackground } from './GridHoverBackground';
import { Header } from './Header';
import { Hero } from './Hero';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';

const INTRO_SESSION_KEY = 'srigan-portfolio-intro-complete';

export function PortfolioPage() {
  const [revealed, setRevealed] = useState<boolean | null>(null);
  const restoredFromSession = useRef(false);

  useEffect(() => {
    let introWasCompleted = false;

    try {
      introWasCompleted = window.sessionStorage.getItem(INTRO_SESSION_KEY) === 'true';
    } catch {
      // Storage can be unavailable in strict privacy modes; replaying the intro is a safe fallback.
    }

    restoredFromSession.current = introWasCompleted;
    setRevealed(introWasCompleted);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = revealed ? '' : 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [revealed]);

  const revealPortfolio = () => {
    try {
      window.sessionStorage.setItem(INTRO_SESSION_KEY, 'true');
    } catch {
      // The page can still reveal normally when storage is unavailable.
    }

    restoredFromSession.current = false;
    setRevealed(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="page-shell" id="home">
        <CircuitBackground />
        <AnimatePresence>
          {revealed === false ? <AsciiRobotLanding onComplete={revealPortfolio} /> : null}
        </AnimatePresence>
        <AnimatePresence>
          {revealed === true ? (
            <motion.div
              className="portfolio-site"
              initial={
                restoredFromSession.current
                  ? false
                  : { opacity: 0, filter: 'blur(10px)', scale: 0.985 }
              }
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
