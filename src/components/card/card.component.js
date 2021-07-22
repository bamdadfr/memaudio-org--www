import React from 'react'
import { Container } from './card.component.styles'

/**
 * @param {object} props react props
 * @param {React.ReactElement} props.children content of the card
 * @returns {React.ReactElement} react component
 */
export function CardComponent ({ children }) {

    return (
        <>
            <Container>
                {children}
            </Container>
        </>
    )

}