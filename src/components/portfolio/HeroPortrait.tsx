import { GitHubContributionCard } from './GitHubContributionCard';

export function HeroPortrait() {
  return (
    <div className="panel mx-auto w-full max-w-[28rem] overflow-hidden p-3">
      <div className="grid gap-3 md:grid-cols-[0.85fr_1.15fr] lg:grid-cols-1">
        <div className="overflow-hidden rounded-md border hairline">
          <img
            alt="Srigan Sivagnanenthirarajah"
            className="h-[20rem] w-full object-cover object-center md:h-full lg:h-[24rem]"
            src="/sriganBlue.jpeg"
          />
        </div>
        <div className="grid content-between gap-4 p-1">
          <div>
            <p className="eyebrow">Waterloo ECE</p>
            <h2 className="mt-3 text-2xl font-semibold">Robotics, embedded systems, and software.</h2>
          </div>
          <GitHubContributionCard compact embedded />
        </div>
      </div>
    </div>
  );
}
