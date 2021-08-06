import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import { Container } from './audio-announcer.component.styles'

const propTypes = {
    'files': PropTypes.arrayOf (PropTypes.string).isRequired,
}

/**
 * @param {object} props react props
 * @param {Array.<string>} props.files file paths to play
 * @returns {React.ReactNode} react component
 */
export function AudioAnnouncerComponent ({ files }) {

    const [index, setIndex] = useState (0)

    const nextIndex = useCallback (() => {

        if (typeof files[index + 1] === 'undefined') return

        setIndex ((i) => i + 1)
    
    }, [index, files])

    if (typeof files === 'undefined') return <></>

    if (files.length === 0) return <></>

    return (
        <>
            <Container>
                <ReactPlayer
                    url={files[index]}
                    playing
                    onEnded={nextIndex}
                />
            </Container>
        </>
    )

}

AudioAnnouncerComponent.propTypes = propTypes