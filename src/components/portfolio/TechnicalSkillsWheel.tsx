'use client';

import { skillGroups } from '@/data/portfolio';

const technicalSkills = Array.from(new Set(skillGroups.flatMap((group) => group.skills)));
const scrollingSkills = [...technicalSkills, ...technicalSkills];

export function TechnicalSkillsWheel() {
  return (
    <div
      aria-labelledby="technical-skills-wheel"
      className="skills-wheel quiet-panel mt-5 w-full max-w-xl overflow-hidden py-3"
    >
      <p className="sr-only" id="technical-skills-wheel">
        Technical skills
      </p>
      <ul className="sr-only">
        {technicalSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <div aria-hidden="true" className="skills-wheel-track">
        {scrollingSkills.map((skill, index) => (
          <span className="skills-wheel-chip" key={`${skill}-${index}`}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
