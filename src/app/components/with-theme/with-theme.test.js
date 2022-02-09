import React from 'react';
import {render as defaultRender} from '@testing-library/react';
import {WithTheme} from './with-theme';

const render = () => {
  const {container} = defaultRender(
    <WithTheme>
      <span>children</span>
    </WithTheme>,
  );

  return {
    container,
  };
};

describe('WithStyledComponents', () => {
  describe('container', () => {
    it('should be defined and visible', () => {
      const {container} = render();
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
    });

    it('should not be empty', () => {
      const {container} = render();
      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
