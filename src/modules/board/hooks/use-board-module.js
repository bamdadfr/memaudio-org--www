import { useMeasure } from 'react-use'
import { useBoardSize } from './use-board-size'
import { useBoardTransitions } from './use-board-transitions'
import { useStore } from '../../../store/use-store'

/**
 * @param {number} cards number of cards to display
 * @typedef {number} Columns
 * @typedef {number} Rows
 * @returns {{Columns, Rows}} grid size
 */
export function useBoardModule (cards) {

    const { columns, rows } = useBoardSize (cards.length)
    const [ref, { width }] = useMeasure ()
    const { transitions } = useBoardTransitions (cards, { width })
    const gameIsRunning = useStore ((state) => state.game.isRunning)

    return {
        columns,
        rows,
        ref,
        transitions,
        gameIsRunning,
    }

}
