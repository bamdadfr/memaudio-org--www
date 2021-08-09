export const deckStore = (set, get) => ({
    'deck': {
        'cards': {},
        'getCard': (id) => get ().deck.cards[id],
        'drawn': [],
        'toMatch': -1,
        // global
        'load': (newCards, world, level) => set ((state) => ({
            'board': {
                ...state.board,
                'isLocked': false,
            },
            'game': {
                ...state.game,
                'isRunning': true,
                'isComplete': false,
                'world': world,
                'level': level,
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
                'isComplete': false,
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

            state.deck.cards[id].drawn = true

            return {
                'deck': {
                    ...state.deck,
                    'cards': {
                        ...state.deck.cards,
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
})