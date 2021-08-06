import { worlds } from '../app/data'

/**
 * @returns {string[]} all world keys
 */
export function getWorldKeys () {

    return Object.keys (worlds)

}