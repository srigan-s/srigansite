'use client';

import { MotionConfig } from 'framer-motion';
import { ExperienceSection } from './ExperienceSection';
import { Footer } from './Footer';
import { GridHoverBackground } from './GridHoverBackground';
import { Header } from './Header';
import { Hero } from './Hero';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';
import { TrackingRobot } from './TrackingRobot';

export function PortfolioPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="page-shell">
        <GridHoverBackground />
        <Header />
        <TrackingRobot />
        <main>
          <Hero />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
