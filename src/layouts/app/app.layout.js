import React from 'react';
import {BackgroundComponent} from '../../components/background/background.component';

/**
 * Component for the app layout
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Component children
 * @returns {React.ReactElement} - Rendered component
 */
export function AppLayout({children}) {
  return (
    <>
      <BackgroundComponent />
      {children}
    </>
  );
}
