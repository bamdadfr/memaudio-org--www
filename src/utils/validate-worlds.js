// noinspection RedundantIfStatementJS

import { Files, Worlds } from '../app/data'

/**
 * @description checks for existence of worlds and files
 *      then checks if there is enough files for the requested level
 * @param {string} world slug
 * @param {string} level slug
 * @returns {boolean} world and level isValid?
 */
export function validateWorlds (world, level) {

    if (typeof Worlds[world] === 'undefined') return false

    if (typeof Files[world] === 'undefined') return false

    if (typeof Worlds[world][level] === 'undefined') return false

    const availableFiles = Object.keys (Files[world]).length

    const requestedFiles = Worlds[world][level].reduce ((previous, current) => {

        const newPrevious = typeof previous === 'number' ? previous : 1
        const newCurrent = typeof current === 'number' ? current : 1

        return newPrevious + newCurrent

    })

    if (requestedFiles > availableFiles) return false

    return true

}