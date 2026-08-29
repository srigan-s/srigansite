'use client';

import type { ExperienceItem } from '@/data/portfolio';
import { experiences } from '@/data/portfolio';
import { Carousel } from './Carousel';
import { SectionReveal } from './SectionReveal';

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <article className="panel interactive flex h-full min-h-[23rem] flex-col overflow-hidden" data-cursor="hover">
      <div className="h-28 overflow-hidden border-b hairline">
        <img
          alt={`${experience.company} visual`}
          className="h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
          loading="lazy"
          src={experience.image}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="text-xl font-semibold leading-tight">{experience.role}</h3>
            <p className="mt-2 text-sm font-medium muted-copy">{experience.company}</p>
          </div>
          <time className="text-right text-xs muted-copy">{experience.date}</time>
        </div>
        <p className="mt-5 text-sm leading-6 muted-copy">{experience.impact}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {experience.tags.map((tag) => (
            <span className="quiet-panel px-2.5 py-1 text-xs muted-copy" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ExperienceSection() {
  return (
    <SectionReveal className="section-shell" id="experience">
      <div className="content-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="section-title mt-3">Internships and technical roles, kept compact.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 muted-copy">
            Short cards for the signal: where, when, and what moved.
          </p>
        </div>
        <Carousel
          ariaLabel="experience carousel"
          items={experiences}
          renderItem={(experience) => <ExperienceCard experience={experience} />}
        />
      </div>
    </SectionReveal>
  );
}
