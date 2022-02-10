import React from 'react';
import {FadeAnimation} from './fade.animation';
import {testContainer} from '../../../__tests__/components/test-container';

describe('FadeAnimation', () => {
  testContainer(
    <FadeAnimation>
      <span>children</span>
    </FadeAnimation>,
  );
});
