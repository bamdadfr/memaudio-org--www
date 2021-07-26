export const gameStore = (set) => ({
    'game': {
        'isRunning': false,
        'isComplete': false,
        'world': undefined,
        'level': 0,
        'complete': (world, level) => set ((state) => ({
            'game': {
                ...state.game,
                'isComplete': true,
                'world': world,
                'level': level,
            },
        })),
    },
})
