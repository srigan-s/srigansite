'use client';

import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { profile } from '@/data/portfolio';
import { HeroPortrait } from './HeroPortrait';
import { PersonalPhotoCarousel } from './PersonalPhotoCarousel';
import { PrevInternCard } from './PrevInternCard';
import { PrevProjectCard } from './PrevProjectCard';
import { TechnicalSkillsWheel } from './TechnicalSkillsWheel';
import { ThemeToggle } from './ThemeToggle';

const nameLines = profile.name.split(' ');

const nameEase = [0.16, 1, 0.3, 1] as const;

const nameContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 3.8,
      staggerChildren: 0.08,
    },
  },
};

const nameLineVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.045,
    },
  },
};

const nameLetterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: 'blur(7px)',
  },
  visible: {
    opacity: [0, 1, 0.25, 1, 0.55, 1],
    y: [10, -2, 0, 1, 0, 0],
    filter: ['blur(7px)', 'blur(0px)', 'blur(2px)', 'blur(0px)', 'blur(1px)', 'blur(0px)'],
    transition: {
      duration: 0.58,
      ease: nameEase,
      times: [0, 0.24, 0.42, 0.62, 0.78, 1],
    },
  },
};

const heroLinks = [
  profile.links.find((link) => link.label === 'Resume'),
  profile.links.find((link) => link.label === 'LinkedIn'),
  profile.links.find((link) => link.label === 'GitHub'),
  profile.links.find((link) => link.label === 'Email'),
].filter(Boolean) as typeof profile.links;

export function Hero() {
  return (
    <section className="content-shell flex min-h-screen items-center pt-24" id="home">
      <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Robotics / Controls / Software</p>
          <motion.h1
            aria-label={profile.name}
            className="display-title animated-name mt-5"
            data-cursor="hover"
            initial="hidden"
            animate="visible"
            variants={nameContainerVariants}
          >
            {nameLines.map((line, lineIndex) => (
              <motion.span
                aria-hidden="true"
                className="animated-name-line"
                key={line}
                variants={nameLineVariants}
              >
                {line.split('').map((letter, letterIndex) => (
                  <motion.span
                    className="animated-name-letter"
                    data-cursor="hover"
                    key={`${letter}-${lineIndex}-${letterIndex}`}
                    style={{ animationDelay: `${letterIndex * 34}ms` }}
                    transition={{ duration: 0.46, ease: nameEase }}
                    variants={nameLetterVariants}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.h1>
          <p className="mt-5 max-w-xl text-lg font-medium muted-copy md:text-xl">{profile.title}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 muted-copy">{profile.line}</p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="quiet-panel min-h-[7.75rem] overflow-hidden p-3">
              <div className="flex items-start gap-3">
                <img
                  alt="University of Waterloo"
                  className="h-12 w-12 rounded-md object-cover"
                  src="/waterloo.png"
                />
                <div>
                  <p className="text-[11px] font-semibold uppercase muted-copy">School</p>
                  <p className="mt-2 text-sm font-medium">University of Waterloo ECE</p>
                </div>
              </div>
            </div>
            <PrevProjectCard />
            <PrevInternCard />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroLinks.map((link) => (
              <a
                className={link.label === 'Resume' ? 'accent-button' : 'link-button'}
                data-cursor="hover"
                href={link.href}
                key={link.label}
                rel={link.external ? 'noopener noreferrer' : undefined}
                target={link.external ? '_blank' : undefined}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>
          <TechnicalSkillsWheel />
          <PersonalPhotoCarousel />

          <div className="mt-10 flex items-center gap-3 text-sm muted-copy">
            <a
              className="link-button h-10 w-10 p-0"
              data-cursor="hover"
              href="#experience"
              aria-label="Scroll to experience"
            >
              <ArrowDown className="h-4 w-4" />
            </a>
            <span>Selected roles and builds below.</span>
          </div>
        </motion.div>

        <HeroPortrait />
      </div>
    </section>
  );
}
