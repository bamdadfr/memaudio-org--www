import React, {ReactElement} from 'react';
import {animated} from '@react-spring/web';
import {Container, Grid} from './board.module.styles';
import {useBoardModule} from './hooks/use-board-module';
import {CardComponent} from './components/card/card.component';
import {GameComponent} from './components/game/game.component';
import {Card, CardView} from '../../types';

type BoardModuleProps = {
  /** Array of card views to display */
  cards: CardView[];
}

/**
 * Component for the board module
 */
export function BoardModule({cards}: BoardModuleProps): ReactElement {
  const {
    columns,
    rows,
    ref,
    transitions,
    gameIsRunning,
  } = useBoardModule(cards);

  return (
    <>
      {gameIsRunning && <GameComponent />}
      <Container ref={ref}>
        <Grid columns={columns} rows={rows}>
          {transitions((style, card: CardView & Card, _, j) => (
            <animated.div style={style}>
              <CardComponent
                id={j}
                src={card.src}
                color={card.color}
                callback={card.callback}
                leaveOnCallback={card.leaveOnCallback}
              >
                <span>{card.front}</span>
                <span>{card.back}</span>
              </CardComponent>
            </animated.div>
          ))}
        </Grid>
      </Container>
    </>
  );
}
