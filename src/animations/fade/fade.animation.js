import React from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from '@react-spring/web';

const propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Animation component for fading in and out
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Component children
 * @returns {React.ReactNode} - Rendered component
 */
export function FadeAnimation ({ children }) {
  const style = useSpring ({
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

FadeAnimation.propTypes = propTypes;
