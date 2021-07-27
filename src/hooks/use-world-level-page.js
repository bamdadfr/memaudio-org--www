import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../store'

/**
 * @param {Array} deck props
 * @returns {{Boolean}} play audio announcer?
 */
export function useWorldLevelPage (deck) {

    const router = useRouter ()
    const [playAnnouncer, setPlayAnnouncer] = useState (false)
    const load = useStore ((state) => state.deck.load)
    const reset = useStore ((state) => state.deck.reset)

    useEffect (() => {

        load (deck)

        return () => reset ()

    }, [])

    useEffect (() => {

        const { level } = router.query

        setPlayAnnouncer (parseInt (level) === 1)

    }, [])

    return {
        playAnnouncer,
        'world': router.query?.world,
        'level': router.query?.level,
    }

}
