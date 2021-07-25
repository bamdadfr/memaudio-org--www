import create from 'zustand'

export const useStore = create (
    (set, get) => ({
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
                'deck': {
                    ...state.deck,
                    'cards': newCards,
                },
            })),
            'reset': () => set ((state) => ({
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
            'setUndraw': () => set (() => {

                const cards = get ().deck.cards
                const drawn = get ().deck.drawn

                drawn.forEach ((id) => {

                    cards[id].drawn = false
                
                })

                get ().deck.resetDrawn ()
            
            }),
            'setDraw': (id) => set (() => {

                const cards = get ().deck.cards
                const drawn = get ().deck.drawn

                if (drawn.length === 2) return

                cards[id].drawn = true

                drawn.push (id)

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