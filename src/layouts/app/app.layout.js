import React from 'react'
import { BackgroundComponent } from '../../components'

/**
 * @param {object} props react props
 * @param {React.ReactNode} props.children children
 * @returns {React.ReactElement} react component
 */
export function AppLayout ({ children }) {

    return (
        <>
            <BackgroundComponent/>
            {children}
        </>
    )

}