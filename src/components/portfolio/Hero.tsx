'use client';

import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '@/data/portfolio';
import { HeroPortrait } from './HeroPortrait';
import { PrevInternCard } from './PrevInternCard';

export function Hero() {
  return (
    <section className="content-shell flex min-h-screen items-center pt-24" id="home">
      <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Robotics / Controls / Software</p>
          <h1 className="display-title mt-5">{profile.name}</h1>
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
            <div className="quiet-panel min-h-[7.75rem] p-3">
              <p className="text-[11px] font-semibold uppercase muted-copy">Focus</p>
              <p className="mt-2 text-sm font-medium">Robotics, controls, embedded</p>
              <p className="mt-2 text-xs leading-5 muted-copy">Hardware-aware software for systems that move.</p>
            </div>
            <PrevInternCard />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {profile.links.map((link) => (
              <a
                className={link.label === 'GitHub' ? 'accent-button' : 'link-button'}
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
          </div>

          <div className="mt-16 flex items-center gap-3 text-sm muted-copy">
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
