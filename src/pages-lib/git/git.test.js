import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import GitPage from '../../pages/git'

const render = () => {

    const { container } = defaultRender (
        <GitPage/>,
    )

    return {
        container,
    }

}

describe ('GitPage', () => {

    describe ('container', () => {

        it ('should be defined and visible', () => {

            const { container } = render ()

            expect (container).toBeInTheDocument ()

            expect (container).toBeVisible ()

        })

        it ('should be empty', () => {

            const { container } = render ()

            expect (container).toBeEmptyDOMElement ()

        })

    })

})