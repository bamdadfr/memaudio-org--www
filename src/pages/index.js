import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { DefaultLayout } from '../layouts/default/default.layout'
import { BoardModule } from '../modules/board/board.module'
import { Theme } from '../app/styles/theme'

/**
 * @returns {React.ReactNode} react component
 */
export default function IndexPage () {

    const router = useRouter ()

    return (
        <>
            <DefaultLayout>
                <BoardModule
                    cards={[
                        {
                            'front': <FaPlay/>,
                            'color': Theme.white,
                            'callback': async () => await router.push ('/home'),
                            'leaveOnCallback': true,
                        },
                    ]}
                />
            </DefaultLayout>
        </>
    )

}