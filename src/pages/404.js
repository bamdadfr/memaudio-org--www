// noinspection JSUnusedGlobalSymbols

import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { DefaultLayout } from '../layouts'
import { BoardModule } from '../modules'
import { useStore } from '../store'
import { Theme } from '../app/styles'

/**
 * @returns {React.ReactElement} react component
 */
export default function NotFoundPage () {

    const router = useRouter ()
    const setLeave = useStore ((state) => state.board.setLeave)
    const waitFor = useStore ((state) => state.animations.waitFor)

    useEffect (() => {

        setTimeout (() => {

            setLeave ()

            setTimeout (async () => {

                await router.push ('/')
            
            }, waitFor.board.leave)
            
        }, 2000)

    }, [])

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