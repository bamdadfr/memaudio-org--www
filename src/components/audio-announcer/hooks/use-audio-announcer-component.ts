import {useCallback, useState} from 'react';

interface UseAudioAnnouncerComponent {
  /** The index of the file to play */
  index: number;
  /** Invoke this to get the next index */
  nextIndex: () => void;
}

/**
 * Entry hook for the AudioAnnouncer component
 */
export function useAudioAnnouncerComponent(files: string[]): UseAudioAnnouncerComponent {
  const [index, setIndex] = useState(0);

  const nextIndex = useCallback(() => {
    if (typeof files[index + 1] === 'undefined') {
      return;
    }

    setIndex((i) => i + 1);
  }, [index, files]);

  return {
    index,
    nextIndex,
  };
}
