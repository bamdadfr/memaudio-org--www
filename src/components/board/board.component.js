import React from 'react'
import { animated } from '@react-spring/web'
import { Container, Grid } from './board.component.styles'
import { useBoardComponent } from './hooks'
import { CardComponent } from './components'

/**
 * @param {object} props react props
 * @param {Array} props.cards array of cards
 * @returns {React.ReactElement} react component
 */
export function BoardComponent ({ cards }) {

    const {
        columns,
        rows,
        ref,
        transitions,
    } = useBoardComponent (cards)

    return (
        <>
            <Container ref={ref}>
                <Grid columns={columns} rows={rows}>
                    {transitions ((style, card, _, j) => (
                        <animated.div style={style}>
                            <CardComponent
                                id={j}
                                color={card.color || 'white'}
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