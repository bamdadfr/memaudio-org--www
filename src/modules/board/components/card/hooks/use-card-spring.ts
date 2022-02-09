import {SpringValue, useSpring} from '@react-spring/web';

export type UseCardSpring = {
  opacity: SpringValue<number>;
  transform: SpringValue<string>;
}

/**
 * Hook to trigger the card spring animation
 *
 * @param {boolean} flipped - Whether the card is flipped
 * @returns {UseCardSpring} - The card spring values
 */
export function useCardSpring(flipped: boolean): UseCardSpring {
  return useSpring({
    'opacity': flipped ? 1 : 0,
    'transform': `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    'config': {'mass': 10, 'tension': 500, 'friction': 80},
  });
}
