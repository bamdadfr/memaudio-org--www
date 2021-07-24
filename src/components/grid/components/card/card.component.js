import React, { useEffect } from 'react'
import { Container, Card } from './card.component.styles'
import { useCardComponent } from './hooks'

/**
 * @param {object} props react props
 * @param {Array.<React.ReactElement>} props.children content of the card
 * @param {string} props.color color
 * @param {Function} props.handleFlipped callback
 * @returns {React.ReactElement} react component
 */
export function CardComponent ({
    children,
    color,
    handleFlipped = () => undefined,
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
    } = useCardComponent (children)

    useEffect (() => {

        if (!flipped) return

        handleFlipped ()

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
                    onClick={() => toggleFlipped ()}
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
                    onClick={() => toggleFlipped ()}
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