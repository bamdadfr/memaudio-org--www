import { useCallback, useState } from 'react'

/**
 * @param {string[]} files announcer files
 * @typedef {number} Index
 * @typedef {function(): number} NextIndex
 * @returns {{Index,NextIndex}} UseAudioAnnouncerComponent
 */
export function useAudioAnnouncerComponent (files) {

    const [index, setIndex] = useState (0)

    const nextIndex = useCallback (() => {

        if (typeof files[index + 1] === 'undefined') return

        setIndex ((i) => i + 1)

    }, [index, files])

    return {
        index,
        nextIndex,
    }

}