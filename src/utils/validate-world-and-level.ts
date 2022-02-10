import {worlds} from '../app/data/worlds/worlds';

/**
 * Check if the world and level are valid
 */
export function validateWorldAndLevel(world: string, level: string): boolean {
  if (typeof worlds[world] === 'undefined') {
    return false;
  }

  return typeof worlds[world][level] !== 'undefined';
}
