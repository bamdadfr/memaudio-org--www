import React from 'react';
import {render as defaultRender} from '@testing-library/react';
import {DefaultLayout} from './default.layout';

const render = () => {
  const {container} = defaultRender(
    <DefaultLayout>
      <span>children</span>
    </DefaultLayout>,
  );

  return {
    container,
  };
};

describe('DefaultLayout', () => {
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
