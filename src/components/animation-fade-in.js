import React from 'react'
import { animated, useSpring } from 'react-spring'
import { StoreMap } from '../store/store-map'

export const AnimationFadeIn = StoreMap (({ payload }) => {

    const p = useSpring ({ 'opacity': 1, 'from': { 'opacity': 0 }})

    return <animated.span style={p}>{payload}</animated.span>

})