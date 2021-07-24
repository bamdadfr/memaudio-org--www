import { useMeasure } from 'react-use'
import { useCallback, useState } from 'react'
import { getCardFaces } from '../utils'
import { useCardFlip } from './use-card-flip'
import { useCardCallback } from './use-card-callback'
import { useStore } from '../../../hooks'

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
    id,
    callback,
    leaveOnCallback,
}) {

    const deck = useStore ((s) => s.deck)
    const [flipped, setFlipped] = useState (false)
    const { front, back } = getCardFaces (content)
    const [ref, { width, height }] = useMeasure ()
    const { spring } = useCardFlip (deck[id].drawn)
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
