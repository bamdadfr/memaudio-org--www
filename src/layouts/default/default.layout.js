import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './default.layout.styles';
import { FadeAnimation } from '../../animations/fade/fade.animation';
import { MetaComponent } from '../../components/meta/meta.component';
import { HeaderComponent } from '../../components/header/header.component';

const propTypes = {
  children: PropTypes.node.isRequired,
  customMeta: PropTypes.bool,
};

const defaultProps = {
  customMeta: false,
};

/**
 * Component for the default layout
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Component children
 * @param {boolean} props.customMeta - Whether to use the custom meta component
 * @returns {React.ReactNode} - Rendered component
 */
export function DefaultLayout ({
  children,
  customMeta,
}) {
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

DefaultLayout.propTypes = propTypes;
DefaultLayout.defaultProps = defaultProps;
