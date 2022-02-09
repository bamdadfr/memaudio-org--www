import {useCallback} from 'react';
import useSound from 'use-sound';
import {useStore} from '../../../../../store/use-store';

type UseCardClick = {
  handleClick: () => void;
}

/**
 * Hook for handling card click
 *
 * @param {function(): void} toggleFlipped - Function to toggle flipped state
 * @param {string} src - Sound source
 * @returns {UseCardClick} - Click handler
 */
export function useCardClick(toggleFlipped: () => void, src: string): UseCardClick {
  const gameIsRunning = useStore((state: any) => state.game.isRunning);
  const volume = useStore((state: any) => state.app.volume);

  const [play] = useSound(
    src, {
      volume,
    },
  );

  const handleClick = useCallback(() => {
    toggleFlipped();

    if (!gameIsRunning) {
      return;
    }

    if (!src) {
      return;
    }

    play();
  }, [toggleFlipped, gameIsRunning, src, play]);

  return {handleClick};
}
