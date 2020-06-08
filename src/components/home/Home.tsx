import React from 'react'
import { FiPlay } from 'react-icons/fi'
import reduxMap from '../../config/reduxMap'
import Flip from '../anim/Flip'
import './home.css'

const Home = (props: any): any => {

    const {
        setPageRedirect, setPageTransition,
    } = props

    const trigger = (): any => {

        setPageTransition (true)

        setTimeout (() => {

            setPageRedirect ('/menu')
        
        }, 350 * 2.5)
    
    }

    const Front = (): any => (
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

export default reduxMap (Home)