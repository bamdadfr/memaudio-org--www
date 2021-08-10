import React from 'react'
import { useGameComponent } from './hooks/use-game-component'

/**
 * @description dummy component to manage state and avoid DOM renders
 * @returns {React.ReactElement} react component
 */
export function GameComponent () {

    useGameComponent ()

    return <></>

}