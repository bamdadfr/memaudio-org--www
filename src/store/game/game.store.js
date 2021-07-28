export const gameStore = (set) => ({
    'game': {
        'isRunning': false,
        'isComplete': false,
        'world': undefined,
        'level': undefined,
        'complete': () => set ((state) => ({
            'game': {
                ...state.game,
                'isRunning': false,
                'isComplete': true,
            },
        })),
    },
})
