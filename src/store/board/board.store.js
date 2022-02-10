import produce from 'immer';

export const boardStore = (set) => ({
  board: {
    isLocked: false,
    isLeaving: false,
    setLock: () => set(produce((state) => {
      state.board.isLocked = true;
    })),
    setUnlock: () => set(produce((state) => {
      state.board.isLocked = false;
    })),
    setLeave: () => set(produce((state) => {
      state.board.isLocked = true;
      state.board.isLeaving = true;
    })),
    resetLeave: () => set(produce((state) => {
      state.board.isLocked = false;
      state.board.isLeaving = false;
    })),
  },
});
