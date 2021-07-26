import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from '@react-spring/web'

const propTypes = {
    'children': PropTypes.node.isRequired,
}

/**
 * @param {object} props react props
 * @param {React.ReactElement} props.children children
 * @returns {React.ReactElement} react component
 */
export function FadeAnimation ({
    children,
}) {

    const style = useSpring ({
        'from': {
            'opacity': 0,
        },
        'to': {
            'opacity': 1,
        },
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