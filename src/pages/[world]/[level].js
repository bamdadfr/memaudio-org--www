import React from 'react'
import { DefaultLayout } from '../../layouts'
import { GridComponent } from '../../components'
import { shuffleArray } from '../../utils'
import { Worlds } from '../../app/data'

/**
 * @param {object} context next.js context
 * @returns {object} props
 */
export function getServerSideProps (context) {

    const { world, level } = context.query
    const props = {}

    // world exists?
    if (typeof Worlds[world] === 'undefined') return { 'redirect': { 'destination': '/', 'permanent': false }}

    // world.level exists?
    if (typeof Worlds[world][level] === 'undefined') return { 'redirect': { 'destination': '/', 'permanent': false }}

    props.deck = []

    for (let i = 1; i <= Worlds[world][level].length; i++) {

        const card = { 'audio': `src ${i}` }

        // pushing a pair of cards
        props.deck.push ({
            ...card,
            'id': `${i}a`,
        })

        props.deck.push ({
            ...card,
            'id': `${i}b`,
        })

    }

    props.deck = shuffleArray (props.deck)

    return { props }

}

/**
 * @param {object} props react props
 * @param {Array} props.deck containing cards
 * @returns {React.ReactElement} react component
 */
export default function LevelPage ({ deck }) {

    return (
        <>
            <DefaultLayout>
                <GridComponent
                    isGame
                    cards={deck.map ((card) => ({
                        ...card,
                        'front': card.id,
                    }))}
                />
            </DefaultLayout>
        </>
    )

}