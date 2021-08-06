import React from 'react'
import PropTypes from 'prop-types'
import { DefaultLayout } from '../../layouts/default/default.layout'
import { BoardModule } from '../../modules/board/board.module'
import { announcer } from '../../app/data/announcer/announcer'
import { CardType } from '../../types/card.type'
import { AudioAnnouncerComponent } from '../../components/audio-announcer/audio-announcer.component'
import { MetaComponent } from '../../components/meta/meta.component'
import { buildDeck } from '../../utils/build-deck'
import { validateWorlds } from '../../utils/validate-worlds'
import { capitalizeFirstLetter } from '../../utils/capitalize-first-letter'
import { useWorldLevelPage } from '../../hooks/use-world-level-page/use-world-level-page'

const propTypes = {
    'deck': PropTypes.arrayOf (PropTypes.shape (CardType)).isRequired,
}

/**
 * @param {object} props react props
 * @param {Array} props.deck containing cards
 * @returns {React.ReactNode} react component
 */
export default function WorldLevelPage ({ deck }) {

    const { playAnnouncer, world, level } = useWorldLevelPage (deck)

    return (
        <>
            <MetaComponent
                title={`${capitalizeFirstLetter (world)} ${level} | Memaudio`}
            />
            <DefaultLayout customMeta>
                {playAnnouncer && <AudioAnnouncerComponent files={[announcer.game.start]}/>}
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