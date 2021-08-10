import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import HomePage from '../../pages/home'

const render = () => {

    const { container } = defaultRender (
        <HomePage/>,
    )

    return {
        container,
    }

}

describe ('HomePage', () => {

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