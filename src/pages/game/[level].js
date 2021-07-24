import React from 'react'
import { DefaultLayout } from '../../layouts'
import { CardComponent } from '../../components'

/**
 * @param {object} props react props
 * @param {number} props.level level number
 * @returns {React.ReactElement} react component
 */
export default function LevelPage ({ level }) {

    // eslint-disable-next-line no-console
    console.log (level)

    return (
        <>
            <DefaultLayout>
                <CardComponent>
                    <span/>
                    <span/>
                </CardComponent>
                <CardComponent>
                    <span/>
                    <span/>
                </CardComponent>
                <CardComponent>
                    <span/>
                    <span/>
                </CardComponent>
                <CardComponent>
                    <span/>
                    <span/>
                </CardComponent>
            </DefaultLayout>
        </>
    )

}

/**
 * @param {object} context next.js context
 * @returns {object} props
 */
export function getServerSideProps (context) {

    const { level } = context.query
    const props = {}

    props.level = level

    return { props }

}