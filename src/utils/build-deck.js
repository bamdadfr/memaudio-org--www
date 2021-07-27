import { Theme } from '../app/styles'
import { Files, Worlds } from '../app/data'
import { pickRandomKeys } from './pick-random-keys'
import { shuffleArray } from './shuffle-array'

/**
 * @param {Array} deck array
 * @param {string} cardSource audio blob
 * @param {string} cardColor hex
 * @returns {void} add card x2 to the deck
 */
function addPair (deck, cardSource, cardColor = Theme.white) {

    const card = {
        'src': cardSource,
        'color': cardColor,
        'drawn': false,
        'matched': false,
    }

    return [1, 2].forEach (() => deck.push ({ ...card }))

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

                addPair (deck, source)

                break

            case 'number':
                pool = pickRandomKeys (Files[world], source)

                pool.forEach ((randomSource) => {

                    addPair (deck, randomSource)

                })

                break

            default:
                throw new Error ('invalid source type')

        }
    
    })

    deck = shuffleArray (deck)

    return deck

}
