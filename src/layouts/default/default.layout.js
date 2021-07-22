import React from 'react'
import { Container, Grid } from './default.layout.styles'
import { FadeAnimation } from '../../animations'
import { useGridSize } from '../../hooks'

/**
 * @description background made with react-spring
 * @param {object} props react props
 * @param {React.ReactElement} props.children children
 * @returns {React.ReactElement} react component
 */
export function DefaultLayout ({ children }) {

    const { columns, rows } = useGridSize (children.length)

    return (
        <>
            <FadeAnimation>
                <Container>
                    <Grid columns={columns} rows={rows}>
                        {children}
                    </Grid>
                </Container>
            </FadeAnimation>
        </>
    )

}