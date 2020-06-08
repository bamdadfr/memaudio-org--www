import React from 'react'
import { FaHeadphones, FaQuestion } from 'react-icons/fa'
import { FiUser, FiPlay } from 'react-icons/fi'
import reduxMap from '../../config/reduxMap'
import Flip from '../anim/Flip'
import soundFiles from '../../assets/audio/general'

// import posterPDF from '../../assets/doc/poster.pdf'
const posterPDF = require ('../../assets/doc/poster.pdf')

const Menu = (props: any): any => {

    const {
        setAudioPlaylist, setAudioBackground, setPageRedirect, setPageTransition,
    } = props

    React.useEffect (() => {

        setAudioBackground (true)

        setAudioPlaylist ([
            soundFiles.home01,
            soundFiles.menu01,
            soundFiles.menu02,
        ])
    
    }, [])

    const ATrig = (): any => {

        setPageTransition (true)

        setTimeout (() => {

            setPageRedirect ('/home')
        
        }, 350 * 2.5)
    
    }

    const CTrig = (): any => {

        setPageTransition (true)

        setTimeout (() => {

            window.open (posterPDF, '_blank')

            setPageRedirect ('/menu')
        
        }, 350 * 2.5)
    
    }

    const DTrig = (): any => {

        setPageTransition (true)

        setTimeout (() => {

            setPageRedirect ('/game')
        
        }, 350 * 2.5)
    
    }

    const AFront = (): any => (
        <div className="card-content color-white" onClick={() => ATrig ()}>
            <div className="card-content-main icon">
                <FaHeadphones />
            </div>
        </div>
    )

    const BFront = (): any => (
        <div className="card-content color-red">
            <div className="card-content-main icon">
                <FiUser />
            </div>
        </div>
    )

    const BBack = (): any => (
        <div className="card-content color-red">
            <div className="card-content-main text">
                le mode multijoueurs n'est pas encore disponible
            </div>
        </div>
    )

    const CFront = (): any => (
        <div className="card-content color-blue" onClick={() => CTrig ()}>
            <div className="card-content-main icon">
                <FaQuestion />
            </div>
        </div>
    )

    const DFront = (): any => (
        <div className="card-content color-yellow" onClick={() => DTrig ()}>
            <div className="card-content-main icon">
                <FiPlay />
            </div>
        </div>
    )

    return (
        <>
            <Flip
                size={2}
                Front={AFront}
            />
            <Flip
                size={2}
                Front={BFront}
                Back={BBack}
            />
            <Flip
                size={2}
                Front={CFront}
            />
            <Flip
                size={2}
                canClose
                Front={DFront}
            />
        </>
    )

}

export default reduxMap (Menu)