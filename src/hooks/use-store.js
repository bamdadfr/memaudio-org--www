import create from 'zustand'
import { Theme } from '../app/styles'

export const useStore = create (
    (set, get) => ({
        // level
        'level': {
            'isGame': false,
        },
        // animations
        'animations': {
            'waitFor': {
                'board': {
                    'enter': 5,
                    'leave': 400,
                },
                'card': {
                    'flip': 500,
                },
            },
        },
        // board
        'board': {
            'isLocked': false,
            'isLeaving': false,
            // lock
            'setLock': () => set ((state) => ({
                'board': {
                    ...state.board,
                    'isLocked': true,
                },
            })),
            'setUnlock': () => set ((state) => ({
                'board': {
                    ...state.board,
                    'isLocked': false,
                },
            })),
            // leave
            'setLeave': () => set ((state) => ({
                'board': {
                    ...state.board,
                    'isLocked': true,
                    'isLeaving': true,
                },
            })),
            'resetLeave': () => set ((state) => ({
                'board': {
                    ...state.board,
                    'isLocked': false,
                    'isLeaving': false,
                },
            })),
        },
        // deck
        'deck': {
            'cards': [],
            'drawn': [],
            'matched': 0,
            // global
            'load': (newCards) => set ((state) => ({
                'level': {
                    ...state.level,
                    'isGame': true,
                },
                'deck': {
                    ...state.deck,
                    'cards': newCards,
                },
            })),
            'reset': () => set ((state) => ({
                'level': {
                    ...state.level,
                    'isGame': false,
                },
                'deck': {
                    ...state.deck,
                    'cards': [],
                    'drawn': [],
                    'matched': 0,
                },
            })),
            // draw
            'resetDrawn': () => set ((state) => ({
                'deck': {
                    ...state.deck,
                    'drawn': [],
                },
            })),
            'setDraw': (id) => set (() => {

                const cards = get ().deck.cards
                const drawn = get ().deck.drawn

                cards[id].drawn = true

                cards[id].color = Theme.blue

                drawn.push (id)

            }),
            'setUndraw': () => set (() => {

                const cards = get ().deck.cards
                const drawn = get ().deck.drawn

                drawn.forEach ((id) => {

                    cards[id].drawn = false
                
                })

                get ().deck.resetDrawn ()
            
            }),
            // match
            'setMatch': () => set ((state) => ({
                'deck': {
                    ...state.deck,
                    'matched': state.deck.matched + 2,
                },
            })),
        },
    }),
)