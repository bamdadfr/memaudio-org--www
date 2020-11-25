import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import reduxMap from '../../store/map'
import Flip from '../anim/Flip'
import soundFiles from '../../assets/audio/general'

const End = (props: any): any => {

    const {
        setPageRedirect, setPageTransition, setAudioPlaylist, setAudioBackground, setGameDifficulty,
    } = props

    React.useEffect (() => {

        setAudioBackground (true)

        setTimeout (() => {

            setAudioPlaylist ([
                soundFiles.end01,
            ])
        
        }, 350)
    
    }, [])

    const trigger = (): any => {

        setPageTransition (true)

        setGameDifficulty (4)

        setTimeout (() => {

            setPageRedirect ('/game')
        
        }, 350 * 2.5)
    
    }

    const Front = (): any => (
        <div className="card-content">
            <div
                className="card-content-main color-yellow icon"
                onClick={(): any => trigger ()}
                onKeyDown={(): void => undefined}
                role="presentation"
            >
                <FaThumbsUp />
            </div>
        </div>
    )

    const Back = (): any => (
        <div className="card-content color-blue">
            <div className="card-content-main text">
                pas encore disponible
            </div>
        </div>
    )

    return (
        <>
            <Flip
                size={1}
                Front={Front}
                Back={Back}
            />
        </>
    )

}

export default reduxMap (End)