import {render} from '@testing-library/react';
import {ReactElement} from 'react';

const r = (Component) => {
  const {container} = render(Component);

  return {
    container,
  };
};

export const testContainer = (C: ReactElement): void => {
  describe('container', () => {
    it('should be defined and visible', () => {
      const {container} = r(C);
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
    });

    it('should not be empty', () => {
      const {container} = r(C);
      expect(container).not.toBeEmptyDOMElement();
    });
  });
};
