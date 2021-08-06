import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './default.layout.styles'
import { FadeAnimation } from '../../animations/fade/fade.animation'
import { MetaComponent } from '../../components/meta/meta.component'
import { HeaderComponent } from '../../components/header/header.component'

const propTypes = {
    'children': PropTypes.node.isRequired,
    'customMeta': PropTypes.bool,
}

const defaultProps = {
    'customMeta': false,
}

/**
 * @param {object} props react props
 * @param {React.ReactNode} props.children children
 * @param {boolean} props.customMeta at page level?
 * @returns {React.ReactNode} react component
 */
export function DefaultLayout ({
    children,
    customMeta,
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