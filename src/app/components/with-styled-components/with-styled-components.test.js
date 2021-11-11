import React from 'react';
import { render as defaultRender } from '@testing-library/react';
import { WithStyledComponents } from './with-styled-components';

const render = () => {
  const { container } = defaultRender (
    <WithStyledComponents>
      <span>children</span>
    </WithStyledComponents>,
  );

  return {
    container,
  };
};

describe ('WithStyledComponents', () => {
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
