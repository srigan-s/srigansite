import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projectDetails, type ProjectDetail } from '@/data/portfolio';
import { KiwiDockDiagrams } from '@/components/projects/KiwiDockDiagrams';
import { ThemeToggle } from '@/components/portfolio/ThemeToggle';

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function ArchitectureSection({ project }: { project: ProjectDetail }) {
  if (!project.architectureImages?.length) return null;

  return (
    <section aria-labelledby={`${project.id}-architecture-title`} className="section-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Architecture</p>
          <h2 className="section-title mt-3" id={`${project.id}-architecture-title`}>
            System architecture
          </h2>
          {project.architectureSummary ? (
            <p className="mt-4 max-w-3xl text-sm leading-7 muted-copy">{project.architectureSummary}</p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-6">
        {project.architectureImages.map((architectureImage) => (
          <figure className="panel overflow-hidden p-2" key={architectureImage.src}>
            <picture>
              {architectureImage.mobileSrc ? (
                <source media="(max-width: 639px)" srcSet={architectureImage.mobileSrc} />
              ) : null}
              <img
                alt={architectureImage.alt}
                className="h-auto w-full rounded-md"
                loading="lazy"
                src={architectureImage.src}
              />
            </picture>
            <figcaption className="px-2 pb-2 pt-3 text-xs leading-5 muted-copy md:text-sm">
              {architectureImage.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return projectDetails.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectDetails.find((item) => item.id === slug);

  if (!project) {
    return {
      title: 'Project not found',
    };
  }

  return {
    title: `${project.name} | Srigan Sivagnanenthirarajah`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectDetails.find((item) => item.id === slug);

  if (!project) notFound();

  return (
    <main className="page-shell pb-20 pt-8">
      <div className="content-shell">
        <div className="mb-10 flex items-center justify-between">
          <Link className="link-button" data-cursor="hover" href="/#projects">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
          <ThemeToggle />
        </div>

        <section className="grid gap-10 pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{project.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 muted-copy">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="quiet-panel px-3 py-1.5 text-sm muted-copy">{project.role}</span>
              {project.stack.map((item) => (
                <span className="quiet-panel px-3 py-1.5 text-sm muted-copy" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.github ? (
                <a className="link-button" data-cursor="hover" href={project.github} rel="noopener noreferrer" target="_blank">
                  <Github className="h-4 w-4" />
                  Source
                </a>
              ) : null}
              {project.demo ? (
                <a className="accent-button" data-cursor="hover" href={project.demo} rel="noopener noreferrer" target="_blank">
                  <ExternalLink className="h-4 w-4" />
                  Live
                </a>
              ) : null}
            </div>
          </div>

          <div className="panel overflow-hidden p-2">
            {project.images?.length ? (
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
                autoPlay
                className="h-[22rem] w-full rounded-md object-cover md:h-[30rem]"
                controls
                loop
                muted
                playsInline
                preload="metadata"
                src={project.heroVideo}
              />
            ) : project.media?.type === 'image' ? (
              <img
                alt={project.media.alt}
                className="h-[22rem] w-full rounded-md object-cover md:h-[30rem]"
                src={project.media.src}
              />
            ) : null}
          </div>
        </section>

        {project.architecturePlacement === 'after-overview' ? <ArchitectureSection project={project} /> : null}

        <section className="section-shell">
          <div className="grid gap-4 md:grid-cols-3">
            {project.highlights.map((highlight) => (
              <article className="quiet-panel interactive p-5" data-cursor="hover" key={highlight.title}>
                <h2 className="text-lg font-semibold">{highlight.title}</h2>
                <p className="mt-4 text-sm leading-6 muted-copy">{highlight.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="eyebrow">Project Notes</p>
            <h2 className="section-title">The details that mattered.</h2>
          </div>
          <div className="grid gap-4">
            {project.sections.map((section) => (
              <article className="quiet-panel p-5" key={section.title}>
                <h3 className="text-xl font-semibold">{section.title}</h3>
                <p className="mt-4 text-sm leading-7 muted-copy">{section.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {project.architecturePlacement !== 'after-overview' ? <ArchitectureSection project={project} /> : null}

        {project.id === 'kiwidock-ros2-ev-charging-dock' ? <KiwiDockDiagrams /> : null}

        {project.videos?.length ? (
          <section className="section-shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Videos</p>
                <h2 className="section-title mt-3">Project demos and test footage.</h2>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {project.videos.map((video) => (
                <article className="panel overflow-hidden p-3" key={video.src}>
                  <h3 className="mb-3 px-1 text-sm font-medium muted-copy">{video.title}</h3>
                  <video
                    className="h-[24rem] w-full rounded-md object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    src={video.src}
                  />
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {project.code ? (
          <section className="section-shell">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="eyebrow">Code</p>
                <h2 className="section-title mt-3">{project.code.label}</h2>
              </div>
              <pre className="panel overflow-x-auto p-5 text-xs leading-6 muted-copy">
                <code>{project.code.snippet}</code>
              </pre>
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
