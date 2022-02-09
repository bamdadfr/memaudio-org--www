import {useEffect, useState} from 'react';
import {useStore} from '../../../../../store/use-store';

/**
 * Hook to handle when 2 cards are drawn and whether they match
 */
export function useGameMatch() {
  const gameIsRunning = useStore((state) => state.game.isRunning);
  const waitFor = useStore((state) => state.animations.waitFor);
  const getCard = useStore((state) => state.deck.getCard);
  const drawn = useStore((state) => state.deck.drawn);
  const setLock = useStore((state) => state.board.setLock);
  const setUnlock = useStore((state) => state.board.setUnlock);
  const setUndraw = useStore((state) => state.deck.setUndraw);
  const setMatch = useStore((state) => state.deck.setMatch);
  const [shouldUnlock, setShouldUnlock] = useState(false);

  // watch drawn cards count => match/undraw => ask for unlock
  useEffect(() => {
    if (!gameIsRunning) {
      return;
    }

    if (drawn.length !== 2) {
      return;
    }

    setLock();

    const t1 = setTimeout(() => {
      if (getCard(drawn[0]).src === getCard(drawn[1]).src) {
        setMatch();

        setShouldUnlock(true);
      } else {
        setUndraw();

        setShouldUnlock(true);
      }
    }, waitFor.card.flip);

    return () => clearTimeout(t1);
  }, [drawn, gameIsRunning, getCard, setLock, setMatch, setUndraw, waitFor.card.flip]);

  // unlock effect
  useEffect(() => {
    if (!gameIsRunning) {
      return;
    }

    if (!shouldUnlock) {
      return;
    }

    const t1 = setTimeout(() => {
      setUnlock();

      setShouldUnlock(false);
    }, waitFor.card.flip);

    return () => clearTimeout(t1);
  }, [gameIsRunning, setUnlock, shouldUnlock, waitFor.card.flip]);
}
