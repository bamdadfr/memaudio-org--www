import React from 'react'
import { animated } from '@react-spring/web'
import PropTypes from 'prop-types'
import { Container, Grid } from './board.module.styles'
import { useBoardModule } from './hooks'
import { CardComponent, GameComponent } from './components'
import { CardType } from '../../types'

const propTypes = {
    'cards': PropTypes.arrayOf (PropTypes.shape (CardType)).isRequired,
}

/**
 * @param {object} props react props
 * @param {Array} props.cards array of cards
 * @returns {React.ReactNode} react component
 */
export function BoardModule ({ cards }) {

    const {
        columns,
        rows,
        ref,
        transitions,
        gameIsRunning,
    } = useBoardModule (cards)

    return (
        <>
            {gameIsRunning && <GameComponent/>}
            <Container ref={ref}>
                <Grid columns={columns} rows={rows}>
                    {transitions ((style, card, _, j) => (
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
    )

}

BoardModule.propTypes = propTypes