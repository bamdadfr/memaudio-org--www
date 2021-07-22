import React from 'react'
import { FaHeadphones, FaQuestion } from 'react-icons/fa'
import { FiUser, FiPlay } from 'react-icons/fi'
import { CardComponent } from '../components'
import { DefaultLayout } from '../layouts'
import { Theme } from '../app/styles'

/**
 * @returns {React.ReactElement} react component
 */
export default function HomePage () {

    return (
        <>
            <DefaultLayout>
                <CardComponent>
                    <FaHeadphones/>
                </CardComponent>
                <CardComponent color={Theme.red}>
                    <FiUser/>
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