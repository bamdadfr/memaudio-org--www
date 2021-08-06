import React from 'react'
import { DefaultLayout } from '../layouts/default/default.layout'
import { BoardModule } from '../modules/board/board.module'
import { Theme } from '../app/styles/theme'
import { use404Page } from '../hooks/use-404-page/use-404-page'
import { MetaComponent } from '../components/meta/meta.component'

/**
 * @returns {React.ReactNode} react component
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