import { useCallback, useEffect, useState } from 'react'
import { useTransition } from '@react-spring/web'

/**
 * @param {Array} array containing items
 * @param {object} options grid options
 * @param {number} options.width grid width
 * @returns {{Function,Object,Function}} transitions, waitFor, triggerLeave
 */
export function useTransitions (array, { width }) {

    const [items, setItems] = useState ([])
    const [leave, setLeave] = useState (false)

    const [waitFor] = useState ({
        'enter': 5,
        'flip': 500,
        'leave': 400,
    })

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

        }, waitFor.enter)

    }, [])

    // leave
    useEffect (() => {

        if (leave) setItems ([])

    }, [leave])

    const triggerLeave = useCallback (() => {

        setLeave (true)

    }, [])

    return {
        transitions,
        waitFor,
        triggerLeave,
    }

}
