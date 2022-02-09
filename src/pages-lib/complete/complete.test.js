import React from 'react';
import {render as defaultRender} from '@testing-library/react';
import CompletePage from '../../pages/complete';

const render = () => {
  const {container} = defaultRender(
    <CompletePage />,
  );

  return {
    container,
  };
};

describe('CompletePage', () => {
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
