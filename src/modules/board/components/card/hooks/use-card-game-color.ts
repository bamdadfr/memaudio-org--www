import {useEffect, useState} from 'react';
import {useStore} from '../../../../../store/use-store';
import {theme} from '../../../../../app/styles/theme';

/**
 * Hook to get the card game color
 */
export function useCardGameColor(id: number): string {
  const gameIsRunning = useStore((state) => state.game.isRunning);
  const [color, setColor] = useState(theme.white);
  const isDrawn = useStore((state) => state.deck.getCard(id)?.drawn);
  const isMatched = useStore((state) => state.deck.getCard(id)?.matched);

  useEffect(() => {
    if (!gameIsRunning) {
      return;
    }

    if (typeof isDrawn === 'undefined') {
      return;
    }

    if (typeof isMatched === 'undefined') {
      return;
    }

    if (!isMatched && !isDrawn) {
      return setColor(theme.white);
    }

    if (isMatched) {
      return setColor(theme.yellow);
    }

    if (isDrawn) {
      return setColor(theme.blue);
    }
  }, [gameIsRunning, isDrawn, isMatched]);

  return color;
}
