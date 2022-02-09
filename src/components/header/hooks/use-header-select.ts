import {useCallback, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {useStore} from '../../../store/use-store';
import {UseHeaderComponent} from './use-header-component';

type UseHeaderSelect = {
  handleSubmit: UseHeaderComponent['handleSubmit'];
  submitVisible: UseHeaderComponent['submitVisible'];
}

/**
 * Hook to handle the header select
 *
 * @param {string} world - The world to select
 * @param {string} level - The level to select
 * @returns {UseHeaderSelect} - Submit function and submit visibility
 */
export function useHeaderSelect(world: string, level: string): UseHeaderSelect {
  const router = useRouter();
  const isLeaving = useStore((state: any) => state.board.isLeaving);
  const setLeave = useStore((state: any) => state.board.setLeave);
  const [submitVisible, setSubmitVisible] = useState(false);
  const [submitFired, setSubmitFired] = useState(false);

  // post submit
  useEffect(() => {
    if (submitFired && !isLeaving) {
      (async () => {
        setSubmitFired(false);

        await router.push(`/${world}/${level}`);
      })();
    }
  }, [isLeaving, level, router, submitFired, world]);

  // handle submit visibility
  useEffect(() => {
    if (world !== router.query.world) {
      return setSubmitVisible(true);
    }

    if (level !== router.query.level) {
      return setSubmitVisible(true);
    }

    setSubmitVisible(false);
  }, [world, level, router.query]);

  const handleSubmit = useCallback(() => {
    if (!submitVisible) {
      return;
    }

    setSubmitVisible(false);

    setLeave();

    setSubmitFired(true);
  }, [setLeave, submitVisible]);

  return {
    handleSubmit,
    submitVisible,
  };
}
