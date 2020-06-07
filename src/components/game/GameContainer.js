import React from 'react'
import Level from '../level/_Level'
import Game from './_Game'

export default (props) => {

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
