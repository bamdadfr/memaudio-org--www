import React from 'react'
import { BackgroundComponent } from '../../components/background/background.component'

/**
 * @description exclusive use in pages/_app.js
 * @param {object} props react props
 * @param {React.ReactNode} props.children children
 * @returns {React.ReactNode} react component
 */
export function AppLayout ({ children }) {

    return (
        <>
            <BackgroundComponent/>
            {children}
        </>
    )

}