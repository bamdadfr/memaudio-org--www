import produce from 'immer'

export const boardStore = (set) => ({
    'board': {
        'isLocked': false,
        'isLeaving': false,
        // lock
        'setLock': () => set (produce ((state) => {

            state.board.isLocked = true
        
        })),
        'setUnlock': () => set (produce ((state) => {

            state.board.isLocked = false
        
        })),
        // leave
        'setLeave': () => set (produce ((state) => {

            state.board.isLocked = true

            state.board.isLeaving = true
        
        })),
        'resetLeave': () => set (produce ((state) => {

            state.board.isLocked = false

            state.board.isLeaving = false
        
        })),
    },
})