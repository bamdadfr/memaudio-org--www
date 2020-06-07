import React from 'react'
import {
    BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom'
import './app.css'
import './app_responsive.css'
import Audio from '../audio/_Audio'
import Home from '../home/_Home'
import Menu from '../menu/_Menu'
import End from '../end/_End'
import Git from '../git/Git'
import GameContainer from '../game/_GameContainer'
// For future usage
import musicFiles from '../../assets/audio/albums/music'

export default (props: any): any => {

    const { app, setPageRedirect, setAlbums } = props

    const renderRedirect = (): any => {

        if (app.page.redirect !== null) {

            return <Redirect to={app.page.redirect} />
        
        }

        return null
    
    }

    React.useEffect (() => {

        if (app.page.redirect !== null) {

            setPageRedirect (null)
        
        }
    
    }, [app.page.redirect])

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
