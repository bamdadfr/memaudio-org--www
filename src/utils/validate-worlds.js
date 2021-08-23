// noinspection RedundantIfStatementJS

import { worlds } from '../app/data/worlds/worlds'

/**
 * @description checks for existence of worlds and levels
 * @param {string} world slug
 * @param {string} level slug
 * @returns {boolean} world and level isValid?
 */
export function validateWorlds (world, level) {

    if (typeof worlds[world] === 'undefined') return false

    if (typeof worlds[world][level] === 'undefined') return false

    return true

}