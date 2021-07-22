import React from 'react'
import { GridComponent } from '../../components'
import { Container, Wrapper } from './default.layout.styles'
import { FadeAnimation } from '../../animations'

/**
 * @description background made with react-spring
 * @param {object} props react props
 * @param {React.ReactElement} props.children children
 * @returns {React.ReactElement} react component
 */
export function DefaultLayout ({ children }) {

    return (
        <>
            <Container>
                <FadeAnimation>
                    <Wrapper>
                        <GridComponent cards={children.length}>
                            {children}
                        </GridComponent>
                    </Wrapper>
                </FadeAnimation>
            </Container>
        </>
    )

}