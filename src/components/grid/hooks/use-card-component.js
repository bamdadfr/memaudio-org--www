import { useMeasure } from 'react-use'
import { useCallback, useState } from 'react'
import { getFacesFromProps } from '../utils'
import { useCardFlip } from './use-card-flip'
import { useCardCallback } from './use-card-callback'

// todo jsdoc
/**
 * @param {*} root0 *
 * @param {*} root0.content *
 * @param {*} root0.callback *
 * @param {*} root0.leaveOnCallback *
 * @returns {*} *
 */
export function useCardComponent ({
    content,
    callback,
    leaveOnCallback,
}) {

    const [flipped, setFlipped] = useState (false)
    const { front, back } = getFacesFromProps (content)
    const [ref, { width, height }] = useMeasure ()
    const { spring } = useCardFlip (flipped)
    const toggleFlipped = useCallback (() => setFlipped ((f) => !f), [])

    useCardCallback (flipped, callback, leaveOnCallback)

    return {
        ref,
        width,
        height,
        front,
        back,
        flipped,
        toggleFlipped,
        spring,
    }

}
