import React from 'react';
import {WithTheme} from './with-theme';
import {testContainer} from '../../../../__tests__/components/test-container';

describe('WithStyledComponents', () => {
  testContainer(
    <WithTheme>
      <span>children</span>
    </WithTheme>,
  );
});
