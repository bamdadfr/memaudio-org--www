import React from 'react'
import { useMeasure } from 'react-use'
import { SpringValues } from '@react-spring/web'
import { getCardFaces } from '../../../utils/get-card-faces'
import { useCardSpring } from './use-card-spring'
import { useCardCallback } from './use-card-callback'
import { useCardFlip } from './use-card-flip'
import { useCardGameColor } from './use-card-game-color'
import { useStore } from '../../../../../store/use-store'
import { useCardClick } from './use-card-click'

/**
 * @param {object} params hook parameters
 * @param {number} params.children react component children with faces to parse
 * @param {number} params.id card id
 * @param {string} params.src card audio source
 * @param {Function<undefined>} params.callback card callback
 * @param {boolean} params.leaveOnCallback leave board when callback is called?
 * @typedef {React.Ref} Ref container ref
 * @typedef {number} Width container width
 * @typedef {number} Height container height
 * @typedef {HTMLElement} Front card front face
 * @typedef {HTMLElement} Back card back face
 * @typedef {SpringValues} Spring card spring animation (flip)
 * @typedef {boolean} BoardIsLocked board is locked?
 * @typedef {boolean} GameIsRunning game is running?
 * @typedef {string} GameColor color for back face (match status)
 * @typedef {Function<undefined>} HandleClick wrapper for toggling flip state
 * @returns {{Ref, Width, Height, Front, Back, Spring, BoardIsLocked, GameIsRunning, GameColor, HandleClick}}
 *      custom state for card.component.js
 */
export function useCardComponent ({
    children,
    id,
    src,
    callback,
    leaveOnCallback,
}) {

    // container
    const [ref, { width, height }] = useMeasure ()
    // faces
    const { front, back } = getCardFaces (children)
    // state
    const { flipped, toggleFlipped } = useCardFlip (id)
    // animations
    const { spring } = useCardSpring (flipped)
    // ui
    const boardIsLocked = useStore ((state) => state.board.isLocked)
    const gameIsRunning = useStore ((state) => state.game.isRunning)
    const gameColor = useCardGameColor (id)
    // interactions
    const { handleClick } = useCardClick (toggleFlipped, src)

    useCardCallback (flipped, callback, leaveOnCallback)

    return {
        // container
        ref,
        width,
        height,
        // faces
        front,
        back,
        // animations
        spring,
        // ui
        boardIsLocked,
        gameIsRunning,
        gameColor,
        // interactions
        handleClick,
    }

}
