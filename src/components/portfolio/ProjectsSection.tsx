'use client';

import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type PointerEvent } from 'react';
import type { ProjectItem } from '@/data/portfolio';
import { projects } from '@/data/portfolio';
import { Carousel } from './Carousel';
import { SectionReveal } from './SectionReveal';

function ProjectMedia({ project, previewActive }: { project: ProjectItem; previewActive: boolean }) {
  return (
    <div className="project-media relative h-32 overflow-hidden border-b hairline">
      {!project.media ? (
        <div className="h-full w-full" style={{ background: 'var(--bg-muted)' }} />
      ) : (
        <Image
          alt={project.media.alt}
          className="h-full w-full object-cover"
          height={256}
          sizes="(max-width: 640px) 86vw, 384px"
          src={project.media.poster ?? project.media.src}
          width={768}
        />
      )}

      {previewActive && project.media?.type === 'video' && project.media.previewSrc ? (
        <video
          aria-label={`${project.name} video preview`}
          autoPlay
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
          poster={project.media.poster}
          preload="none"
          src={project.media.previewSrc}
        />
      ) : null}

      {project.award ? (
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-9 items-center justify-center border-r text-[9px] font-bold uppercase tracking-[0.14em] backdrop-blur-xl"
          style={{
            borderColor: 'color-mix(in srgb, var(--accent) 55%, var(--line))',
            background: 'color-mix(in srgb, var(--bg-elevated) 88%, transparent)',
            color: 'var(--accent)',
          }}
          title={project.award.label}
        >
          <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            {project.award.shortLabel}
          </span>
        </div>
      ) : null}
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const [previewActive, setPreviewActive] = useState(false);
  const previewTimer = useRef<number | null>(null);

  useEffect(() => () => {
    if (previewTimer.current !== null) window.clearTimeout(previewTimer.current);
  }, []);

  const startPreview = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
    if (!project.media?.previewSrc) return;
    if (previewTimer.current !== null || previewActive) return;

    previewTimer.current = window.setTimeout(() => setPreviewActive(true), 220);
  };

  const stopPreview = () => {
    if (previewTimer.current !== null) window.clearTimeout(previewTimer.current);
    previewTimer.current = null;
    setPreviewActive(false);
  };

  return (
    <article
      className="panel interactive relative flex h-full min-h-[25rem] flex-col overflow-hidden"
      data-cursor="hover"
      onPointerEnter={startPreview}
      onPointerLeave={stopPreview}
    >
      <Link
        aria-label={`Explore ${project.name}`}
        className="absolute inset-0 z-10 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent)]"
        href={`/projects/${project.id}`}
      />
      <ProjectMedia previewActive={previewActive} project={project} />
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

        <div className="pointer-events-none relative z-20 mt-auto flex flex-wrap gap-2 pt-6">
          <span className="accent-button">Explore</span>
          {project.github ? (
            <a
              className="link-button pointer-events-auto"
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
              className="link-button pointer-events-auto"
              data-cursor="hover"
              href={project.demo}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ExternalLink className="h-4 w-4" />
              {project.demoLabel ?? 'Demo'}
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
