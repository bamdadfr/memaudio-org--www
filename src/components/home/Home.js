import React from 'react'
import { FiPlay } from 'react-icons/fi'
import Flip from '../anim/_Flip'
import './home.css'

export default (props) => {

    const {
        setPageRedirect, setPageTransition,
    } = props

    const trigger = () => {

        setPageTransition (true)

        setTimeout (() => {

            setPageRedirect ('/menu')
        
        }, 350 * 2.5)
    
    }

    const Front = () => (
        <div className="card-content">
            <div className="card-content-main color-white icon" onClick={() => trigger ()}>
                <FiPlay />
            </div>
        </div>
    )

    return (
        <>
            <Flip
                size={1}
                Front={Front}
            />
        </>
    )

}
