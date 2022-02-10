import React, {ReactElement} from 'react';
import {animated, useSpring} from '@react-spring/web';

type FadeAnimationProps = {
  children: ReactElement | ReactElement[];
};

/**
 * Animation component for fading in and out
 */
export function FadeAnimation({children}: FadeAnimationProps): ReactElement {
  const style = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return (
    <>
      <animated.div style={style}>
        {children}
      </animated.div>
    </>
  );
}
