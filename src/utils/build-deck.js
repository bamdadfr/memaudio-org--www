import { shuffleArray } from './shuffle-array'
import { Theme } from '../app/styles/theme'

/**
 * @param {string[]} cards cards
 * @returns {Array} shuffled deck
 */
export function buildDeck (cards) {

    let deck = []

    const card = (source) => ({
        'src': source,
        'color': Theme.white,
        'drawn': false,
        'matched': false,
    })

    cards.forEach ((source) => {

        deck = [
            ...deck,
            card (source),
            card (source),
        ]
    
    })

    deck = shuffleArray (deck)

    return deck

}