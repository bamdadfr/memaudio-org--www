import produce from 'immer'

export const deckStore = (set, get) => ({
    'deck': {
        'cards': {},
        'getCard': (id) => get ().deck.cards[id],
        'drawn': [],
        'toMatch': -1,
        // global
        'load': (newCards, world, level) => set (produce ((state) => {

            state.deck.cards = { ...newCards }

            state.deck.toMatch = newCards.length

            state.game.isRunning = true

            state.game.isComplete = false

            state.game.world = world

            state.game.level = level

            state.board.isLocked = false

        })),
        'reset': () => set (produce ((state) => {

            state.game.isRunning = false

            state.game.isComplete = false

            state.deck.cards = {}

            state.deck.drawn = []

            state.deck.toMatch = -1
        
        })),
        // draw
        'resetDrawn': () => set (produce ((state) => {

            state.deck.drawn = []
        
        })),
        'setDraw': (id) => set (produce ((state) => {

            state.deck.cards[id].drawn = true

            state.deck.drawn = [...state.deck.drawn, id]
        
        })),
        'setUndraw': () => set (produce ((state) => {

            state.deck.drawn.forEach ((id) => {

                state.deck.cards[id].drawn = false
            
            })

            state.deck.drawn = []
        
        })),
        'setMatch': () => set (produce ((state) => {

            const number = state.deck.drawn.length

            state.deck.drawn.forEach ((id) => {

                state.deck.cards[id].matched = true
            
            })

            state.deck.drawn = []

            state.deck.toMatch -= number
        
        })),
    },
})