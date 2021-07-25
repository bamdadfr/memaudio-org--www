import React, { useEffect } from 'react'
import { DefaultLayout } from '../../layouts'
import { BoardComponent } from '../../components'
import { shuffleArray } from '../../utils'
import { Worlds } from '../../app/data'
import { useStore } from '../../hooks'

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

        const card = {
            'src': `src ${i}`,
            'drawn': false,
            'matched': false,
        }

        // pushing a pair of cards
        props.deck.push ({
            ...card,
        })

        props.deck.push ({
            ...card,
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

    const load = useStore ((state) => state.deck.load)
    const reset = useStore ((state) => state.deck.reset)

    useEffect (() => {

        load (deck)

        return () => {

            reset ()
        
        }
    
    }, [])

    return (
        <>
            <DefaultLayout>
                <BoardComponent
                    cards={deck.map ((card) => ({
                        ...card,
                        'front': card.src,
                    }))}
                />
            </DefaultLayout>
        </>
    )

}