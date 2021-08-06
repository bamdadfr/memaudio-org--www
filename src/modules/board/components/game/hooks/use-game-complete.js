import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../../../../../store/use-store'

/**
 * @description when game is completed
 */
export function useGameComplete () {

    const gameIsRunning = useStore ((state) => state.game.isRunning)
    const toMatch = useStore ((state) => state.deck.toMatch)
    const waitFor = useStore ((state) => state.animations.waitFor)
    const setLeave = useStore ((state) => state.board.setLeave)
    const complete = useStore ((state) => state.game.complete)
    const router = useRouter ()

    useEffect (() => {

        if (!gameIsRunning) return

        if (toMatch !== 0) return

        const d1 = waitFor.card.flip * 2

        const t1 = setTimeout (() => {

            setLeave ()

        }, d1)

        const d2 = d1 + waitFor.board.leave * 2

        const t2 = setTimeout (async () => {

            const { world, level } = router.query

            complete (world, level)

            await router.push ('/complete')

        }, d2)

        return () => {

            clearTimeout (t1)

            clearTimeout (t2)
        
        }
    
    }, [complete, gameIsRunning, router, setLeave, toMatch, waitFor.board.leave, waitFor.card.flip])

}
