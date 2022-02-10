import React from 'react';
import {AppLayout} from './app.layout';
import {testContainer} from '../../../__tests__/components/test-container';

describe('AppLayout', () => {
  testContainer(
    <AppLayout>
      <span>children</span>
    </AppLayout>,
  );
});
