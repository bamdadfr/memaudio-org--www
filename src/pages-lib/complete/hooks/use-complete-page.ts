import {useEffect, useRef} from 'react';
import {useRouter} from 'next/router';
import {useStore} from '../../../store/use-store';

interface UseCompletePage {
  world: string;
  level: string;
}

/**
 * Entry hook for the complete page
 */
export function useCompletePage(): UseCompletePage {
  const router = useRouter();
  const isComplete = useStore((state) => state.game.isComplete);
  const isCompleteRef = useRef(isComplete); // use this to keep initial value (replace useEffect [])
  const world = useStore((state) => state.game.world);
  const level = useStore((state) => state.game.level);

  useEffect(() => {
    (async () => {
      if (isCompleteRef.current) {
        return;
      }

      await router.replace('/');
    })();
  }, [router]);

  return {world, level};
}
