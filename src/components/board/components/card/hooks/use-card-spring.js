import { useSpring } from '@react-spring/web'

/**
 * @param {boolean} flipped card state
 * @returns {{Boolean,Function,Function}} state + toggle + animation function
 */
export function useCardSpring (flipped) {

    const spring = useSpring ({
        'opacity': flipped ? 1 : 0,
        'transform': `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        'config': { 'mass': 10, 'tension': 500, 'friction': 80 },
    })

    return { spring }

}
