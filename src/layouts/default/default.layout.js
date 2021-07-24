import React from 'react'
import { Container } from './default.layout.styles'
import { FadeAnimation } from '../../animations'
import { GridComponent } from '../../components'

/**
 * @param {object} props react props
 * @param {React.ReactElement} props.children children
 * @returns {React.ReactElement} react component
 */
export function DefaultLayout ({ children }) {

    return (
        <>
            <FadeAnimation>
                <Container>
                    <GridComponent>
                        {children}
                    </GridComponent>
                </Container>
            </FadeAnimation>
        </>
    )

}