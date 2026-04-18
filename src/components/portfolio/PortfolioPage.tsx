'use client';

import { MotionConfig } from 'framer-motion';
import { ExperienceSection } from './ExperienceSection';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';

export function PortfolioPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="page-shell">
        <Header />
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
