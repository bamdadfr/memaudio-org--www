import React, {ReactElement} from 'react';
import {Card, Container} from './card.component.styles';
import {useCardComponent} from './hooks/use-card-component';

export interface CardComponentProps {
  children: ReactElement[] | ReactElement;
  /** Identifier of the card */
  id: number;
  /** Audio source of the card */
  src: string;
  /** Color of the card */
  color: string;
  /** Callback function of the card */
  callback: () => void;
  /** Should the card leave when callback is invoked? */
  leaveOnCallback: boolean;
}

/**
 * Component for the card
 */
export function CardComponent({
  children,
  id,
  src,
  color,
  callback,
  leaveOnCallback,
}: CardComponentProps): ReactElement {
  const {
    ref,
    width,
    height,
    front,
    back,
    spring,
    boardIsLocked,
    gameIsRunning,
    gameColor,
    handleClick,
  } = useCardComponent({
    children,
    id,
    src,
    callback,
    leaveOnCallback,
  });

  return (
    <>
      <Container
        ref={ref}
        tabIndex={-1}
        role="button"
        aria-label="card"
      >
        <Card
          $isFront
          $color={color}
          width={width}
          height={height}
          onClick={!boardIsLocked ? handleClick : undefined}
          style={{
            'opacity': spring.opacity.to((o) => 1 - o),
            'transform': spring.transform,
          }}
        >
          {front}
        </Card>
        <Card
          $isBack
          $color={gameIsRunning ? gameColor : color}
          width={width}
          height={height}
          style={{
            'opacity': spring.opacity,
            'transform': spring.transform,
            'rotateY': '180deg',
          }}
        >
          {back}
        </Card>
      </Container>
    </>
  );
}
