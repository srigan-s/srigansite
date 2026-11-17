'use client';

import { AnimatePresence, MotionConfig } from 'framer-motion';
import { lazy, Suspense, useEffect, useState } from 'react';
import { ExperienceSection } from './ExperienceSection';
import { Footer } from './Footer';
import { CircuitBackground } from './GridHoverBackground';
import { Header } from './Header';
import { Hero } from './Hero';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';

const INTRO_SESSION_KEY = 'srigan-portfolio-intro-complete';
const AsciiRobotLanding = lazy(
  () => import('./AsciiRobotLanding').then((module) => ({ default: module.AsciiRobotLanding })),
);

export function PortfolioPage() {
  const [revealed, setRevealed] = useState<boolean | null>(null);
  const [introExited, setIntroExited] = useState(false);

  useEffect(() => {
    let introWasCompleted = false;

    try {
      introWasCompleted = window.sessionStorage.getItem(INTRO_SESSION_KEY) === 'true';
    } catch {
      // Storage can be unavailable in strict privacy modes; replaying the intro is a safe fallback.
    }

    // Section links should open the content directly, including project-page returns.
    introWasCompleted ||= ['#portfolio', '#experience', '#projects', '#skills', '#github'].includes(window.location.hash);

    setIntroExited(introWasCompleted);
    setRevealed(introWasCompleted);
  }, []);

  useEffect(() => {
    if (!revealed || !window.location.hash) return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [revealed]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = introExited ? previousOverflow : 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [introExited]);

  const revealPortfolio = () => {
    try {
      window.sessionStorage.setItem(INTRO_SESSION_KEY, 'true');
    } catch {
      // The page can still reveal normally when storage is unavailable.
    }

    setRevealed(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="page-shell" id="home">
        <CircuitBackground />
        <AnimatePresence onExitComplete={() => setIntroExited(true)}>
          {revealed === false ? (
            <Suspense fallback={null}>
              <AsciiRobotLanding onComplete={revealPortfolio} />
            </Suspense>
          ) : null}
        </AnimatePresence>
        {revealed === true ? (
          <div className="portfolio-site">
            <Header />
            <main>
              <Hero />
              <ExperienceSection />
              <ProjectsSection />
              <SkillsSection />
            </main>
            <Footer />
          </div>
        ) : null}
      </div>
    </MotionConfig>
  );
}
