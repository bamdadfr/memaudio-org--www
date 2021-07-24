import { useCallback, useState } from 'react'
import { useSpring } from '@react-spring/web'

/**
 * @returns {{Boolean,Function,Function}} state + toggle + animation function
 */
export function useFlip () {

    const [flipped, setFlipped] = useState (false)

    const spring = useSpring ({
        'opacity': flipped ? 1 : 0,
        'transform': `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        'config': { 'mass': 10, 'tension': 500, 'friction': 80 },
    })

    const toggleFlipped = useCallback (() => {

        setFlipped ((f) => !f)

    }, [])

    return {
        flipped,
        toggleFlipped,
        spring,
    }

}
