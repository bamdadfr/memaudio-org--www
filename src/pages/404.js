// noinspection JSUnusedGlobalSymbols

import React from 'react'
import { DefaultLayout } from '../layouts'
import { BoardModule } from '../modules'
import { Theme } from '../app/styles'
import { use404Page } from '../hooks'

/**
 * @returns {React.ReactElement} react component
 */
export default function NotFoundPage () {

    use404Page ()

    return (
        <>
            <DefaultLayout>
                <BoardModule
                    cards={[
                        {
                            'front': 'not found',
                            'color': Theme.soap,
                        },
                        {
                            'front': 'redirecting...',
                            'color': Theme.white,
                        },
                    ]}
                />
            </DefaultLayout>
        </>
    )

}