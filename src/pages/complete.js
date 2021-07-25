import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaPlay } from 'react-icons/fa'
import { useStore } from '../hooks'
import { DefaultLayout } from '../layouts'
import { BoardModule } from '../modules'
import { Theme } from '../app/styles'

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
                <BoardModule
                    cards={[
                        {
                            'front': `${world}:${level} complete`,
                            'color': Theme.yellow,
                        },
                        {
                            'front': <FaPlay/>,
                            'color': Theme.red,
                            'callback': async () => await router.push (`/${world}/${parseInt (level) + 1}`),
                            'leaveOnCallback': true,
                        },
                    ]}
                />
            </DefaultLayout>
        </>
    )

}