import create from 'zustand'
import { gameStore } from './game'
import { animationsStore } from './animations'
import { boardStore } from './board'
import { deckStore } from './deck'

export const useStore = create (
    (set, get) => ({
        ...gameStore (set),
        ...animationsStore (),
        ...boardStore (set),
        ...deckStore (set, get),
    }),
)