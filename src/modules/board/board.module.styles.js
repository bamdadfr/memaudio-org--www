import styled from 'styled-components'
import { Breakpoints } from '../../app/styles/breakpoints'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns.toFixed (0)}, 1fr);
    grid-template-rows: repeat(${(props) => props.rows}, 1fr);
    grid-gap: 0.667em;

    height: 100%;
    width: 100%;
`

export const Container = styled.div`
    * {
        user-select: none;
    }

    @media screen and (max-width: ${Breakpoints.mobile - 1}px) {
        width: 18rem;
        height: 18rem;
        font-size: 1em;
        
        svg {
            font-size: 3.6em;
        }
    }

    @media screen and (min-width: ${Breakpoints.mobile}px) {
        width: 26rem;
        height: 26rem;
        font-size: 1.2em;

        svg {
            font-size: 3.8em;
        }
    }

    @media screen and (min-width: ${Breakpoints.tablet}px) {
        width: 32rem;
        height: 32rem;
        font-size: 1.4em;

        svg {
            font-size: 4em;
        }
    }

    @media screen and (min-width: ${Breakpoints.desktop}px) {
        width: 36rem;
        height: 36rem;
        font-size: 1.6em;

        svg {
            font-size: 4.2em;
        }
    }

    @media screen and (min-width: ${Breakpoints.widescreen}px) {
        width: 38rem;
        height: 38rem;
        font-size: 1.8em;

        svg {
            font-size: 4.4em;
        }
    }

    @media screen and (min-width: ${Breakpoints.fullhd}px) {
        width: 40rem;
        height: 40rem;
        font-size: 2em;

        svg {
            font-size: 4.6em;
        }
    }
`
