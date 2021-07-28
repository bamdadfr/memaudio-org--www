import React from 'react'
import { animated, useSpring } from '@react-spring/web'
import { Container } from './background.component.styles'
import { BackgroundConstants } from './background.constants'

/**
 * @returns {React.ReactElement} react component
 */
function NonMemoBackgroundComponent () {

    const props = useSpring (BackgroundConstants.config)

    return (
        <>
            <Container>
                <animated.div style={props}/>
            </Container>
        </>
    )

}

export const BackgroundComponent = React.memo (NonMemoBackgroundComponent)