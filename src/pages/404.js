import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { DefaultLayout } from '../layouts'
import { GridComponent } from '../components'

/**
 * @returns {React.ReactElement} react component
 */
export default function NotFoundPage () {

    const router = useRouter ()

    useEffect (() => {

        setTimeout (async () => {

            await router.push ('/')

        }, 1000)

    })

    return (
        <>
            <DefaultLayout>
                <GridComponent
                    cards={[
                        {
                            'front': 'not found, redirecting...',
                        },
                    ]}
                />
            </DefaultLayout>
        </>
    )

}