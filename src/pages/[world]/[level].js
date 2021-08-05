// noinspection JSUnusedGlobalSymbols

import React from 'react'
import PropTypes from 'prop-types'
import { DefaultLayout } from '../../layouts'
import { BoardModule } from '../../modules'
import { announcer } from '../../app/data'
import { CardType } from '../../types'
import { AudioAnnouncerComponent, MetaComponent } from '../../components'
import { buildDeck, validateWorlds, capitalizeFirstLetter } from '../../utils'
import { useWorldLevelPage } from '../../hooks'

const propTypes = {
    'deck': PropTypes.arrayOf (PropTypes.shape (CardType)).isRequired,
}

/**
 * @param {object} props react props
 * @param {Array} props.deck containing cards
 * @returns {React.ReactElement} react component
 */
export default function WorldLevelPage ({ deck }) {

    const { playAnnouncer, world, level } = useWorldLevelPage (deck)

    return (
        <>
            <MetaComponent
                title={`${capitalizeFirstLetter (world)} ${level} | Memaudio`}
            />
            <DefaultLayout customMeta>
                {playAnnouncer && <AudioAnnouncerComponent files={[announcer.game.Start]}/>}
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