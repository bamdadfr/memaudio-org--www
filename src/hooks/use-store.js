import create from 'zustand'

export const useStore = create (
    (set, get) => ({
        // animations
        'waitFor': {
            'gridEnter': 5,
            'gridLeave': 400,
            'cardFlip': 500,
        },
        // grid,
        'locked': false,
        'setLocked': () => set (() => ({ 'locked': true })),
        'unlock': () => set (() => ({ 'locked': false })),
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
        'deck': [],
        'loadDeck': (d) => set (() => ({ 'deck': d })),
        'unloadDeck': () => set (() => ({ 'deck': [] })),
        'drawn': [], // only stores id
        'flushDrawn': () => set (() => ({ 'drawn': [] })),
        'drawCard': (id) => set (() => {

            const deck = get ().deck
            const drawn = get ().drawn

            deck[id].drawn = true

            drawn.push (id)

            if (drawn.length === 2) {

                get ().setLocked ()

                if (deck[drawn[0]].src === deck[drawn[1]].src) {

                    deck[drawn[0]].matched = true

                    deck[drawn[1]].matched = true

                    get ().flushDrawn ()

                    get ().unlock ()

                } else {

                    deck[drawn[0]].drawn = false

                    deck[drawn[1]].drawn = false

                    get ().flushDrawn ()

                }

            }

        }),
    }),
)