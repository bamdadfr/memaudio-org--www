import {render} from '@testing-library/react';
import {ReactElement} from 'react';

const r = (Component) => {
  const {container} = render(Component);

  return {
    container,
  };
};

interface Options {
  testDefinition?: boolean;
  testNonEmptiness?: boolean;
  testEmptiness?: boolean;
}

export const testContainer = (C: ReactElement, {
  testDefinition = true,
  testNonEmptiness = true,
  testEmptiness = false,
}: Options = {}): void => {
  describe('container', () => {
    if (testDefinition) {
      it('should be defined and visible', () => {
        const {container} = r(C);
        expect(container).toBeInTheDocument();
        expect(container).toBeVisible();
      });
    }

    if (testNonEmptiness) {
      it('should not be empty', () => {
        const {container} = r(C);
        expect(container).not.toBeEmptyDOMElement();
      });
    }

    if (testEmptiness) {
      it('should be empty', () => {
        const {container} = r(C);
        expect(container).toBeEmptyDOMElement();
      });
    }
  });
};
