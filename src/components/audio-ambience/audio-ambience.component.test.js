import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import { AudioAmbienceComponent } from './audio-ambience.component'

const render = () => {

    const { container } = defaultRender (
        <AudioAmbienceComponent/>,
    )

    return {
        container,
    }

}

describe ('AudioAmbienceComponent', () => {

    describe ('container', () => {

        it ('should be defined and visible', () => {

            const { container } = render ()

            expect (container).toBeInTheDocument ()

            expect (container).toBeVisible ()

        })

        it ('should not be empty', () => {

            const { container } = render ()

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

})