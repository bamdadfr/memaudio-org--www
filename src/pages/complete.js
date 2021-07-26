// noinspection JSUnusedGlobalSymbols

import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaPlay } from 'react-icons/fa'
import { useStore } from '../store'
import { DefaultLayout } from '../layouts'
import { BoardModule } from '../modules'
import { Theme } from '../app/styles'
import { AudioAmbienceComponent, AudioAnnouncerComponent } from '../components'
import { Announcer } from '../app/data'

/**
 * @returns {React.ReactElement} react component
 */
export default function CompletePage () {

    const router = useRouter ()
    const isComplete = useStore ((state) => state.game.isComplete)
    const world = useStore ((state) => state.game.world)
    const level = useStore ((state) => state.game.level)

    useEffect (async () => {

        if (isComplete) return

        await router.replace ('/')
    
    }, [])

    if (!isComplete) return <></>

    return (
        <>
            <DefaultLayout>
                <AudioAmbienceComponent/>
                <AudioAnnouncerComponent
                    files={[Announcer.Game.CompleteSuccess]}
                />
                <BoardModule
                    cards={[
                        {
                            'front': `${world}:${level} complete`,
                            'color': Theme.soap,
                        },
                        {
                            'front': <FaPlay/>,
                            'color': Theme.white,
                            'callback': async () => await router.push (`/${world}/${parseInt (level) + 1}`),
                            'leaveOnCallback': true,
                        },
                    ]}
                />
            </DefaultLayout>
        </>
    )

}