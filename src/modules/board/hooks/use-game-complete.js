import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../../../store'

/**
 * @description when game is completed
 */
export function useGameComplete () {

    const gameIsRunning = useStore ((state) => state.game.isRunning)

    if (!gameIsRunning) return

    const toMatch = useStore ((state) => state.deck.toMatch)
    const waitFor = useStore ((state) => state.animations.waitFor)
    const setLeave = useStore ((state) => state.board.setLeave)
    const complete = useStore ((state) => state.game.complete)
    const router = useRouter ()

    useEffect (() => {

        if (toMatch !== 0) return

        setLeave ()

        setTimeout (async () => {

            const { world, level } = router.query

            complete (world, level)

            await router.push ('/complete')

        }, waitFor.board.leave * 2)

    }, [toMatch])

}