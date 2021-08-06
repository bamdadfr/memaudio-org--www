import create from 'zustand'
import { gameStore } from './game/game.store'
import { animationsStore } from './animations/animations.store'
import { boardStore } from './board/board.store'
import { deckStore } from './deck/deck.store'

export const useStore = create (
    (set, get) => ({
        ...gameStore (set),
        ...animationsStore (),
        ...boardStore (set),
        ...deckStore (set, get),
    }),
)