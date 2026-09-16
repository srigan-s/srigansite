'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

type CarouselProps<T extends { id: string }> = {
  ariaLabel: string;
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
};

export function Carousel<T extends { id: string }>({
  ariaLabel,
  items,
  renderItem,
}: CarouselProps<T>) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    const boundedIndex = (index + items.length) % items.length;
    const target = trackRef.current?.children.item(boundedIndex) as HTMLElement | null;

    target?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
    setActiveIndex(boundedIndex);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const updateActiveCard = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const cards = Array.from(track.children) as HTMLElement[];
        const nearest = cards.reduce(
          (closest, card, index) => {
            const distance = Math.abs(card.offsetLeft - track.scrollLeft);
            return distance < closest.distance ? { distance, index } : closest;
          },
          { distance: Number.POSITIVE_INFINITY, index: 0 },
        );

        setActiveIndex(nearest.index);
      });
    };

    track.addEventListener('scroll', updateActiveCard, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      track.removeEventListener('scroll', updateActiveCard);
    };
  }, []);

  return (
    <div aria-label={ariaLabel} className="relative" role="region">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm muted-copy">
          {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </div>
        <div className="flex gap-2">
          <button
            aria-label={`Previous ${ariaLabel}`}
            className="link-button h-10 w-10 p-0"
            data-cursor="hover"
            onClick={() => goTo(activeIndex - 1)}
            type="button"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label={`Next ${ariaLabel}`}
            className="link-button h-10 w-10 p-0"
            data-cursor="hover"
            onClick={() => goTo(activeIndex + 1)}
            type="button"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
        ref={trackRef}
      >
        {items.map((item, index) => (
          <motion.div
            className="min-w-[82vw] snap-start sm:min-w-[22rem] lg:min-w-[24rem]"
            data-cursor="hover"
            initial={{ opacity: 0, y: 16 }}
            key={item.id}
            transition={{ delay: index * 0.04, duration: 0.45, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {renderItem(item, index)}
          </motion.div>
        ))}
      </div>

      <div className="mt-5 h-px overflow-hidden" style={{ background: 'var(--line)' }}>
        <motion.div
          className="h-px"
          animate={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
          style={{ background: 'var(--accent)' }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
