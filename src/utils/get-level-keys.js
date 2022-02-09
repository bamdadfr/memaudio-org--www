import {worlds} from '../app/data/worlds/worlds';

/**
 * Get the keys of the levels of a world
 *
 * @param {string} world - The world
 * @returns {string[]} - The keys of the levels
 */
export function getLevelKeys(world) {
  return Object.keys(worlds[world]);
}
