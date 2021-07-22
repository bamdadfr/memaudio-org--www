import React from 'react'
import { Container } from './grid.component.styles'
import { useGridComponent } from './hooks'

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

    const { columns, rows } = useGridComponent (cards)

    return (
        <>
            <Container columns={columns} rows={rows}>
                {children}
            </Container>
        </>
    )

}