import React, { useCallback, useEffect, useState } from 'react'
import { animated, useTransition } from '@react-spring/web'
import { useMeasure } from 'react-use'
import { Container, Grid } from './grid.component.styles'
import { useGridComponent } from './hooks'
import { CardComponent } from './components'
import { Theme } from '../../app/styles'

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
    const [ref, { width }] = useMeasure ()
    const [waitForEnter] = useState (5)
    const [waitForFlip] = useState (500)
    const [waitForLeave] = useState (400)
    const [items, setItems] = useState ([])
    const [leaving, setLeaving] = useState (false)
    const [opened, setOpened] = useState ([])
    const [locked, setLocked] = useState (false)

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

        }, waitForEnter)

    }, [])

    useEffect (() => {

        if (leaving) setItems ([])

    }, [leaving])

    const handleFlipped = useCallback ((card) => {

        if (isGame) setOpened ((o) => [...o, card])

        if (typeof card.callback !== 'function') return

        setTimeout (() => {

            if (card.leaveOnCallback) setLeaving (true)

            setTimeout (() => {

                card.callback ()

            }, waitForLeave)

        }, waitForFlip)

    }, [cards])

    useEffect (() => {

        if (!isGame) return

        if (opened.length < 2) return

        setLocked (true)

        // opened cards do match
        if (opened[0].src === opened[1].src) {

            setTimeout (() => {

                opened[0].color = Theme.yellow

                opened[1].color = Theme.yellow

                setOpened ([])

                setLocked (false)

            }, waitForFlip * 0.5)

        } else {

            // flip back opened cards

        }

    }, [opened])

    return (
        <>
            <Container ref={ref}>
                <Grid columns={columns} rows={rows}>
                    {transition ((style, card) => (
                        <animated.div style={style}>
                            <CardComponent
                                onFlipped={() => handleFlipped (card)}
                                color={card.color}
                                isGame={isGame}
                                isLocked={locked}
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