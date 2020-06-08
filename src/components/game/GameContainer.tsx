import React from 'react'
import reduxMap from '../../store/map'
import Level from '../level/Level'
import Game from './Game'

const GameContainer = (props: any): any => {

    const { app } = props
    const [loaded, setLoaded] = React.useState (false)

    React.useEffect (() => {

        if (loaded === false && app.game.deck.length !== 0) {

            setLoaded (true)
        
        }
    
    }, [app.game.deck, loaded])

    if (app.game.deck.length === 0) {

        return <Level size={app.game.difficulty} />
    
    }

    return <Game />

}

export default reduxMap (GameContainer)