import React from 'react'
import { FiPlay } from 'react-icons/fi'
import { StoreMap } from '../store/store-map'
import { AnimationFlip } from '../components/animation-flip'
import './page-home.css'

export const PageHome = StoreMap (({
    setPageRedirect, setPageTransition,
}) => {

    const trigger = () => {

        setPageTransition (true)

        setTimeout (() => {

            setPageRedirect ('/menu')

        }, 350 * 2.5)

    }

    const Front = () => (
        <div className="card-content">
            <div
                className="card-content-main color-white icon"
                onClick={() => trigger ()}
                onKeyDown={() => undefined}
                role="button"
                tabIndex={0}
            >
                <FiPlay/>
            </div>
        </div>
    )

    return (
        <>
            <AnimationFlip
                size={1}
                Front={Front}
            />
        </>
    )

})