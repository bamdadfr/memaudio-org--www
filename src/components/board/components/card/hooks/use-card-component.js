import { useMeasure } from 'react-use'
import { useCallback } from 'react'
import { getCardFaces } from '../../../utils'
import { useCardSpring } from './use-card-spring'
import { useCardCallback } from './use-card-callback'
import { useCardFlip } from './use-card-flip'

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
    // state
    const { flipped, toggleFlipped } = useCardFlip (id)
    // animations
    const { spring } = useCardSpring (flipped)
    // interactions
    const handleClick = useCallback (() => toggleFlipped (), [])

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
