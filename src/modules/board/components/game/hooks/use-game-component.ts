import {useGameMatch} from './use-game-match';
import {useGameComplete} from './use-game-complete';

/**
 * Entry hook for the game component.
 */
export function useGameComponent(): void {
  useGameMatch();
  useGameComplete();
}
