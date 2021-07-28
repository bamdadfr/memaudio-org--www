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

        load (deck, router.query.world, router.query.level)

        return () => reset ()

    }, [deck, load, reset, router.query.level, router.query.world])

    useEffect (() => {

        const { level } = router.query

        setPlayAnnouncer (parseInt (level) === 1)

    }, [router.query])

    return {
        playAnnouncer,
        'world': router.query.world,
        'level': router.query.level,
    }

}
