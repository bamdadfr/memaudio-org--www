import React, {ReactElement} from 'react';
import {animated} from '@react-spring/web';
import {Container, Grid} from './board.module.styles';
import {useBoardModule} from './hooks/use-board-module';
import {CardComponent} from './components/card/card.component';
import {GameComponent} from './components/game/game.component';
import {Card} from '../../utils/build-deck';

type BoardModuleProps = {
  cards: Card[];
}

/**
 * Component for the board module
 *
 * @param {BoardModuleProps} props - Component props
 * @param {Card[]} props.cards - Cards to display
 * @returns {ReactElement} - Rendered component
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
          {transitions((style, card, _, j) => (
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
