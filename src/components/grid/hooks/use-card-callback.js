import { useEffect } from 'react'
import { useStore } from '../../../hooks'

/**
 * @param {boolean} flipped card state
 * @param {Function} callback card callback
 * @param {boolean} leaveOnCallback grid should leave?
 */
export function useCardCallback (flipped, callback, leaveOnCallback) {

    const waitFor = useStore ((state) => state.waitFor)
    const fireLeave = useStore ((state) => state.fireLeave)
    const setLocked = useStore ((state) => state.setLocked)

    useEffect (() => {

        if (!flipped) return

        if (typeof callback !== 'function') return

        setLocked ()

        setTimeout (() => {

            if (leaveOnCallback) fireLeave ()

            setTimeout (() => {

                callback ()

            }, waitFor.gridLeave)

        }, waitFor.cardFlip)

    }, [flipped])

}
