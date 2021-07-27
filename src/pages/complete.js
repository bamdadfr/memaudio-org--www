// noinspection JSUnusedGlobalSymbols

import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { DefaultLayout } from '../layouts'
import { BoardModule } from '../modules'
import { Theme } from '../app/styles'
import { AudioAmbienceComponent, AudioAnnouncerComponent } from '../components'
import { Announcer } from '../app/data'
import { useCompletePage } from '../hooks'
import { capitalizeFirstLetter } from '../utils'

/**
 * @returns {React.ReactElement} react component
 */
export default function CompletePage () {

    const router = useRouter ()
    const { world, level } = useCompletePage ()

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
                            'front': `${capitalizeFirstLetter (world)} ${level} complete`,
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