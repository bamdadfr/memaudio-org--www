import React from 'react';
import { render as defaultRender } from '@testing-library/react';
import WorldLevelPage from '../../../pages/[world]/[level]';

const render = () => {
  const { container } = defaultRender (
    <WorldLevelPage
      world="instruments"
      level="1"
    />,
  );

  return {
    container,
  };
};

describe ('WorldLevelPage', () => {
  describe ('container', () => {
    it ('should be defined and visible', () => {
      const { container } = render ();
      expect (container).toBeInTheDocument ();
      expect (container).toBeVisible ();
    });

    it ('should not be empty', () => {
      const { container } = render ();
      expect (container).not.toBeEmptyDOMElement ();
    });
  });
});
