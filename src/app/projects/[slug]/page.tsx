import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, Play, Trophy } from 'lucide-react';
import { projectDetails } from '@/data/portfolio';
import { ThemeToggle } from '@/components/portfolio/ThemeToggle';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectDetails.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectDetails.find((item) => item.id === slug);

  if (!project) return { title: 'Project not found' };

  return {
    title: `${project.name} | Srigan Sivagnanenthirarajah`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectDetails.find((item) => item.id === slug);

  if (!project) notFound();

  const additionalVideos = project.videos?.filter((video) => video.src !== project.heroVideo) ?? [];

  return (
    <main className="project-page page-shell pb-20 pt-8">
      <div className="content-shell">
        <div className="mb-10 flex items-center justify-between">
          <Link className="link-button" data-cursor="hover" href="/#projects">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
          <ThemeToggle />
        </div>

        <section className="grid gap-10 pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            {project.award ? (
              <div
                className="mt-5 inline-flex max-w-full items-center gap-2 border-l-2 py-2 pl-4 text-xs font-bold uppercase tracking-[0.12em]"
                style={{ borderColor: 'color-mix(in srgb, var(--accent) 55%, var(--line))', color: 'var(--accent)' }}
              >
                <Trophy className="h-4 w-4 shrink-0" />
                <span>{project.award.label}</span>
              </div>
            ) : null}
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{project.name}</h1>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="quiet-panel px-3 py-1.5 text-sm muted-copy">{project.role}</span>
              {project.stack.map((item) => (
                <span className="quiet-panel px-3 py-1.5 text-sm muted-copy" key={item}>{item}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.github ? (
                <a className="link-button" data-cursor="hover" href={project.github} rel="noopener noreferrer" target="_blank">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              ) : null}
              {project.demo ? (
                <a className="accent-button" data-cursor="hover" href={project.demo} rel="noopener noreferrer" target="_blank">
                  <ExternalLink className="h-4 w-4" /> {project.demoLabel ?? 'Live'}
                </a>
              ) : null}
              {project.videoUrl ? (
                <a className="link-button" data-cursor="hover" href={project.videoUrl} rel="noopener noreferrer" target="_blank">
                  <Play className="h-4 w-4" /> Watch video
                </a>
              ) : null}
            </div>
          </div>

          <div className="panel overflow-hidden p-2">
            {project.videoEmbedUrl ? (
              <iframe
                className="aspect-video w-full rounded-md"
                src={project.videoEmbedUrl}
                title={`${project.name} demo video`}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : project.images?.length ? (
              <div className="grid gap-2 md:grid-cols-2">
                {project.images.map((image, index) => (
                  <div className={index === 0 ? 'md:col-span-2' : ''} key={image.src}>
                    <img
                      alt={image.alt}
                      className={index === 0 ? 'h-[22rem] w-full rounded-md object-cover md:h-[30rem]' : 'h-[14rem] w-full rounded-md object-cover md:h-[18rem]'}
                      src={image.src}
                    />
                  </div>
                ))}
              </div>
            ) : project.heroVideo ? (
              <video
                className="h-[22rem] w-full rounded-md object-cover md:h-[30rem]"
                controls
                playsInline
                poster={project.media?.poster}
                preload="none"
                src={project.heroVideo}
              />
            ) : project.media?.type === 'image' ? (
              <img
                alt={project.media.alt}
                className={project.media.fit === 'contain' ? 'aspect-video w-full rounded-md object-contain' : 'h-[22rem] w-full rounded-md object-cover md:h-[30rem]'}
                src={project.media.src}
              />
            ) : null}
          </div>
        </section>

        <section className="section-shell">
          <ul className="quiet-panel max-w-4xl list-disc space-y-4 px-8 py-7 text-base leading-7 muted-copy marker:text-[var(--accent)] md:px-10">
            {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        </section>

        {project.architectureImages?.length ? (
          <section className="grid gap-6" aria-label={`${project.name} architecture diagrams`}>
            {project.architectureImages.map((diagram) => (
              <div className="panel overflow-hidden p-2" key={diagram.src}>
                <picture>
                  {diagram.mobileSrc ? <source media="(max-width: 639px)" srcSet={diagram.mobileSrc} /> : null}
                  <img alt={diagram.alt} className="h-auto w-full rounded-md" loading="lazy" src={diagram.src} />
                </picture>
              </div>
            ))}
          </section>
        ) : null}

        {additionalVideos.length ? (
          <section className="section-shell">
            <div className="grid gap-4 lg:grid-cols-3">
              {additionalVideos.map((video) => (
                <article className="panel overflow-hidden p-3" key={video.src}>
                  <h2 className="mb-3 px-1 text-sm font-medium muted-copy">{video.title}</h2>
                  <video className="h-[24rem] w-full rounded-md object-cover" controls playsInline preload="none" src={video.src} />
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
