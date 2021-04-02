import React from 'react'
import { StoreMap } from '../store/store-map'
import { Level } from './level'
import { GameView } from './game-view'

export const GameContainer = StoreMap (({ game }) => {

    const [loaded, setLoaded] = React.useState (false)

    React.useEffect (() => {

        if (loaded === false && game.deck.length !== 0) {

            setLoaded (true)

        }

    }, [game.deck, loaded])

    if (game.deck.length === 0) {

        return <Level size=
            {
                game.difficulty
            }
        />

    }

    return <GameView/>

})