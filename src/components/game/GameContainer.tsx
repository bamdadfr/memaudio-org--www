import React from 'react'
import reduxMap from '../../store/map'
import Level from '../level/Level'
import Game from './Game'

const GameContainer = (props: any): any => {

    const { game } = props
    const [loaded, setLoaded] = React.useState (false)

    React.useEffect (() => {

        if (loaded === false && game.deck.length !== 0) {

            setLoaded (true)
        
        }
    
    }, [game.deck, loaded])

    if (game.deck.length === 0) {

        return <Level size={game.difficulty} />
    
    }

    return <Game />

}

export default reduxMap (GameContainer)