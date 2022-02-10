import React, {ReactElement} from 'react';
import {Container} from './default.layout.styles';
import {FadeAnimation} from '../../animations/fade/fade.animation';
import {MetaComponent} from '../../components/meta/meta.component';
import {HeaderComponent} from '../../components/header/header.component';

type DefaultLayoutProps = {
  children: ReactElement | ReactElement[];
  /** Set this to true if you want to handle your meta component instantiation */
  customMeta?: boolean;
};

/**
 * Component for the default layout
 */
export function DefaultLayout({
  children,
  customMeta = false,
}: DefaultLayoutProps): ReactElement {
  return (
    <>
      {!customMeta && <MetaComponent />}
      <HeaderComponent />
      <FadeAnimation>
        <Container>
          {children}
        </Container>
      </FadeAnimation>
    </>
  );
}
