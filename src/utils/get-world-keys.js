import {worlds} from '../app/data/worlds/worlds';

/**
 * Get the keys of the world object
 *
 * @returns {string[]} - The keys of the world object
 */
export function getWorldKeys() {
  return Object.keys(worlds);
}
