import { Files, Worlds } from '../app/data'

/**
 * @param {string} world slug
 * @param {string} level slug
 * @returns {boolean} world and level isValid?
 */
export function validateWorlds (world, level) {

    if (typeof Worlds[world] === 'undefined') return false

    if (typeof Files[world] === 'undefined') return false

    // noinspection RedundantIfStatementJS
    if (typeof Worlds[world][level] === 'undefined') return false

    return true

}