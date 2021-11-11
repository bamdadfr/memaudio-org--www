import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Container } from './background.component.styles';
import { BackgroundConstants } from './background.constants';

/**
 * Component for the background of the application
 * Non memoized component
 *
 * @returns {React.ReactNode} - Rendered component
 */
function NonMemoBackgroundComponent () {
  const props = useSpring (BackgroundConstants.config);

  return (
    <>
      <Container>
        <animated.div style={props} />
      </Container>
    </>
  );
}

/**
 * Component for the background of the application.
 * Memoized component.
 *
 * @type {React.NamedExoticComponent<object>}
 */
export const BackgroundComponent = React.memo (NonMemoBackgroundComponent);
