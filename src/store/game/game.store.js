import produce from 'immer'

export const gameStore = (set) => ({
    'game': {
        'isRunning': false,
        'isComplete': false,
        'world': undefined,
        'level': undefined,
        'complete': () => set (produce ((state) => {

            state.game.isRunning = false

            state.game.isComplete = true
        
        })),
    },
})
