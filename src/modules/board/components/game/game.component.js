import React from 'react'
import { useGameMatch, useGameComplete } from '../../hooks'

/**
 * @returns {React.ReactElement} react component
 */
export function GameComponent () {

    useGameMatch ()

    useGameComplete ()

    return <></>

}