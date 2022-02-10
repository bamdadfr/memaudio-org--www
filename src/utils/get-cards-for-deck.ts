import shuffle from 'just-shuffle';
import {worlds} from '../app/data/worlds/worlds';
import {files} from '../app/data/files/files';
import {pickRandomKeys} from './pick-random-keys';
import {Card} from '../types';

/**
 * Get cards for deck
 * Specific world and level
 */
export function getCardsForDeck(world: string, level: string): Card[] {
  const sources = worlds[world][level];
  let cards = [];
  let pool = undefined;

  sources.forEach((source) => {
    switch (typeof source) {
      case 'string':
        cards = [...cards, source];
        break;

      case 'number':
        pool = pickRandomKeys(files[world], source);
        pool.forEach((randomSource) => {
          cards = [...cards, randomSource];
        });
        break;

      default:
        throw new Error('invalid source type');
    }
  });

  cards = shuffle(cards);
  return cards;
}
