import { useMeasure } from 'react-use'
import { useGridSize } from './use-grid-size'
import { useGridTransitions } from './use-grid-transitions'

/**
 * @description get number of columns and rows
 * @param {number} cards number of cards to display
 * @typedef {number} Columns
 * @typedef {number} Rows
 * @returns {{Columns, Rows}} grid size
 */
export function useGridComponent (cards) {

    const { columns, rows } = useGridSize (cards.length)
    const [ref, { width }] = useMeasure ()
    const { transitions } = useGridTransitions (cards, { width })

    return {
        columns,
        rows,
        ref,
        transitions,
    }

}
