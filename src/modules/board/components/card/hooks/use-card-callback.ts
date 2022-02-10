import {useEffect} from 'react';
import {useStore} from '../../../../../store/use-store';

/**
 * Hook to use the card callback
 */
export function useCardCallback(flipped: boolean, callback: () => void, leaveOnCallback: boolean): void {
  const waitFor = useStore((state) => state.animations.waitFor);
  const setLeave = useStore((state) => state.board.setLeave);
  const setLock = useStore((state) => state.board.setLock);

  useEffect(() => {
    if (!flipped) {
      return;
    }

    if (typeof callback !== 'function') {
      return;
    }

    setLock();

    const d1 = waitFor.card.flip;

    const t1 = setTimeout(() => {
      if (leaveOnCallback) {
        setLeave();
      }
    }, d1);

    const d2 = d1 + waitFor.board.leave;

    const t2 = setTimeout(() => {
      callback();
    }, d2);

    return () => {
      clearTimeout(t1);

      clearTimeout(t2);
    };
  }, [callback, flipped, leaveOnCallback, setLeave, setLock, waitFor.board.leave, waitFor.card.flip]);
}
