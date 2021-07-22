import React from 'react'
import { BackgroundComponent } from '../../components'
import { Container } from './default.layout.styles'

/**
 * @description background made with react-spring
 * @param {object} props react props
 * @param {React.ReactElement} props.children children
 * @returns {React.ReactElement} react component
 */
export function DefaultLayout ({ children }) {

    return (
        <>
            <BackgroundComponent/>
            <Container>
                {children}
            </Container>
        </>
    )

}