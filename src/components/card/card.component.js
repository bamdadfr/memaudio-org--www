import React, { useState } from 'react'
import { useSpring } from '@react-spring/web'
import { useMeasure } from 'react-use'
import { Container, Card } from './card.component.styles'
import { CardConstants } from './card.constants'

/**
 * @param {object} props react props
 * @param {Array.<React.ReactElement>} props.children content of the card
 * @param {string} props.color color
 * @returns {React.ReactElement} react component
 */
export function CardComponent ({
    children,
    color = CardConstants.color,
}) {

    const front = typeof children === 'object' ? children[0] : children
    const back = typeof children === 'object' ? children[1] : null
    const [flipped, setFlipped] = useState (false)
    const [ref, { width, height }] = useMeasure ()

    const { transform, opacity } = useSpring ({
        'opacity': flipped ? 1 : 0,
        'transform': `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        'config': { 'mass': 10, 'tension': 500, 'friction': 80 },
    })

    return (
        <>
            <Container
                ref={ref}
                tabIndex={-1}
                role="button"
            >
                <Card
                    onClick={() => setFlipped ((f) => !f)}
                    color={color}
                    width={width}
                    height={height}
                    style={{
                        'opacity': opacity.to ((o) => 1 - o),
                        transform,
                    }}
                >
                    {front}
                </Card>
                {back
                    ?
                        <Card
                            onClick={() => setFlipped ((f) => !f)}
                            color={color}
                            width={width}
                            height={height}
                            style={{
                                opacity,
                                transform,
                                'rotateY': '180deg',
                            }}
                        >
                            {back}
                        </Card>
                    : null
                }

            </Container>
        </>
    )

}