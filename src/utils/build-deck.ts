import {shuffleArray} from './shuffle-array';
import {Theme} from '../app/styles/theme';

export type Card = {
  src: string;
  color: string;
  drawn: boolean;
  matched: boolean;
}

/**
 * Builds a deck of cards
 *
 * @param {string[]} baseCards - The base cards to build the deck from
 * @returns {Card[]} - The deck of cards
 */
export function buildDeck(baseCards: string[]): Card[] {
  let deck = [];

  const card = (source) => ({
    src: source,
    color: Theme.white,
    drawn: false,
    matched: false,
  });

  baseCards.forEach((source) => {
    deck = [
      ...deck,
      card(source),
      card(source),
    ];
  });

  deck = shuffleArray(deck);
  return deck;
}
