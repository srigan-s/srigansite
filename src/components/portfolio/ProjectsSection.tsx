'use client';

import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import type { ProjectItem } from '@/data/portfolio';
import { projects } from '@/data/portfolio';
import { Carousel } from './Carousel';
import { SectionReveal } from './SectionReveal';

function ProjectMedia({ project }: { project: ProjectItem }) {
  if (!project.media) {
    return <div className="h-32 border-b hairline" style={{ background: 'var(--bg-muted)' }} />;
  }

  if (project.media.type === 'video') {
    const shouldPlaySilently = project.id !== 'lightlink';

    return (
      <video
        aria-label={project.media.alt}
        autoPlay={shouldPlaySilently}
        className="h-32 w-full border-b object-cover hairline"
        controls={!shouldPlaySilently}
        loop
        muted={shouldPlaySilently}
        playsInline
        preload="metadata"
        src={project.media.src}
      />
    );
  }

  return (
    <img
      alt={project.media.alt}
      className="h-32 w-full border-b object-cover hairline"
      loading="lazy"
      src={project.media.src}
    />
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="panel interactive flex h-full min-h-[25rem] flex-col overflow-hidden" data-cursor="hover">
      <ProjectMedia project={project} />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold leading-tight">{project.name}</h3>
        <p className="mt-4 text-sm leading-6 muted-copy">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span className="quiet-panel px-2.5 py-1 text-xs muted-copy" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <Link className="accent-button" data-cursor="hover" href={`/projects/${project.id}`}>
            Explore
          </Link>
          {project.github ? (
            <a
              className="link-button"
              data-cursor="hover"
              href={project.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          ) : null}
          {project.demo ? (
            <a
              className="link-button"
              data-cursor="hover"
              href={project.demo}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <SectionReveal className="section-shell" id="projects">
      <div className="content-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Projects</p>
            <h2 className="section-title mt-3">Small case studies from robotics, AI, and product work.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 muted-copy">
            Uniform previews, quiet motion, and only the details worth scanning.
          </p>
        </div>
        <Carousel
          ariaLabel="projects carousel"
          items={projects}
          renderItem={(project) => <ProjectCard project={project} />}
        />
      </div>
    </SectionReveal>
  );
}
