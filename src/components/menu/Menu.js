import React from 'react'

import { FaHeadphones, FaQuestion } from 'react-icons/fa'
import { FiUser, FiPlay } from 'react-icons/fi'

import Flip from '../anim/_Flip'
import soundFiles from '../../assets/audio/general'
import posterPDF from '../../assets/doc/poster.pdf'

export default (props) => {
  const {
    setAudioPlaylist, setAudioBackground, setPageRedirect, setPageTransition,
  } = props

  React.useEffect(() => {
    setAudioBackground(true)
    setAudioPlaylist([
      soundFiles.home01,
      soundFiles.menu01,
      soundFiles.menu02,
    ])
  }, [])

  const ATrig = () => {
    setPageTransition(true)
    setTimeout(() => {
      setPageRedirect('/home')
    }, 350 * 2.5)
  }

  const CTrig = () => {
    setPageTransition(true)
    setTimeout(() => {
      window.open(posterPDF, '_blank')
      setPageRedirect('/menu')
    }, 350 * 2.5)
  }

  const DTrig = () => {
    setPageTransition(true)
    setTimeout(() => {
      setPageRedirect('/game')
    }, 350 * 2.5)
  }

  const AFront = () => (
    <div className="card-content color-white" onClick={() => ATrig()}>
      <div className="card-content-main icon">
        <FaHeadphones />
      </div>
    </div>
  )

  const BFront = () => (
    <div className="card-content color-red">
      <div className="card-content-main icon">
        <FiUser />
      </div>
    </div>
  )

  const BBack = () => (
    <div className="card-content color-red">
      <div className="card-content-main text">
        le mode multijoueurs n'est pas encore disponible
      </div>
    </div>
  )

  const CFront = () => (
    <div className="card-content color-blue" onClick={() => CTrig()}>
      <div className="card-content-main icon">
        <FaQuestion />
      </div>
    </div>
  )

  const DFront = () => (
    <div className="card-content color-yellow" onClick={() => DTrig()}>
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
