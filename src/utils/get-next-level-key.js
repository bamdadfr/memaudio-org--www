import { getLevelKeys } from './get-level-keys'

/**
 * @param {string} world slug
 * @param {string} level slug
 * @returns {string|undefined} next level key
 */
export function getNextLevelKey (world, level) {

    const levelKeys = getLevelKeys (world)
    const currentIndex = levelKeys.indexOf (level)
    const nextIndex = currentIndex + 1
    const nextKey = levelKeys[nextIndex]

    if (typeof nextKey === 'undefined') return

    return nextKey

}