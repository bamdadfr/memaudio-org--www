// noinspection JSUnusedGlobalSymbols

import React from 'react'
import PropTypes from 'prop-types'
import { DefaultLayout } from '../../layouts'
import { BoardModule } from '../../modules'
import { Announcer } from '../../app/data'
import { CardType } from '../../types'
import { AudioAnnouncerComponent } from '../../components'
import { buildDeck, validateWorlds } from '../../utils'
import { useWorldLevelPage } from '../../hooks/use-world-level-page'

const propTypes = {
    'deck': PropTypes.arrayOf (PropTypes.shape (CardType)).isRequired,
}

/**
 * @param {object} props react props
 * @param {Array} props.deck containing cards
 * @returns {React.ReactElement} react component
 */
export default function WorldLevelPage ({ deck }) {

    const { playAnnouncer } = useWorldLevelPage (deck)

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
    const isValid = validateWorlds (world, level)

    if (!isValid) return { 'redirect': { 'destination': '/404', 'permanent': false }}

    props.deck = buildDeck (world, level)

    return { props }

}

WorldLevelPage.propTypes = propTypes