import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Play, Trophy } from 'lucide-react';
import { projectDetails, projects } from '@/data/portfolio';
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

  const index = projects.findIndex((item) => item.id === project.id);
  const nextProject = projects[(index + 1) % projects.length];
  const primaryVideo = project.heroVideo ?? (project.media?.type === 'video' ? project.media.src : undefined);
  const additionalVideos = project.videos?.filter((video) => video.src !== primaryVideo) ?? [];
  const poster = project.media?.poster ?? (project.media?.type === 'image' ? project.media.src : undefined);
  const hasHeroMedia = Boolean(primaryVideo || project.videoEmbedUrl || project.media?.type === 'image');

  return (
    <main className="project-case page-shell">
      <div className="content-shell">
        <div className="project-case-topbar">
          <Link className="link-button" data-cursor="hover" href="/#projects">
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
          <ThemeToggle />
        </div>

        <header className="project-case-intro">
          <p className="eyebrow">Case study / {String(index + 1).padStart(2, '0')} · {project.year}</p>
          <p className="project-case-category">{project.eyebrow}</p>
          <h1>{project.name}</h1>
          <p className="project-case-summary">{project.summary}</p>
          {project.award ? (
            <p className="project-case-award"><Trophy className="h-4 w-4 shrink-0" />{project.award.label}</p>
          ) : null}
        </header>

        <div className="project-case-meta">
          <div>
            <p className="eyebrow">My role</p>
            <p>{project.role}</p>
          </div>
          <div>
            <p className="eyebrow">Built with</p>
            <ul className="project-case-stack">
              {project.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <div className="project-case-links">
              {project.github ? (
                <a href={project.github} rel="noopener noreferrer" target="_blank"><Github className="h-4 w-4" /> Code</a>
              ) : null}
              {project.demo ? (
                <a href={project.demo} rel="noopener noreferrer" target="_blank"><ExternalLink className="h-4 w-4" /> {project.demoLabel ?? 'Demo'}</a>
              ) : null}
              {project.videoUrl ? (
                <a href={project.videoUrl} rel="noopener noreferrer" target="_blank"><Play className="h-4 w-4" /> Video</a>
              ) : null}
            </div>
          </div>
        </div>

        {hasHeroMedia ? (
          <figure className="project-case-feature">
            {primaryVideo ? (
              <video
                aria-label={`${project.name} project demo`}
                autoPlay={project.id === 'pillsense'}
                controls
                loop={project.id === 'pillsense'}
                muted={project.id === 'pillsense'}
                playsInline
                poster={poster}
                preload="metadata"
                src={primaryVideo}
              />
            ) : project.videoEmbedUrl ? (
              <iframe
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                src={project.videoEmbedUrl}
                title={`${project.name} demo video`}
              />
            ) : project.media?.type === 'image' ? (
              <img alt={project.media.alt} src={project.media.src} />
            ) : null}
            <figcaption>{project.name} demo</figcaption>
          </figure>
        ) : null}

        {project.highlights.length ? (
          <section className="project-case-section" aria-labelledby="project-highlights">
            <div className="project-case-section-heading">
              <p className="eyebrow">At a glance</p>
              <h2 id="project-highlights">Key details</h2>
            </div>
            <div className="project-case-highlights">
              {project.highlights.map((highlight, highlightIndex) => (
                <article className="project-case-highlight" key={highlight.title}>
                  <span className="project-case-number">{String(highlightIndex + 1).padStart(2, '0')}</span>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.copy}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {project.architectureImages?.length ? (
          <section className="project-case-section" aria-labelledby="project-architecture">
            <div className="project-case-section-heading">
              <p className="eyebrow">System view</p>
              <h2 id="project-architecture">Architecture</h2>
              {project.architectureSummary ? <p>{project.architectureSummary}</p> : null}
            </div>
            <div className="project-case-gallery">
              {project.architectureImages.map((diagram) => (
                <figure className="project-case-image" key={diagram.src}>
                  <picture>
                    {diagram.mobileSrc ? <source media="(max-width: 639px)" srcSet={diagram.mobileSrc} /> : null}
                    <img alt={diagram.alt} loading="lazy" src={diagram.src} />
                  </picture>
                  <figcaption>{diagram.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {project.images?.length ? (
          <section className="project-case-section" aria-labelledby="project-gallery">
            <div className="project-case-section-heading">
              <p className="eyebrow">Prototype details</p>
              <h2 id="project-gallery">Inside the build</h2>
            </div>
            <div className="project-case-gallery">
              {project.images.map((image) => (
                <figure className="project-case-image" key={image.src}>
                  <img alt={image.alt} loading="lazy" src={image.src} />
                  <figcaption>{image.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {additionalVideos.length ? (
          <section className="project-case-section" aria-labelledby="project-more-video">
            <div className="project-case-section-heading">
              <p className="eyebrow">More footage</p>
              <h2 id="project-more-video">Tests and walkthroughs</h2>
            </div>
            <div className="project-case-video-grid">
              {additionalVideos.map((video) => (
                <figure className="project-case-video" key={video.src}>
                  <video aria-label={video.title} controls playsInline preload="none" src={video.src} />
                  <figcaption>{video.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {project.sections.length || project.code ? (
          <details className="project-case-details">
            <summary>Technical details</summary>
            {project.sections.length ? (
              <div className="project-case-story">
                {project.sections.map((section) => (
                  <article className="project-case-story-row" key={section.title}>
                    <div className="project-case-story-title"><h3>{section.title}</h3></div>
                    <p>{section.copy}</p>
                  </article>
                ))}
              </div>
            ) : null}
            {project.code ? (
              <div className="project-case-details-code">
                <h3>{project.code.label}</h3>
                <pre className="project-case-code"><code>{project.code.snippet}</code></pre>
              </div>
            ) : null}
          </details>
        ) : null}

        <nav className="project-case-next" aria-label="Next project">
          <span className="eyebrow">Next case study</span>
          <Link href={`/projects/${nextProject.id}`}>{nextProject.name}<ArrowRight className="h-6 w-6" /></Link>
        </nav>
      </div>
    </main>
  );
}
