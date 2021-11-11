import { getLevelKeys } from './get-level-keys';

/**
 * Get the next level key
 *
 * @param {string} world - The world
 * @param {string} level - The level
 * @returns {string|undefined} - The next level key
 */
export function getNextLevelKey (world, level) {
  const levelKeys = getLevelKeys (world);
  const currentIndex = levelKeys.indexOf (level);
  const nextIndex = currentIndex + 1;
  const nextKey = levelKeys[nextIndex];

  if (typeof nextKey === 'undefined') {
    return;
  }

  return nextKey;
}
