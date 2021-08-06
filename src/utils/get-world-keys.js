import { worlds } from '../app/data/worlds/worlds'

/**
 * @returns {string[]} all world keys
 */
export function getWorldKeys () {

    return Object.keys (worlds)

}