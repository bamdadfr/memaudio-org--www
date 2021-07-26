// noinspection JSUnusedGlobalSymbols

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { DefaultLayout } from '../../layouts'
import { BoardModule } from '../../modules'
import { shuffleArray } from '../../utils'
import { Announcer, Worlds } from '../../app/data'
import { useStore } from '../../store'
import { CardType } from '../../types'
import { Theme } from '../../app/styles'
import { AudioAnnouncerComponent } from '../../components'

const propTypes = {
    'deck': PropTypes.arrayOf (PropTypes.shape (CardType)).isRequired,
}

/**
 * @param {object} props react props
 * @param {Array} props.deck containing cards
 * @returns {React.ReactElement} react component
 */
export default function WorldLevelPage ({ deck }) {

    const load = useStore ((state) => state.deck.load)
    const reset = useStore ((state) => state.deck.reset)

    // load deck when mount
    // reset deck when unmount
    useEffect (() => {

        load (deck)

        return () => {

            reset ()

        }

    }, [])

    const router = useRouter ()
    const [playAnnouncer, setPlayAnnouncer] = useState (false)

    // load Announcer.Game.Start when level is 1
    useEffect (() => {

        const { level } = router.query

        setPlayAnnouncer (parseInt (level) === 1)
    
    }, [])

    return (
        <>
            <DefaultLayout>
                {playAnnouncer && <AudioAnnouncerComponent files={[Announcer.Game.Start]}/>}
                <BoardModule
                    cards={deck}
                />
            </DefaultLayout>
        </>
    )

}

/**
 * @param {object} context next.js context
 * @returns {object} props
 */
export function getServerSideProps (context) {

    const { world, level } = context.query
    const props = {}

    // world exists?
    if (typeof Worlds[world] === 'undefined') return { 'redirect': { 'destination': '/404', 'permanent': false }}

    // world.level exists?
    if (typeof Worlds[world][level] === 'undefined') return { 'redirect': { 'destination': '/404', 'permanent': false }}

    props.deck = []

    for (let i = 0; i < Worlds[world][level].length; i++) {

        const card = {
            'src': `${Worlds[world][level][i]}`,
            'color': Theme.white,
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

WorldLevelPage.propTypes = propTypes