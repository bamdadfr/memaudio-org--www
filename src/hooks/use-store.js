import create from 'zustand'

export const useStore = create (
    (set, get) => ({
        // level
        'game': {
            'isRunning': false,
            'isComplete': false,
            'world': undefined,
            'level': undefined,
            'complete': (world, level) => set ((state) => ({
                'game': {
                    ...state.game,
                    'isComplete': true,
                    'world': world,
                    'level': level,
                },
            })),
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
            'cards': {},
            'getCard': (id) => get ().deck.cards[id],
            'drawn': [],
            'toMatch': -1,
            // global
            'load': (newCards) => set ((state) => ({
                'game': {
                    ...state.game,
                    'isRunning': true,
                },
                'deck': {
                    ...state.deck,
                    'cards': { ...newCards },
                    'toMatch': newCards.length,
                },
            })),
            'reset': () => set ((state) => ({
                'game': {
                    ...state.game,
                    'isRunning': false,
                },
                'deck': {
                    ...state.deck,
                    'cards': {},
                    'drawn': [],
                    'toMatch': -1,
                },
            })),
            // draw
            'resetDrawn': () => set ((state) => ({
                'deck': {
                    ...state.deck,
                    'drawn': [],
                },
            })),
            'setDraw': (id) => set ((state) => {

                const newCard = state.deck.cards[id]

                newCard.drawn = true

                return {
                    'deck': {
                        ...state.deck,
                        'cards': {
                            ...state.deck.cards,
                            newCard,
                        },
                        'drawn': [
                            ...state.deck.drawn,
                            id,
                        ],
                    },
                }

            }),
            'setUndraw': () => set ((state) => {

                let newCards = {}

                state.deck.drawn.forEach ((id) => {

                    const newCard = state.deck.cards[id]

                    newCard.drawn = false

                    newCards = {
                        ...newCards,
                        newCard,
                    }

                })

                return {
                    'deck': {
                        ...state.deck,
                        'cards': {
                            ...state.deck.cards,
                            ...newCards,
                        },
                        'drawn': [],
                    },
                }
            
            }),
            // match
            'setMatch': () => set ((state) => {

                const number = state.deck.drawn.length

                state.deck.drawn.forEach ((id) => {

                    const card = state.deck.cards[id]

                    card.matched = true

                })

                return {
                    'deck': {
                        ...state.deck,
                        'toMatch': state.deck.toMatch - number,
                        'drawn': [],
                    },
                }
            
            }),
        },
    }),
)