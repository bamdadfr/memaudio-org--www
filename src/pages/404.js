// noinspection JSUnusedGlobalSymbols

import React from 'react'
import { DefaultLayout } from '../layouts'
import { BoardModule } from '../modules'
import { Theme } from '../app/styles'
import { use404Page } from '../hooks'
import { MetaComponent } from '../components'

/**
 * @returns {React.ReactElement} react component
 */
export default function NotFoundPage () {

    use404Page ()

    return (
        <>
            <MetaComponent
                title="Not Found | Memaudio"
            />
            <DefaultLayout customMeta>
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