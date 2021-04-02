import React from 'react'
import { useSpring, animated as a } from 'react-spring'
import { StoreMap } from '../store/store-map'
import { AnimationFadeIn } from './animation-fade-in'
import './animation-flip.css'

export const AnimationFlip = StoreMap (({
    page, game, Key, flipMe, Front, Back, isGame, noClickFront, noClickBack,
    size, audioFile, setAudioPlaylist, setGameCardsOpened,
}) => {

    let isBack = null

    // typeof Back === 'undefined' ? isBack = false : isBack = true

    isBack = typeof Back !== 'undefined'

    if (page.transition) {

        isBack = false

    }

    const [flipped, set] = React.useState (false)
    // const [frontColor, setFrontColor] = React.useState('color-white')
    let backColor = ''

    if (isGame) {

        if (game.deck[Key].opened) {

            backColor = 'color-blue'

        }

        if (game.deck[Key].matched) {

            backColor = 'color-yellow'

        }

    } else {

        backColor = 'color-white'

    }

    const openCard = (e, fromFront) => {

        if (isGame) {

            const array = game.cardsOpened

            array.push ({
                'key': Key,
                'src': game.deck[Key].src,
            })

            game.deck[Key].opened = true

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

            if (page.transition === true) {

                set (true)

            } else {

                set (false)

            }

        }, 350)

    }, [page.transition])

    React.useEffect (() => {

        if (isGame) {

            setTimeout (() => {

                if (game.deck[Key].flipMe) {

                    set ((s) => !s)

                    game.deck[Key].flipMe = false

                    game.deck[Key].opened = false

                }

            }, 500)

        }

    }, [flipMe])

    // }, [game.deck[Key].flipMe])

    const output = () => {

        const cellSize = `cell-x${size.toString ()}`
        let frontClickable = () => (noClickFront ? '' : ' clickable')

        if (isGame) {

            frontClickable = () => (noClickFront || game.locked || game.deck[Key].locked ? '' : ' clickable')

        }

        const frontClasses = `flipper${frontClickable ()}`
        let backClickable = () => (noClickBack ? '' : ' clickable')

        if (isGame) {

            backClickable = () => (noClickBack || game.locked || game.deck[Key].locked ? '' : ' clickable')

        }

        const backClasses = `flipper-back x${size.toString ()}${backClickable ()} ${backColor}`

        if (isGame) {

            return (
                <>
                    <div className={cellSize}>
                        <a.div
                            className={frontClasses}
                            style={{ 'opacity': opacity.interpolate ((o) => (1 - o)), transform }}
                            onClick={(e) => (
                                noClickFront || game.locked || game.deck[Key].locked
                                    ? null : openCard (e, true)
                            )}
                        >
                            <Front/>
                        </a.div>
                        {isBack
                            ? (
                                <a.div
                                    className={backClasses}
                                    style={{ opacity, 'transform': transform.interpolate ((t) => `${t} rotateY(180deg)`) }}
                                    onClick={(e) => (
                                        noClickBack || game.locked || game.deck[Key].locked
                                            ? null : openCard (e)
                                    )}
                                >
                                    <Back/>
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
                        onClick={(e) => (
                            noClickFront
                                ? null : openCard (e, true)
                        )}
                    >
                        <Front/>
                    </a.div>
                    {isBack
                        ? (
                            <a.div
                                className={backClasses}
                                style={{ opacity, 'transform': transform.interpolate ((t) => `${t} rotateY(180deg)`) }}
                                onClick={(e) => (
                                    noClickBack
                                        ? null : openCard (e)
                                )}
                            >
                                <Back/>
                            </a.div>
                        )
                        : null}
                </div>
            </>
        )

    }

    return <AnimationFadeIn payload={output ()}/>

})
