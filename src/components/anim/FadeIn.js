import React from 'react'
import { animated, useSpring } from 'react-spring'

export default (props) => {
  const { payload } = props
  const p = useSpring({ opacity: 1, from: { opacity: 0 } })
  return <animated.span style={p}>{payload}</animated.span>
}
