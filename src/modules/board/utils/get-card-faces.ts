import {ReactNode} from 'react';

export type GetCardFaces = {
  front: ReactNode | string | null;
  back: ReactNode | string | null;
}

/**
 * Get the faces of a card
 */
export function getCardFaces(card: ReactNode): GetCardFaces {
  if (typeof card === 'string') {
    return {'front': card, 'back': null};
  }

  const front = typeof card[0] === 'undefined' ? card : card[0];
  const back = typeof card[1] === 'undefined' ? null : card[1];

  return {
    front,
    back,
  };
}
