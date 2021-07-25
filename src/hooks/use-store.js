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
            'setDraw': (id) => set (() => {

                const cards = get ().deck.cards
                const drawn = get ().deck.drawn
                const setMatch = get ().deck.setMatch

                cards[id].drawn = true

                drawn.push (id)

                if (drawn.length === 2) {

                    get ().setLocked ()

                    if (cards[drawn[0]].src === cards[drawn[1]].src) {

                        cards[drawn[0]].matched = true

                        cards[drawn[1]].matched = true

                        setMatch ()

                        if (get ().matched === cards.length) {

                            get ().setLock ()

                            get ().setLeave ()

                        }

                        get ().resetDrawn ()

                        get ().setUnlock ()

                    } else {

                        cards[drawn[0]].drawn = false

                        cards[drawn[1]].drawn = false

                        get ().resetDrawn ()

                    }

                }

            }),
            // match
            'setMatch': () => set ((state) => ({
                'deck': {
                    ...state.deck,
                    'matched': state.matched + 2,
                },
            })),
        },
    }),
)