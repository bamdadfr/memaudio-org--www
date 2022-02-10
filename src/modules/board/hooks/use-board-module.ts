import {Ref} from 'react';
import {useMeasure} from 'react-use';
import {useBoardSize} from './use-board-size';
import {
  UseBoardTransitions,
  useBoardTransitions,
} from './use-board-transitions';
import {useStore} from '../../../store/use-store';
import {CardView} from '../../../types';

type UseBoardModule = {
  columns: number;
  rows: number;
  ref: Ref<HTMLDivElement>;
  transitions: UseBoardTransitions['transitions'];
  gameIsRunning: boolean;
}

/**
 * Entry hook for the board module
 */
export function useBoardModule(cards: CardView[]): UseBoardModule {
  const {columns, rows} = useBoardSize(cards.length);
  const [ref, {width}] = useMeasure();
  const {transitions} = useBoardTransitions(cards, {width});
  const gameIsRunning = useStore((state) => state.game.isRunning);

  return {
    columns,
    rows,
    ref,
    transitions,
    gameIsRunning,
  };
}
