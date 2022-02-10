import {ReactElement} from 'react';

export interface CardView {
  color: string;
  front: string | ReactElement;
  back?: string | ReactElement;
  callback?: () => void;
  leaveOnCallback?: boolean;
}

export interface Card {
  src: string;
  color: string;
  drawn: boolean;
  matched: boolean;
}
