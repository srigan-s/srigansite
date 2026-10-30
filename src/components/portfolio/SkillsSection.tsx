'use client';

import { skillGroups } from '@/data/portfolio';
import { SectionReveal } from './SectionReveal';

export function SkillsSection() {
  return (
    <SectionReveal className="section-shell" id="skills">
      <div className="content-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Technical Skills</p>
            <h2 className="section-title mt-3">A concise stack for systems that touch the real world.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 muted-copy">
            Hands-on experience across motion control, semiconductor process hardware, embedded
            testing, robotics, and production software.
          </p>
        </div>

        <div className="skills-grid grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-5">
          {skillGroups.map((group) => (
            <article className="quiet-panel interactive min-w-0 p-3 sm:p-5" data-cursor="hover" key={group.title}>
              <group.icon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
              <h3 className="mt-5 text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm muted-copy">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
