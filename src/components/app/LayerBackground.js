import React from 'react'
import { animated, useSpring } from 'react-spring'
import myColors from './myColors'

export default () => {
  const props = useSpring({
    from: {
      left: '0%', top: '0%', width: '0%', height: '0%', opacity: '0.05', background: myColors.emerald,
    },
    to: async (next) => {
      while (1) {
        await next({
          left: '0%', top: '0%', width: '100%', height: '100%', background: myColors.soap,
        })
        await next({ height: '50%', background: myColors.emerald })
        await next({ width: '50%', left: '50%', background: myColors.pink })
        await next({ top: '0%', height: '100%', background: myColors.nickel })
        await next({ top: '50%', height: '50%', background: myColors.darkGreen })
        await next({ width: '100%', left: '0%', background: myColors.saffron })
        await next({ width: '50%', background: myColors.kombuGreen })
        await next({ top: '0%', height: '100%', background: myColors.keppel })
        await next({ width: '100%', background: myColors.grey })
      }
    },
  })
  return <animated.div className="layer-background" style={props} />
}
