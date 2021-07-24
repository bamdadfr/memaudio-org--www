import React from 'react'
import { Grid } from './grid.component.styles'
import { useGridComponent } from './hooks'

/**
 * @param {object} props react props
 * @param {React.ReactNode} props.children cards
 * @returns {React.ReactElement} react component
 */
export function GridComponent ({ children }) {

    const { columns, rows } = useGridComponent (children.length)

    return (
        <>
            <Grid columns={columns} rows={rows}>
                {children}
            </Grid>
        </>
    )

}