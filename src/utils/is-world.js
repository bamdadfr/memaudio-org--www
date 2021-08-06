import { worlds } from '../app/data'

/**
 * @param {string} world world key
 * @returns {boolean} world does exist?
 */
export function isWorld (world) {

    return typeof worlds[world] !== 'undefined'

}