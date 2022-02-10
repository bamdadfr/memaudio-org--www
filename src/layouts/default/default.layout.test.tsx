import React from 'react';
import {DefaultLayout} from './default.layout';
import {testContainer} from '../../../__tests__/components/test-container';

describe('DefaultLayout', () => {
  testContainer(
    <DefaultLayout>
      <span>children</span>
    </DefaultLayout>,
  );
});
