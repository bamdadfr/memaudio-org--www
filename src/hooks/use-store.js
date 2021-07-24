import create from 'zustand'

export const useStore = create (
    (set) => ({
        // animations
        'waitFor': {
            'gridEnter': 5,
            'gridLeave': 400,
            'cardFlip': 500,
        },
        // grid,
        'locked': false,
        'setLocked': () => set (() => ({ 'locked': true })),
        'leave': false,
        'fireLeave': () => set (() => ({
            'locked': true,
            'leave': true,
        })),
        'resetLeave': () => set (() => ({
            'locked': false,
            'leave': false,
        })),
        // deck
        'game': false,
        'deck': [],
        'loadDeck': (d) => set (() => ({ 'game': true, 'deck': d })),
        'unloadDeck': () => set (() => ({ 'game': false, 'deck': [] })),
        'drawn': [],
        'drawCard': (c) => set ((s) => ({ 'drawn': [...s.drawn, c] })),
        'flushDrawn': () => set (() => ({ 'drawn': [] })),
    }),
)