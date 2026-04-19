'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { experiences } from '@/data/portfolio';
import { HERO_CAROUSEL_INTERVAL_MS } from './carouselTiming';

const internItems = experiences.slice(0, 4);

export function PrevInternCard() {
  const [index, setIndex] = useState(0);
  const active = internItems[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % internItems.length);
    }, HERO_CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="quiet-panel min-h-[7.75rem] overflow-hidden p-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase muted-copy">Prev Intern at</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <p className="mt-2 text-sm font-semibold">{active.company}</p>
              <p className="mt-1 text-xs leading-5 muted-copy">{active.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <img
          alt={`${active.company} preview`}
          className="h-11 w-11 rounded-md object-cover"
          src={active.image}
        />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-1.5">
          {internItems.map((item, itemIndex) => (
            <span
              className="h-1.5 rounded-full transition-all"
              key={item.id}
              style={{
                width: itemIndex === index ? '16px' : '6px',
                background: itemIndex === index ? 'var(--accent)' : 'var(--line-strong)',
              }}
            />
          ))}
        </div>
        <div className="flex gap-1.5">
          <button
            aria-label="Previous internship"
            className="link-button h-7 w-7 p-0"
            data-cursor="hover"
            onClick={() => setIndex((current) => (current - 1 + internItems.length) % internItems.length)}
            type="button"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            aria-label="Next internship"
            className="link-button h-7 w-7 p-0"
            data-cursor="hover"
            onClick={() => setIndex((current) => (current + 1) % internItems.length)}
            type="button"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
