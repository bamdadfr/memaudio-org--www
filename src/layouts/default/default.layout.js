import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './default.layout.styles'
import { FadeAnimation } from '../../animations'

const propTypes = {
    'children': PropTypes.node.isRequired,
}

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
                    {children}
                </Container>
            </FadeAnimation>
        </>
    )

}

DefaultLayout.propTypes = propTypes