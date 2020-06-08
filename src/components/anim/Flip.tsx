import React from 'react'
import { useSpring, animated as a } from 'react-spring'
import reduxMap from '../../store/map'
import FadeIn from './FadeIn'
import './flip.css'

const Flip = (props: any): any => {

    const {
        app, Key, Front, Back, isGame, noClickFront, noClickBack,
        size, audioFile, setAudioPlaylist, setGameCardsOpened,
    } = props

    let isBack: any = null

    // typeof Back === 'undefined' ? isBack = false : isBack = true

    if (typeof Back === 'undefined') {

        isBack = false
    
    } else {

        isBack = true
    
    }

    if (app.page.transition) {

        isBack = false
    
    }

    const [flipped, set] = React.useState<boolean> (false)
    // const [frontColor, setFrontColor] = React.useState('color-white')
    let backColor = ''

    if (isGame) {

        if (app.game.deck[Key].opened) {

            backColor = 'color-blue'
        
        }

        if (app.game.deck[Key].matched) {

            backColor = 'color-yellow'
        
        }
    
    } else {

        backColor = 'color-white'
    
    }

    const openCard = (e: any, fromFront?: any): any => {

        if (isGame) {

            const array = app.game.opened

            array.push ({
                'key': Key,
                'src': app.game.deck[Key].src,
            })

            app.game.deck[Key].opened = true

            setGameCardsOpened (array)
        
        }

        if (typeof audioFile !== 'undefined' && fromFront === true) {

            setAudioPlaylist ([
                audioFile,
            ])
        
        }

        set ((s) => !s)
    
    }

    const { transform, opacity } = useSpring ({
        'opacity': flipped ? 1 : 0,
        'transform': `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        'config': { 'mass': 10, 'tension': 500, 'friction': 80 },
    })

    React.useEffect (() => {

        setTimeout (() => {

            if (app.page.transition === true) {

                set (true)
            
            } else {

                set (false)
            
            }
        
        }, 350)
    
    }, [app.page.transition])

    React.useEffect (() => {

        if (isGame && typeof Key !== 'undefined' && typeof isGame !== 'undefined') {

            setTimeout (() => {

                if (app.game.deck[Key].flipMe) {

                    set ((s) => !s)

                    app.game.deck[Key].flipMe = false

                    app.game.deck[Key].opened = false
                
                }
            
            }, 500)
        
        }
            
        // }, [app.game.deck[Key].flipMe])
    
    }, [isGame])

    const output = (): any => {

        const cellSize = `cell-x${size.toString ()}`
        let frontClickable = null

        if (isGame) {

            frontClickable = (): any => (noClickFront || app.game.locked || app.game.deck[Key].locked ? '' : ' clickable')
        
        } else {

            frontClickable = (): any => (noClickFront ? '' : ' clickable')
        
        }

        const frontClasses = `flipper${frontClickable ()}`
        let backClickable = null

        if (isGame) {

            backClickable = (): any => (noClickBack || app.game.locked || app.game.deck[Key].locked ? '' : ' clickable')
        
        } else {

            backClickable = (): any => (noClickBack ? '' : ' clickable')
        
        }

        const backClasses = `flipper-back x${size.toString ()}${backClickable ()} ${backColor}`

        if (isGame) {

            return (
                <>
                    <div className={cellSize}>
                        <a.div
                            className={frontClasses}
                            style={{ 'opacity': opacity.interpolate ((o: any): any => (1 - o)), transform }}
                            onClick={(e: any): any => (
                                noClickFront || app.game.locked || app.game.deck[Key].locked
                                    ? null : openCard (e, true)
                            )}
                        >
                            <Front />
                        </a.div>
                        {isBack
                            ? (
                                <a.div
                                    className={backClasses}
                                    style={{ opacity, 'transform': transform.interpolate ((t: any) => `${t} rotateY(180deg)`) }}
                                    onClick={(e: any): any => (
                                        noClickBack || app.game.locked || app.game.deck[Key].locked
                                            ? null : openCard (e)
                                    )}
                                >
                                    <Back />
                                </a.div>
                            )
                            : null}
                    </div>
                </>
            )
        
        }

        return (
            <>
                <div className={cellSize}>
                    <a.div
                        className={frontClasses}
                        style={{ 'opacity': opacity.interpolate ((o) => 1 - o), transform }}
                        onClick={(e: any): any => (
                            noClickFront
                                ? null : openCard (e, true)
                        )}
                    >
                        <Front />
                    </a.div>
                    {isBack
                        ? (
                            <a.div
                                className={backClasses}
                                style={{ opacity, 'transform': transform.interpolate ((t) => `${t} rotateY(180deg)`) }}
                                onClick={(e: any): any => (
                                    noClickBack
                                        ? null : openCard (e)
                                )}
                            >
                                <Back />
                            </a.div>
                        )
                        : null}
                </div>
            </>
        )
    
    }

    return <FadeIn payload={output ()} />

}

export default reduxMap (Flip)