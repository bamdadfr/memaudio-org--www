import React from 'react'
import ReactPlayer from 'react-player'
import reduxMap from '../../store/map'

const Audio = (props: any): any => {

    const {
        audio, page, setAudioPlaylist, setAudioSrc,
    } = props

    const generalRef = React.useRef<any> (null)
    const [generalPlaying, setGeneralPlaying] = React.useState (true)

    console.log ('AAA', generalRef)

    const unloadPlayer = (): any => {

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
                onEnded={(): any => unloadPlayer ()}
                playing={generalPlaying}
            />
        </>
    )

}

export default reduxMap (Audio)