import React, { useMemo } from 'react'
import { Container } from './grid.component.styles'

/**
 * @param {object} props react props
 * @param {React.ReactElement} props.children children
 * @param {number} props.cards number of cards to lay on the grid
 * @returns {React.ReactElement} react component
 */
export function GridComponent ({
    children,
    cards = 1,
}) {

    const size = useMemo (() => {

        const columns = Math.round (Math.sqrt (cards))
        const rows = Math.ceil (cards / columns)

        return {
            columns,
            rows,
        }

    }, [cards])

    return (
        <>
            <Container columns={size.columns} rows={size.rows}>
                {children}
            </Container>
        </>
    )

}