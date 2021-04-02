import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import { StoreMap } from '../store/store-map'
import { AnimationFlip } from '../components/animation-flip'
import soundFiles from '../assets/audio/general'

export const PageEnd = StoreMap (({
    setPageRedirect,
    setPageTransition,
    setAudioPlaylist,
    setAudioBackground,
    setGameDifficulty,
}) => {

    React.useEffect (() => {

        setAudioBackground (true)

        function audio () {

            setTimeout (() => {

                setAudioPlaylist ([
                    soundFiles.end01,
                ])

            }, 350)

        }

        audio ()

        return () => {

            setAudioBackground (false)

            clearTimeout (audio)

        }

    }, [])

    const trigger = () => {

        setPageTransition (true)

        setGameDifficulty (4)

        setTimeout (() => {

            setPageRedirect ('/game')

        }, 350 * 2.5)

    }

    const Front = () => (
        <div className="card-content">
            <div
                className="card-content-main color-yellow icon"
                onClick={() => trigger ()}
                onKeyDown={() => undefined}
                role="button"
                tabIndex={0}
            >
                <FaThumbsUp/>
            </div>
        </div>
    )

    const Back = () => (
        <div className="card-content color-blue">
            <div className="card-content-main text">
                pas encore disponible
            </div>
        </div>
    )

    return (
        <>
            <AnimationFlip
                size={1}
                Front={Front}
                Back={Back}
            />
        </>
    )

})