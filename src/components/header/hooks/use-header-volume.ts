import {useCallback} from 'react';
import {useStore} from '../../../store/use-store';
import {UseHeaderComponent} from './use-header-component';

type UseHeaderVolume = {
  volume: UseHeaderComponent['volume'];
  handleVolume: UseHeaderComponent['handleVolume'];
}

/**
 * Hook to get the volume and handle the volume
 *
 * @returns {UseHeaderComponent} - The volume and handle volume
 */
export function useHeaderVolume(): UseHeaderVolume {
  const volume = useStore((state) => state.app.volume);
  const setVolume = useStore((state) => state.app.setVolume);

  const handleVolume = useCallback((e) => {
    const newVolume = parseFloat(e.target.value);

    setVolume(newVolume);
  }, [setVolume]);

  return {
    volume,
    handleVolume,
  };
}
