import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.background};
  width: 100vw;
  height: 100vh;
  position: absolute;
  will-change: width, height, left, top;
`;
