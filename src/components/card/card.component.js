import React from 'react'
import { Container } from './card.component.styles'
import { CardConstants } from './card.constants'

/**
 * @param {object} props react props
 * @param {React.ReactElement} props.children content of the card
 * @param {string} props.color color
 * @returns {React.ReactElement} react component
 */
export function CardComponent ({
    children,
    color = CardConstants.color,
}) {

    return (
        <>
            <Container color={color}>
                {children}
            </Container>
        </>
    )

}