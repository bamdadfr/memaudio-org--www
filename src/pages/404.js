import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { DefaultLayout } from '../layouts'
import { CardComponent } from '../components'

/**
 * @returns {React.ReactElement} react component
 */
export default function NotFoundPage () {

    const router = useRouter ()

    useEffect (async () => {

        await router.push ('/')

    })

    return (
        <>
            <DefaultLayout>
                <CardComponent>
                    not found, redirecting...
                </CardComponent>
            </DefaultLayout>
        </>
    )

}