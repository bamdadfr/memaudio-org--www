import React, { useCallback, useEffect, useState } from 'react'
import { animated, useTransition } from '@react-spring/web'
import { useMeasure } from 'react-use'
import { Container, Grid } from './grid.component.styles'
import { useGridComponent } from './hooks'
import { CardComponent } from './components'

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

    const { columns, rows } = useGridComponent (cards.length)
    const [items, setItems] = useState ([])
    const [leaving, setLeaving] = useState (false)
    const [ref, { width }] = useMeasure ()

    const transition = useTransition (items, {
        'from': { 'opacity': 0, 'x': width * 2 * -1 },
        'enter': { 'opacity': 1, 'x': 0 },
        'leave': { 'opacity': 0, 'x': width * 2 },
        'config': { 'mass': 5, 'tension': 500, 'friction': 100 },
        'trail': 75,
    })

    useEffect (() => {

        setTimeout (() => {

            setItems (cards)

        }, 5)

    }, [])

    useEffect (() => {

        if (leaving) setItems ([])

    }, [leaving])

    const handleFlipped = useCallback ((card) => {

        if (typeof card.callback !== 'function') return

        if (card.leaveOnCallback) setLeaving (true)

        setTimeout (card.callback, 400)

    }, [cards])

    return (
        <>
            <Container ref={ref}>
                <Grid columns={columns} rows={rows}>
                    {transition ((style, card) => (
                        card
                            ?
                                <animated.div style={style}>
                                    <CardComponent
                                        onFlipped={() => handleFlipped (card)}
                                        color={card.color}
                                        isGame={isGame}
                                    >
                                        <span>{card.front}</span>
                                        <span>{card.back}</span>
                                    </CardComponent>
                                </animated.div>
                            : null
                    ))}
                </Grid>
            </Container>
        </>
    )

}