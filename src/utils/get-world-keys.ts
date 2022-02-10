import {worlds} from '../app/data/worlds/worlds';

/**
 * Get the keys of the world object
 */
export function getWorldKeys(): string[] {
  return Object.keys(worlds);
}
