import React from 'react'
import { FaHeadphones, FaQuestion } from 'react-icons/fa'
import { FiUser, FiPlay } from 'react-icons/fi'
import { StoreMap } from '../store/store-map'
import { AnimationFlip } from '../components/animation-flip'
import soundFiles from '../assets/audio/general'
import pdfFile from '../assets/doc/poster.pdf'

export const PageMenu = StoreMap (({
    setAudioPlaylist, setAudioBackground, setPageRedirect, setPageTransition,
}) => {

    React.useEffect (() => {

        setAudioBackground (true)

        setAudioPlaylist ([
            soundFiles.home01,
            soundFiles.menu01,
            soundFiles.menu02,
        ])

    }, [setAudioBackground, setAudioPlaylist])

    const ATrig = () => {

        setPageTransition (true)

        setTimeout (() => {

            setPageRedirect ('/home')

        }, 350 * 2.5)

    }

    const CTrig = () => {

        setPageTransition (true)

        setTimeout (() => {

            window.open (pdfFile, '_blank')

            setPageRedirect ('/menu')

        }, 350 * 2.5)

    }

    const DTrig = () => {

        setPageTransition (true)

        setTimeout (() => {

            setPageRedirect ('/game')

        }, 350 * 2.5)

    }

    const AFront = () => (
        <div
            className="card-content color-white"
            onClick={() => ATrig ()}
            onKeyDown={() => undefined}
            role="button"
            tabIndex={0}
        >
            <div className="card-content-main icon">
                <FaHeadphones/>
            </div>
        </div>
    )

    const BFront = () => (
        <div className="card-content color-red">
            <div className="card-content-main icon">
                <FiUser/>
            </div>
        </div>
    )

    const BBack = () => (
        <div className="card-content color-red">
            <div className="card-content-main text">
                le mode multijoueurs n&lsquo;est pas encore disponible
            </div>
        </div>
    )

    const CFront = () => (
        <div
            className="card-content color-blue"
            onClick={() => CTrig ()}
            onKeyDown={() => undefined}
            role="button"
            tabIndex={0}
        >
            <div className="card-content-main icon">
                <FaQuestion/>
            </div>
        </div>
    )

    const DFront = () => (
        <div
            className="card-content color-yellow"
            onClick={() => DTrig ()}
            onKeyDown={() => undefined}
            role="button"
            tabIndex={0}
        >
            <div className="card-content-main icon">
                <FiPlay/>
            </div>
        </div>
    )

    return (
        <>
            <AnimationFlip
                size={2}
                Front={AFront}
            />
            <AnimationFlip
                size={2}
                Front={BFront}
                Back={BBack}
            />
            <AnimationFlip
                size={2}
                Front={CFront}
            />
            <AnimationFlip
                size={2}
                canClose
                Front={DFront}
            />
        </>
    )

})