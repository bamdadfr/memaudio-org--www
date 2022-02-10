import {worlds} from '../app/data/worlds/worlds';

/**
 * Get the keys of the levels of a world
 */
export function getLevelKeys(world: string): string[] {
  return Object.keys(worlds[world]);
}
