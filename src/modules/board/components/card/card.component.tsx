// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import {ReactElement, ReactNode} from 'react';
import {Container, Card} from './card.component.styles';
import {useCardComponent} from './hooks/use-card-component';

export type CardComponentProps = {
  children: ReactNode;
  id: number;
  src: string;
  color: string;
  callback: () => void;
  leaveOnCallback: boolean;
}

/**
 * Component for the card
 *
 * @param {CardComponentProps} props - Component props
 * @param {ReactNode} props.children - Children of the component
 * @param {number} props.id - Id of the card
 * @param {string} props.src - Source of the card
 * @param {string} props.color - Color of the card
 * @param {() => void} props.callback - Callback function
 * @param {boolean} props.leaveOnCallback - Leave on callback
 * @returns {ReactElement} - Rendered component
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
