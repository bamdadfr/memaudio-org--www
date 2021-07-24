import React, { useEffect } from 'react'
import { animated } from '@react-spring/web'
import { Container, Grid } from './grid.component.styles'
import { useGridComponent } from './hooks'
import { CardComponent } from './components'
import { useStore } from '../../hooks'

/**
 * @param {object} props react props
 * @param {Array} props.cards array of cards
 * @param {boolean} props.isGame enable game rules
 * @returns {React.ReactElement} react component
 */
export function GridComponent ({
    cards,
    isGame = false,
}) {

    const {
        columns,
        rows,
        ref,
        transitions,
    } = useGridComponent (cards)

    /**
     *
     * isGame
     *
     */

    const setDeck = useStore ((state) => state.setDeck)

    // load deck
    useEffect (() => {

        if (isGame) setDeck (cards)

        return () => {

            setDeck ([])

        }

    }, [])

    return (
        <>
            <Container ref={ref}>
                <Grid columns={columns} rows={rows}>
                    {transitions ((style, card) => (
                        <animated.div style={style}>
                            <CardComponent
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