import shuffle from 'just-shuffle';
import {theme} from '../app/styles/theme';
import {Card} from '../types';

/**
 * Builds a deck of cards
 * Take the base cards, add their pair then shuffle
 */
export function buildDeck(baseCards: Card[]): Card[] {
  let deck = [];

  const card = (source) => ({
    src: source,
    color: theme.white,
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

  deck = shuffle(deck);
  return deck;
}
