import { Ref } from 'react'
import { useMeasure } from 'react-use'
import { useBoardSize } from './use-board-size'
import { UseBoardTransitions, useBoardTransitions } from './use-board-transitions'
import { useStore } from '../../../store/use-store'
import { Card } from '../../../utils/build-deck'

type UseBoardModule = {
    columns: number
    rows: number
    ref: Ref<HTMLDivElement>
    transitions: UseBoardTransitions['transitions']
    gameIsRunning: boolean
}

export function useBoardModule (cards: Card[]): UseBoardModule {
    
    const { columns, rows } = useBoardSize (cards.length)
    const [ref, { width }] = useMeasure ()
    const { transitions } = useBoardTransitions (cards, { width })
    const gameIsRunning = useStore ((state: any) => state.game.isRunning)

    return {
        columns,
        rows,
        ref,
        transitions,
        gameIsRunning,
    }

}