import React from 'react'

/**
 * @param {object|string} props props passed to component
 * @typedef {string|React.ReactElement} Front
 * @typedef {null|React.ReactElement} Back
 * @returns {{Front,Back}} faces of the card
 */
export function getCardFaces (props) {

    if (typeof props === 'string') return { 'front': props, 'back': null }

    const front = typeof props[0] === 'undefined' ? props : props[0]
    const back = typeof props[1] === 'undefined' ? null : props[1]

    return {
        front,
        back,
    }

}