import React, { useCallback } from 'react'
import { FiPlay } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { DefaultLayout } from '../layouts'
import { CardComponent } from '../components'

/**
 * @returns {React.ReactElement} react component
 */
export default function IndexPage () {

    const router = useRouter ()

    const handleFlipped = useCallback (async () => {

        await router.push ('/home')

    }, [])

    return (
        <>
            <DefaultLayout>
                <CardComponent onFlipped={handleFlipped}>
                    <FiPlay/>
                </CardComponent>
            </DefaultLayout>
        </>
    )

}