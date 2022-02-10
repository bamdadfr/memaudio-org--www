import React, {ReactElement} from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from '../../styles/theme';

type WithThemProps = {
  children: ReactElement;
};

/**
 * Wrapper component for styled-components
 */
export function WithTheme({children}: WithThemProps): ReactElement {
  return (
    <>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  );
}
