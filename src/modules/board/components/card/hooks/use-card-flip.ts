import { useCallback, useEffect, useState } from 'react'
import { useStore } from '../../../../../store/use-store'

type UseCardFlip = {
    flipped: boolean
    toggleFlipped: () => void
}

export function useCardFlip (id: number): UseCardFlip {

    // global
    const gameIsRunning = useStore ((state: any) => state.game.isRunning)
    const setDraw = useStore ((state: any) => state.deck.setDraw)
    const isDrawn = useStore ((state: any) => state.deck.getCard (id)?.drawn)
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