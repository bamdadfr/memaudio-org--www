import React, {ReactElement} from 'react';
import {
  BackgroundComponent,
} from '../../components/background/background.component';

type AppLayoutProps = {
  children: React.ReactElement;
};

/**
 * Component for the app layout
 */
export function AppLayout({children}: AppLayoutProps): ReactElement {
  return (
    <>
      <BackgroundComponent />
      {children}
    </>
  );
}
