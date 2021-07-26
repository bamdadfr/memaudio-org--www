import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import { Container } from './audio-announcer.component.styles'

const propTypes = {
    'files': PropTypes.arrayOf (PropTypes.string).isRequired,
}

/**
 * @param {object} props react props
 * @param {Array.<string>} props.files file paths to play
 * @returns {React.ReactElement} react component
 */
export function AudioAnnouncerComponent ({ files }) {

    if (typeof files === 'undefined') return <></>

    if (files.length === 0) return <></>

    return (
        <>
            <Container>
                <ReactPlayer
                    url={files[0]}
                    playing
                />
            </Container>
        </>
    )

}

AudioAnnouncerComponent.propTypes = propTypes