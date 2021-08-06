// noinspection RedundantIfStatementJS

import { worlds } from '../app/data/worlds/worlds'
import { files } from '../app/data/files/files'

/**
 * @description checks for existence of worlds and files
 *      then checks if there is enough files for the requested level
 * @param {string} world slug
 * @param {string} level slug
 * @returns {boolean} world and level isValid?
 */
export function validateWorlds (world, level) {

    if (typeof worlds[world] === 'undefined') return false

    if (typeof files[world] === 'undefined') return false

    if (typeof worlds[world][level] === 'undefined') return false

    const availableFiles = Object.keys (files[world]).length

    const requestedFiles = worlds[world][level].reduce ((previous, current) => {

        const newPrevious = typeof previous === 'number' ? previous : 1
        const newCurrent = typeof current === 'number' ? current : 1

        return newPrevious + newCurrent

    })

    if (requestedFiles > availableFiles) return false

    return true

}