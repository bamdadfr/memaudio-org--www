import React, {ReactElement} from 'react';
import {animated, useSpring} from '@react-spring/web';
import {Container} from './background.component.styles';
import {BackgroundConstants} from './background.constants';

/**
 * Component for the background of the application
 * Non memoized component
 */
function NonMemoBackgroundComponent(): ReactElement {
  const props = useSpring(BackgroundConstants.config);

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
 */
export const BackgroundComponent = React.memo(NonMemoBackgroundComponent);
