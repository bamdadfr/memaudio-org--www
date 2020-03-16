import React from 'react'

import { FaThumbsUp } from 'react-icons/fa'

import Flip from '../anim/_Flip'

import soundFiles from '../../assets/audio/general'

export default (props) => {
  const {
    setPageRedirect, setPageTransition, setAudioPlaylist, setAudioBackground, setGameDifficulty,
  } = props

  React.useEffect(() => {
    setAudioBackground(true)
    setTimeout(() => {
      setAudioPlaylist([
        soundFiles.end01,
      ])
    }, 350)
  }, [])

  const trigger = () => {
    setPageTransition(true)
    setGameDifficulty(4)
    setTimeout(() => {
      setPageRedirect('/game')
    }, 350 * 2.5)
  }

  const Front = () => (
    <div className="card-content">
      <div className="card-content-main color-yellow icon" onClick={() => trigger()}>
        <FaThumbsUp />
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
      <Flip
        size={1}
        Front={Front}
        Back={Back}
      />
    </>
  )
}
