import { useEffect } from 'react'
import { useStore } from '../../../store'

/**
 * @param {boolean} flipped card state
 * @param {Function} callback card callback
 * @param {boolean} leaveOnCallback grid should leave?
 */
export function useCardCallback (flipped, callback, leaveOnCallback) {

    const waitFor = useStore ((state) => state.animations.waitFor)
    const setLeave = useStore ((state) => state.board.setLeave)
    const setLock = useStore ((state) => state.board.setLock)

    useEffect (() => {

        if (!flipped) return

        if (typeof callback !== 'function') return

        setLock ()

        setTimeout (() => {

            if (leaveOnCallback) setLeave ()

            setTimeout (() => {

                callback ()

            }, waitFor.board.leave)

        }, waitFor.card.flip)

    }, [flipped])

}
