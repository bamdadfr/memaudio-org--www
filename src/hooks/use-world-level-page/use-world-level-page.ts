import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../../store'

type UseWorldLevelPage = {
    playAnnouncer: boolean
    world: string
    level: string
}

export function useWorldLevelPage (deck: any[]): UseWorldLevelPage {

    const router = useRouter ()
    const [playAnnouncer, setPlayAnnouncer] = useState (false)
    const load = useStore ((state: any) => state.deck.load)
    const reset = useStore ((state: any) => state.deck.reset)

    useEffect (() => {

        load (deck, router.query.world, router.query.level)

        return () => reset ()

    }, [deck, load, reset, router.query.level, router.query.world])

    useEffect (() => {

        const { level } = router.query

        if (Array.isArray (level)) return

        setPlayAnnouncer (parseInt (level) === 1)

    }, [router.query])

    return {
        playAnnouncer,
        'world': !Array.isArray (router.query.world) && router.query.world,
        'level': !Array.isArray (router.query.level) && router.query.level,
    }

}