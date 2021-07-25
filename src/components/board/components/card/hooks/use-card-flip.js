import { useCallback, useEffect, useState } from 'react'
import { useStore } from '../../../../../hooks'

/**
 * @param {*} id todo
 * @returns {*} todo todo
 */
export function useCardFlip (id) {

    // local
    const [flipped, setFlipped] = useState (false)
    const toggleFlipped = useCallback (() => setFlipped ((f) => !f), [])
    // global
    const setDraw = useStore ((state) => state.deck.setDraw)

    // when flipped, draw a card
    useEffect (() => {

        if (!flipped) return

        setDraw (id)
    
    }, [flipped])

    return {
        flipped,
        setFlipped,
        toggleFlipped,
    }

}
