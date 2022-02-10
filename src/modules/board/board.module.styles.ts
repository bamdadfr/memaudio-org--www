import {ReactNode} from 'react';
import styled from 'styled-components';
import {mediaQueries} from '../../app/styles/breakpoints';

export const Grid = styled.div<{columns: number; rows: number; children: ReactNode;}>`
  display: grid;
  grid-template-columns: repeat(${({columns}) => columns.toFixed(0)}, 1fr);
  grid-template-rows: repeat(${({rows}) => rows}, 1fr);
  grid-gap: 0.667em;

  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  * {
    user-select: none;
  }

  ${mediaQueries.below.mobile} {
    width: 18rem;
    height: 18rem;
    font-size: 1em;

    svg {
      font-size: 3.6em;
    }
  }

  ${mediaQueries.above.mobile} {
    width: 26rem;
    height: 26rem;
    font-size: 1.2em;

    svg {
      font-size: 3.8em;
    }
  }

  ${mediaQueries.above.tablet} {
    width: 32rem;
    height: 32rem;
    font-size: 1.4em;

    svg {
      font-size: 4em;
    }
  }

  ${mediaQueries.above.desktop} {
    width: 36rem;
    height: 36rem;
    font-size: 1.6em;

    svg {
      font-size: 4.2em;
    }
  }

  ${mediaQueries.above.widescreen} {
    width: 38rem;
    height: 38rem;
    font-size: 1.8em;

    svg {
      font-size: 4.4em;
    }
  }

  ${mediaQueries.above.fullhd} {
    width: 40rem;
    height: 40rem;
    font-size: 2em;

    svg {
      font-size: 4.6em;
    }
  }
`;
