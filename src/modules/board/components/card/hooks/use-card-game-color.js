import { useEffect, useState } from 'react'
import { useStore } from '../../../../../store/use-store'
import { Theme } from '../../../../../app/styles/theme'

/**
 * @param {number} id card id
 * @returns {string|undefined} color string if game is running
 */
export function useCardGameColor (id) {

    const gameIsRunning = useStore ((state) => state.game.isRunning)
    const [color, setColor] = useState (Theme.white)
    const isDrawn = useStore ((state) => state.deck.getCard (id)?.drawn)
    const isMatched = useStore ((state) => state.deck.getCard (id)?.matched)

    useEffect (() => {

        if (!gameIsRunning) return

        if (typeof isDrawn === 'undefined') return

        if (typeof isMatched === 'undefined') return

        if (!isMatched && !isDrawn) return setColor (Theme.white)

        if (isMatched) return setColor (Theme.yellow)

        if (isDrawn) return setColor (Theme.blue)
    
    }, [gameIsRunning, isDrawn, isMatched])

    return color

}
