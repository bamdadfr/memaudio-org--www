import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles/theme';

const propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Wrapper component for styled-components
 *
 * @param {React.ReactNode} children - Children components to wrap
 * @returns {React.ReactElement} - Wrapped component
 */
export function WithStyledComponents ({ children }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        {children}
      </ThemeProvider>
    </>
  );
}

WithStyledComponents.propTypes = propTypes;
