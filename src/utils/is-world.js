import { worlds } from '../app/data/worlds/worlds';

/**
 * Does the given world exist?
 *
 * @param {string} world - The world to check
 * @returns {boolean} - Whether the world exists
 */
export function isWorld (world) {
  return typeof worlds[world] !== 'undefined';
}
