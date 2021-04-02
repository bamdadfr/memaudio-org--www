import React from 'react'
import ReactPlayer from 'react-player'
import { StoreMap } from '../store/store-map'

export const Player = StoreMap (({
    audio, page, setAudioPlaylist, setAudioSrc,
}) => {

    const generalRef = React.useRef (null)
    const [generalPlaying, setGeneralPlaying] = React.useState (true)

    const unloadPlayer = () => {

        if (audio.playlist.length > 0) {

            setAudioPlaylist (audio.playlist.splice (1, audio.playlist.length))

        }

    }

    React.useEffect (() => {

        if (page.transition === true) {

            setGeneralPlaying (false)

            setAudioSrc (null)

            setAudioPlaylist ([])

        }

    }, [page.transition, setAudioSrc, setAudioPlaylist])

    React.useEffect (() => {

        if (audio.playlist.length > 0) {

            if (audio.src === audio.playlist[0]) {

                generalRef.current.seekTo (0)

            } else {

                setAudioSrc (audio.playlist[0])

                setGeneralPlaying (true)

            }

        } else {

            setAudioSrc (null)

        }

    }, [audio.playlist])

    return (
        <>
            <ReactPlayer
                id="player-ambience"
                url="https://soundcloud.com/abarrejadis/le-poinconneur-des-lilas"
                volume={0.5}
                playing={audio.background}
                loop
            />

            <ReactPlayer
                id="player-general"
                ref={generalRef}
                url={audio.src}
                onEnded={() => unloadPlayer ()}
                playing={generalPlaying}
            />
        </>
    )

})