import { useCallback, useState } from 'react';

/**
 * Entry hook for the AudioAnnouncer component
 *
 * @param {string[]} files - The files to play
 * @typedef {number} Index - The index of the file to play
 * @typedef {function(): number} NextIndex - A function to get the next index
 * @returns {{Index,NextIndex}} - The index and the next index
 */
export function useAudioAnnouncerComponent (files) {
  const [index, setIndex] = useState (0);

  const nextIndex = useCallback (() => {
    if (typeof files[index + 1] === 'undefined') {
      return;
    }

    setIndex ((i) => i + 1);
  }, [index, files]);

  return {
    index,
    nextIndex,
  };
}
