import { shuffleArray } from './shuffle-array'

/**
 * @param {object} object to pick keys from
 * @param {number} [number=1] how many keys returned
 * @returns {Array.<*>} picked keys
 */
export function pickRandomKeys (object, number = 1) {

    if (typeof object !== 'object') throw new Error ('object is not an object')

    if (typeof number !== 'number') throw new Error ('number is not a number')

    let keys = Object.keys (object)

    keys = shuffleArray (keys)

    const response = []

    for (let i = 0; i < number; i++) {

        response.push (object[keys[i]])
    
    }

    return response

}