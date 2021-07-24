import { useEffect, useState } from 'react'
import { useTransition } from '@react-spring/web'
import { useStore } from '../../../hooks'

/**
 * @param {Array} array containing items
 * @param {object} options grid options
 * @param {number} options.width grid width
 * @returns {{Function,Object,Function}} transitions, waitFor, triggerLeave
 */
export function useGridTransitions (array, { width }) {

    const [items, setItems] = useState ([])
    const leave = useStore ((state) => state.leave)
    const resetLeave = useStore ((state) => state.resetLeave)
    const waitFor = useStore ((state) => state.waitFor)

    const transitions = useTransition (items, {
        'from': { 'opacity': 0, 'x': width * 2 * -1 },
        'enter': { 'opacity': 1, 'x': 0 },
        'leave': { 'opacity': 0, 'x': width * 2 },
        'config': { 'mass': 5, 'tension': 500, 'friction': 100 },
        'trail': 75,
    })

    // enter
    useEffect (() => {

        setTimeout (() => {

            setItems (array)

        }, waitFor.gridEnter)

    }, [])

    // leave
    useEffect (() => {

        if (leave) {

            setItems ([])

            // reset state
            setTimeout (() => {

                resetLeave ()
            
            }, waitFor.cardFlip + waitFor.gridLeave + waitFor.gridEnter)
        
        }

    }, [leave])

    return {
        transitions,
        waitFor,
    }

}
