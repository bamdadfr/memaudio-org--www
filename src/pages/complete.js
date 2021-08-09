import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { DefaultLayout } from '../layouts/default/default.layout'
import { BoardModule } from '../modules/board/board.module'
import { Theme } from '../app/styles/theme'
import { AudioAmbienceComponent } from '../components/audio-ambience/audio-ambience.component'
import { AudioAnnouncerComponent } from '../components/audio-announcer/audio-announcer.component'
import { announcer } from '../app/data/announcer/announcer'
import { useCompletePage } from '../pages-lib/complete/hooks/use-complete-page'
import { capitalizeFirstLetter } from '../utils/capitalize-first-letter'
import { getNextLevelPath } from '../utils/get-next-level-path'

/**
 * @returns {React.ReactNode} react component
 */
export default function CompletePage () {

    const router = useRouter ()
    const { world, level } = useCompletePage ()

    return (
        <>
            <DefaultLayout>
                <AudioAmbienceComponent/>
                <AudioAnnouncerComponent
                    files={[announcer.game.completeSuccess]}
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
                            'callback': async () => await router.push (getNextLevelPath (world, level)),
                            'leaveOnCallback': true,
                        },
                    ]}
                />
            </DefaultLayout>
        </>
    )

}