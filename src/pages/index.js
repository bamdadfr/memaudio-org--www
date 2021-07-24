import React from 'react'
import { FaPlay } from 'react-icons/fa'
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
                            'front': <FaPlay/>,
                            'callback': async () => await router.push ('/home'),
                            'leaveOnCallback': true,
                        },
                    ]}
                />
            </DefaultLayout>
        </>
    )

}