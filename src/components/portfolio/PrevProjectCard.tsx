'use client';

import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { projects } from '@/data/portfolio';

const projectItems = projects.slice(0, 4);

export function PrevProjectCard() {
  const [index, setIndex] = useState(0);
  const active = projectItems[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % projectItems.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="quiet-panel min-h-[7.75rem] overflow-hidden p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase muted-copy">Projects</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <p className="mt-2 truncate text-sm font-semibold">{active.name}</p>
              <p className="mt-1 line-clamp-2 text-xs leading-5 muted-copy">{active.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md border hairline">
          {active.media?.type === 'video' ? (
            <video
              aria-label={active.media.alt}
              autoPlay
              className="h-full w-full object-cover"
              loop
              muted
              playsInline
              src={active.media.src}
            />
          ) : (
            <img
              alt={active.media?.alt ?? `${active.name} preview`}
              className="h-full w-full object-cover"
              src={active.media?.src ?? '/waterloo.png'}
            />
          )}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="flex gap-1.5">
          {projectItems.map((item, itemIndex) => (
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
          <Link
            aria-label={`Explore ${active.name}`}
            className="link-button h-7 w-7 p-0"
            data-cursor="hover"
            href={`/projects/${active.id}`}
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
          <button
            aria-label="Previous project"
            className="link-button h-7 w-7 p-0"
            data-cursor="hover"
            onClick={() => setIndex((current) => (current - 1 + projectItems.length) % projectItems.length)}
            type="button"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            aria-label="Next project"
            className="link-button h-7 w-7 p-0"
            data-cursor="hover"
            onClick={() => setIndex((current) => (current + 1) % projectItems.length)}
            type="button"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
