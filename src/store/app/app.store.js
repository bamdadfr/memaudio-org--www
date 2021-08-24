import produce from 'immer'

/**
 * @param {Function} set zustand setter
 * @returns {object} state
 */
export function appStore (set) {

    return {
        'app': {
            'volume': 1,
            'setVolume': (v) => set (produce ((state) => {

                state.app.volume = parseFloat (v)
            
            })),
        },
    }

}