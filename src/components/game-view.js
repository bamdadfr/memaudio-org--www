import React from 'react'
import { StoreMap } from '../store/store-map'
import { AnimationFlip } from './animation-flip'
import soundFiles from '../assets/audio/general'

export const GameView = StoreMap (({
    audio,
    game,
    setPageRedirect,
    setPageTransition,
    setAudioPlaylist,
    setAudioBackground,
    setGameLocked,
    setGameCardsOpened,
    setGameCardsMatched,
    setGameCard,
    setGameEnded,
}) => {

    React.useEffect (() => {

        setAudioBackground (false)

        if (game.difficulty === 2) {

            setAudioPlaylist ([
                soundFiles.game01,
            ])

        }

    }, [])

    const Front = () => (
        <>
            <div className="card-content color-white">
                <div className="card-content-main icon"/>
            </div>
        </>
    )

    const Back = () => (
        <div className="card-content">
            <div className="card-content-main"/>
        </div>
    )

    const matchCards = () => {

        setGameCardsMatched ({
            ...game.cardsMatched,
            ...game.cardsOpened,
        })

        setGameCard (game.card + 1)

        setGameCardsOpened ([])

    }

    const unmatchCards = () => {

        game.deck[game.cardsOpened[0].key].opened = true

        game.deck[game.cardsOpened[0].key].flipMe = true

        game.deck[game.cardsOpened[1].key].opened = true

        game.deck[game.cardsOpened[1].key].flipMe = true

        setGameCardsOpened ([])

    }

    const testCardsOpened = () => {

        if (game.cardsOpened[0].src === game.cardsOpened[1].src) {

            game.deck[game.cardsOpened[0].key].opened = true

            game.deck[game.cardsOpened[0].key].matched = true

            game.deck[game.cardsOpened[1].key].opened = true

            game.deck[game.cardsOpened[1].key].matched = true

            game.deck[game.cardsOpened[0].key].locked = true

            game.deck[game.cardsOpened[1].key].locked = true

            matchCards ()

            setGameLocked (false)

        } else {

            unmatchCards ()

            setGameLocked (false)

        }

    }

    React.useEffect (() => {

        if (Object.keys (game.cardsOpened).length === 2) {

            setGameLocked (true)

            testCardsOpened ()

        }

    }, [Object.keys (game.cardsOpened).length])

    React.useEffect (() => {

        if (game.deck.length / 2 === game.card) {

            setGameEnded (true)

        }

    }, [game.card])

    React.useEffect (() => {

        if (game.ended === true && audio.src === null) {

            setPageTransition (true)

            setPageRedirect ('/end')

        }

    }, [game.ended, audio.src])

    const printDeck = game.deck.map ((card) => (
        <AnimationFlip
            Key={card.key}
            size={game.difficulty}
            noClickBack
            audioFile={card.src}
            Front={Front}
            Back={Back}
            flipMe={card.flipMe}
            isGame
        />
    ))

    return (
        <>
            {printDeck}
        </>
    )

})