import React from 'react'
import { render } from '@testing-library/react'
import { BackgroundComponent } from './background.component'

describe ('BackgroundComponent', () => {

    describe ('container', () => {

        it ('should be defined', () => {

            const { container } = render (<BackgroundComponent/>)

            expect (container).toBeDefined ()

        })

        it ('should be in the document', () => {

            const { container } = render (<BackgroundComponent/>)

            expect (container).toBeInTheDocument ()
        
        })
    
        it ('should be visible', () => {

            const { container } = render (<BackgroundComponent/>)

            expect (container).toBeVisible ()

        })

    })

})