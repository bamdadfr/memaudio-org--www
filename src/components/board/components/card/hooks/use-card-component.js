import { useMeasure } from 'react-use'
import { useCallback, useState } from 'react'
import { getCardFaces } from '../../../utils'
import { useCardSpring } from './use-card-spring'
import { useCardCallback } from './use-card-callback'

// todo jsdoc
/**
 * @param {*} root0 *
 * @param {*} root0.children *
 * @param {*} root0.callback *
 * @param {*} root0.leaveOnCallback *
 * @returns {*} *
 */
export function useCardComponent ({
    children,
    id,
    callback,
    leaveOnCallback,
}) {

    // container
    const [ref, { width, height }] = useMeasure ()
    // faces
    const { front, back } = getCardFaces (children)
    //
    const [flipped, setFlipped] = useState (false)
    // animations
    const { spring } = useCardSpring (flipped)
    // interactions
    const handleClick = useCallback (() => setFlipped ((f) => !f), [])

    useCardCallback (flipped, callback, leaveOnCallback)

    return {
        // container
        ref,
        width,
        height,
        // faces
        front,
        back,
        // animations
        spring,
        // interactions
        handleClick,
    }

}
