import React from 'react'
import { FiPlay } from 'react-icons/fi'
import { DefaultLayout } from '../layouts'
import { CardComponent } from '../components'

/**
 * @returns {React.ReactElement} react component
 */
export default function IndexPage () {

    return (
        <>
            <DefaultLayout>
                <CardComponent>
                    <FiPlay/>
                </CardComponent>
            </DefaultLayout>
        </>
    )

}