import styled from 'styled-components'
import { Breakpoints } from '../../app/styles'

export const Container = styled.div`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background: transparent;
    overflow: hidden;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns.toFixed (0)}, 1fr);
    grid-template-rows: repeat(${(props) => props.rows}, 1fr);
    grid-gap: 0.667rem;

    * {
        user-select: none;
    }

    svg {
        font-size: 5em;
    }

    @media screen and ${Breakpoints.ultramobile} {
        width: 16rem;
        height: 16rem;
        font-size: 1em;
    }

    @media screen and ${Breakpoints.mobile} {
        width: 24rem;
        height: 24rem;
        font-size: 1.2em;
    }

    @media screen and ${Breakpoints.tablet} {
        width: 32rem;
        height: 32rem;
        font-size: 1.4em;
    }

    @media screen and ${Breakpoints.desktop} {
        width: 36rem;
        height: 36rem;
        font-size: 1.6em;
    }

    @media screen and ${Breakpoints.widescreen} {
        width: 38rem;
        height: 38rem;
        font-size: 1.8em;
    }

    @media screen and ${Breakpoints.fullhd} {
        width: 42rem;
        height: 42rem;
        font-size: 2em;
    }
`