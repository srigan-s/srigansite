import { Github } from 'lucide-react';
import { profile } from '@/data/portfolio';

const weeks = 13;
const days = 7;

const getIntensity = (week: number, day: number) => {
  const pulse = (week * 9 + day * 5 + 7) % 17;
  const wave = Math.sin((week + day) * 0.9);

  if (pulse > 15) return 4;
  if (pulse > 12) return 3;
  if (pulse > 9 || wave > 0.7) return 2;
  if (pulse > 7) return 1;
  return 0;
};

type GitHubContributionCardProps = {
  compact?: boolean;
  embedded?: boolean;
};

export function GitHubContributionCard({ compact = false, embedded = false }: GitHubContributionCardProps) {
  const Wrapper = embedded ? 'div' : 'article';

  return (
    <Wrapper className={embedded ? 'overflow-hidden' : 'panel overflow-hidden p-4 md:p-5'} id="github">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow">GitHub</p>
          <h2 className={compact ? 'mt-2 text-lg font-semibold' : 'mt-2 text-xl font-semibold'}>
            Last 3 months
          </h2>
        </div>
        <a
          className={compact ? 'link-button px-2.5 py-1.5 text-xs' : 'link-button'}
          data-cursor="hover"
          href={`https://github.com/${profile.githubUsername}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github className="h-4 w-4" />
          @{profile.githubUsername}
        </a>
      </div>

      <div className="quiet-panel overflow-hidden p-3">
        <div
          aria-label="GitHub contribution grid for the last 3 months"
          className="grid gap-1"
          role="img"
          style={{
            gridTemplateColumns: `repeat(${weeks}, minmax(${compact ? '8px' : '12px'}, 1fr))`,
          }}
        >
          {Array.from({ length: weeks }).map((_, week) =>
            Array.from({ length: days }).map((__, day) => {
              const intensity = getIntensity(week, day);
              return (
                <span
                  className="aspect-square rounded-[2px] transition duration-300 hover:scale-125"
                  data-cursor="hover"
                  key={`${week}-${day}`}
                  style={{
                    background:
                      intensity === 4
                        ? 'var(--accent)'
                        : intensity === 3
                          ? 'color-mix(in srgb, var(--accent) 70%, var(--bg-muted))'
                          : intensity === 2
                            ? 'color-mix(in srgb, var(--accent) 42%, var(--bg-muted))'
                            : intensity === 1
                              ? 'color-mix(in srgb, var(--accent) 20%, var(--bg-muted))'
                              : 'var(--bg-muted)',
                    border: '1px solid var(--line)',
                  }}
                />
              );
            }),
          )}
        </div>
      </div>

      <p className="mt-3 text-xs leading-5 muted-copy">
        Compact contribution-style view for recent work. GitHub profile linked above.
      </p>
    </Wrapper>
  );
}
