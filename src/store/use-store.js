import create from 'zustand'
import { levelStore } from './level'
import { animationsStore } from './animations'
import { boardStore } from './board'
import { deckStore } from './deck'

export const useStore = create (
    (set, get) => ({
        // level
        ...levelStore (set),
        // animations
        ...animationsStore (),
        // board
        ...boardStore (set),
        // deck
        ...deckStore (set, get),
    }),
)