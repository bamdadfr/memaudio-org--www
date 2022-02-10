import {render as defaultRender} from '@testing-library/react';
import {ReactElement} from 'react';

const render = (Component) => {
  const {container} = defaultRender(Component);

  return {
    container,
  };
};

export const testContainer = (C: ReactElement): void => {
  describe('container', () => {
    it('should be defined and visible', () => {
      const {container} = render(C);
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
    });

    it('should not be empty', () => {
      const {container} = render(C);
      expect(container).not.toBeEmptyDOMElement();
    });
  });
};
