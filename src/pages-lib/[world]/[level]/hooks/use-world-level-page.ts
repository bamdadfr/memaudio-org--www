import {useEffect, useState} from 'react';
import {useStore} from '../../../../store/use-store';
import {buildDeck} from '../../../../utils/build-deck';
import {fetchApi} from '../../../../utils/fetch-api';
import {Card, CardView} from '../../../../types';

type UseWorldLevelPage = {
  isAnnouncer: boolean;
  deck: CardView[];
}

/**
 * Entry hook for the world level page
 */
export function useWorldLevelPage(world: string, level: string): UseWorldLevelPage {
  const load = useStore((state) => state.deck.load);
  const reset = useStore((state) => state.deck.reset);
  const [deck, setDeck] = useState(undefined);
  const [isAnnouncer, setIsAnnouncer] = useState(false);

  // deck
  useEffect(() => {
    (async () => {
      const cards = await fetchApi(`/api/world/${world}/levels/get/${level}`) as Card[];
      setDeck(buildDeck(cards));
    })();
  }, [level, world]);

  useEffect(() => {
    if (!deck) {
      return;
    }

    load(deck, world, level);

    return () => reset();
  }, [deck, load, reset, world, level]);

  useEffect(() => {
    setIsAnnouncer(parseInt(level) === 1);
  }, [level]);

  return {
    isAnnouncer,
    deck,
  };
}
