import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import { Container } from './audio-announcer.component.styles'
import { useAudioAnnouncerComponent } from './hooks/use-audio-announcer-component'

const propTypes = {
    'files': PropTypes.arrayOf (PropTypes.string).isRequired,
}

/**
 * @param {object} props react props
 * @param {Array.<string>} props.files file paths to play
 * @returns {React.ReactNode} react component
 */
export function AudioAnnouncerComponent ({ files }) {

    const { index, nextIndex } = useAudioAnnouncerComponent (files)

    return (
        <>
            {files &&
                <Container>
                    <ReactPlayer
                        url={files[index]}
                        playing
                        onEnded={nextIndex}
                    />
                </Container>
            }
        </>
    )

}

AudioAnnouncerComponent.propTypes = propTypes