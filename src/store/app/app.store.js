import produce from 'immer';

export const appStore = (set) => ({
  app: {
    volume: 1,
    setVolume: (v) => set (produce ((state) => {
      state.app.volume = parseFloat (v);
    })),
  },
});
