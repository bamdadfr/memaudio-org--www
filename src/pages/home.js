import React, { useCallback } from 'react'
import { FaHeadphones, FaQuestion } from 'react-icons/fa'
import { FiUser, FiPlay } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { CardComponent } from '../components'
import { DefaultLayout } from '../layouts'
import { Theme } from '../app/styles'

/**
 * @returns {React.ReactElement} react component
 */
export default function HomePage () {

    const router = useRouter ()

    const redirectToHome = useCallback (async () => {

        await router.push ('/')

    }, [])

    return (
        <>
            <DefaultLayout>
                <CardComponent onFlipped={redirectToHome}>
                    <FaHeadphones/>
                </CardComponent>
                <CardComponent color={Theme.red}>
                    <div>
                        <FiUser/>
                    </div>
                    <div>
                        le mode multijoueurs n&rsquo;est pas encore disponible
                    </div>
                </CardComponent>
                <CardComponent color={Theme.blue}>
                    <FaQuestion/>
                </CardComponent>
                <CardComponent color={Theme.yellow}>
                    <FiPlay/>
                </CardComponent>
            </DefaultLayout>
        </>
    )

}