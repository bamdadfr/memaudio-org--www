import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './default.layout.styles'
import { FadeAnimation } from '../../animations'
import { MetaComponent, HeaderComponent } from '../../components'

const propTypes = {
    'children': PropTypes.node.isRequired,
    'customMeta': PropTypes.bool,
}

const defaultProps = {
    'customMeta': false,
}

/**
 * @param {object} props react props
 * @param {React.ReactElement} props.children children
 * @param {boolean} props.customMeta at page level?
 * @returns {React.ReactElement} react component
 */
export function DefaultLayout ({
    children,
    customMeta = defaultProps.customMeta,
}) {

    return (
        <>
            {!customMeta && <MetaComponent/>}
            <HeaderComponent/>
            <FadeAnimation>
                <Container>
                    {children}
                </Container>
            </FadeAnimation>
        </>
    )

}

DefaultLayout.propTypes = propTypes

DefaultLayout.defaultProps = defaultProps