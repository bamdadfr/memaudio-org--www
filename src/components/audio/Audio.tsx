import React from 'react'
import ReactPlayer from 'react-player'
import reduxMap from '../../store/map'

const Audio = (props: any): any => {

    const {
        app, setAudioPlaylist, setAudioSrc,
    } = props

    const generalRef = React.useRef<any> (null)
    const [generalPlaying, setGeneralPlaying] = React.useState (true)

    const unloadPlayer = (): any => {

        if (app.audio.playlist.length > 0) {

            setAudioPlaylist (app.audio.playlist.splice (1, app.audio.playlist.length))
        
        }
    
    }

    React.useEffect (() => {

        if (app.page.transition === true) {

            setGeneralPlaying (false)

            setAudioSrc (null)

            setAudioPlaylist ([])
        
        }
    
    }, [app.page.transition])

    React.useEffect (() => {

        if (app.audio.playlist.length > 0) {

            if (app.audio.src === app.audio.playlist[0]) {

                generalRef.current.seekTo (0)
            
            } else {

                setAudioSrc (app.audio.playlist[0])

                setGeneralPlaying (true)
            
            }
        
        } else {

            setAudioSrc (null)
        
        }
    
    }, [app.audio.playlist])

    return (
        <>
            <ReactPlayer
                id="player-ambience"
                url="https://soundcloud.com/abarrejadis/le-poinconneur-des-lilas"
                volume={0.5}
                playing={app.audio.background}
                loop
            />

            <ReactPlayer
                id="player-general"
                ref={generalRef}
                url={app.audio.src}
                onEnded={(): any => unloadPlayer ()}
                playing={generalPlaying}
            />
        </>
    )

}

export default reduxMap (Audio)