// noinspection JSUnusedGlobalSymbols

import React from 'react'
import { FaHeadphones, FaQuestion, FaUser, FaPlay } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { BoardModule } from '../modules'
import { DefaultLayout } from '../layouts'
import { Theme } from '../app/styles'
import { AudioAmbienceComponent, AudioAnnouncerComponent, MetaComponent } from '../components'
import { Announcer } from '../app/data'

/**
 * @returns {React.ReactElement} react component
 */
export default function HomePage () {

    const router = useRouter ()

    return (
        <>
            <MetaComponent
                title="Home | Memaudio"
            />
            <DefaultLayout customMeta>
                <AudioAmbienceComponent/>
                <AudioAnnouncerComponent
                    files={[Announcer.Home.Welcome]}
                />
                <BoardModule
                    cards={[
                        {
                            'front': <FaHeadphones/>,
                            'color': Theme.white,
                            'callback': async () => await router.push ('/'),
                            'leaveOnCallback': true,
                        },
                        {
                            'front': <FaUser/>,
                            'back': "le mode multijoueurs n'est pas encore disponible",
                            'color': Theme.red,
                        },
                        {
                            'front': <FaQuestion/>,
                            'color': Theme.blue,
                        },
                        {
                            'front': <FaPlay/>,
                            'color': Theme.yellow,
                            'callback': async () => await router.push ('/instruments/1'),
                            'leaveOnCallback': true,
                        },
                    ]}
                />
            </DefaultLayout>
        </>
    )

}