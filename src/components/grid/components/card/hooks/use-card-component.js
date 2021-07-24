import { useMeasure } from 'react-use'
import { getFacesFromProps } from '../../../utils'
import { useFlip } from './use-flip'

/**
 * @param {string | Array} content of card
 * @returns {object} card state + functions
 */
export function useCardComponent (content) {

    const { front, back } = getFacesFromProps (content)
    const [ref, { width, height }] = useMeasure ()
    const { flipped, toggleFlipped, spring } = useFlip ()

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
