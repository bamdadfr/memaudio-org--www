import React from 'react'
import {
    BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom'
import './app.css'
import './app_responsive.css'
import storeMap from '../../store/map'
import Audio from '../audio/Audio'
import Home from '../home/Home'
import Menu from '../menu/Menu'
import End from '../end/End'
import Git from '../git/Git'
import GameContainer from '../game/GameContainer'
// For future usage
import musicFiles from '../../assets/audio/albums/music'

const App = (props: any): any => {

    const { page, setPageRedirect, setAlbums } = props

    const renderRedirect = (): any => {

        if (page.redirect !== null) {

            return <Redirect to={page.redirect} />
        
        }

        return null
    
    }

    React.useEffect (() => {

        if (page.redirect !== null) {

            setPageRedirect (null)
        
        }
    
    }, [page.redirect, setPageRedirect])

    // For future usage
    React.useEffect (() => {

        setAlbums ({
            'title': 'music',
            'files': musicFiles,
        })
    
    }, [])

    return (
        <>
            <Audio />
            <div className="layer-main">
                <div className="grid">
                    <BrowserRouter>
                        {renderRedirect ()}
                        <Switch>
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/menu" component={Menu} />
                            <Route exact path="/game" component={GameContainer} />
                            <Route exact path="/end" component={End} />
                            <Route exact path="/git" component={Git} />
                            <Route path="*" component={Home} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        </>
    )

}

export default storeMap (App)