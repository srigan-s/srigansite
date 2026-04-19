'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HERO_CAROUSEL_INTERVAL_MS } from './carouselTiming';

const personalPhotos = [
  {
    src: '/waterlootrek.jpeg',
    alt: 'Waterloo trek personal photo',
    label: 'Waterloo trek',
  },
  {
    src: '/winter.jpeg',
    alt: 'Winter personal photo',
    label: 'Winter',
  },
  {
    src: '/e7.jpeg',
    alt: 'Engineering 7 atrium',
    label: 'E7',
  },
  {
    src: '/sky.jpeg',
    alt: 'Sky personal photo',
    label: 'Sky',
  },
];

export function PersonalPhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [missingPhotos, setMissingPhotos] = useState<Set<string>>(() => new Set());
  const active = personalPhotos[index];
  const isMissing = missingPhotos.has(active.src);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % personalPhotos.length);
    }, HERO_CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div aria-label="Personal photo carousel" className="personal-photo-carousel mt-5" role="region">
      <AnimatePresence mode="wait">
        <motion.div
          className="personal-photo-frame"
          key={active.src}
          initial={{ opacity: 0, x: 16, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: -16, filter: 'blur(8px)' }}
          transition={{ duration: 0.32, ease: 'easeOut' }}
        >
          {isMissing ? (
            <div className="personal-photo-placeholder">
              <span>{active.label}</span>
            </div>
          ) : (
            <img
              alt={active.alt}
              className="h-full w-full object-cover"
              data-cursor="hover"
              onError={() =>
                setMissingPhotos((current) => {
                  const next = new Set(current);
                  next.add(active.src);
                  return next;
                })
              }
              src={active.src}
            />
          )}
          <div className="personal-photo-caption">{active.label}</div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-1.5">
          {personalPhotos.map((photo, photoIndex) => (
            <button
              aria-label={`Show ${photo.label}`}
              className="h-1.5 rounded-full transition-all"
              data-cursor="hover"
              key={photo.src}
              onClick={() => setIndex(photoIndex)}
              style={{
                width: photoIndex === index ? '18px' : '7px',
                background: photoIndex === index ? 'var(--accent)' : 'var(--line-strong)',
              }}
              type="button"
            />
          ))}
        </div>
        <div className="flex gap-1.5">
          <button
            aria-label="Previous photo"
            className="link-button h-8 w-8 p-0"
            data-cursor="hover"
            onClick={() => setIndex((current) => (current - 1 + personalPhotos.length) % personalPhotos.length)}
            type="button"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            aria-label="Next photo"
            className="link-button h-8 w-8 p-0"
            data-cursor="hover"
            onClick={() => setIndex((current) => (current + 1) % personalPhotos.length)}
            type="button"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
