import { Theme } from '../app/styles'
import { Files, Worlds } from '../app/data'
import { pickRandomKeys } from './pick-random-keys'
import { shuffleArray } from './shuffle-array'

/**
 * @param {string} source audio blob
 * @param {string} color hex
 * @returns {object} card object
 */
function getCard (source, color = Theme.white) {

    return {
        'src': source,
        'color': color,
        'drawn': false,
        'matched': false,
    }

}

/**
 * @param {string} world slug
 * @param {string} level slug
 * @returns {Array} shuffled deck
 */
export function buildDeck (world, level) {

    const sources = Worlds[world][level]
    let deck = []
    let pool = undefined

    sources.forEach ((source) => {

        switch (typeof source) {

            case 'string':

                deck = [
                    ...deck,
                    getCard (source),
                    getCard (source),
                ]

                break

            case 'number':
                pool = pickRandomKeys (Files[world], source)

                pool.forEach ((randomSource) => {

                    deck = [
                        ...deck,
                        getCard (randomSource),
                        getCard (randomSource),
                    ]

                })

                break

            default:
                throw new Error ('invalid source type')

        }
    
    })

    deck = shuffleArray (deck)

    return deck

}
