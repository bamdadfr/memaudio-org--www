import React from 'react'
import { animated, useSpring } from 'react-spring'
import reduxMap from '../../store/map'

const FadeIn = (props: any): any => {

    const { payload } = props
    const p: any = useSpring ({ 'opacity': 1, 'from': { 'opacity': 0 }})

    return <animated.span style={p}>{payload}</animated.span>

}

export default reduxMap (FadeIn)