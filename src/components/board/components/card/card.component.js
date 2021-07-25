import React from 'react'
import { Container, Card } from './card.component.styles'
import { useCardComponent } from './hooks'
import { useStore } from '../../../../hooks'

/**
 * @param {object} props react props
 * @param {Array.<React.ReactElement>} props.children card content
 * @param {number} props.id card id (only relative to grid)
 * @param {string} props.color card color
 * @param {Function} props.callback card callback
 * @param {boolean} props.leaveOnCallback grid should leave?
 * @returns {React.ReactElement} react component
 */
export function CardComponent ({
    children,
    id,
    color,
    callback,
    leaveOnCallback,
}) {

    const {
        // container
        ref,
        width,
        height,
        // faces
        front,
        back,
        // animations
        spring,
        // interactions
        handleClick,
    } = useCardComponent ({
        children,
        id,
        callback,
        leaveOnCallback,
    })

    const boardIsLocked = useStore ((state) => state.board.isLocked)
    const cards = useStore ((state) => state.deck.cards)
    const isGame = useStore ((state) => state.level.isGame)

    return (
        <>
            <Container
                ref={ref}
                tabIndex={-1}
                role="button"
            >
                <Card
                    $isFront
                    $color={color}
                    width={width}
                    height={height}
                    onClick={!boardIsLocked ? handleClick : undefined}
                    style={{
                        'opacity': spring.opacity.to ((o) => 1 - o),
                        'transform': spring.transform,
                    }}
                >
                    {front}
                </Card>
                <Card
                    $isBack
                    $color={isGame ? cards[id].color : color}
                    width={width}
                    height={height}
                    onClick={
                        typeof back.props.children === 'undefined'
                            ? undefined
                            : handleClick
                    }
                    style={{
                        'opacity': spring.opacity,
                        'transform': spring.transform,
                        'rotateY': '180deg',
                    }}
                >
                    {back}
                </Card>
            </Container>
        </>
    )

}