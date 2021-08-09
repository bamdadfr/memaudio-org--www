import { useEffect, useState } from 'react'
import { useStore } from '../../../../store/use-store'
import { buildDeck } from '../../../../utils/build-deck'
import { fetchApi } from '../../../../utils/fetch-api'

/**
 * @param {string} world valid world
 * @param {string} level valid level
 * @typedef {boolean} IsAnnouncer
 * @typedef {any[]} Deck
 * @returns {{IsAnnouncer, Deck}} UseWorldLevelPage
 */
export function useWorldLevelPage (world, level) {

    const load = useStore ((state) => state.deck.load)
    const reset = useStore ((state) => state.deck.reset)
    const [deck, setDeck] = useState ()
    const [isAnnouncer, setIsAnnouncer] = useState (false)

    // deck
    useEffect (() => {

        (async () => {

            const cards = await fetchApi (`/api/world/${world}/levels/get/${level}`)

            setDeck (buildDeck (cards))

        }) ()

    }, [level, world])

    useEffect (() => {

        if (!deck) return

        load (deck, world, level)

        return () => reset ()

    }, [deck, load, reset, world, level])

    useEffect (() => {

        setIsAnnouncer (parseInt (level) === 1)

    }, [level])

    return {
        isAnnouncer,
        deck,
    }

}