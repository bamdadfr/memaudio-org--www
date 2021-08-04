import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import { AppLayout } from './app.layout'

const render = () => {

    const { container } = defaultRender (
        <AppLayout>
            <span>children</span>
        </AppLayout>,
    )

    return {
        container,
    }

}

describe ('AppLayout', () => {

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