import { useCallback } from 'react'
import useSound from 'use-sound'
import { useStore } from '../../../store'

/**
 * @param {Function} toggleFlipped flip card
 * @param {string} src source as audio blob
 * @returns {{Function}} pass this to JSX
 */
export function useCardClick (toggleFlipped, src) {

    const gameIsRunning = useStore ((state) => state.game.isRunning)
    const [play] = useSound (src)

    const handleClick = useCallback (() => {

        toggleFlipped ()

        if (!gameIsRunning) return

        if (!src) return

        play ()

    }, [gameIsRunning, toggleFlipped, play])

    return { handleClick }

}
