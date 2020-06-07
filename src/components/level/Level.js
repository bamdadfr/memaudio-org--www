import React from 'react'
import musicFiles from '../../assets/audio/albums/music'

export default (props) => {

    const { app, size, setGameDeck } = props

    const shuffleArray = (array) => {

        for (let i = array.length - 1; i > 0; i--) {

            // const j = Math.floor(Math.random() * (i + 1))
            const j = Math.round (Math.random () * i)
            const temp = array[i]

            array[i] = array[j]

            array[j] = temp
        
        }

        return array
    
    }

    React.useEffect (() => {

        // For future usage (when we'll have multiple albums)
        // const { files } = app.albums[0]

        const miniDeck = shuffleArray (musicFiles).slice (0, size * size * 0.5)

        const deck = shuffleArray ([
            ...miniDeck,
            ...miniDeck,
        ])

        const obj = {}

        deck.map ((e, i) => {

            obj[i] = {
                'key': i,
                'src': e,
                'opened': false,
                'matched': false,
                'locked': false,
                'flipMe': false,
            }
        
        })

        const newArray = []

        Object.keys (obj).map ((e) => {

            newArray.push (obj[e])
        
        })

        setGameDeck (newArray)
    
    }, [])

    return null

}
