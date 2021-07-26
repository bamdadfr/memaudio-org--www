export const boardStore = (set) => ({
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
})