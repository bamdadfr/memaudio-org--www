import React from 'react'
import { FaHeadphones, FaQuestion, FaUser, FaPlay } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { BoardModule } from '../modules/board/board.module'
import { DefaultLayout } from '../layouts/default/default.layout'
import { Theme } from '../app/styles/theme'
import { AudioAmbienceComponent } from '../components/audio-ambience/audio-ambience.component'
import { AudioAnnouncerComponent } from '../components/audio-announcer/audio-announcer.component'
import { MetaComponent } from '../components/meta/meta.component'
import { announcer } from '../app/data/announcer/announcer'

/**
 * @returns {React.ReactNode} react component
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
                    files={[
                        announcer.home.welcome,
                        announcer.home.clickYellowForPlaying,
                    ]}
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