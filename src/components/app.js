import React from 'react'
import {
    BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom'
import './app.css'
import './app-responsive.css'
import { StoreMap } from '../store/store-map'
import { Player } from './player'
import { PageHome } from './page-home'
import { PageMenu } from './page-menu'
import { PageEnd } from './page-end'
import { PageGit } from './page-git'
import { GameContainer } from './game-container'
// For future usage
import musicFiles from '../assets/audio/albums/music'

export const App = StoreMap (({ page, setPageRedirect, setAlbums }) => {

    const renderRedirect = () => {

        if (page.redirect !== null) {

            return <Redirect to={page.redirect}/>

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
            <Player/>
            <div className="layer-main">
                <div className="grid">
                    <BrowserRouter>
                        {renderRedirect ()}
                        <Switch>
                            <Route exact path="/home" component={PageHome}/>
                            <Route exact path="/menu" component={PageMenu}/>
                            <Route exact path="/game" component={GameContainer}/>
                            <Route exact path="/end" component={PageEnd}/>
                            <Route exact path="/git" component={PageGit}/>
                            <Route path="*" component={PageHome}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        </>
    )

})