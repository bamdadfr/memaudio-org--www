import React from 'react'
import { FiPlay } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { DefaultLayout } from '../layouts'
import { GridComponent } from '../components'

/**
 * @returns {React.ReactElement} react component
 */
export default function IndexPage () {

    const router = useRouter ()

    return (
        <>
            <DefaultLayout>
                <GridComponent
                    cards={[
                        {
                            'front': <FiPlay/>,
                            'callback': async () => await router.push ('/home'),
                        },
                    ]}
                />
            </DefaultLayout>
        </>
    )

}