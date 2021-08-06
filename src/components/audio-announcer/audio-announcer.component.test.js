import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import { AudioAnnouncerComponent } from './audio-announcer.component'
import { announcer } from '../../app/data/announcer/announcer'

const render = () => {

    const { container } = defaultRender (
        <AudioAnnouncerComponent
            files={[announcer.game.start]}
        />,
    )

    return {
        container,
    }

}

describe ('AudioAnnouncerComponent', () => {

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