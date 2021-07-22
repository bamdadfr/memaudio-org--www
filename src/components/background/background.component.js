import React from 'react'
import { a, useSpring } from '@react-spring/web'
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
                <a.div style={props}/>
            </Container>
        </>
    )

}

export const BackgroundComponent = React.memo (NonMemoBackgroundComponent)