import { worlds } from '../app/data/worlds/worlds';

/**
 * Check if the world and level are valid
 *
 * @param {string} world - The world to check
 * @param {string} level - The level to check
 * @returns {boolean} - True if the world and level are valid
 */
export function validateWorldAndLevel (world, level) {
  if (typeof worlds[world] === 'undefined') {
    return false;
  }

  // noinspection RedundantIfStatementJS
  if (typeof worlds[world][level] === 'undefined') {
    return false;
  }

  return true;
}
