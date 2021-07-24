import { useMeasure } from 'react-use'
import { useSize } from './use-size'
import { useTransitions } from './use-transitions'

/**
 * @description get number of columns and rows
 * @param {number} cards number of cards to display
 * @typedef {number} Columns
 * @typedef {number} Rows
 * @returns {{Columns, Rows}} grid size
 */
export function useGridComponent (cards) {

    const { columns, rows } = useSize (cards.length)
    const [ref, { width }] = useMeasure ()

    const {
        transitions,
        waitFor,
        triggerLeave,
    } = useTransitions (cards, { width })

    return {
        columns,
        rows,
        ref,
        transitions,
        waitFor,
        triggerLeave,
    }

}
