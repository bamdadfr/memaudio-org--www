import { useCallback, useEffect, useState } from 'react'
import { useStore } from '../../../../../store'

/**
 * @param {number} id card id
 * @typedef {boolean} Flipped
 * @typedef {Function<undefined>} ToggleFlipped
 * @returns {{Flipped, ToggleFlipped}} card flipped state
 */
export function useCardFlip (id) {

    // global
    const gameIsRunning = useStore ((state) => state.game.isRunning)
    const setDraw = useStore ((state) => state.deck.setDraw)
    const isDrawn = useStore ((state) => state.deck.getCard (id)?.drawn)
    // local
    const [flipped, setFlipped] = useState (false)
    const toggleFlipped = useCallback (() => !flipped && setFlipped ((f) => !f), [flipped])

    // when flipped, draw a card
    useEffect (() => {

        if (!flipped) return

        if (gameIsRunning) setDraw (id)
    
    }, [flipped, gameIsRunning, id, setDraw])

    useEffect (() => {

        if (!gameIsRunning) return

        setFlipped (isDrawn)
    
    }, [gameIsRunning, isDrawn])

    return {
        flipped,
        toggleFlipped,
    }

}
