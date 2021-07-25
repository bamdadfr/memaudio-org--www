import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { DefaultLayout } from '../layouts'
import { BoardComponent } from '../components'

/**
 * @returns {React.ReactElement} react component
 */
export default function IndexPage () {

    const router = useRouter ()

    return (
        <>
            <DefaultLayout>
                <BoardComponent
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