// noinspection JSUnusedGlobalSymbols

import React from 'react'
import { useRouter } from 'next/router'
import { DefaultLayout } from '../layouts'
import { BoardModule } from '../modules'

/**
 * @returns {React.ReactElement} react component
 */
export default function NotFoundPage () {

    const router = useRouter ()

    // todo auto route push
    return (
        <>
            <DefaultLayout>
                <BoardModule
                    cards={[
                        {
                            'front': 'not found, redirecting...',
                            'color': 'white',
                            'callback': async () => await router.push ('/'),
                            'leaveOnCallback': true,
                        },
                    ]}
                />
            </DefaultLayout>
        </>
    )

}