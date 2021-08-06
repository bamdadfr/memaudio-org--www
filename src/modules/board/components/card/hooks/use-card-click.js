import { useCallback } from 'react'
import useSound from 'use-sound'
import { useStore } from '../../../../../store/use-store'

/**
 * @param {Function<undefined>} toggleFlipped flip card
 * @param {string} src source as audio blob
 * @typedef {Function<undefined>} HandleClick
 * @returns {{HandleClick}} pass this to JSX
 */
export function useCardClick (toggleFlipped, src) {

    const gameIsRunning = useStore ((state) => state.game.isRunning)
    const [play] = useSound (src)

    const handleClick = useCallback (() => {

        toggleFlipped ()

        if (!gameIsRunning) return

        if (!src) return

        play ()

    }, [toggleFlipped, gameIsRunning, src, play])

    return { handleClick }

}
