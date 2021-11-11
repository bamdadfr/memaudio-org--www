import { worlds } from '../app/data/worlds/worlds';

/**
 * Get the next level path for the given level path
 *
 * @param {string} world - The world name
 * @param {string} level - The level name
 * @returns {string} - The next level path
 */
export function getNextLevelPath (world, level) {
  if (typeof world !== 'string') {
    return '/';
  }

  if (typeof level !== 'string') {
    return '/';
  }

  const levels = Object.keys (worlds[world]);
  const currentLevelIndex = levels.indexOf (level);
  const nextLevelKey = levels[currentLevelIndex + 1];

  if (typeof nextLevelKey === 'undefined') {
    return '/';
  }

  return `/${world}/${[nextLevelKey]}`;
}
