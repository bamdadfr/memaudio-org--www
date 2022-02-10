import {worlds} from '../app/data/worlds/worlds';

/**
 * Does the given level exist in the given world?
 */
export function isLevel(world: string, level: string): boolean {
  return typeof worlds[world][level] !== 'undefined';
}
