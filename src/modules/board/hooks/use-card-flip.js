import { useCallback, useEffect, useState } from 'react'
import { useStore } from '../../../store'

/**
 * @param {number} id card id
 * @typedef {boolean} Flipped
 * @typedef {Function} ToggleFlipped
 * @returns {{Flipped, ToggleFlipped}} card flipped state
 */
export function useCardFlip (id) {

    // local
    const [flipped, setFlipped] = useState (false)
    const toggleFlipped = useCallback (() => setFlipped ((f) => !f), [])
    // global
    const gameIsRunning = useStore ((state) => state.game.isRunning)
    const setDraw = useStore ((state) => state.deck.setDraw)
    const isDrawn = useStore ((state) => state.deck.getCard (id)?.drawn)

    // when flipped, draw a card
    useEffect (() => {

        if (!flipped) return

        if (gameIsRunning) setDraw (id)
    
    }, [flipped])

    useEffect (() => {

        if (!gameIsRunning) return

        setFlipped (isDrawn)
    
    }, [isDrawn])

    return {
        flipped,
        toggleFlipped,
    }

}
