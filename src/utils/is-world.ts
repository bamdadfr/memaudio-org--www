import {worlds} from '../app/data/worlds/worlds';

/**
 * Does the given world exist?
 */
export function isWorld(world: string): boolean {
  return typeof worlds[world] !== 'undefined';
}
