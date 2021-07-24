import React, { useEffect, useState } from 'react'
import { animated, useTransition } from '@react-spring/web'
import { useMeasure } from 'react-use'
import { Container, Grid } from './grid.component.styles'
import { useGridComponent } from './hooks'

/**
 * @param {object} props react props
 * @param {React.ReactNode} props.children cards
 * @returns {React.ReactElement} react component
 */
export function GridComponent ({ children }) {

    const { columns, rows } = useGridComponent (children.length)
    const [items, setItems] = useState ([])
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

            setItems (children)

        }, 0)

    }, [])

    return (
        <>
            <Container ref={ref}>
                <Grid columns={columns} rows={rows}>
                    {transition ((style, item) => (
                        item
                            ?
                                <animated.div style={style}>
                                    {item}
                                </animated.div>
                            : ''
                    ))}
                </Grid>
            </Container>
        </>
    )

}