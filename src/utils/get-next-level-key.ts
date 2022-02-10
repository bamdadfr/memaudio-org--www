import {getLevelKeys} from './get-level-keys';

/**
 * Get the next level key
 */
export function getNextLevelKey(currentWorld: string, currentLevel: string): string | undefined {
  const levelKeys = getLevelKeys(currentWorld);
  const currentIndex = levelKeys.indexOf(currentLevel);
  const nextIndex = currentIndex + 1;
  const nextKey = levelKeys[nextIndex];

  if (typeof nextKey === 'undefined') {
    return;
  }

  return nextKey;
}
