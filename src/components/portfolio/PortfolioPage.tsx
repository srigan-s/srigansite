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
import { SecretReward } from '@/components/robot-game/SecretReward';
import { UnlockableSection } from '@/components/robot-game/UnlockableSection';

export function PortfolioPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="page-shell">
        <GridHoverBackground />
        <Header />
        <TrackingRobot />
        <main>
          <Hero />
          <UnlockableSection milestoneId="experience">
            <ExperienceSection />
          </UnlockableSection>
          <UnlockableSection milestoneId="projects">
            <ProjectsSection />
          </UnlockableSection>
          <UnlockableSection milestoneId="skills">
            <SkillsSection />
          </UnlockableSection>
          <SecretReward />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
