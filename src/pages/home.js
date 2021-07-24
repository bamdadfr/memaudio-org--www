import React, { useCallback, useState } from 'react'
import { FaHeadphones, FaQuestion } from 'react-icons/fa'
import { FiUser, FiPlay } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { CardComponent, GridComponent } from '../components'
import { DefaultLayout } from '../layouts'
import { Theme } from '../app/styles'

/**
 * @returns {React.ReactElement} react component
 */
export default function HomePage () {

    const router = useRouter ()
    const [leave, setLeave] = useState (false)
    const [delay] = useState (400)

    const toHome = useCallback (() => {

        setLeave (true)

        setTimeout (async () => {

            await router.push ('/')

        }, delay)

    }, [])

    const toGame = useCallback (() => {

        setLeave (true)

        setTimeout (async () => {

            await router.push ('/game/1')

        }, delay)

    }, [])

    return (
        <>
            <DefaultLayout>
                <GridComponent leave={leave}>
                    <CardComponent onFlipped={toHome}>
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
                    <CardComponent color={Theme.yellow} onFlipped={toGame}>
                        <FiPlay/>
                    </CardComponent>
                </GridComponent>
            </DefaultLayout>
        </>
    )

}