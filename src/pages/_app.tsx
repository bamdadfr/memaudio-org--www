// eslint-disable-next-line no-use-before-define
import React, { ReactElement } from 'react'
import 'sass-reset'
import { AppProps } from 'next/app'
import { AppLayout } from '../layouts/app/app.layout'
import { useApp } from '../app/hooks/use-app'
import { WithStyledComponents } from '../app/components/with-styled-components/with-styled-components'

// noinspection JSUnusedGlobalSymbols
export default function MyApp ({ Component, pageProps }: AppProps): ReactElement {

    useApp ()

    return (
        <>
            <WithStyledComponents>
                <AppLayout>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <Component {...pageProps}/>
                </AppLayout>
            </WithStyledComponents>
        </>
    )

}