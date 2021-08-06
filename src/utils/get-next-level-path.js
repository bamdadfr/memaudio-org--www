import { worlds } from '../app/data'

/**
 * @param {string} world slug
 * @param {string} level slug
 * @returns {string} route
 */
export function getNextLevelPath (world, level) {

    if (typeof world !== 'string') return '/'

    if (typeof level !== 'string') return '/'

    const levels = Object.keys (worlds[world])
    const currentLevelIndex = levels.indexOf (level)
    const nextLevelKey = levels[currentLevelIndex + 1]

    if (typeof nextLevelKey === 'undefined') return '/'

    return `/${world}/${[nextLevelKey]}`

}