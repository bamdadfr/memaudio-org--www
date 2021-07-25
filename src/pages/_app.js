// noinspection JSUnusedGlobalSymbols

/* eslint-disable react/forbid-prop-types */
import React from 'react'
import 'sass-reset'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../app/styles'
import { AppLayout } from '../app/layouts'

const propTypes = {
    'Component': PropTypes.func.isRequired,
    'pageProps': PropTypes.object.isRequired,
    'err': PropTypes.any,
}

const defaultProps = {
    'err': undefined,
}

/**
 * @param {object} props component props
 * @param {Function} props.Component next.js component
 * @param {object} props.pageProps next.js props
 * @param {*} props.err next.js errors
 * @returns {React.ReactElement} react component
 */
export default function MyApp ({ Component, pageProps, err }) {

    return (
        <>
            <ThemeProvider theme={Theme}>
                <AppLayout>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <Component {...pageProps} err={err}/>
                </AppLayout>
            </ThemeProvider>
        </>
    )

}

MyApp.propTypes = propTypes

MyApp.defaultProps = defaultProps