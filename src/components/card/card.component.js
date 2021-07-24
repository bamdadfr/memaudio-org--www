import React, { useEffect, useState } from 'react'
import { useSpring } from '@react-spring/web'
import { useMeasure } from 'react-use'
import { Container, Card } from './card.component.styles'
import { CardConstants } from './card.constants'
import { getFacesFromProps } from './utils'

/**
 * @param {object} props react props
 * @param {Array.<React.ReactElement>} props.children content of the card
 * @param {string} props.color color
 * @param {Function} props.onFlipped callback
 * @returns {React.ReactElement} react component
 */
export function CardComponent ({
    children,
    color = CardConstants.color,
    onFlipped = () => undefined,
}) {

    const { front, back } = getFacesFromProps (children)
    const [flipped, setFlipped] = useState (false)
    const [ref, { width, height }] = useMeasure ()

    const spring = useSpring ({
        'opacity': flipped ? 1 : 0,
        'transform': `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        'config': { 'mass': 10, 'tension': 500, 'friction': 80 },
        // 'config': { 'mass': 5, 'tension': 500, 'friction': 100 },
    })

    useEffect (() => {

        if (!flipped) return

        // wait for the flip animation to end
        setTimeout (() => {

            onFlipped ()

        }, 500)

    }, [flipped])

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
                        'opacity': spring.opacity.to ((o) => 1 - o),
                        'transform': spring.transform,
                    }}
                >
                    {front}
                </Card>
                {back
                    ?
                        <Card
                            onClick={Object.keys (back.props).length
                                ? () => setFlipped ((f) => !f)
                                : undefined
                            }
                            color={color}
                            width={width}
                            height={height}
                            style={{
                                'opacity': spring.opacity,
                                'transform': spring.transform,
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