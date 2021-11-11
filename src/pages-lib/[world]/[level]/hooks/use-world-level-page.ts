import { useEffect, useState } from 'react';
import { useStore } from '../../../../store/use-store';
import { buildDeck, Card } from '../../../../utils/build-deck';
import { fetchApi } from '../../../../utils/fetch-api';

type UseWorldLevelPage = {
  isAnnouncer: boolean;
  deck: Card[];
}

/**
 * Entry hook for the world level page
 *
 * @param {string} world - The world name
 * @param {string} level - The level name
 * @returns {UseWorldLevelPage} - Deck and announcer state
 */
export function useWorldLevelPage (world: string, level: string): UseWorldLevelPage {
  const load = useStore ((state: any) => state.deck.load);
  const reset = useStore ((state: any) => state.deck.reset);
  const [deck, setDeck] = useState (undefined);
  const [isAnnouncer, setIsAnnouncer] = useState (false);

  // deck
  useEffect (() => {
    (async () => {
      const cards = await fetchApi (`/api/world/${world}/levels/get/${level}`);

      setDeck (buildDeck (cards));
    }) ();
  }, [level, world]);

  useEffect (() => {
    if (!deck) {
      return;
    }

    load (deck, world, level);

    return () => reset ();
  }, [deck, load, reset, world, level]);

  useEffect (() => {
    setIsAnnouncer (parseInt (level) === 1);
  }, [level]);

  return {
    isAnnouncer,
    deck,
  };
}
