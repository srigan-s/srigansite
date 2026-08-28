export const ROBOT_GAME_PROGRESS_KEY = 'robotGameProgress';
export const ROBOT_GAME_UNLOCKS_KEY = 'robotGameUnlockedSections';

export const ROBOT_GAME_MILESTONES = [
  {
    id: 'experience',
    label: 'Experience',
    hits: 3,
    message: 'Professional experience is now online.',
  },
  {
    id: 'projects',
    label: 'Projects',
    hits: 6,
    message: 'Project case studies are now online.',
  },
  {
    id: 'skills',
    label: 'Technical Skills',
    hits: 10,
    message: 'The full technical stack is now online.',
  },
  {
    id: 'secret',
    label: '100% Achievement',
    hits: 15,
    message: 'Website 100% unlocked. Secret reward acquired.',
  },
] as const;

export type RobotGameMilestone = (typeof ROBOT_GAME_MILESTONES)[number];
export type RobotGameMilestoneId = RobotGameMilestone['id'];

export const FINAL_ROBOT_GAME_HITS =
  ROBOT_GAME_MILESTONES[ROBOT_GAME_MILESTONES.length - 1].hits;

export function getUnlockedSectionIds(hits: number) {
  return ROBOT_GAME_MILESTONES.filter((milestone) => hits >= milestone.hits).map(
    (milestone) => milestone.id,
  );
}

export function getMilestone(id: RobotGameMilestoneId) {
  return ROBOT_GAME_MILESTONES.find((milestone) => milestone.id === id)!;
}
