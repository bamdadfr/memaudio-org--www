import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: 1em;

  width: 100vw;
  height: 3em;
  padding: 1em 1em;

  color: ${(props) => props.theme.white};

  z-index: 1;

  user-select: none;

  font-size: 1.1em;
`;

export const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Spacer = styled.div`
  width: 1em;
`;

export const Select = styled.select`
  background-color: transparent;
  width: ${({ width }) => width}em;

  > option {
    color: ${({ theme }) => theme.background};
  }
`;

export const Submit = styled.div`
  transform: translate3d(0.75em, 1px, 0);
  transition: color 150ms ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.yellow};
  }
`;
