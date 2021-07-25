import { useCallback, useEffect } from 'react'
import { useStore } from '../../../hooks'

/**
 *
 */
export function useGameMatch () {

    const gameIsRunning = useStore ((state) => state.game.isRunning)

    if (!gameIsRunning) return

    const waitFor = useStore ((state) => state.animations.waitFor)
    const getCard = useStore ((state) => state.deck.getCard)
    const drawn = useStore ((state) => state.deck.drawn)
    const setLock = useStore ((state) => state.board.setLock)
    const setUnlock = useStore ((state) => state.board.setUnlock)
    const setUndraw = useStore ((state) => state.deck.setUndraw)
    const setMatch = useStore ((state) => state.deck.setMatch)

    const unlock = useCallback (() => {

        setTimeout (() => setUnlock (), waitFor.card.flip)
    
    }, [])

    useEffect (() => {

        if (drawn.length !== 2) return

        setLock ()

        setTimeout (() => {

            if (getCard (drawn[0]).src === getCard (drawn[1]).src) {

                setMatch ()

                unlock ()

            } else {

                setUndraw ()

                unlock ()

            }
        
        }, waitFor.card.flip)

    }, [drawn])
    
}
