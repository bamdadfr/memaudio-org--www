export const levelStore = (set) => ({
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
})
