import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from '@react-spring/web'
import { FadeConstants } from './fade.constants'

const propTypes = {
    'children': PropTypes.node.isRequired,
    'delay': PropTypes.number,
    'isVisible': PropTypes.bool,
}

const defaultProps = {
    'delay': FadeConstants.delay,
    'isVisible': FadeConstants.isVisible,
}

/**
 * @param {object} props react props
 * @param {React.ReactElement} props.children children
 * @param {number} [props.delay=0] wait before enter
 * @param {boolean} [props.isVisible=true] set to `false` to leave
 * @returns {React.ReactElement} react component
 */
export function FadeAnimation ({
    children,
    delay = FadeAnimation.defaultProps.delay,
    isVisible = FadeAnimation.defaultProps.isVisible,
}) {

    const style = useSpring ({
        'from': {
            'opacity': isVisible ? 0 : 1,
        },
        'to': {
            'opacity': isVisible ? 1 : 0,
        },
        'delay': isVisible ? delay : 0,
    })

    return (
        <>
            <animated.div style={style}>
                {children}
            </animated.div>
        </>
    )

}

FadeAnimation.propTypes = propTypes

FadeAnimation.defaultProps = defaultProps