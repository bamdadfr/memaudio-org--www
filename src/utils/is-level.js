import {worlds} from '../app/data/worlds/worlds';

/**
 * Does the given level exist in the given world?
 *
 * @param {string} world - The world to check
 * @param {string} level - The level to check
 * @returns {boolean} - Whether the level exists in the world
 */
export function isLevel(world, level) {
  return typeof worlds[world][level] !== 'undefined';
}
