import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../../styles'

const propTypes = {
    'children': PropTypes.node.isRequired,
}

/**
 * @description wrapper with styled-components
 * @param {React.ReactNode} children wrapped children
 * @returns {React.ReactNode} react component
 */
export function WithStyledComponents ({ children }) {

    return (
        <>
            <ThemeProvider theme={Theme}>
                {children}
            </ThemeProvider>
        </>
    )

}

WithStyledComponents.propTypes = propTypes