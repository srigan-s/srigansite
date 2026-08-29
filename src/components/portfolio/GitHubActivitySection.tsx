import { GitHubContributionCard } from './GitHubContributionCard';
import { SectionReveal } from './SectionReveal';

export function GitHubActivitySection() {
  return (
    <SectionReveal className="section-shell" id="github">
      <div className="content-shell">
        <GitHubContributionCard />
      </div>
    </SectionReveal>
  );
}
