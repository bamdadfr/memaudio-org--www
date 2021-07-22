import React from 'react'
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
                    content
                </CardComponent>
                <CardComponent>
                    content
                </CardComponent>
                <CardComponent>
                    content
                </CardComponent>
                <CardComponent>
                    content
                </CardComponent>
            </DefaultLayout>
        </>
    )

}