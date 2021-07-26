import { Theme } from '../app/styles'
import { Files, Worlds } from '../app/data'
import { pickKeys } from './pick-keys'
import { shuffleArray } from './shuffle-array'

/**
 * @param {object} card object
 * @param {Array} deck array
 * @returns {void} add the same card twice to the deck
 */
function addPair (card, deck) {

    return [1, 2].forEach (() => deck.push ({ ...card }))

}

/**
 * @param {string} src audio blob
 * @param {string} color hex
 * @returns {object} card object
 */
function getCard (src, color = Theme.white) {

    return {
        'src': src,
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

    for (let i = 0; i < sources.length; i++) {

        // manual data entry
        if (typeof sources[i] === 'string') {

            const card = getCard (sources[i])

            addPair (card, deck)

        }

        // automatic data entry
        if (typeof sources[i] === 'number') {

            const pool = pickKeys (Files[world], sources[i])

            for (let j = 0; j < sources[i]; j++) {

                const card = getCard (pool[j])

                addPair (card, deck)

            }

        }

    }

    deck = shuffleArray (deck)

    return deck

}