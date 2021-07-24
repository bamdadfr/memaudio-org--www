import React from 'react'
import { FaHeadphones, FaQuestion } from 'react-icons/fa'
import { FiUser, FiPlay } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { GridComponent } from '../components'
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
                <GridComponent
                    cards={[
                        {
                            'front': <FaHeadphones/>,
                            'callback': async () => await router.push ('/'),
                        },
                        {
                            'front': <FiUser/>,
                            'back': "le mode multijoueurs n'est pas encore disponible",
                            'color': Theme.red,
                        },
                        {
                            'front': <FaQuestion/>,
                            'color': Theme.blue,
                        },
                        {
                            'front': <FiPlay/>,
                            'color': Theme.yellow,
                            'callback': async () => await router.push ('/music/1'),
                        },
                    ]}
                />
            </DefaultLayout>
        </>
    )

}