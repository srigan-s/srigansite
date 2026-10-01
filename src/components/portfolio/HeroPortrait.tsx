import Image from 'next/image';
import { GitHubContributionCard } from './GitHubContributionCard';

export function HeroPortrait() {
  return (
    <div className="hero-portrait panel mx-auto w-full max-w-[28rem] overflow-hidden p-3">
      <div className="hero-portrait-grid grid gap-3 md:grid-cols-[0.85fr_1.15fr] lg:grid-cols-1">
        <div className="hero-portrait-photo overflow-hidden rounded-md border hairline">
          <Image
            alt="Srigan Sivagnanenthirarajah"
            className="h-[20rem] w-full object-cover object-center md:h-full lg:h-[24rem]"
            height={640}
            sizes="(max-width: 767px) 40vw, (max-width: 1023px) 40vw, 448px"
            src="/sriganBlue.jpeg"
            width={640}
          />
        </div>
        <div className="hero-portrait-copy grid content-between gap-4 p-1">
          <div>
            <p className="eyebrow">Waterloo ECE</p>
            <h2 className="mt-3 text-2xl font-semibold">Semiconductor hardware, controls, robotics, and embedded systems.</h2>
          </div>
          <GitHubContributionCard compact embedded />
        </div>
      </div>
    </div>
  );
}
