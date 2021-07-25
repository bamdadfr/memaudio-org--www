import React from 'react'
import { FaHeadphones, FaQuestion, FaUser, FaPlay } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { BoardModule } from '../modules'
import { DefaultLayout } from '../layouts'
import { Theme } from '../app/styles'

/**
 * @returns {React.ReactElement} react component
 */
export default function HomePage () {

    const router = useRouter ()

    return (
        <>
            <DefaultLayout>
                <BoardModule
                    cards={[
                        {
                            'front': <FaHeadphones/>,
                            'color': 'white',
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
                            'callback': async () => await router.push ('/music/1'),
                            'leaveOnCallback': true,
                        },
                    ]}
                />
            </DefaultLayout>
        </>
    )

}