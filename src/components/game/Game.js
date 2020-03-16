import React from 'react'

import Flip from '../anim/_Flip'
import soundFiles from '../../assets/audio/general'

export default (props) => {
  const {
    app, setPageRedirect, setPageTransition, setAudioPlaylist, setAudioBackground,
    setGameLocked, setGameCardsOpened, setGameCardsMatched, setGameCard, setGameEnded,
  } = props

  React.useEffect(() => {
    setAudioBackground(false)
    if (app.game.difficulty === 2) {
      setAudioPlaylist([
        soundFiles.game01,
      ])
    }
  }, [])

  const Front = () => (
    <>
      <div className="card-content color-white">
        <div className="card-content-main icon" />
      </div>
    </>
  )

  const Back = () => (
    <div className="card-content">
      <div className="card-content-main" />
    </div>
  )

  const matchCards = () => {
    setGameCardsMatched({
      ...app.game.matched,
      ...app.game.opened,
    })

    setGameCard(app.game.card + 1)
    setGameCardsOpened([])
  }

  const unmatchCards = () => {
    app.game.deck[app.game.opened[0].key].opened = true
    app.game.deck[app.game.opened[0].key].flipMe = true
    app.game.deck[app.game.opened[1].key].opened = true
    app.game.deck[app.game.opened[1].key].flipMe = true
    setGameCardsOpened([])
  }

  const testCardsOpened = () => {
    if (app.game.opened[0].src === app.game.opened[1].src) {
      app.game.deck[app.game.opened[0].key].opened = true
      app.game.deck[app.game.opened[0].key].matched = true
      app.game.deck[app.game.opened[1].key].opened = true
      app.game.deck[app.game.opened[1].key].matched = true
      app.game.deck[app.game.opened[0].key].locked = true
      app.game.deck[app.game.opened[1].key].locked = true

      matchCards()
      setGameLocked(false)
    } else {
      unmatchCards()
      setGameLocked(false)
    }
  }

  React.useEffect(() => {
    if (Object.keys(app.game.opened).length === 2) {
      setGameLocked(true)
      testCardsOpened()
    }
  }, [Object.keys(app.game.opened).length])

  React.useEffect(() => {
    if (app.game.deck.length / 2 === app.game.card) {
      setGameEnded(true)
    }
  }, [app.game.card])

  React.useEffect(() => {
    if (app.game.ended === true && app.audio.src === null) {
      setPageTransition(true)
      setPageRedirect('/end')
    }
  }, [app.game.ended, app.audio.src])

  const printDeck = app.game.deck.map((e) => (
    <Flip
      Key={e.key}
      size={app.game.difficulty}
      noClickBack
      audioFile={e.src}
      Front={Front}
      Back={Back}
      isGame
    />
  ))

  return (
    <>
      {printDeck}
    </>
  )
}
