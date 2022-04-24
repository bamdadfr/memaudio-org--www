import {ReactElement} from 'react';

export type GetCardFaces = {
  front: ReactElement | string | null;
  back: ReactElement | string | null;
}

/**
 * Get the faces of a card
 */
export function getCardFaces(cards: ReactElement[] | ReactElement): GetCardFaces {
  if (typeof cards === 'string') {
    return {'front': cards, 'back': null};
  }

  const front = typeof cards[0] === 'undefined' ? cards : cards[0];
  const back = typeof cards[1] === 'undefined' ? null : cards[1];

  return {
    front,
    back,
  };
}
