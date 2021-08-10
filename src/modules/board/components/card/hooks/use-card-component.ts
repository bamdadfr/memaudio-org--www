import { Ref } from 'react'
import { useMeasure } from 'react-use'
import { GetCardFaces, getCardFaces } from '../../../utils/get-card-faces'
import { useCardSpring, UseCardSpring } from './use-card-spring'
import { useCardCallback } from './use-card-callback'
import { useCardFlip } from './use-card-flip'
import { useCardGameColor } from './use-card-game-color'
import { useStore } from '../../../../../store/use-store'
import { useCardClick } from './use-card-click'
import { CardComponentProps } from '../card.component'

type UseCardComponentProps = Omit<CardComponentProps, 'color'>

type UseCardComponent = {
    ref: Ref<HTMLDivElement>
    width: number
    height: number
    front: GetCardFaces['front']
    back: GetCardFaces['back']
    spring: UseCardSpring['spring']
    boardIsLocked: boolean
    gameIsRunning: boolean
    gameColor: string
    handleClick: () => void
}

export function useCardComponent ({
    children,
    id,
    src,
    callback,
    leaveOnCallback,
}: UseCardComponentProps): UseCardComponent {

    const [ref, { width, height }] = useMeasure ()
    const { front, back } = getCardFaces (children)
    const { flipped, toggleFlipped } = useCardFlip (id)
    const { spring } = useCardSpring (flipped)
    const boardIsLocked = useStore ((state: any) => state.board.isLocked)
    const gameIsRunning = useStore ((state: any) => state.game.isRunning)
    const gameColor = useCardGameColor (id)
    const { handleClick } = useCardClick (toggleFlipped, src)

    useCardCallback (flipped, callback, leaveOnCallback)

    return {
        ref,
        width,
        height,
        front,
        back,
        spring,
        boardIsLocked,
        gameIsRunning,
        gameColor,
        handleClick,
    }

}