import React, { useCallback, useEffect, useState } from 'react'
import { animated } from '@react-spring/web'
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

    const {
        columns,
        rows,
        ref,
        transitions,
        waitFor,
        triggerLeave,
    } = useGridComponent (cards)

    const [opened, setOpened] = useState ([])
    const [locked, setLocked] = useState (false)

    const handleFlipped = useCallback ((card) => {

        if (isGame) setOpened ((o) => [...o, card])

        if (typeof card.callback !== 'function') return

        setTimeout (() => {

            if (card.leaveOnCallback) triggerLeave ()

            setTimeout (() => {

                card.callback ()

            }, waitFor.leave)

        }, waitFor.flip)

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

            }, waitFor.flip * 0.5)

        } else {

            // flip back opened cards

        }

    }, [opened])

    return (
        <>
            <Container ref={ref}>
                <Grid columns={columns} rows={rows}>
                    {transitions ((style, card) => (
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