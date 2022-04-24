import create from 'zustand';
import {gameStore} from './game/game.store';
import {animationsStore} from './animations/animations.store';
import {boardStore} from './board/board.store';
import {deckStore} from './deck/deck.store';
import {appStore} from './app/app.store';
import {Card} from '../types';

interface StoreInterface {
  animations: {
    waitFor: {
      board: {
        enter: number;
        leave: number;
      };
      card: {
        flip: number;
      };
    };
  };
  app: {
    volume: number;
    setVolume: (v: number) => void;
  };
  deck: {
    cards: {
      [key: number]: Card;
    };
    getCard: (id: number) => Card;
    drawn: number[];
    toMatch: number;
    load: (newCards: Card[], world: string, level: string) => void;
    reset: () => void;
    setDraw: (id: number) => void;
    setUndraw: () => void;
    setMatch: () => void;
  };
  board: {
    isLocked: boolean;
    isLeaving: boolean;
    setLock: () => void;
    setUnlock: () => void;
    setLeave: () => void;
    resetLeave: () => void;
  };
  game: {
    isRunning: boolean;
    isComplete: boolean;
    world: string | undefined;
    level: string | undefined;
    complete: () => void;
  };
}

export const useStore = create<StoreInterface>(
  (set, get) => ({
    ...appStore(set),
    ...gameStore(set),
    ...animationsStore(),
    ...boardStore(set),
    ...deckStore(set, get),
  }),
);
