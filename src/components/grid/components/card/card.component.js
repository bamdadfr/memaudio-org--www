import React, { useCallback, useEffect, useState } from 'react'
import { useSpring } from '@react-spring/web'
import { useMeasure } from 'react-use'
import { Container, Card } from './card.component.styles'
import { getFacesFromProps } from '../../utils'

/**
 * @param {object} props react props
 * @param {Array.<React.ReactElement>} props.children content of the card
 * @param {string} props.color color
 * @param {Function} props.onFlipped callback
 * @param {boolean} props.isGame game card?
 * @param {boolean} props.isLocked lock interactions?
 * @returns {React.ReactElement} react component
 */
export function CardComponent ({
    children,
    color,
    onFlipped = () => undefined,
    isGame,
    isLocked,
}) {

    const { front, back } = getFacesFromProps (children)
    const [flipped, setFlipped] = useState (false)
    const [ref, { width, height }] = useMeasure ()

    const spring = useSpring ({
        'opacity': flipped ? 1 : 0,
        'transform': `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        'config': { 'mass': 10, 'tension': 500, 'friction': 80 },
    })

    useEffect (() => {

        if (!flipped) return

        onFlipped ()

    }, [flipped])

    const toggleFlipped = useCallback (() => setFlipped ((f) => !f), [])

    return (
        <>
            <Container
                ref={ref}
                tabIndex={-1}
                role="button"
            >
                <Card
                    $isFront
                    $isGame={isGame}
                    $color={color}
                    width={width}
                    height={height}
                    onClick={
                        isLocked
                            ? undefined
                            : toggleFlipped
                    }
                    style={{
                        'opacity': spring.opacity.to ((o) => 1 - o),
                        'transform': spring.transform,
                    }}
                >
                    {front}
                </Card>
                <Card
                    $isBack
                    $isGame={isGame}
                    $color={color}
                    width={width}
                    height={height}
                    onClick={
                        typeof back.props.children === 'undefined'
                            ? undefined
                            : toggleFlipped
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