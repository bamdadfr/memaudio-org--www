import React, { useCallback } from 'react'
import { Container, Card } from './card.component.styles'
import { useCardComponent } from '../../hooks'
import { useStore } from '../../../../hooks'

/**
 * @param {object} props react props
 * @param {Array.<React.ReactElement>} props.children card content
 * @param {string} props.color card color
 * @param {Function} props.callback card callback
 * @param {boolean} props.leaveOnCallback grid should leave?
 * @returns {React.ReactElement} react component
 */
export function CardComponent ({
    children,
    color,
    callback,
    leaveOnCallback,
}) {

    const {
        ref,
        width,
        height,
        front,
        back,
        flipped,
        toggleFlipped,
        spring,
    } = useCardComponent ({
        'content': children,
        callback,
        leaveOnCallback,
    })

    const locked = useStore ((state) => state.locked)

    const handleClick = useCallback (() => {

        toggleFlipped ()

    }, [flipped])

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
                    onClick={!locked ? handleClick : undefined}
                    style={{
                        'opacity': spring.opacity.to ((o) => 1 - o),
                        'transform': spring.transform,
                    }}
                >
                    {front}
                </Card>
                <Card
                    $isBack
                    $color={color}
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