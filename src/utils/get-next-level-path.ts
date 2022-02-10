import {worlds} from '../app/data/worlds/worlds';

/**
 * Get the next level path for the given level path
 */
export function getNextLevelPath(currentWorld: string, currentLevel: string): string {
  if (typeof currentWorld !== 'string') {
    return '/';
  }

  if (typeof currentLevel !== 'string') {
    return '/';
  }

  const levels = Object.keys(worlds[currentWorld]);
  const currentLevelIndex = levels.indexOf(currentLevel);
  const nextLevelKey = levels[currentLevelIndex + 1];

  if (typeof nextLevelKey === 'undefined') {
    return '/';
  }

  return `/${currentWorld}/${[nextLevelKey]}`;
}
