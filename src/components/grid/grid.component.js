import React from 'react'
import { animated } from '@react-spring/web'
import { Container, Grid } from './grid.component.styles'
import { useGridComponent } from './hooks'
import { CardComponent } from './components'

/**
 * @param {object} props react props
 * @param {Array} props.cards array of cards
 * @returns {React.ReactElement} react component
 */
export function GridComponent ({
    cards,
}) {

    const {
        columns,
        rows,
        ref,
        transitions,
    } = useGridComponent (cards)

    return (
        <>
            <Container ref={ref}>
                <Grid columns={columns} rows={rows}>
                    {transitions ((style, card, _, j) => (
                        <animated.div style={style}>
                            <CardComponent
                                id={j}
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