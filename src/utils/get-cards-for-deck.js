import { worlds } from '../app/data/worlds/worlds';
import { files } from '../app/data/files/files';
import { pickRandomKeys } from './pick-random-keys';
import { shuffleArray } from './shuffle-array';

/**
 * Get cards for deck
 * Specific world and level
 *
 * @param {string} world - World name
 * @param {string} level - Level name
 * @returns {Array} - Array of cards
 */
export function getCardsForDeck (world, level) {
  const sources = worlds[world][level];
  let cards = [];
  let pool = undefined;

  sources.forEach ((source) => {
    switch (typeof source) {
      case 'string':
        cards = [...cards, source];
        break;

      case 'number':
        pool = pickRandomKeys (files[world], source);
        pool.forEach ((randomSource) => {
          cards = [...cards, randomSource];
        });
        break;

      default:
        throw new Error ('invalid source type');
    }
  });

  cards = shuffleArray (cards);
  return cards;
}
