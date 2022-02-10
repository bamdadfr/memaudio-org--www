import React from 'react';
import WorldLevelPage from '../../../pages/[world]/[level]';
import {testContainer} from '../../../../__tests__/components/test-container';

describe('WorldLevelPage', () => {
  testContainer(
    <WorldLevelPage
      world="instruments"
      level="1"
    />,
  );
});
